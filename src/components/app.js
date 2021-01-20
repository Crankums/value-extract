class App {
    constructor(){
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners(){
        this.mainContainer = document.querySelector("#main-container")
        this.sbmtBtn = this.mainContainer.querySelector("button")
        this.sbmtBtn.addEventListener('click', this.handleSubmit.bind(this))
    }

    handleSubmit(e){
        const input =  this.mainContainer.children[0].value
        const resultsBox = document.createElement("div")
        resultsBox.setAttribute("id", "results-box")
        this.mainContainer.appendChild(resultsBox)        
        let valueTable = document.createElement("table")
        valueTable.setAttribute("id", "value-table")
        let row = valueTable.insertRow()
        let perRow = 1
        let count = 0
        let resultsArr= this.valueExtractor(input)
        for (let i = 0; i<resultsArr.length; i++){
            let cell = row.insertCell()
            cell.innerHTML= resultsArr[i]
            count ++
            if (count%perRow == 0) {
                row = valueTable.insertRow()
            }
        }
        this.mainContainer.appendChild(valueTable)
    }


    valueExtractor = (input) => {
        input = input.replace(/'/g, '"').split("{").map(e => '{'+e.replace(/}, /g, '}'))
        let objParse = []
        for (let i = 1; i < input.length; i++) {
          objParse.push(JSON.parse(input[i]))
        }
        return objParse.map(el => el['__pk'][1])
// Commented out for refactor
        // let values = []
        // for (let el in objParse) {
        //   values.push(objParse[el]['__pk'][1])
        // }
        // return values
      }
    // valueExtractor = (input) => {
    //     let stringBlob = input.split("u'").join("'").replace(/'/g, '"')
    //     stringBlob = stringBlob.split('},').map(e => e.endsWith(']') ? e+"}" : e).map(JSON.parse)
    //     let returnArr = []
    //     for (let el in stringBlob){
    //             returnArr.push(stringBlob[el]['__pk'][1])
    //         }
    //     return returnArr
    // }
}