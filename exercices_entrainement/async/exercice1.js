const offersList = document.querySelector('#offers');

async function fetchOffers() {
    const response = await fetch('https://www.codepassport.dev/api/offers'); // on appelle fetch avec une URL d'API
    const offers = await response.json();
    // console.log(response); // affiche la promesse retournée par fetch  
    // console.log(offers);

    offers.forEach(element => {

        const showTitle = document.createElement('h2');
        offersList.appendChild(showTitle);
        showTitle.innerHTML = element.titre;

        const showDescription = document.createElement('p');
        offersList.appendChild(showDescription);
        showDescription.innerHTML = element.description

    });
}

fetchOffers();
