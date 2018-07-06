import fibonaci from "./fibonaci_file"

/*const faktorial = (n) => n === 0 ? 1 : n * faktorial(n-1)
const spocitaj = (a, b) => a + b

const express = require('express')
const app = express()

const moj = {
  vlastnost1: 'a',
  vlastnost2: [5,2,1,2,2],
  valstnost3: {
    podvlastnost1: 1,
  },
}
console.log(JSON.stringify(moj))
//console.log(moj.vlastnost4())
app.get('/:n', (req, res) => {
  res.send(`Faktorial je: ${faktorial(req.params.n)}`)
})*/



const findMax = (array)=>{
  let max = array[0]
  for(let i = 1; i < array.length; i++)
      if(max < array[i]) max = array[i]


    return max
}

const findMin = (array)=>{
    let min = array[0]
    for(let i = 1; i < array.length; i++)
        if(min > array[i]) min = array[i]


    return min
}

const MinMax = (array)=>{
    let  max = array[0]
     let min = max
    for(let i = 1; i < array.length; i++){
        if(max < array[i]) max = array[i]
        if(min > array[i]) min = array[i]
    }
    console.log("min v f " + min)
    console.log("max v f " + max)
    return [max, min]
}

const average = (array) =>{
  let sum = 0;
  arr.forEach(function(value){
    sum += value
  })
    return  sum / array.length
}


const bubbleSortDESCENDING = (array) =>{
  for(let i = 0; i < array.length; i++){
    let countSwaps = 0
    for (let j =1; j < array.length -i; j++){
      if(array[j- 1] < array[j] ){
        let tmp = array[j-1]
          array[j-1] = array[j]
          array[j] = tmp
          countSwaps++
      }
    }
    if(!countSwaps)
      return array
  }


}

const quickSortDESCEDING = (array) => {

  if(array.length <= 1) return array

  let arrayHIGH = []
  let arrayLOW = []

  const pivot = array.pop()
    for(let i = 0; i < array.length; i++){
      if(array[i] >= pivot)
          arrayHIGH.push(array[i])
      else
          arrayLOW.push(array[i])

    }
    arrayHIGH = quickSortDESCEDING(arrayHIGH);
    arrayLOW = quickSortDESCEDING(arrayLOW);
    let sorted = [...arrayHIGH, pivot, ...arrayLOW]
    return sorted
}


const euklid = ( a, b) => {
    //if(a + b <  0) return "zly vstup"
    if(b == 0) return "nie moduluj nulou"
    let tmp
    do{
        tmp = b
        b = a % b
        a = tmp
    }while(b != 0)

    return a
}

const toBinary= (number) =>{
    //number = number.split("")
    let result = ""
    for(var i =0; i < 8; i++){
        let last = toString(number % 2)
        result =  last.concat(result);
        number /= 2
    }
    /*
    number.forEach(function(value){
         result = value + result
    })*/
    return result

}

const generator = (length) =>{
    let key = ""
    for(let i = 0; i < length; i++){
        let randomNumber = Math.floor(Math.random() * 65536)
        key += String.fromCharCode(randomNumber)
    }
    //key = key.join("")
    return key
}

/*const sifraVeihamnova = (word ) => {
    const sifraKey = generator(word.length * 8) //8 bits

    return sifraKey
    //return "sssss"
}*/


const sifraVeihamnova = (word, sifraKey ) => {
    let result = ""
    for(let i = 0;i < word.length; i++){
        let wordChar_NUM = word.charCodeAt(i)
        let keyChar_NUM = sifraKey.charCodeAt(i)
        let specialCharacter = (wordChar_NUM >= keyChar_NUM ) ? wordChar_NUM - keyChar_NUM : keyChar_NUM - wordChar_NUM
        result += String.fromCharCode(specialCharacter)
    }
    return result


}



const count = 50
const fibonacigoCisla = fibonaci(count)
console.log("fibonaciho cisla " + fibonacigoCisla.toString())
for(let i = 0; i <count; i++ ){
    console.log(`index: ${i + 1} cislo je ${ fibonacigoCisla[i] }`)
}


//pouzitie
const arr = [212, 5465, 5465, 5465, 7, 6, 7, 545, 4542,5,6,7]
console.log("pole je " + arr.toString())

console.log("maximum pola je --> " + findMax(arr))

console.log("maximum pola je --> " + findMin(arr))

console.log("maximum pola je --> " + MinMax(arr))

console.log("average vaklue pola je --> " + average(arr))

let arr2 = [...arr]

console.log("pole pre buuble sortom " + arr.toString())
console.log("BUBLE SORT DESCENDING --> " + bubbleSortDESCENDING(arr))

console.log("pole pre quick sortom " + arr2.toString())
console.log("quick SORT DESCENDING --> " + quickSortDESCEDING(arr))

console.log("euklid alg " + euklid(625, 0))

//console.log("sifra test key " + toBinary(8))
let word = "ideme sukat caje"
const key = generator(word.length) //8 bits
let sifra = sifraVeihamnova(word, key)
console.log("sifra test key " +  sifra)
let decoded = sifraVeihamnova(sifra, key)
console.log("decoded " +  decoded)
console.log("sjadgaj")

//app.listen(3000)

