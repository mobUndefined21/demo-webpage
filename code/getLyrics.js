const { get } = require('https');
const fs = require('fs');

const getLyricsRemote = async (artist,title) => {
  return new Promise((resolve,reject) => {
    get(`https://api.lyrics.ovh/v1/${artist}/${title}/`, res => {
      let data = [];
      res.on('data', chunk => data.push(chunk))
      res.on('end', () => resolve(data.toString()))
    });
  });
}

(async () => {
  const response = await getLyricsRemote('talking%20heads', 'once%20in%20a%20lifetime');
  const responseJson = await JSON.parse(response);
  console.log(responseJson.lyrics);
})();