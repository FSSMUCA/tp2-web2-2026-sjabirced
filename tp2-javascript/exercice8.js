let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomCorrige = nom.trim()
if (nomCorrige === "") nomCorrige = "Inconnu"

let ageNum = parseInt(age)
let ageValide = !isNaN(ageNum) && ageNum > 0

let atIndex = email.indexOf("@")
let emailValide = atIndex !== -1 && email.indexOf(".", atIndex) !== -1

let scoreNum = parseInt(scoreJeu)
if (isNaN(scoreNum)) scoreNum = 0

let estAdminBool = estAdmin === "true"

let connexionAffichee = derniereConnexion ?? "Jamais connecté"

let nbConnexions = Number(nombreConnexions)
let connexionsAffichees = nbConnexions === 0 ? "Aucune connexion" : nbConnexions

console.log("===== RAPPORT UTILISATEUR =====")
console.log("nom              : \"" + nomCorrige + "\" (corrigé : espaces supprimés)")
console.log("age              : " + ageNum + " (" + (ageValide ? "valide" : "invalide") + ")")
console.log("email            : \"" + email + "\" (" + (emailValide ? "valide" : "invalide : pas de point après @") + ")")
console.log("scoreJeu         : " + scoreNum + " (extrait depuis \"" + scoreJeu + "\")")
console.log("estAdmin         : " + estAdminBool + " (attention : Boolean(\"false\") = true, conversion manuelle requise)")
console.log("derniereConnexion: \"" + connexionAffichee + "\" (valeur par défaut via ??)")
console.log("nombreConnexions : \"" + connexionsAffichees + "\" (0 après conversion)")
console.log("================================")
