import axios from 'axios';

describe('regulonService', () => {
  test('getAllRegulon with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllRegulon(limit: 5){
                    data{
                    _id
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
                  "_id": "RDBECOLITFC00217",
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
                  "_id": "RDBECOLITFC00004",
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
                  "_id": "RDBECOLITFC00020",
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
                  "_id": "RDBECOLITFC00098",
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
                  "_id": "RDBECOLITFC00172",
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
                    _id
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
                  "_id": "RDBECOLITFC00172",
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
                  "_id": "RDBECOLITFC00039",
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
