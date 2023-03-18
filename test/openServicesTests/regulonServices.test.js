import axios from 'axios';

describe('regulonService', () => {
  test('getAllRegulon with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllRegulon(limit: 5){
                    data{
                    transcriptionFactor{
                        name
                        encodedFrom{
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
                  "transcriptionFactor": {
                    "name": "AccB",
                    "encodedFrom": {
                      "genes": [
                        {
                          "name": "accB"
                        }
                      ],
                      "operon": [
                        {
                          "name": "accBC"
                        }
                      ]
                    }
                  }
                },
                {
                  "transcriptionFactor": {
                    "name": "AcrR",
                    "encodedFrom": {
                      "genes": [
                        {
                          "name": "acrR"
                        }
                      ],
                      "operon": [
                        {
                          "name": "acrR"
                        }
                      ]
                    }
                  }
                },
                {
                  "transcriptionFactor": {
                    "name": "Ada",
                    "encodedFrom": {
                      "genes": [
                        {
                          "name": "ada"
                        }
                      ],
                      "operon": [
                        {
                          "name": "ada-alkB"
                        }
                      ]
                    }
                  }
                },
                {
                  "transcriptionFactor": {
                    "name": "AdiY",
                    "encodedFrom": {
                      "genes": [
                        {
                          "name": "adiY"
                        }
                      ],
                      "operon": [
                        {
                          "name": "adiY"
                        }
                      ]
                    }
                  }
                },
                {
                  "transcriptionFactor": {
                    "name": "AgaR",
                    "encodedFrom": {
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

  test('getRegulonBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getRegulonBy(search: "agaR or araC"){
                    data{
                    transcriptionFactor{
                        name
                        encodedFrom{
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
                  "transcriptionFactor": {
                    "name": "AgaR",
                    "encodedFrom": {
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
                },
                {
                  "transcriptionFactor": {
                    "name": "AraC",
                    "encodedFrom": {
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
                }
            ]
        }
      }
    });
  });
});
