import axios from 'axios';

describe('coexpressionService',()=>{
    test('getTopCoexpressionRanking of the gene araC', async ()=>{

        const response = await axios.post('http://localhost:4001/graphql',{
            query: `
              query {
                getTopCoexpressionRanking(gene:"araC" limit:5){
                  gene{
                    name
                  }
                  rank
                  rgbColor
                }
              }
            `
        });

        const {data} = response;
        expect(data).toMatchObject({
          "data": {
            "getTopCoexpressionRanking":   [
              {
                "gene": [
                  {
                    "name": "araC"
                  }
                ],
                "rank": 0,
                "rgbColor": "5, 241, 59"
              },
              {
                "gene": [
                  {
                    "name": "yihX"
                  }
                ],
                "rank": 3.16227766016838,
                "rgbColor": "5, 241, 59"
              },
              {
                "gene": [
                  {
                    "name": "cdaR"
                  }
                ],
                "rank": 6.2449979983984,
                "rgbColor": "5, 241, 59"
              },
              {
                "gene": [
                  {
                    "name": "nupG"
                  }
                ],
                "rank": 7.48331477354788,
                "rgbColor": "5, 241, 59"
              },
              {
                "gene": [
                  {
                    "name": "topAI"
                  }
                ],
                "rank": 7.54983443527075,
                "rgbColor": "5, 241, 59"
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
              gene{
                name
              }
              rgbColor
              rank
            }
          }
        `
      });
      const {data} = response;
      expect(data).toMatchObject({
        "data": {
          "getRankFromGeneList":  [
            {
              "gene": [
                {
                  "name": "araC"
                }
              ],
              "rgbColor": "217, 2, 0",
              "rank": 3059.92810373054
            },
            {
              "gene": [
                {
                  "name": "yihX"
                }
              ],
              "rgbColor": "255, 2, 0",
              "rank": 3835.49540476846
            },
            {
              "gene": [
                {
                  "name": "cdaR"
                }
              ],
              "rgbColor": "140, 0, 0",
              "rank": 1846.13515214894
            },
            {
              "gene": [
                {
                  "name": "nupG"
                }
              ],
              "rgbColor": "140, 0, 0",
              "rank": 1714.08984595324
            },
            {
              "gene": [
                {
                  "name": "topAI"
                }
              ],
              "rgbColor": "255, 2, 0",
              "rank": 4243.42267515269
            },
            {
              "gene": [
                {
                  "name": "rihC"
                }
              ],
              "rgbColor": "217, 2, 0",
              "rank": 2911.23204159339
            },
            {
              "gene": [
                {
                  "name": "aroH"
                }
              ],
              "rgbColor": "178, 0, 0",
              "rank": 2388.77248812021
            },
            {
              "gene": [
                {
                  "name": "gcd"
                }
              ],
              "rgbColor": "5, 241, 59",
              "rank": 7.07106781186548
            },
            {
              "gene": [
                {
                  "name": "aroL"
                }
              ],
              "rgbColor": "255, 2, 0",
              "rank": 3841.66942877703
            },
            {
              "gene": [
                {
                  "name": "yciQ"
                }
              ],
              "rgbColor": "5, 241, 59",
              "rank": 7.74596669241484
            },
            {
              "gene": [
                {
                  "name": "rhsC"
                }
              ],
              "rgbColor": "5, 241, 59",
              "rank": 4.89897948556636
            },
            {
              "gene": [
                {
                  "name": "araJ"
                }
              ],
              "rgbColor": "5, 241, 59",
              "rank": 0
            }
          ]
        }
      });
    });
});

