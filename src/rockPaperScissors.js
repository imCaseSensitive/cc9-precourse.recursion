/* exported rockPaperScissors */

/*
 * Write a function that generates every sequence of throws a single
 * player could play over a three-round game of rock-paper-scissors.
 *
 * Your output should look something like:
 *   [["rock", "rock", "rock"],
 *    ["rock", "rock", "paper"],
 *    ["rock", "rock", "scissors"],
 *    ["rock", "paper", "rock"],
 *    ...etc...
 *   ]
 *
 * After you finish it, change your function so that it return answers for any number of rounds.
 * Example:
 *   rockPaperScissors(4); // => [['rock', 'rock', 'rock', 'rock'], etc...]
 */

const rockPaperScissors = (number) => {
  let rounds = number;
  let sleights = ["rock", "paper", "scissors"];
  let result = [];

  if (typeof number === "undefined") {
    rounds = 3;
  };

  function recurse(remainingRounds, played) {
    if (remainingRounds === 0) {
      result.push(played);
      return 
    } else {
      for (let i = 0; i < sleights.length; i++) {
        let currentSleight = sleights[i];
        recurse(remainingRounds - 1, played.concat(currentSleight));
      }
    }
    return result;

  }
  return recurse(rounds, []);
};
