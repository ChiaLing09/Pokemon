import { question } from 'readline-sync'

const pokemon = 'Pikachu'
const opponent = 'Mr. Mime'
let myHp = 100
let oppHp = 100
let myTurn = true
//var mySkills = ['lightning', 'punch', 'kick']
//var oppSkills = ['Shadow Ball', 'Shadow punch', 'Shadow kick']
// 1. You have encounter your opponent Mr Mine.
console.log('You have encountered a wild ' + opponent)
// 2. You send in Gengar.
console.log('You send out ' + pokemon)
console.log(pokemon + ' has HP ' + myHp)
console.log(opponent + ' has HP ' + oppHp)
// 3. You can choose one of Gengar's skills
//console.log(pokemon + ' use lightning skill to attack ' + opponent)
// 3. Gengar use shadow ball. Shadow Ball hits for 50 DMG. 
// oppHp -= 50
// console.log('Attack ' + opponent + ' success! HP reduce to ' + oppHp)

const mySkills = [
  {
    moves: 'lightning',
    damage: 50
  },
  {
    moves: 'punch',
    damage: 10
  },
  {
    moves: 'kick',
    damage: 10
  }
]

const oppSkills = [
  {
    moves: 'Shadow Ball',
    damage: 50
  },
  {
    moves: 'Shadow punch',
    damage: 10
  },
  {
    moves: 'Shadow kick',
    damage: 10
  }
]
// 4. Critical Hit. Enemy fainted because health reduced to 0/

while (oppHp > 0 && myHp > 0) {
  //random damage number
  //const attackDamage = Math.floor(Math.random() * 10)
  let i = Math.floor(Math.random() * 3)
  console.log('--------------------------------------')
  if (myTurn) {
    console.log(pokemon + ' start attack.')
    displaySkills(mySkills)
    let ansMySkill = question('Select a skill \n')
    oppHp = oppHp - mySkills[ansMySkill].damage
    console.log(pokemon + ' use ' + mySkills[ansMySkill].moves + ' skill to attack ' + opponent)
    console.log('Attack ' + opponent + ' success! HP reduce to ' + oppHp)
    myTurn = false
  }
  else {
    myHp = myHp - oppSkills[i].damage
    console.log(opponent + ' use ' + oppSkills[i].moves + ' skill to attack ' + pokemon)
    console.log('Attack ' + pokemon + ' success! HP reduce to ' + myHp)
    myTurn = true
  }
}

if (oppHp <= 0) {
  console.log(pokemon + ' attack success and ' + opponent + ' fainted')
  // 5. You have earned experience points.
  console.log('You have now gained experience!')
  // 6. if your pokemon levels up, might learn new skills.
  console.log('You have now gained new skill!')
}
else {
  console.log(opponent + ' attack success and ' + pokemon + ' fainted')
  console.log('You have lose')
}

function displaySkills(array) {
  for (let i = 0; i < 3; i++) {
    console.log(i + " - " + mySkills[i].moves)
  }
}
