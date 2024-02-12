import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", []),
    new Route("/signin", "connexion", "/pages/auth/signin.html",["disconnected"],  "/js/auth/signin.js"),
    new Route("/signup", "Nouveau compte", "/pages/auth/signup.html",["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte ", "/pages/auth/account.html",["client", "admin"]),
    new Route("/editpassword", "changement mot de passe ", "/pages/auth/editpassword.html"["client", "admin"]),
    new Route("/allResa", "Vos réservation ", "/pages/Réservation/allResa.html",["client"]),
    new Route("/reserver", "Réservation ", "/pages/Réservation/reserver.html",["client"]),

];
    
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";