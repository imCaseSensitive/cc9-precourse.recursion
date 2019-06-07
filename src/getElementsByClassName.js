/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (string) => {
  let matches = [];

  function godlyRecurse(html, targetClassName) {
    let currentNode = html;
    
    if (currentNode.childNodes.length > 0) {
      currentNode.childNodes.forEach(node => {
        if (node.className === targetClassName) {
          matches.push(node);
        }
        if (node.childNodes.length > 0) {
          godlyRecurse(node, targetClassName);
        }
      })
    }
  }
  godlyRecurse(document.documentElement, string);
  return matches;
};