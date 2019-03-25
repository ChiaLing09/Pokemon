import { question } from 'readline-sync'

const pokemonlist = [
  {
    name: 'Balbasaur',
    type: 'Grass/Poison',
    hp: 200
  },
  {
    name: 'Charmander',
    type: 'Fire',
    hp: 200
  },
  {
    name: 'Squirtle',
    type: 'Water',
    hp: 200
  }
]

const grassSkills = [
  {
    skill: 'Vine whip',
    type: 'Grass',
    damage: 20
  },
  {
    skill: 'Sleep powder',
    type: 'Grass',
    damage: 0
  },
  {
    skill: 'Razor Leaf',
    type: 'Grass',
    damage: 60
  }
]

const fireSkills = [
  {
    skill: 'Ember',
    type: 'Fire',
    damage: 20
  },
  {
    skill: 'Fire Spin',
    type: 'Fire',
    damage: 30
  },
  {
    skill: 'Flamethrower',
    type: 'Fire',
    damage: 50
  }
]

const waterSkills = [
  {
    skill: 'Bubble',
    type: 'Water',
    damage: 20
  },
  {
    skill: 'Water Gun',
    type: 'Water',
    damage: 30
  },
  {
    skill: 'Hydro pump',
    type: 'Water',
    damage: 50
  }
]

console.log('-------------------Game Start----------------------')
listPokemon(pokemonlist)
let myPokemon = question('Please select a Pokemon. \n')
console.log('Your pokemon is ' + pokemonlist[myPokemon].name + '.')
// var myPokemon = pokemonlist[choosePokemon].name
// var myPokemonType = pokemonlist[choosePokemon].type
let myPokemonHp = pokemonlist[myPokemon].hp

let oppChoose = Math.floor(Math.random() * pokemonlist.length)
console.log('Opponent pokemon is ' + pokemonlist[oppChoose].name + '.')
// var oppPokemon = pokemonlist[oppChoose].name
// var oppPokemonType = pokemonlist[oppChoose].type
let oppPokemonHp = pokemonlist[oppChoose].hp

console.log('------------------Battle begins--------------------')
let myTurn = true

while (myPokemonHp > 0 && oppPokemonHp > 0) {
  if (myTurn) {
    let chooseSkill = question('Please select a skill to attack. \n')
    let skillDamage
    var sleepSkill
    if (pokemonlist[myPokemon].type === 'Grass') {
      listSkills(grassSkills)
      console.log(pokemonlist[myPokemon].name + ' attack with ' + grassSkills[chooseSkill].skill + '.')
      //when use sleep powder
      if (grassSkills[chooseSkill].skill != 'Sleep Powder') {
        if (pokemonlist[oppChoose].type === 'Fire') {
          skillDamage = grassSkills[chooseSkill].damage / 2
        } else {
          skillDamage = grassSkills[chooseSkill].damage
        }
        oppPokemonHp -= skillDamage
      } else {
        sleepSkill = grassSkills[chooseSkill].skill
      }
    }
    else if (pokemonlist[myPokemon].type === 'Fire') {
      listSkills(fireSkills)
      console.log(pokemonlist[myPokemon].name + ' attack with ' + fireSkills[chooseSkill].skill + '.')
      if (pokemonlist[oppChoose].type === 'Water') {
        skillDamage = grassSkills[chooseSkill].damage / 2
      } else if (pokemonlist[oppChoose].type === 'Grass') {
        skillDamage = grassSkills[chooseSkill].damage * 2
      } else {
        skillDamage = grassSkills[chooseSkill].damage
      }
      oppPokemonHp -= skillDamage
    }
    else if (pokemonlist[myPokemon].type === 'Water') {
      listSkills(waterSkills)
      console.log(pokemonlist[myPokemon].name + ' attack with ' + waterSkills[chooseSkill].skill + '.')
      if (pokemonlist[oppChoose].type === 'Fire') {
        skillDamage = grassSkills[chooseSkill].damage * 2
      } else {
        skillDamage = grassSkills[chooseSkill].damage
      }
      oppPokemonHp -= waterSkills[chooseSkill].damage
    }
    if (sleepSkill != 'Sleep powder') {
      console.log(pokemonlist[oppChoose].name + ' HP has reduce to ' + oppPokemonHp + '.')
      myTurn = false
    } else {
      console.log(pokemonlist[oppChoose].name + ' has fall asleep and missed a chance!')
      myTurn = true
    }
    console.log('----------------------------------------------------------------------------')
  } else {
    let oppSkillDamage
    var oppSleepSkill
    if (pokemonlist[oppChoose].type === 'Grass') {
      let oppChooseSkill = Math.floor(Math.random() * grassSkills.length)
      if (grassSkills[oppChooseSkill].skill != 'Sleep Powder') {
        console.log(pokemonlist[oppChoose].name + ' attack with ' + grassSkills[oppChooseSkill].skill + '.')
        if (pokemonlist[myPokemon].type === 'Fire') {
          oppSkillDamage = grassSkills[oppChooseSkill].damage / 2
        } else {
          oppSkillDamage = grassSkills[oppChooseSkill].damage
        }
        myPokemonHp -= oppSkillDamage
      } else {
        oppSleepSkill = grassSkills[oppChooseSkill].skill
      }
    } else if (pokemonlist[oppChoose].type === 'Fire') {
      let oppChooseSkill = Math.floor(Math.random() * fireSkills.length)
      console.log(pokemonlist[oppChoose].name + ' attack with ' + fireSkills[oppChooseSkill].skill + '.')
      if (pokemonlist[oppChoose].type === 'Water') {
        oppSkillDamage = grassSkills[oppChooseSkill].damage / 2
      } else if (pokemonlist[oppChoose].type === 'Grass') {
        oppSkillDamage = grassSkills[oppChooseSkill].damage * 2
      } else {
        oppSkillDamage = grassSkills[oppChooseSkill].damage
      }
      myPokemonHp -= oppSkillDamage
    } else if (pokemonlist[oppChoose].type === 'Water') {
      let oppChooseSkill = Math.floor(Math.random() * waterSkills.length)
      console.log(pokemonlist[oppChoose].name + ' attack with ' + waterSkills[oppChooseSkill].skill + '.')
      if (pokemonlist[oppChoose].type === 'Fire') {
        oppSkillDamage = grassSkills[oppChooseSkill].damage * 2
      } else {
        oppSkillDamage = grassSkills[oppChooseSkill].damage
      }
      myPokemonHp -= oppSkillDamage
    }

    if (oppSleepSkill != 'Sleep powder') {
      console.log(pokemonlist[myPokemon].name + ' HP has reduce to ' + myPokemonHp + '.')
      myTurn = true
    } else {
      console.log(pokemonlist[myPokemon].name + ' has fall asleep and missed a chance!')
      myTurn = false
    }
    console.log('----------------------------------------------------------------------------')
  }
}

function listPokemon(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + '- ' + array[i].name + '\n' + array[i].type)
  }
}

function listSkills(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + '- ' + array[i].skill)
  }
}
