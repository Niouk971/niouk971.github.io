const movieList = document.querySelector('#movie-list');
const list = document.querySelector('#list');

async function fetchMovie() {
    
    const response = await fetch('https://the-one-api.dev/v2/movie', {
        headers: {Authorization: 'Bearer GVeTGNvHZopfMwTwXkwl'}
    });

    const movie = await response.json();

    console.log(response);
    console.log(movie);

    movie.docs.forEach(element => {
        
        const showName = document.createElement('li');
        list.appendChild(showName);
        // showName.innerHTML = `${element.name} a coûté ${element.boxOfficeRevenueInMillions} dollars`;
        showName.innerHTML += '<li>${element.name} a coûté ${element.boxOfficeRevenueInMillions} millions de dollars </li>';

        // const showRevenue = document.createElement('p');
        // list.appendChild(showRevenue);
        // showRevenue.innerHTML = element.boxOfficeRevenueInMillions;

    });

}

fetchMovie()