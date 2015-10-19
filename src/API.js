import jsonp from 'jsonp-p';

const API = {
  search(query) {
    return jsonp(`https://itunes.apple.com/search?media=music&entity=song&limit=20&term=${query}`)
      .then(response => response.results);
  },
};

export default API;
