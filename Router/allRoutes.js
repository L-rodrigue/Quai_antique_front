import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Nouveau compte", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte ", "/pages/auth/account.html"),
    new Route("/editpassword", "changement mot de passe ", "/pages/auth/editpassword.html"),
    new Route("/allResa", "Vos réservation ", "/pages/Réservation/allResa.html"),
    new Route("/reserver", "Réservation ", "/pages/Réservation/reserver.html"),

];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";