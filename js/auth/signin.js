let mailInput = document.getElementById("emailInput");
let pwdInput = document.getElementById("passwordInput");
let btnSingin = document.getElementById("btnSignin");

btnSingin.addEventListener("click", checkCredentials);
function checkCredentials(){
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    
    if(mailInput.value == "test@mail.com" && pwdInputInput.value == "123"){
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        pwdInputInput.classList.add("is-invalid");
    }
}
