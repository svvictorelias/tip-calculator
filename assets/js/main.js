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
        if(!this.validaPessoas() || !this.validaBill()){
            alert('c')
            this.bill.value = ''
            this.people.value = ''
            return
        }
        let billConta = this.validaBill()*porcento
        let pricePerson = document.querySelector('#personPrice')
        finalPricePerson = billConta.toFixed(2)
        pricePerson.innerText = (finalPricePerson/this.validaPessoas()).toFixed(2)
        let allPrice = document.querySelector('#allPrice')
        allPrice.innerText = finalPricePerson
    }

    this.cincoPorcento = () => this.realizaConta(0.05)
    this.dezPorcento = () => this.realizaConta(0.10)
    this.quinzePorcento = () => this.realizaConta(0.15)
    this.vinteCincoPorcento = () => this.realizaConta(0.25)
    this.cinquentaPorcento = () => this.realizaConta(0.50)
    

}
const tip =  new Tip()
tip.start()