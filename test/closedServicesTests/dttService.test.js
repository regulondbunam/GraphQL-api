import axios from 'axios';

describe('dttService',()=>{
    test('getGeneticElementsFromInterval with an interval between 100 and 1000', async ()=>{

        const response = await axios.post('http://localhost:4001/graphql',{
            query: `
              query {
                getGeneticElementsFromInterval(leftEndPosition:100, rightEndPosition: 1000){
                  labelName
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
                "labelName": "thrA",
                "leftEndPosition": "337",
                "rightEndPosition": "2799+"
              },
              {
                "labelName": "thrL",
                "leftEndPosition": "190",
                "rightEndPosition": "255"
              },
              {
                "labelName": "thrLp",
                "leftEndPosition": "148",
                "rightEndPosition": "148"
              },
              {
                "labelName": null,
                "leftEndPosition": "274",
                "rightEndPosition": "310"
              },
              {
                "labelName": "ppGpp",
                "leftEndPosition": null,
                "rightEndPosition": null
              },
              {
                "labelName": "ArcA",
                "leftEndPosition": "+98",
                "rightEndPosition": "112"
              },
              {
                "labelName": "FNR",
                "leftEndPosition": "+98",
                "rightEndPosition": "112"
              },
              {
                "labelName": "Lrp",
                "leftEndPosition": "159",
                "rightEndPosition": "173"
              }
            ]
          }
        });
    });
});

