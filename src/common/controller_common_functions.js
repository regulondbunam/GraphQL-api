/** const err = new GraphQLError(
        `Cannot resolve a response with limit ${limit}. Limit can't be less than 1 and greater than 1000`
      );
      err.status = 'Request Entity Too Large';
      err.statusCode = 413;
      throw err; */

/** Creates a filter to be used on MongoDB Queries that require a range in leftEndPosition and
 * rightEndPosition, return to the controller.
 */
export function defineFilter(rightEndPosition, leftEndPosition) {
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

/** get the count of documents instead if limit has been defined or not and show them in console */
export function setLimitResults(colection, defaultLim, filter) {
  // eslint-disable-next-line no-var
  var limit = defaultLim;
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

export function prepareQueryFilter(id, name, productName, strand) {
  // eslint-disable-next-line prefer-const
  let filter = {
    $or: [],
  };
  if (id !== undefined) {
    filter.$or = [
      {
        'geneInfo.id': id,
      },
    ];
  }

  if (name !== undefined) {
    filter.$or.push({
      'geneInfo.name': name,
    });
  }

  if (strand !== undefined) {
    filter.$or.push({
      'geneInfo.strand': strand,
    });
  }

  if (productName !== undefined) {
    filter.$or.push({
      'products.names': productName,
    });
  }
  console.log(JSON.stringify(filter));
  return filter;
}
