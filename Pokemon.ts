import { question } from 'readline-sync'

const pokemonlist = [
  {
    name: 'Balbasaur',
    type: 'Grass',
    hp: 200,
    attack: 20,
    defence: 30
  },
  {
    name: 'Charmander',
    type: 'Fire',
    hp: 200,
    attack: 30,
    defence: 20
  },
  {
    name: 'Squirtle',
    type: 'Water',
    hp: 200,
    attack: 30,
    defence: 10
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
let myPokemonHp = pokemonlist[myPokemon].hp

let oppPokemon = Math.floor(Math.random() * pokemonlist.length)
console.log('Opponent pokemon is ' + pokemonlist[oppPokemon].name + '.')
let oppPokemonHp = pokemonlist[oppPokemon].hp

console.log('------------------Battle begins--------------------')
let myTurn = true

while (myPokemonHp > 0 && oppPokemonHp > 0) {
  if (myTurn) {
    let skillDamage = 0
    let totalDamage = 0
    listSkillsType(pokemonlist[myPokemon].type)

    let chooseSkill = question('Please select a skill to attack. \n')

    if (pokemonlist[myPokemon].type === 'Grass') {
      console.log(pokemonlist[myPokemon].name + ' attack with ' + grassSkills[chooseSkill].skill + '.')
      //when use sleep powder
      if (grassSkills[chooseSkill].skill != 'Sleep powder') {
        if (pokemonlist[oppPokemon].type === 'Fire') {
          skillDamage = grassSkills[chooseSkill].damage / 2
          totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
        } else {
          skillDamage = grassSkills[chooseSkill].damage
          totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
        }
        oppPokemonHp -= totalDamage
      } else {
        myTurn = true
      }
    }
    else if (pokemonlist[myPokemon].type === 'Fire') {
      console.log(pokemonlist[myPokemon].name + ' attack with ' + fireSkills[chooseSkill].skill + '.')
      if (pokemonlist[oppPokemon].type === 'Water') {
        skillDamage = fireSkills[chooseSkill].damage / 2
        totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
      } else if (pokemonlist[oppPokemon].type === 'Grass') {
        skillDamage = fireSkills[chooseSkill].damage * 2
        totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
      } else {
        skillDamage = fireSkills[chooseSkill].damage
        totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
      }
      oppPokemonHp -= totalDamage
    }
    else if (pokemonlist[myPokemon].type === 'Water') {
      console.log(pokemonlist[myPokemon].name + ' attack with ' + waterSkills[chooseSkill].skill + '.')
      if (pokemonlist[oppPokemon].type === 'Fire') {
        skillDamage = waterSkills[chooseSkill].damage * 2
        totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
      } else {
        skillDamage = waterSkills[chooseSkill].damage
        totalDamage = totalDamageCount(pokemonlist[myPokemon].attack, pokemonlist[oppPokemon].defence, skillDamage)
      }
      oppPokemonHp -= totalDamage
    }

    if (grassSkills[chooseSkill].skill != 'Sleep powder') {
      console.log(pokemonlist[oppPokemon].name + ' HP has reduce to ' + oppPokemonHp + '.')
      myTurn = false
    } else {
      console.log(pokemonlist[oppPokemon].name + ' has fall asleep and missed a chance!')
      myTurn = true
    }
    console.log('-----------------------------------------------------')
  } else {
    let oppSkillDamage = 0
    let oppTotalDamage = 0
    let oppSleepSkill
    if (pokemonlist[oppPokemon].type === 'Grass') {
      let oppChooseSkill = Math.floor(Math.random() * grassSkills.length)
      if (grassSkills[oppChooseSkill].skill != 'Sleep powder') {
        console.log(pokemonlist[oppPokemon].name + ' attack with ' + grassSkills[oppChooseSkill].skill + '.')
        if (pokemonlist[myPokemon].type === 'Fire') {
          oppSkillDamage = grassSkills[oppChooseSkill].damage / 2
          oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
        } else {
          oppSkillDamage = grassSkills[oppChooseSkill].damage
          oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
        }
        myPokemonHp -= oppTotalDamage
      } else {
        oppSleepSkill = grassSkills[oppChooseSkill].skill
        myTurn = false
      }
    } else if (pokemonlist[oppPokemon].type === 'Fire') {
      let oppChooseSkill = Math.floor(Math.random() * fireSkills.length)
      console.log(pokemonlist[oppPokemon].name + ' attack with ' + fireSkills[oppChooseSkill].skill + '.')
      if (pokemonlist[myPokemon].type === 'Water') {
        oppSkillDamage = fireSkills[oppChooseSkill].damage / 2
        oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
      } else if (pokemonlist[myPokemon].type === 'Grass') {
        oppSkillDamage = fireSkills[oppChooseSkill].damage * 2
        oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
      } else {
        oppSkillDamage = fireSkills[oppChooseSkill].damage
        oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
      }
      myPokemonHp -= oppTotalDamage
    } else if (pokemonlist[oppPokemon].type === 'Water') {
      let oppChooseSkill = Math.floor(Math.random() * waterSkills.length)
      console.log(pokemonlist[oppPokemon].name + ' attack with ' + waterSkills[oppChooseSkill].skill + '.')
      if (pokemonlist[myPokemon].type === 'Fire') {
        oppSkillDamage = waterSkills[oppChooseSkill].damage * 2
        oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
      } else {
        oppSkillDamage = waterSkills[oppChooseSkill].damage
        oppTotalDamage = totalDamageCount(pokemonlist[oppPokemon].attack, pokemonlist[myPokemon].defence, oppSkillDamage)
      }
      myPokemonHp -= oppTotalDamage
    }

    if (oppSleepSkill != 'Sleep powder') {
      console.log(pokemonlist[myPokemon].name + ' HP has reduce to ' + myPokemonHp + '.')
      myTurn = true
    } else {
      console.log(pokemonlist[myPokemon].name + ' has fall asleep and missed a chance!')
      myTurn = false
    }
    console.log('-----------------------------------------------------')
  }
}

if (myPokemonHp <= 0) {
  console.log(pokemonlist[myPokemon].name + ' is defeated by ' + pokemonlist[oppPokemon].name + '.')
  console.log('You have lose.')
  console.log('----------------------Game Over----------------------')
} else {
  console.log(pokemonlist[oppPokemon].name + ' is defeated by ' + pokemonlist[myPokemon].name + '.')
  console.log('You have win and gain experience.')
  console.log('----------------------Game Over----------------------')
}

function listPokemon(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + '- ' + array[i].name + '-' + array[i].type)
  }
}

function listSkills(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i + '- ' + array[i].skill)
  }
}

function listSkillsType(playerType) {
  switch (playerType) {
    case 'Grass':
      listSkills(grassSkills)
      break;
    case 'Fire':
      listSkills(fireSkills)
      break;
    case 'Water':
      listSkills(waterSkills)
      break;
  }
}

function totalDamageCount(Pokemon1Atk, Pokemon2Def, skillDamage) {
  if (Pokemon1Atk > Pokemon2Def) {
    return skillDamage + Pokemon1Atk
  } else if (Pokemon1Atk < Pokemon2Def) {
    return skillDamage + Pokemon1Atk - Pokemon2Def
  } else {
    return skillDamage
  }
}