import axios from 'axios';

describe('dttService',()=>{
    test('getGeneticElementsFromInterval with an interval between 100 and 1000', async ()=>{

        const response = await axios.post('http://localhost:4001/graphql',{
            query: `
                query {
                    getGeneticElementsFromInterval(leftEndPosition:100, rightEndPosition: 1000){
                        _id
                        leftEndPosition
                        rightEndPosition
                      }
                }
            `
        });

        const {data} = response;
        expect(data).toMatchObject({
          "data": {
            "getGeneticElementsFromInterval": [
              {
                "_id": "RDBECOLIGNC00986",
                "leftEndPosition": "337",
                "rightEndPosition": "2799+"
              },
              {
                "_id": "RDBECOLIGNC01250",
                "leftEndPosition": "190",
                "rightEndPosition": "255"
              },
              {
                "_id": "RDBECOLIPMC03497",
                "leftEndPosition": "148",
                "rightEndPosition": "148"
              },
              {
                "_id": "RDBECOLITMC00051",
                "leftEndPosition": "274",
                "rightEndPosition": "310"
              },
              {
                "_id": "RDBECOLIRIC01518",
                "leftEndPosition": null,
                "rightEndPosition": null
              },
              {
                "_id": "RDBECOLIRIC01931",
                "leftEndPosition": "+98",
                "rightEndPosition": "112"
              },
              {
                "_id": "RDBECOLIRIC02091",
                "leftEndPosition": "+98",
                "rightEndPosition": "112"
              },
              {
                "_id": "RDBECOLIRIC02136",
                "leftEndPosition": "159",
                "rightEndPosition": "173"
              }
            ]
          }
        });
    });
});

