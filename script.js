

let choices = [
  {
    name: "rock",
    id: 0,
    beats: 2,
    losesTo: 1
  },
  {
    name: "paper",
    id: 1,
    beats: 0,
    losesTo: 2
  },
  {
    name: "scissors",
    id: 2,
    beats: 1,
    losesTo: 0
  }
]
function play(num) {
  //Generates a random choice from the PC
  let pcChoice = choices[Math.floor((Math.random() * 3))]
  let playerChoice = choices[num]
  let result = `You chose ${playerChoice.name}. <br> The computer chose ${pcChoice.name}. <br>`
  if (playerChoice.name == pcChoice.name) {
    result += "You Tied."
  } else if (playerChoice.id == 0 && pcChoice.id == 1) {
    result += "You Lose."
  } else if (playerChoice.id == 0 && pcChoice.id == 2) {
    result += "You Win."
  } else if (playerChoice.id == 1 && pcChoice.id == 0) {
    result += "You Win."
  } else if (playerChoice.id == 1 && pcChoice.id == 2) {
    result += "You Lose."
  } else if (playerChoice.id == 2 && pcChoice.id == 0) {
    result += "You Lose."
  } else if (playerChoice.id == 2 && pcChoice.id == 1) {
    result += "You Win."
  }
  document.getElementById("resultHTML").innerHTML = result
  /*alert(result)*/
}




// if (pcChoice == 1) {
//   return "ROCK"
// }
// else if (pcChoice == 2) {
//   return "PAPER"
// }
// else if (pcChoice == 3) {
//   return "SCISSORS"
// }