

let choices = [
  {
    name: "ROCK",
    id: 0,
    beats: 2,
    losesTo: 1
  },
  {
    name: "PAPER",
    id: 1,
    beats: 0,
    losesTo: 2
  },
  {
    name: "SCISSORS",
    id: 2,
    beats: 1,
    losesTo: 0
  }
]
function play(num) {
  //Generates a random choice from the PC
  let pcChoice = choices[Math.floor((Math.random() * 3))]
  let playerChoice = choices[num]
  let result = `${playerChoice} vs ${pcChoice} =`
  if (playerChoice.name == pcChoice.name) {
    result += "YOU TIED."
  } else if (playerChoice.id == 0 && pcChoice.id == 1) {
    result += "YOU LOSE."
  } else if (playerChoice.id == 0 && pcChoice.id == 2) {
    result += "YOU WIN."
  } else if (playerChoice.id == 1 && pcChoice.id == 0) {
    result += "YOU WIN."
  } else if (playerChoice.id == 1 && pcChoice.id == 2) {
    result += "You LOSE."
  } else if (playerChoice.id == 2 && pcChoice.id == 0) {
    result += "YOU LOSE."
  } else if (playerChoice.id == 2 && pcChoice.id == 1) {
    result += "YOU LOSE."
  }

  document.getElementById()
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