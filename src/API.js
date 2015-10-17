import jsonp from 'jsonp-p';

const search = query =>
  jsonp(`https://itunes.apple.com/search?media=music&entity=song&limit=20&term=${query}`)
    .then(response => response.results);

export default {
  search,
};
