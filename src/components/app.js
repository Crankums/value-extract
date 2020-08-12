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
        const input =  this.mainContainer.querySelector("#input-box")
        const inputArg = input.value
        const resultsBox = document.createElement("div")
        resultsBox.setAttribute("id", "results-box")
        this.mainContainer.appendChild(resultsBox)
        console.log(this.valueExtractor(inputArg))
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
    }