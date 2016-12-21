const async = require('async');
const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown')
const FILES = [
  `${__dirname}/lib/SquareConnect.js`,
  `${__dirname}/lib/v1/index.js`,
  `${__dirname}/lib/v2/index.js`
];

jsdoc2md.render({ files: FILES }).then((md) => {
  fs.readFile('./HEADER.md', 'utf-8', (err, headerMd) => {
    if (err) {
      console.log('DOCS BUILD ERR: ', err);
      process.exit(1);
    }

    var documentation = [headerMd, md].join('\n');

    fs.writeFile('./README.md', documentation, (err) => {
      if (err) {
        console.log('DOCS WRITE ERR: ', err);
        process.exit(1);
      }

      console.log('THANKS FOR BUILDING THE DOCS!');
      process.exit();
    });
  });
});
