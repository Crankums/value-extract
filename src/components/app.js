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
        // const inputArg = input.value
        const resultsBox = document.createElement("div")
        resultsBox.setAttribute("id", "results-box")
        this.mainContainer.appendChild(resultsBox)
        debugger
        this.valueExtractor2(input)
        // let valueTable = document.createElement("table")
        
        // valueTable.setAttribute("id", "value-table")
        // let row = valueTable.insertRow()
        // let perRow = 1
        // let count = 0
        // let resultsArr= this.valueExtractor(inputArg)
        // for (let i = 0; i<resultsArr.length; i++){
        //     let cell = row.insertCell()
        //     cell.innerHTML= resultsArr[i]
        //     count ++
        //     if (count%perRow == 0) {
        //         row = valueTable.insertRow()
        //     }
        // }
        // this.mainContainer.appendChild(valueTable)
        // resultsBox.innerText = this.valueExtractor(inputArg)

    }
    valueExtractor = (input) => {
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

    valueExtractor2 = (input) => {
        let stringBlob = input.split("u'").join("'").replace(/'/g, '"')
        stringBlob = stringBlob.split('},')
        console.log(stringBlob)
    }
    }