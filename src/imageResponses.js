const fs = require('fs');
const path = require('path');

const spongegar = fs.readFileSync(path.join(__dirname, '../client/spongegar.png'));

const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports.getSpongegar = getSpongegar;
