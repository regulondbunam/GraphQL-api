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
                getGenesBy(advancedSearch:"((forward[gene.strand]) and ppk[gene.name]) or 'Lon protease'[products.name]")
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
      "data": [
        {
          "gene": {
            "name": "lon",
            "strand": "forward"
          },
          "products": [
            {
              "name": "Lon protease"
            }
          ]
        },
        {
          "gene": {
            "name": "ppk",
            "strand": "forward"
          },
          "products": [
            {
              "name": "polyphosphate kinase"
            }
          ]
        }
      ]
    }
  }
});
  });
});
