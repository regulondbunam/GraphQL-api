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
                            gene_name
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
                          "gene_name": "accB"
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
                          "gene_name": "acrR"
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
                          "gene_name": "ada"
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
                          "gene_name": "adiY"
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
                          "gene_name": "agaR"
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
                            gene_name
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
                          "gene_name": "agaR"
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
                          "gene_name": "araC"
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
