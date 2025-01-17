function gameObject() {
  let game = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        alanAnderson: {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },

        reggieEvans: {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },

        brookLopez: {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },

        masonPlumlee: {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },

        jasonTerry: {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }

      }
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],

      players: {

        jeffAdrien: {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },

        bismakBiyombo: {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },

        deSagnaDiop: {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },

        benGordon: {
          number: 4,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },

        brendanHaywood: {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
  //debugger
  return game;
}

console.log(gameObject());

function homeTeamName(){
let object = gameObject()
return object['home']['teamName']
}

console.log(homeTeamName())
// logs "Brooklyn Nets"





// function numPointsScored(givenPlayerName){
//   let object = gameObject()
//   for (key in object){
//       let team = object[key]
//       for()

//     if(object[key].players === givenName)
//     return object[key].players[givenName].points
//   }
// }

function numPointsScored(playerName) {
    //combine players into one object
    const game = gameObject();
    const allPlayers = Object.assign({}, game.home.players, game.away.players);
    //const allPlayers = {...game.home.players, game.away.players} --> either way works 

    for(player in allPlayers){
        if(player === playerName) {
            return allPlayers[player].points
            }
    }

    console.log(allPlayers[playerName]);
    //return allPlayers[playerName].points instead of for loops
}

// //function getAllPlayers(){
//     const game = gameObject();
//     const allPlayers = Object.assign({}, game.home.players, game.away.players);
//         return allPlayers;
// }










function teamColors(givenTeamName){
  let object = gameObject()
  for (key in object){
    if(object[key].teamName === givenTeamName){
      return object[key].colors
    }
  }
}