const axios = require('axios');
const fs = require('fs');
const path = require('path');


const performRequest = async () => {
  let configName = process.argv[2];
  let jsonString = fs.readFileSync(path.join(__dirname, `./configs/${configName}.json`));
  let json = JSON.parse(jsonString);
  let response = await axios(json);
  console.log({
    config: json,
    response
  })
};


performRequest();
