import axios from 'axios';

describe('dataset', () => {
  test('get nlpGrowthConditions with ID SRR057747', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
        query {
          getNLPGrowthConditionById(datasetId:"GENE_EXPRESSION_SRR794827")
          {
            datasetIds
            temperature {
                value
                score
                associatedPhrase
            }
          }
        }`,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getNLPGrowthConditionById":  {
            "datasetIds": [
              "GENE_EXPRESSION_SRR794827"
            ],
            "temperature": [
              {
                "value": "37 °C",
                "score": 80,
                "associatedPhrase": "<Air> Aerobic </Air> growth at <Temp> 37 °C </Temp> in specified media"
              }
            ]
          }
        }
      });
  });
});