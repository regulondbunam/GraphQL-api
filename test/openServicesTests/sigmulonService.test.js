import axios from 'axios';

describe('sigmulonService', () => {
  test('getAllSigmulon with limit 3', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllSigmulon(limit:3){
                data{
                    _id
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
            "data": [
              {
                "_id": "RDBECOLISFC00004",
                "sigmaFactor": {
                  "name": "RNA polymerase sigma E factor",
                  "gene": {
                    "name": "rpoE"
                  }
                }
              },
              {
                "_id": "RDBECOLISFC00002",
                "sigmaFactor": {
                  "name": "RNA polymerase sigma factor FecI",
                  "gene": {
                    "name": "fecI"
                  }
                }
              },
              {
                "_id": "RDBECOLISFC00001",
                "sigmaFactor": {
                  "name": "RNA polymerase, sigma 28 (sigma F) factor",
                  "gene": {
                    "name": "fliA"
                  }
                }
              }
            ]
          }
        }
      });
  });

  test('getSigmulonBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getSigmulonBy(search:"fliA or \\\"Sigma 70\\\""){
                data{
                    _id
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
            "data": [
              {
                "_id": "RDBECOLISFC00001",
                "sigmaFactor": {
                  "name": "RNA polymerase, sigma 28 (sigma F) factor",
                  "gene": {
                    "name": "fliA"
                  }
                }
              },
              {
                "_id": "RDBECOLISFC00003",
                "sigmaFactor": {
                  "name": "RNA polymerase, sigma 70 (sigma D) factor",
                  "gene": {
                    "name": "rpoD"
                  }
                }
              }
            ]
          }
        }
      });
  });
});
