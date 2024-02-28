import axios from 'axios';

describe('regulonService', () => {
  test('getAllRegulon with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllRegulon(limit: 5){
                    data{
                    regulator{
                        name
                        encodedBy{
                        genes{
                            name
                        }
                        operon{
                            name
                        }
                        }
                    }
                    }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getAllRegulon": {
          "data": [
            {
              "regulator": {
                "name": "small regulatory RNA GcvB",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "gcvB"
                    }
                  ]
                }
              }
            },
            {
              "regulator": {
                "name": "small regulatory RNA McaS",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "mcaS"
                    }
                  ]
                }
              }
            },
            {
              "regulator": {
                "name": "Qin prophage; small regulatory RNA DicF",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "dicF"
                    }
                  ]
                }
              }
            },
            {
              "regulator": {
                "name": "ppGpp",
                "encodedBy": null
              }
            },
            {
              "regulator": {
                "name": "small regulatory RNA DsrA",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "dsrA"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    });
  });

  test('getRegulonBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getRegulonBy(search: "agaR or araC"){
                    data{
                    regulator{
                        name
                        encodedBy{
                        genes{
                            name
                        }
                        operon{
                            name
                        }
                        }
                    }
                    }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getRegulonBy": {
          "data": [
            {
              "regulator": {
                "name": "AraC",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "araC"
                    }
                  ],
                  "operon": [
                    {
                      "name": "araC"
                    }
                  ]
                }
              }
            },
            {
              "regulator": {
                "name": "DNA-binding transcriptional repressor AgaR",
                "encodedBy": {
                  "genes": [
                    {
                      "name": "agaR"
                    }
                  ],
                  "operon": [
                    {
                      "name": "agaR"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    });
  });
});
