/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (stringifyMe) => {
  if (stringifyMe === null) {
    return 'null';
  }
  else if( stringifyMe === undefined) {
    return 'undefined';
  }
  else if (typeof stringifyMe === "string") {
    return  `"${stringifyMe}"`;
  }
  else if (Array.isArray(stringifyMe) === true) {
    let stringifiedArray = [];
    for (let i = 0; i < stringifyMe.length; i++) {
      stringifiedArray.push(stringifyJSON(stringifyMe[i]))
    }
    return '[' + stringifiedArray.join(',') + ']';
  }
  else if (stringifyMe.constructor === Object && stringifyMe !== null) {
    let arrayOfKeys = Object.keys(stringifyMe);
    let result = [];
    for (let i = 0; i < arrayOfKeys.length; i++) {
      result.push(stringifyJSON(arrayOfKeys[i]) + ':' + stringifyJSON(stringifyMe[arrayOfKeys[i]]));
    }
    return '{' + result.join(',') + '}';
  }
  else {
    return `${stringifyMe}`;
  }

};
