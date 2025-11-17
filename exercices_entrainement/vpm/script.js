function vpm(taux, npm, va, vc = 0, type = 0) {

    // taux : taux annuel en pourcentage
    // npm : nombre de mensualités pour l’emprunt
    // va : valeur actuelle (capital emprunté)
    // vc : valeur future après le dernier paiement (souvent 0, sauf si on veut un capital résiduel)
    // type : 0 = paiement en fin de période, 1 = début de période

    let tauxMensuel = (taux / 100) / 12;
    let nbMensualites = npm;
    let capitalEmprunte = va;
    let montantFinal = vc;


    // Cas particulier : taux nul
    if (tauxMensuel === 0) {
        return -(capitalEmprunte + montantFinal) / nbMensualites;
    }

    // Croissance du capital avec les intérêts
    let facteur = Math.pow(1 + tauxMensuel, nbMensualites); // Math.pow(base, exposant)

    // Partie haute de la formule
    let numerateur = tauxMensuel * (capitalEmprunte * facteur + montantFinal);

    // Partie basse de la formule
    let denominateur = facteur - 1;

    // Calcul de la mensualité
    let mensualite = numerateur / denominateur;


    // Ajustement si paiement en début de période
    if (type === 1) {
        mensualite = mensualite / (1 + tauxMensuel);
    }

    // Retourne le montant négatif pour indiquer une sortie d’argent
    return -mensualite;

}

const mensualite = vpm(3.50, 36, 10000);
console.log(`Mensualité : ${mensualite.toFixed(2)} €`);
