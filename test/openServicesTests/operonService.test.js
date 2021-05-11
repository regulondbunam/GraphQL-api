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
                  "id": "RDBECOLIOPC01353",
                  "name": "C0067",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC00135",
                    "name": "C0067"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC01506",
                  "name": "C0299",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01477",
                    "name": "C0299"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00810",
                  "name": "C0362",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01484",
                    "name": "C0362"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC01025",
                  "name": "C0465",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01411",
                    "name": "C0465"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00365",
                  "name": "C0614",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC01406",
                    "name": "C0614"
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
                  "id": "RDBECOLIOPC02457",
                  "name": "accBC",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC02090",
                    "name": "accBC"
                  },
                  {
                    "id": "RDBECOLITUC03273",
                    "name": "accBC"
                  }
                ]
              },
              {
                "operon": {
                  "id": "RDBECOLIOPC00969",
                  "name": "accD",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "id": "RDBECOLITUC03274",
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
