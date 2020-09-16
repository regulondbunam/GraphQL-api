import axios from 'axios';

describe('geneService', () => {
  test('getAllGenes with limit 5', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
            query {
                getAllGenes(limit:5){
                  geneInfo{
                    id
                    name
                    leftEndPosition
                    rightEndPosition
                  }
                }
              }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      'data': {
        'getAllGenes': [
          {
            'geneInfo': {
              'id': 'RDBECOLIGN03613',
              'name': 'lon',
              'leftEndPosition': 458888,
              'rightEndPosition': 461242,
            },
          },
          {
            'geneInfo': {
              'id': 'RDBECOLIGN04682',
              'name': 'ryfB',
              'leftEndPosition': 2700059,
              'rightEndPosition': 2700377,
            },
          },
          {
            'geneInfo': {
              'id': 'RDBECOLIGN03472',
              'name': 'ppiD',
              'leftEndPosition': 461915,
              'rightEndPosition': 463786,
            },
          },
          {
            'geneInfo': {
              'id': 'RDBECOLIGN03479',
              'name': 'glpG',
              'leftEndPosition': 3560622,
              'rightEndPosition': 3561452,
            },
          },
          {
            'geneInfo': {
              'id': 'RDBECOLIGN03480',
              'name': 'mazF',
              'leftEndPosition': 2910756,
              'rightEndPosition': 2911091,
            },
          },
        ],
      },
    });
  });

  test('getGenesBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
            query{
                getGenesBy(advancedSearch:"((forward[geneInfo.strand]) and ppk[geneInfo.name]) or Lon protease[products.name]")
                {
                  geneInfo{
                    name
                    id
                    strand
                  }
                  products{
                    name
                  }
                }
              }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      'data': {
        'getGenesBy': [
          {
            'geneInfo': {
              'name': 'lon',
              'id': 'RDBECOLIGN03613',
              'strand': 'forward',
            },
            'products': [
              {
                'name': 'Lon protease',
              },
            ],
          },
          {
            'geneInfo': {
              'name': 'ppk',
              'id': 'RDBECOLIGN03570',
              'strand': 'forward',
            },
            'products': [
              {
                'name': 'polyphosphate kinase',
              },
            ],
          },
        ],
      },
    });
  });
});
