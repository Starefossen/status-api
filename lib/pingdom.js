'use strict';

const jsonist = require('jsonist');

const apiUrl = 'https://api.pingdom.com/api/2.0';
const apiUser = process.env.PINGDOM_USER;
const apiPass = process.env.PINGDOM_PASS;
const appKey = process.env.PINGDOM_KEY;

exports.checks = tags => {
  const url = `${apiUrl}/checks?tags=${tags.join(',')}&include_tags=true`;
  const opts = {
    headers: { 'app-key': appKey },
    auth: `${apiUser}:${apiPass}`,
  };

  return new Promise((resolve, reject) => {
    jsonist.get(url, opts, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
