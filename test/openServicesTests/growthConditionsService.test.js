import axios from "axios";

describe("growthConditionsService", () => {
  test("getAllGrowthConditions with limit 5", async () => {
    const response = await axios.post("http://localhost:4001/graphql", {
      query: `
            query{
                getAllGrowthCondition(limit: 5, page: 0) {
                    data {
                    gcPhrase
                    terms {
                        name
                        type
                    }
                    }
                }
            }
            `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        getAllGrowthCondition: {
          data: [
            {
              gcPhrase:
                " | Escherichia coli BW25113 | aeration | 37.0 C | OD600 of 0.3 | mid exponential phase |",
              terms: [
                {
                  name: "Escherichia coli BW25113",
                  type: "organism",
                },
                {
                  name: "wild type",
                  type: "genetic_background",
                },
                {
                  name: "aeration",
                  type: "aeration",
                },
                {
                  name: "37.0 C",
                  type: "temperature",
                },
                {
                  name: "OD600 of 0.3",
                  type: "optical_density",
                },
                {
                  name: "mid exponential phase",
                  type: "growth_phase",
                },
              ],
            },
            {
              gcPhrase:
                " | Escherichia coli BW25113 | aerobiosis | 37.0 C | OD600 of 0.3 | mid exponential phase | agitation at 150 rpm |",
              terms: [
                {
                  name: "Escherichia coli BW25113",
                  type: "organism",
                },
                {
                  name: "wild type",
                  type: "genetic_background",
                },
                {
                  name: "succinate 0.2%",
                  type: "medium_supplements",
                },
                {
                  name: "aerobiosis",
                  type: "aeration",
                },
                {
                  name: "37.0 C",
                  type: "temperature",
                },
                {
                  name: "OD600 of 0.3",
                  type: "optical_density",
                },
                {
                  name: "mid exponential phase",
                  type: "growth_phase",
                },
                {
                  name: "agitation at 150 rpm",
                  type: "agitation_speed",
                },
              ],
            },
            {
              gcPhrase:
                " | Escherichia coli BW25113 | cpxA knockout mutant | LB broth | aerobiosis | 37.0 C | OD600 of 1.0 |",
              terms: [
                {
                  name: "Escherichia coli BW25113",
                  type: "organism",
                },
                {
                  name: "cpxA knockout mutant",
                  type: "genetic_background",
                },
                {
                  name: "LB broth",
                  type: "medium",
                },
                {
                  name: "aerobiosis",
                  type: "aeration",
                },
                {
                  name: "37.0 C",
                  type: "temperature",
                },
                {
                  name: "OD600 of 1.0",
                  type: "optical_density",
                },
              ],
            },
            {
              gcPhrase:
                " | Escherichia coli BW25113 | murR knockout mutant | LB medium | stationary phase |",
              terms: [
                {
                  name: "Escherichia coli BW25113",
                  type: "organism",
                },
                {
                  name: "murR knockout mutant",
                  type: "genetic_background",
                },
                {
                  name: "LB medium",
                  type: "medium",
                },
                {
                  name: "stationary phase",
                  type: "optical_density",
                },
              ],
            },
            {
              gcPhrase:
                " | Escherichia coli BW25113 | wild type | LB broth | aerobiosis | 37.0 C | OD600 of 1.0 |",
              terms: [
                {
                  name: "Escherichia coli BW25113",
                  type: "organism",
                },
                {
                  name: "wild type",
                  type: "genetic_background",
                },
                {
                  name: "LB broth",
                  type: "medium",
                },
                {
                  name: "aerobiosis",
                  type: "aeration",
                },
                {
                  name: "37.0 C",
                  type: "temperature",
                },
                {
                  name: "OD600 of 1.0",
                  type: "optical_density",
                },
              ],
            },
          ],
        },
      },
    });
  });

  test("getGrowthConditiosBy Advanced Search", async () => {
    const response = await axios.post("http://localhost:4001/graphql", {
      query: `
            query {
                getGrowthConditionBy(search: "RDMECOLIGCC00002") {
                    data {
                    _id
                    gcPhrase
                    terms {
                        _id
                        name
                        type
                    }
                    citations {
                        publication {
                        pmid
                        title
                        }
                    }
                    }
                }
                }
            `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        getGrowthConditionBy: {
          data: [
            {
              _id: "RDMECOLIGCC00002",
              gcPhrase:
                " | Escherichia coli str. K-12 substr. MG1655 | wild type | LB medium | aerobiosis | 37.0 C | OD600 from 0.5 to 0.7 |",
              terms: [
                {
                  _id: "RDBONTOLMCO03342",
                  name: "Escherichia coli str. K-12 substr. MG1655",
                  type: "organism",
                },
                {
                  _id: "RDBONTOLMCO03354",
                  name: "wild type",
                  type: "genetic_background",
                },
                {
                  _id: "RDBONTOLMCO02467",
                  name: "LB medium",
                  type: "medium",
                },
                {
                  _id: "RDBONTOLMCO03329",
                  name: "aerobiosis",
                  type: "aeration",
                },
                {
                  _id: "RDBONTOLMCO02638",
                  name: "37.0 C",
                  type: "temperature",
                },
                {
                  _id: "Lisen:43558334",
                  name: "OD600 from 0.5 to 0.7",
                  type: "optical_density",
                },
              ],
              citations: [
                {
                  publication: {
                    pmid: "25275371",
                    title:
                      "Comprehensive mapping of the Escherichia coli flagellar regulatory network.",
                  },
                },
              ],
            },
          ],
        },
      },
    });
  });
});
