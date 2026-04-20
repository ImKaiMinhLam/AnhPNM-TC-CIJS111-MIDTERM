import data from "./data.js";

if (document.getElementById("movie-list")) {

const list = document.getElementById("movie-list");
const banner = document.getElementById("banner");

banner.innerHTML = `
    <img src="${data[0].image}">
    <h2>${data[0].movieName}</h2>
    <p>${data[0].description}</p>
`;

data.forEach(function(item){

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
    <img src="${item.image}">
    <p>Episode ${item.episode}</p>
    <h4>${item.movieName}</h4>
    `;

    div.onclick = function(){
    localStorage.setItem("movie", JSON.stringify(item));
    window.location.href = "details.html";
    };

    list.appendChild(div);
});
}

if (document.getElementById("title")) {

const movie = JSON.parse(localStorage.getItem("movie"));

document.getElementById("title").innerText =
    movie.movieName + " - Episode " + movie.episode;

document.getElementById("video-img").src = "./Image/1.jpg.webp";
document.getElementById("image").src = movie.image;

document.getElementById("type").innerText = "Type: TV";
document.getElementById("status").innerText = "Status: Ongoing";
document.getElementById("duration").innerText = "Duration: 24 min";
document.getElementById("genres").innerText = "Genres: Action, Anime";

document.getElementById("bio").innerText = movie.description;

const popular = document.getElementById("popular");

data.slice(0,6).forEach(function(item){

    const div = document.createElement("div");
    div.innerHTML = `
        <img src="${item.image}" style="aspect-ratio: 2/3;">
    `;

    popular.appendChild(div);
});
}