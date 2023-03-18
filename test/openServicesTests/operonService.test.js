import axios from 'axios';

describe('operonService', () => {
  test('getAllOperon with limit 5', async () => {
    const response = await axios.post('http://localhost:4001/graphql', {
      query: `
            query{
                getAllOperon(limit:5){
                  data{
                    operon{
                      name
                      strand
                    }
                    transcriptionUnits{
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
            "data":  [
              {
                "operon": {
                  "name": "C0293",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "name": "C0293"
                  }
                ]
              },
              {
                "operon": {
                  "name": "CsiR",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "name": "CsiR"
                  }
                ]
              },
              {
                "operon": {
                  "name": "aaeR",
                  "strand": "forward"
                },
                "transcriptionUnits": [
                  {
                    "name": "aaeR"
                  }
                ]
              },
              {
                "operon": {
                  "name": "aaeXAB",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
                    "name": "aaeXAB"
                  }
                ]
              },
              {
                "operon": {
                  "name": "aas-lplT",
                  "strand": "reverse"
                },
                "transcriptionUnits": [
                  {
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
                      name
                      strand
                    }
                    transcriptionUnits{
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
            "data":  [{
              "operon": {
                "name": "accBC",
                "strand": "forward"
              },
              "transcriptionUnits": [
                {
                  "name": "accBC"
                },
                {
                  "name": "accBC"
                }
              ]
            },
            {
              "operon": {
                "name": "accD",
                "strand": "reverse"
              },
              "transcriptionUnits": [
                {
                  "name": "accD"
                }
              ]
            }]
          }
        }
      });
  });
});
