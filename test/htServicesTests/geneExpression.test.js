import axios from 'axios';

describe('dataset', () => {
  test('get geneExpression with ID ERR1218301', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getAllGeneExpressionOfDataset(datasetId:"GENE_EXPRESSION_ERR1218301" limit:3 page:0)
                {
                    _id
                    gene {
                        _id
                        name
                        bnumber
                    }
                    fpkm
                    datasetIds
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getAllGeneExpressionOfDataset": [
            {
              "gene": {
                "name": "thrL",
                "bnumber": "b0001"
              },
              "fpkm": null,
              "datasetIds": [
                "GENE_EXPRESSION_ERR1218301"
              ]
            },
            {
              "gene": {
                "name": "thrA",
                "bnumber": "b0002"
              },
              "fpkm": 8.586969,
              "datasetIds": [
                "GENE_EXPRESSION_ERR1218301"
              ]
            },
            {
              "gene": {
                "name": "thrB",
                "bnumber": "b0003"
              },
              "fpkm": 10.319941,
              "datasetIds": [
                "GENE_EXPRESSION_ERR1218301"
              ]
            }
          ]
        }
      });
  });
});