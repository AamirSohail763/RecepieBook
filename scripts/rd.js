import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

let container = document.getElementById('result')


let url = 'https://www.themealdb.com/api/json/v1/1/random.php';

async function getData(){
    let res = await fetch(url);
    let data = await res.json();

    console.log(data.meals);
    display(data.meals);
}

getData()

function display(data){
    data.forEach(function(el){

        let img = document.createElement('img')
        img.src = el.strMealThumb;

        let title = document.createElement('h2')
        title.innerText= el.strMeal;

        let tag1 = document.createElement('h3')
        tag1.innerText = "Type: "

        let tag2 = document.createElement("h4")
        tag2.innerText= el.strTags;

        let area1 = document.createElement('h3')
        area1.innerText = "Origin: ";

        let area2 = document.createElement("h4")
        area2.innerText= el.strArea

        let category1 = document.createElement('h3')
        category1.innerText = "Category: "

        let category2 = document.createElement('h4')
        category2.innerText = el.strCategory

        let instructions1 = document.createElement('h3')
        instructions1.innerText = "Instructions to Prepare: ";

        let instructions2 = document.createElement('p')
        instructions2.innerText = el.strInstructions

        container.append(img,title,tag1,tag2,area1,area2,category1,category2,instructions1,instructions2)

        

        

       
    })
}