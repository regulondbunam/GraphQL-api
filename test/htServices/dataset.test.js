import axios from 'axios';

describe('dataset', () => {
  test('get dataset with ID RHTECOLITUD00001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getDatasetByID(datasetID: "RHTECOLITUD00001") {
                _id
                publication {
                    pmid
                    doi
                    authors
                    title
                    date
                }
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getDatasetByID": {
          "_id": "RHTECOLITUD00001",
          "publication": {
            "pmid": 31308523,
            "doi": "10.1038/s41564-019-0500-z",
            "authors": [
              "Ju X",
              "Li D",
              "Liu S"
            ],
            "title": "Full-length RNA profiling reveals pervasive bidirectional transcription terminators in bacteria.",
            "date": "2019 Nov"
          }
        }
      }
    });
  });
});