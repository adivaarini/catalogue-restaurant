import 'regenerator-runtime';
import '../styles/main.css'
import '../styles/responsive.css';
import DATA from '../DATA.json';
console.log(DATA);

const hero = document.querySelector('#hero');
const jumbotron = document.querySelector('.jumbotron');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

hero.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

jumbotron.addEventListener('click', function() {
    drawer.classList.remove('open');
});

main.addEventListener('click', function() {
    drawer.classList.remove('open');
});

function getRestaurants(data) {
    let datas = '';

    data.restaurants.forEach((data, i) => {
        datas += `
        <div class="item-restaurant">
        <img class="image-item-restaurant" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
        <div class="city-restaurant">${data['city']}</div>
        <div class="content-item">
            <p class="rating-item-restaurant">
                Rating : 
                <a href="#" class="value-rate-restaurant">${data['rating']}</a>
            </p>
            <h1 class="title-item-restaurant"><a href="#">${data['name']}</a></h1>
            <div class="desc-item-restaurant">${data['description'].slice(0, 200)}...</div>
        </div>
    </div>
      `;
    });

    document.querySelector('#catalogue').innerHTML = datas;
}

getRestaurants(DATA);