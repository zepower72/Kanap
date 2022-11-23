// Page d'accueil
// Affichage des produits dans la section "items".
const sectionItems = document.querySelector('#items');

// Récupération de toutes les données de l'api avec la constante listProducts
fetch("http://localhost:3000/api/products")
    .then(response => response.json())
    .then(data => {
        for (const listProducts of data) {
            

            // Création des éléments html incluants les données de l'api
            let newA = document.createElement('a');
            newA.setAttribute("href", `./product.html?id=${listProducts._id}`);
            sectionItems.appendChild(newA);

            let newArticle = document.createElement('article');
            newA.appendChild(newArticle);

            let newImg = document.createElement('img');
            newImg.setAttribute("src", listProducts.imageUrl);
            newImg.setAttribute("alt", listProducts.altTxt);
            newArticle.appendChild(newImg);

            let newH3 = document.createElement('h3');
            newH3.setAttribute("class", "productName");
            newH3.innerText = listProducts.name;
            newArticle.appendChild(newH3);

            let newP = document.createElement('p');
            newP.setAttribute("class", "productDescription");
            newP.innerText = listProducts.description;
            newArticle.appendChild(newP);
        }
    })
    .catch(err => {
        alert(`Mauvaise manipulation ! Se connecter avec node server.js`);
    })