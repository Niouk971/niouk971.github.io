// <!-- https://dummyjson.com/posts

// # Créer loadPost

// 1. créer la fonction avec "async"
// 2. créer une variable response
// 3. utiliser await et fetch
// 4. passer l'url en parametre de fetch
// 5. créer une variable data en appelant .json() sur response
// 6. ne pas oublier await
// 7. retourner la data -->


async function loadPost() {
    const response = await fetch('https://api.allorigins.win/raw?url=https://dummyjson.com/posts');
    const data = await response.json();
    console.log(data);
}

loadPost()


