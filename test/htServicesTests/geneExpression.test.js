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
            "_id": "GENE_EXPRESSION_ERR1218301_b0001",
            "gene": {
              "_id": "RDBECOLIGNC01250",
              "name": "thrL",
              "bnumber": "b0001"
            },
            "fpkm": null,
            "datasetIds": [
              "GENE_EXPRESSION_ERR1218301"
            ]
          },
          {
            "_id": "GENE_EXPRESSION_ERR1218301_b0002",
            "gene": {
              "_id": "RDBECOLIGNC00986",
              "name": "thrA",
              "bnumber": "b0002"
            },
            "fpkm": 8.586969,
            "datasetIds": [
              "GENE_EXPRESSION_ERR1218301"
            ]
          },
          {
            "_id": "GENE_EXPRESSION_ERR1218301_b0003",
            "gene": {
              "_id": "RDBECOLIGNC00987",
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