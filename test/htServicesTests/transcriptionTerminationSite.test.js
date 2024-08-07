import axios from 'axios';

describe('dataset', () => {
  test('get TTS with ID ECOLITT000000001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTTSByID(_id:"ECOLITT000005328")
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
          "getTTSByID": {
            "chromosome": "NC_000913.3",
            "leftEndPosition": 308,
            "rightEndPosition": 308,
            "datasetIds": [
              "RHTECOLITTD00017"
            ]
          }
        }
      });
  });
});