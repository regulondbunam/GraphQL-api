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
                    "coexpressionId": "RDBECOLICE00020",
                    "geneId": "RDBECOLIGN00076",
                    "geneName": "aroH",
                    "rank": 19
                  },
                  {
                    "coexpressionId": "RDBECOLICE00017",
                    "geneId": "RDBECOLIGN00362",
                    "geneName": "gcd",
                    "rank": 31
                  },
                  {
                    "coexpressionId": "RDBECOLICE00019",
                    "geneId": "RDBECOLIGN00078",
                    "geneName": "aroL",
                    "rank": 41
                  },
                  {
                    "coexpressionId": "RDBECOLICE00012",
                    "geneId": "RDBECOLIGN01070",
                    "geneName": "rihC",
                    "rank": 50
                  },
                  {
                    "coexpressionId": "RDBECOLICE00015",
                    "geneId": "RDBECOLIGN00299",
                    "geneName": "zitB",
                    "rank": 53
                  },
                  {
                    "coexpressionId": "RDBECOLICE00013",
                    "geneId": "RDBECOLIGN01079",
                    "geneName": "omuR",
                    "rank": 53
                  },
                  {
                    "coexpressionId": "RDBECOLICE00018",
                    "geneId": "RDBECOLIGN02131",
                    "geneName": "yciQ",
                    "rank": 57
                  },
                  {
                    "coexpressionId": "RDBECOLICE00016",
                    "geneId": "RDBECOLIGN00839",
                    "geneName": "rhsC",
                    "rank": 61
                  },
                  {
                    "coexpressionId": "RDBECOLICE00014",
                    "geneId": "RDBECOLIGN00056",
                    "geneName": "araJ",
                    "rank": 81
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
            },
            {
              "coexpressionId": "RDBECOLICE00070",
              "geneName": "omuR",
              "geneId": "RDBECOLIGN01079",
              "rank": 11
            },
            {
              "coexpressionId": "RDBECOLICE00069",
              "geneName": "rihC",
              "geneId": "RDBECOLIGN01070",
              "rank": 26
            },
            {
              "coexpressionId": "RDBECOLICE00037",
              "geneName": "cdaR",
              "geneId": "RDBECOLIGN00221",
              "rank": 32
            },
            {
              "coexpressionId": "RDBECOLICE00048",
              "geneName": "nupG",
              "geneId": "RDBECOLIGN02210",
              "rank": 43
            },
            {
              "coexpressionId": "RDBECOLICE00068",
              "geneName": "aroH",
              "geneId": "RDBECOLIGN00076",
              "rank": 72
            },
            {
              "coexpressionId": "RDBECOLICE00058",
              "geneName": "topAI",
              "geneId": "RDBECOLIGN03250",
              "rank": 76
            },
            {
              "coexpressionId": "RDBECOLICE00014",
              "geneName": "araC",
              "geneId": "RDBECOLIGN00050",
              "rank": 81
            },
            {
              "coexpressionId": "RDBECOLICE00025",
              "geneName": "yihX",
              "geneId": "RDBECOLIGN00178",
              "rank": 92
            },
            {
              "coexpressionId": "RDBECOLICE00067",
              "geneName": "aroL",
              "geneId": "RDBECOLIGN00078",
              "rank": 98
            }
          ]
        }
      });
    });
});

