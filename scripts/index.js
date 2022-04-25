// Store the wallet amount to your local storage with key "amount"
function read(id){
    return document.getElementById(id)
}
let m=Number(JSON.parse(localStorage.getItem("wallet")))  || 0 ;
read("wallet").innerText=m

function addMoney(){
    m=Number(JSON.parse(localStorage.getItem("wallet")))  || 0 ;

    let money= read("amount").value
    // console.log(money)
    m+=Number(money)
    read("wallet").innerText=m
    localStorage.setItem("wallet",JSON.stringify(m))
}