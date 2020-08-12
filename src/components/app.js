class App {
    constructor(){
        this.initBindingsAndEventListeners()
    }

    /**const  valueExtractor = (input) => {
  let stringBlob = input.split("u'").join("'").replace(/'/g, '"')
  let arr1 = stringBlob.split('},')
  let arr2 = arr1.map(e => e.endsWith(']') ? e+"}" : e)
  let arrParse = arr2.map(JSON.parse)
  let values = []
  for (let el in arrParse){
  values.push(arrParse[el]['__pk'][1])}
  arr2=[]
  arr1=[]
  return values
}
console.log(valueExtractor(input)) */
}