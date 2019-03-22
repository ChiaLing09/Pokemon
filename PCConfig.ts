import { question } from 'readline-sync'

console.log('Choose your Resolution')
// const resOptions = [
//   '1920 X 1080 : RM 300',
//   '2560 X 1440 : RM 600',
//   '3280 X 1680 : RM 900'
// ]

const resOptions = [{
  label: '1920 X 1080',
  price: 300
},
{
  label: '2560 X 1440',
  price: 600
},
{
  label: '3280 X 1680',
  price: 900
}]

displayOptions(resOptions)
let ansRes = question('Select resOptions index\n')
//console.log(resOptions[ansRes])

console.log('Select your video card')

const vidOptions = [{
  label: 'nVdia',
  price: 600
},
{
  label: 'AMDRadeon',
  price: 500
},
{
  label: 'Intel',
  price: 400
}]

displayOptions(vidOptions)
let ansVid = question('Select vidOptions index\n')
//console.log(vidOptions[ansVid])

console.log('You Have Chosen the following options: ')
const prices = [
  resOptions[ansRes].price,
  vidOptions[ansVid].price,
  //processorOptions[ansProcessor].price,
  //hddOptions[ansHDD].price,
]

let totalPrice = 0

for (let i in prices) {
  totalPrice = totalPrice + prices[parseInt(i)]
}
console.log(resOptions[ansRes].label)
console.log(vidOptions[ansVid].label)
console.log("Total : RM " + totalPrice)

function displayOptions(array) {
  let i = 0
  while (i <= 2) {
    console.log(i + ' - ' + array[i].label + " : RM " + array[i].price)
    i += 1
  }
}

