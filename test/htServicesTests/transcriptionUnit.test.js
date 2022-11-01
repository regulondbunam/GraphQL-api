import axios from 'axios';

describe('transcriptionUnit', () => {
  test('get tfBinding doc with ID ECOLITU000000001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTUByID(_id: "ECOLITU000000001") {
                    chromosome
                    leftEndPosition
                    rightEndPosition
                    name
                    length
                    strand
                    termType
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getTUByID": {
            "chromosome": "NC_000913.3",
            "leftEndPosition": 147,
            "rightEndPosition": 308,
            "name": "thrL",
            "length": 162,
            "strand": "+",
            "termType": null
          }
        }
      });
  });
});