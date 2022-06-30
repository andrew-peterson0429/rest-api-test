// Representational State Transfer API

const axios = require('axios');

const getMovieTitles = async function (substr) {
  let totalStringEl = await axios.get(
    `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}`
  );
  console.log(`this is data.data ${totalStringEl.data.data}`);
  let titles = [];

  for (let i = 1; i <= totalStringEl.data.total_pages; i++) {
    if (i == 1) {
      //   console.log(i);
      //   console.log(totalStringEl.data.data.Title);
      totalStringEl.data.data.forEach((e) => {
        titles.push(e.Title);
      });
      //   console.log(titles);
    } else {
      let result = await axios.get(
        `https://jsonmock.hackerrank.com/api/moviesdata/search/?Title=${substr}&page=${i}`
      );

      result.data.data.forEach((e) => {
        titles.push(e.Title);
      });
    }
  }

  //   console.log(titles.sort());
  return titles.sort();
};

(async () => {
  const results = await getMovieTitles(`The`);
  console.log(results);
})();
