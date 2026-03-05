let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
    { name: "nom", val: nom },
    { name: "age", val: age },
    { name: "ville", val: ville },
    { name: "score", val: score },
    { name: "actif", val: actif }
]

console.log("-- Partie A : ?? --")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let result = v.val ?? "valeur par défaut"
    console.log(v.name + " ?? \"valeur par défaut\"    -> " + result)
}

console.log("")
console.log("-- Partie B : || --")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let result = v.val || "valeur par défaut"
    console.log(v.name + " || \"valeur par défaut\"    -> " + result)
}

console.log("")
console.log("-- Partie C : comparaison ?? vs || --")
for (let i = 0; i < variables.length; i++) {
    let v = variables[i]
    let resNullish = v.val ?? "valeur par défaut"
    let resOr = v.val || "valeur par défaut"
    let same = resNullish === resOr ? "même résultat" : "résultat différent"
    console.log(v.name.padEnd(6) + ": ?? et || -> " + same)
}
