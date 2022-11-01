import axios from 'axios';

describe('peaks', () => {
  test('get peak doc with ID ECOLIPK000000004', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query{
            getPeakById(_id: "ECOLIPK000000004") {
                _id
                name
                closestGenes {
                _id
                name
                distanceTo
                productName
                }
                chromosome
                peakLeftPosition
                peakRightPosition
            }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getPeakById": {
          "_id": "ECOLIPK000000004",
          "name": "DS00017_peak_4",
          "closestGenes": [
            {
              "_id": "RDBECOLIGNC00683",
              "name": "pdxA",
              "distanceTo": 131,
              "productName": [
                "4-hydroxythreonine-4-phosphate dehydrogenase"
              ]
            }
          ],
          "chromosome": "NC_000913.3",
          "peakLeftPosition": 53392,
          "peakRightPosition": 53702
        }
      }
    });
  });
});