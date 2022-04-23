function Tip(){
    this.bill = document.querySelector('#bill')
    this.start = () =>{
        this.catchClick()
    }
    this.catchClick = () =>{
        document.addEventListener('click',e=>{
            const el = e.target
            if(el.classList.contains('quinzePorcento')) this.quinzePorcento()
        })
    }
    this.realizaConta = porcento =>{
        let billText = this.bill.value
        let billConta = billText*porcento
        console.log(billConta)
    }
    this.quinzePorcento = () =>{
        this.realizaConta(0.15)
    }

}
const tip =  new Tip()
tip.start()