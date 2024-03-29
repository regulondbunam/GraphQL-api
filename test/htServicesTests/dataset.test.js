import axios from 'axios';

describe('dataset', () => {
  test('get dataset with ID RHTECOLIBSD00009', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
        query {
          getDatasetByID(datasetID:"RHTECOLIBSD00038")
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
              "name": "DNA-binding transcriptional repressor AscG",
              "genes": [
                {
                  "name": "ascG"
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