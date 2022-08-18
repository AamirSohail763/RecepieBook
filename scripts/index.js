import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let id;

document.getElementById("query").addEventListener("input",function(){
    debouncing(getData,1000)
});

let container = document.getElementById("results")



async function getData(){
    let query = document.getElementById("query").value;

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`

    let res = await fetch(url);
    let data = await res.json();
    display(data.meals)
    console.log(data)
    
}

getData();

function display(data){
    container.innerHTML = null;
    data.forEach(function(el){

        let card = document.createElement("div")
        card.setAttribute("class",'card')

        let img = document.createElement("img")
        img.setAttribute("class",'image')
        img.src = el.strMealThumb

        let title = document.createElement("h2")
        title.innerText= el.strMeal

        let tag = document.createElement("h3")
        tag.innerText= el.strTags

        let area = document.createElement("h4")
        area.innerText= el.strArea

        let instructions = document.createElement("p")
        instructions.innerText= el.strInstructions

        card.append(img,title,tag,area,instructions)

        container.append(card)
    })
}


function debouncing(func,delay){
    if(id)
    {
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func()
    },delay)
}