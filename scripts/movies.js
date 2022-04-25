// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let m=Number(JSON.parse(localStorage.getItem("wallet")))  || 0;
function read(id){
    return document.getElementById(id)
}
let id;
let movie_div=read("movies")
read("wallet").innerText=m

async function searchMovies(){
    try {
        let query= read("search").value
        const res= await fetch(`https://www.omdbapi.com/?apikey=80d26494&s=${query}`)
        const data= await res.json()
        // console.log(data.Search)
        // appendMovies(data.Search)
        return data.Search
    } catch (error) {
        console.log("err:", error)
    }
}

function appendMovies(data){
    if(data==undefined){
        return false;
    }
    movie_div.innerHTML=null;
    data.forEach(({Title,Poster})=>{
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=Poster;
        let name=document.createElement("p");
        name.innerText=Title
        let btn=document.createElement("button")
        btn.className="book_now"
        btn.innerText="book now"
        btn.onclick=function(){
            bookNow({Title,Poster})
        }
        div.append(img,name,btn)
        movie_div.append(div)
    })
}
async function main(){
    let data= await searchMovies();
    if(data==undefined){
        return false;
    }
    appendMovies(data)
}

function debounce(fn,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        fn()
    },delay)
}

function bookNow(el){

    // let book=[el]
    // console.log(el)
    localStorage.setItem("checkout",JSON.stringify(el))
    window.location.href="./checkout.html"
}