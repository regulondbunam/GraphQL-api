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
                "id": "RDBECOLIGNC02727",
                "name": "3'ETS-<i>leuZ</i>",
                "leftEndPosition": 1991748,
                "rightEndPosition": 1991814
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGNC02891",
                "name": "C0067",
                "leftEndPosition": 238462,
                "rightEndPosition": 238586
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGNC02892",
                "name": "C0293",
                "leftEndPosition": 1196711,
                "rightEndPosition": 1196782
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGNC02893",
                "name": "C0299",
                "leftEndPosition": 1230629,
                "rightEndPosition": 1230707
              }
            },
            {
              "gene": {
                "id": "RDBECOLIGNC02897",
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
                "id": "RDBECOLIGNC00534",
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
