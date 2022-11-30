// Page produit

// Récupération de l'id du produit via l' URL
//--------------------------------------------------------------------------
//la variable params récupère l'url de la page
const params = new URLSearchParams(window.location.search);
console.log(window.location.search);
// Boucle pour chaque paramètre en array
for (const param of params) {
  console.log(param);
}
// la variable id va récupérer la valeur du paramètre _id
const id = params.get("id");
const urlProduct = `http://localhost:3000/api/products/${id}`;
console.log(urlProduct);

//Variables produit
//Variable de l'image
const image = document.querySelector(".item__img");
const imageProduct = document.createElement("img");
//Variable du nom du produit
const titleProduct = document.getElementById("title");
//Variable du prix
const priceProduct = document.getElementById("price");
//Variable de la description
const descriptionProduct = document.getElementById("description");
//Variable de l'option
const color = document.getElementById("colors");
//Variable de la quantité
const choiceQuantite = document.getElementById("quantity");
//Variable du bouton "Ajouter au panier"
const check = document.getElementById("addToCart");

//Utilisation d'une fonction pour l'insertion des éléments du produit
function displayproduct(article) {
  //Insertion des images
  imageProduct.src = article.imageUrl;
  imageProduct.alt = article.altTxt;
  image.appendChild(imageProduct);
  //Insertion du nom
  titleProduct.innerText = article.name;
  //Insertion du prix
  priceProduct.innerText = article.price;
  //Insertion de la description
  descriptionProduct.innerText = article.description;
  /*Insertion de l'option
  Utilisation d'une boucle*/
  for (let i = 0; i < article.colors.length; i++) {
    const option = document.createElement("option");
    option.innerText = article.colors[i];
    color.appendChild(option);
  }
}
//Je fais appel à fetch pour l'URL de la page produit
fetch(urlProduct)
  /*Première promesse, qui récupére la réponse en json*/
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  //Deuxième promesse pour l'affichage des produits
  .then(displayproduct)
  //Message d'erreur si le serveur ne répond pas
  .catch((error) => {
    alert("Le serveur ne répond pas !!!");
  });

/*localStorage.setItem("clé", "valeur")
La fonction setItem permet d’écrire une valeur dans le localStorage. Elle prend deux arguments :
la clé : une chaîne de caractères ;
la valeur à enregistrer : une chaîne de caractères.*/

/*local Storage.getItem("clé")
    La fonction getItem permet de lire une valeur depuis le localStorage. Elle ne prend qu’un argument : la clé (une chaîne de caractères).*/

/*localStorage.clear() ou removeItem*/
