const candidatesList = document.querySelector('#candidates-list');

const candidates = ['Le Filip','Ruby On The Nail','Leona Winter','Lula Strega','Misty Phoenix',
  'Perseo','Norma Bell','Edeha Noire','Magnetica','Afrodite Amour'];  

console.log(candidates[0]);
console.log(candidates[7]);

for (let i = 0; i < candidates.length; i ++) {
    console.log(candidates[i]);
}

function addCandidates(candidatesList) {

    const showCandidatesList = document.createElement('li');
    showCandidatesList.classList.add('candidates');
    showCandidatesList.innerText = candidatesList

    document.querySelector('#candidates-list').appendChild(showCandidatesList);

}

for (let i = 0; i < candidates.length; i ++) {
    addCandidates(candidates[i]);
}
