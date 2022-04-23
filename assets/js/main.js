function Tip(){
    this.bill = document.querySelector('#bill')
    this.people = document.querySelector('#people')
    this.start = () =>{
        this.catchClick()
    }
    this.catchClick = () =>{
        document.addEventListener('click',e=>{
            const el = e.target
            if(el.classList.contains('cincoPorcento')) this.cincoPorcento()
            if(el.classList.contains('dezPorcento')) this.dezPorcento()
            if(el.classList.contains('quinzePorcento')) this.quinzePorcento()
            if(el.classList.contains('vinteCincoPorcento')) this.vinteCincoPorcento()
            if(el.classList.contains('cinquentaPorcento')) this.cinquentaPorcento()
            if(el.classList.contains('customPorcento')) this.customPorcento()
        })
    }

    this.validaPessoas =()=>{
        let pessoas = this.people.value.replace('e','a').replace('E','a')
        pessoas = pessoas*1
        if(!pessoas||!Number.isInteger(pessoas)){
            return false
        }else{
            return pessoas
        }
    }

    this.validaBill = () =>{
        let billText = this.bill.value.replace(',','.').replace('e','a').replace('E','a')
        if(!billText || billText>=100000 || !Number(billText)){
            return false
        }else{
            return billText
        }
    }

    this.realizaConta = porcento =>{
        this.pricePerson = document.querySelector('#personPrice')
        this.allPrice = document.querySelector('#allPrice')
        if(!this.validaPessoas() || !this.validaBill()){
            if(!this.validaBill()){
                this.numBillText = document.querySelector('.numBillText > p:last-child')
                this.numBillText.style = 'display: inline'
                this.bill.value = ''
                this.bill.style = 'border: 1px solid red'
            }
            if(!this.validaPessoas()){
                this.numPeopleText = document.querySelector('.numPeopleText > p:last-child')
                this.numPeopleText.style = 'display: inline'
                this.people.value = ''
                this.people.style = 'border: 1px solid red'
            }
            this.pricePerson.innerText = '$0.00'
            this.allPrice.innerText = '$0.00'
            return
        }
        this.numPeopleText = document.querySelector('.numPeopleText > p:last-child')
        this.numPeopleText.style = 'display: none'
        this.numBillText = document.querySelector('.numBillText > p:last-child')
        this.numBillText.style = 'display: none'
        this.people.style = 'border: none'
        this.bill.style = 'border: none'
        let billConta = this.validaBill()*porcento
        finalPriceAll = billConta.toFixed(2)
        this.allPrice.innerText = finalPriceAll
        this.pricePerson.innerText = (finalPriceAll/this.validaPessoas()).toFixed(2)
    }

    this.cincoPorcento = () => {
        this.realizaConta(0.05)
        this
    }
    this.dezPorcento = () => this.realizaConta(0.10)
    this.quinzePorcento = () => this.realizaConta(0.15)
    this.vinteCincoPorcento = () => this.realizaConta(0.25)
    this.cinquentaPorcento = () => this.realizaConta(0.50)
}
const tip =  new Tip()
tip.start()