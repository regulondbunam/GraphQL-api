import axios from 'axios';

describe('dataset', () => {
  test('get TSS with ID ECOLITS000000001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTSSByID(_id:"ECOLITS000000001")
                {
                    chromosome
                    leftEndPosition
                    rightEndPosition
                    datasetIds
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getTSSByID": {
          "chromosome": "NC_000913.3",
          "leftEndPosition": 113,
          "rightEndPosition": 113,
          "datasetIds": [
            "RHTECOLITSD02699"
          ]
        }
      }
    });
  });
});