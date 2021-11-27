import axios from 'axios';

describe('operonService', () => {
  test('getAllOperon with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllOperon(limit:5){
                  data{
                    operon{
                      id
                      name
                      strand
                    }
                    transcriptionUnits{
                      id
                      name
                    }
                  }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getAllOperon": {
            "data": [
              {
                "operon": {
                  "id": "RDBECOLIOPC00123",
                  "name": "C0293",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC02309",
                    "name": "C0293"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00015",
                  "name": "CsiR",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01438",
                    "name": "CsiR"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00423",
                  "name": "aaeR",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC02936",
                    "name": "aaeR"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC02213",
                  "name": "aaeXAB",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01101",
                    "name": "aaeXAB"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00968",
                  "name": "aas-lplT",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC00961",
                    "name": "aas-lplT"
                  }
                ]
              }
            ]
          }
        }
      });
  });

  test('getOperonBy Advanced Search', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getOperonBy(search: "accD or accBC"){
                  data{
                    operon{
                      id
                      name
                      strand
                    }
                    transcriptionUnits{
                      id
                      name
                    }
                  }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
        "data": {
          "getOperonBy": {
            "data": [
              {
                "operon": {
                  "id": "RDBECOLIOPC02047",
                  "name": "accBC",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC02079",
                    "name": "accBC"
                  },
                  {
                    "id": "RDBECOLITUC03265",
                    "name": "accBC"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC01029",
                  "name": "accD",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC03266",
                    "name": "accD"
                  }
                ]
              }
            ]
          }
        }
      });
  });
});
