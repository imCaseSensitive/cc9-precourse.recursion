/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (object) => {
  if (typeof object === "string") {
    return  `"${object}"`;
  }
  if (Array.isArray(object) === true) {
    return '[' + ']';
  }
  return `${object}`;
};
