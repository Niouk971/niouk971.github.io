async function fetchOffers() {
    const response = await fetch('https://www.codepassport.dev/api/offers'); // on appelle fetch avec une URL d'API
    const offers = await response.json();
    // console.log(response); // affiche la promesse retournée par fetch  
    console.log(offers);
}

fetchOffers();
