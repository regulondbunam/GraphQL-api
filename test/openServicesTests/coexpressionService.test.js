import axios from 'axios';

describe('coexpressionService',()=>{
    test('getTopCoexpressionRanking of the gene araC', async ()=>{

        const response = await axios.post('http://localhost:4001/graphql',{
            query: `
                query {
                    getTopCoexpressionRanking(gene:"arac"){
                        coexpressionId
                        geneId
                        geneName
                        rank
                    }
                }
            `
        });

        const {data} = response;
        expect(data).toMatchObject({
          "data": {
            "getTopCoexpressionRanking": [
              {
                "coexpressionId": "RDBECOLICE00001",
                "geneId": "RDBECOLIGN00050",
                "geneName": "araC",
                "rank": 1
              },
              {
                "coexpressionId": "RDBECOLICE00002",
                "geneId": "RDBECOLIGN00178",
                "geneName": "yihX",
                "rank": 3
              },
              {
                "coexpressionId": "RDBECOLICE00003",
                "geneId": "RDBECOLIGN00221",
                "geneName": "cdaR",
                "rank": 6
              },
              {
                "coexpressionId": "RDBECOLICE00004",
                "geneId": "RDBECOLIGN02210",
                "geneName": "nupG",
                "rank": 7
              },
              {
                "coexpressionId": "RDBECOLICE00005",
                "geneId": "RDBECOLIGN03250",
                "geneName": "topAI",
                "rank": 7
              },
              {
                "coexpressionId": "RDBECOLICE00012",
                "geneId": "RDBECOLIGN01070",
                "geneName": "rihC",
                "rank": 50
              },
              {
                "coexpressionId": "RDBECOLICE00013",
                "geneId": "RDBECOLIGN01079",
                "geneName": "omuR",
                "rank": 53
              }
            ]
          }
        });
    });

    test('getRankFromGeneList compare araJ top with araC top genes', async ()=>{
      const response = await axios.post('http://localhost:4001/graphql',{
        query: `
          query {
            getRankFromGeneList(gene:"araJ", geneList:["araC","yihX","cdaR","nupG","topAI","rihC","omuR","aroH","gcd","aroL","yciQ","rhsC","araJ"]){
              coexpressionId
              geneName
              geneId
              rank
            }
          }
        `
      });
      const {data} = response;
      expect(data).toMatchObject({
        "data": {
          "getRankFromGeneList": [
            {
              "coexpressionId": "RDBECOLICE00006",
              "geneName": "araJ",
              "geneId": "RDBECOLIGN00056",
              "rank": 1
            },
            {
              "coexpressionId": "RDBECOLICE00008",
              "geneName": "rhsC",
              "geneId": "RDBECOLIGN00839",
              "rank": 4
            },
            {
              "coexpressionId": "RDBECOLICE00009",
              "geneName": "gcd",
              "geneId": "RDBECOLIGN00362",
              "rank": 7
            },
            {
              "coexpressionId": "RDBECOLICE00010",
              "geneName": "yciQ",
              "geneId": "RDBECOLIGN02131",
              "rank": 9
            }
          ]
        }
      });
    });
});

