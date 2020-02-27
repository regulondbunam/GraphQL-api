const apiBenchmark = require('api-benchmark');

const services = {
  Regulon: 'http://127.0.0.1:4000',
};
const options = { debug: true, minSamples: 60 };
const route = {
  route: '/graphql',
  query: `query getGeneBy(id:"RDBECOLIGN00001"){
        geneInfo {
          id
          name
          leftEndPosition
          rightEndPosition
          strand
          sequence
          gcContent
        }
    }`,
};

apiBenchmark.compare(services, route, options, function(err, results) {
  apiBenchmark.getHtml(results, function(error, html) {
    console.log(html);
  });
});
