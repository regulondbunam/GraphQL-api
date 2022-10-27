import axios from 'axios';

describe('srnaService', () => {
  test('getAllSrnas with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllSrnas(limit:5){
                  data{
                    product{
                      name
                      gene{
                        name
                        strand
                        gcContent
                        genomePosition
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
          "getAllSrnas": {
            "data": [
              {
                "product": {
                  "name": "6S RNA",
                  "gene": {
                    "name": "ssrS",
                    "strand": "forward",
                    "gcContent": 55.19125683060109,
                    "genomePosition": "3055983 --> 3056165"
                  }
                }
              },
              {
                "product": {
                  "name": "CP4-44 prophage; small RNA IsrC",
                  "gene": {
                    "name": "isrC",
                    "strand": "forward",
                    "gcContent": 42.56410256410256,
                    "genomePosition": "2071317 --> 2071511"
                  }
                }
              },
              {
                "product": {
                  "name": "CP4-6 prophage; small RNA EyeA",
                  "gene": {
                    "name": "eyeA",
                    "strand": "forward",
                    "gcContent": 56,
                    "genomePosition": "272580 --> 272654"
                  }
                }
              },
              {
                "product": {
                  "name": "Qin prophage; small regulatory RNA DicF",
                  "gene": {
                    "name": "dicF",
                    "strand": "forward",
                    "gcContent": 54.716981132075475,
                    "genomePosition": "1649382 --> 1649434"
                  }
                }
              },
              {
                "product": {
                  "name": "RNase P catalytic RNA component",
                  "gene": {
                    "name": "rnpB",
                    "strand": "reverse",
                    "gcContent": 61.80371352785146,
                    "genomePosition": "3270216 --> 3270592"
                  }
                }
              }
            ]
          }
        }
      });
  });

  test('getSrnaBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getSrnaBy(search:"dicF"){
                  data{
                    product{
                      name
                      gene{
                        name
                        strand
                        gcContent
                        genomePosition
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
          "getSrnaBy": {
            "data": [
              {
                "product": {
                  "name": "Qin prophage; small regulatory RNA DicF",
                  "gene": {
                    "name": "dicF",
                    "strand": "forward",
                    "gcContent": 54.716981132075475,
                    "genomePosition": "1649382 --> 1649434"
                  }
                }
              }
            ]
          }
        }
      });
  });
});
