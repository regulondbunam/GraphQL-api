import axios from 'axios';

describe('dataset', () => {
  test('get dataset with ID RHTECOLIBSD00009', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
        query {
          getDatasetByID(datasetID:"RHTECOLIBSD02394")
          {
            objectsTested {
                name
                genes{
                  name
                }
            }
            referenceGenome
          }
        }`,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getDatasetByID": {
          "objectsTested": [
            {
              "name": "AcrR",
              "genes": [
                {
                  "name": "acrR"
                }
              ]
            }
          ],
          "referenceGenome": "U00096.3"
        }
      }
    });
  });
});

describe('dataset', () => {
  test('get metadata of TTS datasets from REGULONDB', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
        query{
          getDatasetsWithMetadata(datasetType: "TTS", source: "REGULONDB") {
            metadata {
              datasetType
              reference
              releaseDate
              source
              status
            }
            datasets{
              _id
            }
          }
        }`,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getDatasetsWithMetadata": {
          "metadata": {
            "datasetType": "TTS",
            "reference": [
              "25006232",
              "30201986",
              "31308523"
            ],
            "releaseDate": "30/07/2024",
            "source": "REGULONDB",
            "status": "CURRENT"
          },
          "datasets": [
            {
              "_id": "RHTECOLITTD02715"
            },
            {
              "_id": "RHTECOLITTD02716"
            },
            {
              "_id": "RHTECOLITTD02717"
            },
            {
              "_id": "RHTECOLITTD02718"
            },
            {
              "_id": "RHTECOLITTD02719"
            }
          ]
        }
      }
    });
  });
});