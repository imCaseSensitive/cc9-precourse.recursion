/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (stringifyMe) => {
  if (stringifyMe === null) {
    return 'null';
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
    return '{' + '}';
  }
  else {
    return `${stringifyMe}`;
  }

};
