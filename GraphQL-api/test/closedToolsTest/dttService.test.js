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
                "_id": "RDBECOLITA00003",
                "leftEndPosition": "244",
                "rightEndPosition": "244"
              },
              {
                "_id": "RDBECOLIRB00001",
                "leftEndPosition": "191",
                "rightEndPosition": "310"
              },
              {
                "_id": "RDBECOLIPM00001",
                "leftEndPosition": "683",
                "rightEndPosition": "683"
              },
              {
                "_id": "RDBECOLITM00001",
                "leftEndPosition": "274",
                "rightEndPosition": "310"
              },
              {
                "_id": "RDBECOLIPP00001",
                "leftEndPosition": "100",
                "rightEndPosition": "146"
              },
              {
                "_id": "RDBECOLITA00002",
                "leftEndPosition": "276",
                "rightEndPosition": "311"
              },
              {
                "_id": "RDBECOLIBS00001",
                "leftEndPosition": "180",
                "rightEndPosition": "200"
              },
              {
                "_id": "RDBECOLIGN00001",
                "leftEndPosition": "337",
                "rightEndPosition": "2799+"
              },
              {
                "_id": "RDBECOLITA00001",
                "leftEndPosition": "200",
                "rightEndPosition": "255"
              }
            ]
          }
        });
    });
});

