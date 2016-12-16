const cheerio = require('cheerio');

exports.constructQueryString = constructQueryString;

// ----------------------------------------------------------
//    Utils
// ----------------------------------------------------------
function constructQueryString(params) {
  var result = '';
  if (!params) {
    return result;
  }
  var startParam = '?';
  Object.keys(params).forEach((key, idx) => {
    if (idx > 0) {
      startParam = '&'
    }
    result += `${startParam}${key}=${params[key]}`
  });
  return result;
}
