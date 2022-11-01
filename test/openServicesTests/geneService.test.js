import axios from 'axios';

describe('geneService', () => {
  test('getAllGenes with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
              getAllGenes(limit:5){
                data{
                  gene{
                    name
                    leftEndPosition
                    rightEndPosition
                  }
                }
              }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getAllGenes": {
          "data": [
            {
              "gene": {
                "name": "3'ETS-<i>leuZ</i>",
                "leftEndPosition": 1991748,
                "rightEndPosition": 1991814
              }
            },
            {
              "gene": {
                "name": "C0067",
                "leftEndPosition": 238462,
                "rightEndPosition": 238586
              }
            },
            {
              "gene": {
                "name": "C0293",
                "leftEndPosition": 1196711,
                "rightEndPosition": 1196782
              }
            },
            {
              "gene": {
                "name": "C0299",
                "leftEndPosition": 1230629,
                "rightEndPosition": 1230707
              }
            },
            {
              "gene": {
                "name": "C0362",
                "leftEndPosition": 1552001,
                "rightEndPosition": 1552386
              }
            }
          ]
        }
      }
    });
  });

  test('getGenesBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getGenesBy(advancedSearch:"((forward[geneInfo.strand]) and ppk[geneInfo.name]) or 'Lon protease'[products.name]")
                {
                  data{
                    gene{
                      name
                      strand
                    }
                    products{
                      name
                    }
                  }
                }
              }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getGenesBy": {
          "data":  [
            {
              "gene": {
                "name": "3'ETS-<i>leuZ</i>",
                "strand": "reverse"
              },
              "products": [
                {
                  "name": "small regulatory RNA 3'ETS<sup><i>leuZ</i></sup>"
                }
              ]
            },
            {
              "gene": {
                "name": "C0067",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0293",
                "strand": "forward"
              },
              "products": [
                {
                  "name": "e14 prophage; small regulatory RNA C0293"
                }
              ]
            },
            {
              "gene": {
                "name": "C0299",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0362",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0465",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0614",
                "strand": "reverse"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0664",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "C0719",
                "strand": "forward"
              },
              "products": []
            },
            {
              "gene": {
                "name": "G0-10697",
                "strand": "forward"
              },
              "products": []
            }
          ]
        }
      }
    });
  });
});
