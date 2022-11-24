// Page d'accueil
// Affichage des produits dans la section "items".
const sectionItems = document.querySelector('#items');
function createProductHTML(products) {

    // Création des éléments html incluants les données de l'api
    let newA = document.createElement('a');
    newA.setAttribute("href", `./product.html?id=${products._id}`);
    sectionItems.appendChild(newA);

    let newArticle = document.createElement('article');
    newA.appendChild(newArticle);

    let newImg = document.createElement('img');
    newImg.setAttribute("src", products.imageUrl);
    newImg.setAttribute("alt", products.altTxt);
    newArticle.appendChild(newImg);

    let newH3 = document.createElement('h3');
    newH3.setAttribute("class", "productName");
    newH3.innerText = products.name;
    newArticle.appendChild(newH3);

    let newP = document.createElement('p');
    newP.setAttribute("class", "productDescription");
    newP.innerText = products.description;
    newArticle.appendChild(newP);

    return newA;
}
// Récupération de toutes les données de l'api avec la constante products
fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => {
        for (const product of data) {
            let prodHTML = createProductHTML(product)
            sectionItems.appendChild(prodHTML)

        }
    })
    .catch(err => {
        alert(`Mauvaise manipulation ! Se connecter avec node server.js`);
    })