import axios from 'axios';

describe('tfBinding', () => {
  test('get tfBinding doc with ID ECOLIBS000000001', async () => {
    const response = await axios.post('http://localhost:4004/graphql', {
      query: `
            query {
                getTFBindingById (_id: "ECOLIBS000000001") {
                _id
                chromosome
                chrLeftPosition
                chrRightPosition
                sequence
                }
            }
            `,
    });

    const {data} = response;
    expect(data).toMatchObject({
      "data": {
        "getTFBindingById": {
          "_id": "ECOLIBS000000001",
          "chromosome": "NC_000913.3",
          "chrLeftPosition": 97103,
          "chrRightPosition": 97122,
          "sequence": "TAAAAATGTCGTCATTATC"
        }
      }
    });
  });
});