// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let m=Number(JSON.parse(localStorage.getItem("wallet")))  || 0;
function read(id){
    return document.getElementById(id)
}
read("wallet").innerText=m


appendMovies()
function appendMovies(){
    let checkMov=JSON.parse(localStorage.getItem("checkout"))
    // console.log(checkMov)
    let div=document.createElement("div")

    let name=document.createElement("h1")
    name.innerText=checkMov.Title;
    let img=document.createElement("img")
    img.src=checkMov.Poster


    read("movie").append(name,img)
}

function confirmbook(){
    let seat=read("number_of_seats").value;

    if(seat*100<=m){
        // console.log(seat*100)
        alert("Booking successful!")
        m=m-seat*100
        localStorage.setItem("wallet",JSON.stringify(m))
        read("wallet").innerText=m
    }
    else{
        alert("Insufficient Balance!")
    }
}


