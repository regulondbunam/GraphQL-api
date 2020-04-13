/** Creates a filter to be used on MongoDB Queries that
 * require a range in leftEndPosition and
 * rightEndPosition, return to the controller.
 * @param {number} leftEndPosition is the variable that contains
 * the value of the position at the start, must be lower
 * than rightEndPosition value
 * @param {number} rightEndPosition is the variable that contains
 * the value of the position at the end, must be greater
 * than rightEndPosition value
 * @return {object} resolve the object that will be used as a
 * filter by mongoose to make the query
 */
export function defineFilter(leftEndPosition, rightEndPosition) {
  let filter = {};
  if (leftEndPosition !== undefined) {
    filter = {
      'geneInfo.leftEndPosition': {
        $gte: leftEndPosition,
      },
    };
  }
  if (rightEndPosition !== undefined) {
    filter = {
      'geneInfo.rightEndPosition': {
        $lte: rightEndPosition,
      },
    };
  }
  if (leftEndPosition !== undefined && rightEndPosition !== undefined) {
    filter = {
      $and: [
        {
          'geneInfo.leftEndPosition': {
            $gte: leftEndPosition,
          },
        },
        {
          'geneInfo.rightEndPosition': {
            $lte: rightEndPosition,
          },
        },
      ],
    };
  }
  return filter;
}

/** get the count of documents instead if limit has been
 *  defined or not and show them in console
 * @param {Model} colection the model defined by mongoose, pases
 * to can be applied some functions of mongoose
 * @param {number} limit the maximun result that required, if is not
 * defined by user at the query pass by 0
 * @param {object} filter object filter that was received by function
 * above, used to get the correct query results
 * @return {number} return the total results, if the limit was defined
 * will be same number
 * */
export function setLimitResults(colection, limit, filter) {
  // eslint-disable-next-line no-var
  if (limit === 0) {
    colection.countDocuments(filter).exec(function(err, count) {
      console.log(`Total results: ${count}`);
      limit = count;
    });
  }
  colection
      .countDocuments(filter)
      .limit(limit)
      .exec(function(err, count) {
        console.log(`Total results: ${count}`);
      });
  return limit;
}
