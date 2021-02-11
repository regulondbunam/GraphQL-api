import axios from 'axios';

describe('geneService', () => {
  test('getAllGenes with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
              getAllGenes(limit:5){
                data{
                  gene{
                    id
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
                "id": "RDBECOLIGN00589",
                "name": "3'ETS<sup><i>leuZ</i></sup>",
                "leftEndPosition": 1991748,
                "rightEndPosition": 1991814
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGN04491",
                "name": "C0067",
                "leftEndPosition": 238462,
                "rightEndPosition": 238586
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGN04226",
                "name": "C0293",
                "leftEndPosition": 1196714,
                "rightEndPosition": 1196786
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGN00487",
                "name": "C0299",
                "leftEndPosition": 1230629,
                "rightEndPosition": 1230707
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGN00139",
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
                getGenesBy(advancedSearch:"((forward[geneInfo.strand]) and ppk[geneInfo.name]) or Lon protease[products.name]")
                {
                  data{
                    gene{
                      name
                      id
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
          "data": [
            {
              "gene": {
                "name": "lon",
                "id": "RDBECOLIGN03614",
                "strand": "forward"
              },
              "products": [
                {
                  "name": "Lon protease"
                }
              ]
            }
          ]
        }
      }
    });
  });
});
