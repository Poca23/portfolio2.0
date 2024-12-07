const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active"); // Active/désactive le menu burger
});

window.fbAsyncInit = function () {
  FB.init({
    appId: "your-app-id", // Si vous avez un appId, mettez-le ici, sinon laissez-le vide
    cookie: true,
    xfbml: true,
    version: "v15.0",
  });

  // Le parse XFBML force l'analyse de tous les éléments XFBML sur la page, y compris le widget Facebook
  FB.XFBML.parse();

  // Nous attendons que le DOM soit prêt avant de réajuster la taille du plugin
  setTimeout(function () {
    const fbPageElement = document.querySelector(".fb-page");
    if (fbPageElement) {
      fbPageElement.style.height = "auto"; // Réajuste la hauteur après le premier chargement
    }
  }, 1500); // Attendre plus longtemps pour assurer le chargement complet
};
// Charger le SDK Facebook
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function initMap() {
  // Spécifiez la position de la carte (par exemple, une latitude et longitude)
  const location = { lat: 48.8566, lng: 2.3522 }; // Position de Paris

  // Créez la carte
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: location,
  });

  // Ajouter un marqueur sur la carte
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Ma position",
  });
}

// Appel de la fonction d'initialisation lorsque le script est chargé
window.initMap = initMap;
