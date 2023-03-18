import axios from 'axios';

describe('sigmulonService', () => {
  test('getAllSigmulon with limit 3', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllSigmulon(limit:3){
                data{
                    sigmaFactor{
                            name
                            gene{
                                name
                            }
                        }
                    }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getAllSigmulon": {
            "data": [{
              "sigmaFactor": {
                "name": "RNA polymerase sigma factor FecI",
                "gene": {
                  "name": "fecI"
                }
              }
            },
            {
              "sigmaFactor": {
                "name": "RNA polymerase sigma factor FliA",
                "gene": {
                  "name": "fliA"
                }
              }
            },
            {
              "sigmaFactor": {
                "name": "RNA polymerase sigma factor RpoD",
                "gene": {
                  "name": "rpoD"
                }
              }
            }]
          }
        }
      });
  });

  test('getSigmulonBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getSigmulonBy(advancedSearch:"FliA[sigmaFactor.name]"){
                data{
                    sigmaFactor{
                            name
                            gene{
                                name
                            }
                        }
                    }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getSigmulonBy": {
            "data": [{
              "sigmaFactor": {
                "name": "RNA polymerase sigma factor FliA",
                "gene": {
                  "name": "fliA"
                }
              }
            }]
          }
        }
      });
  });
});
