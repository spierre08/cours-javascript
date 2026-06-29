//Déclaration d'une variable 
let a = 1
let b = 2
let r = a + b
let nom = "Simon"
let tableau = ["Simon", 20, "Pierre"]

// console.log(a)
// console.log(r)
// console.log(tableau)

//Déclarer une variable sans l'initialiser
let x, y, z
x=2
y=3
z=4

// console.log("x="+x, "y="+y, "z="+z)

//Déclaration d'une constante
const pi = 3.14
const g = 9.81
const surnom = "SP"

//NB
// var valeur = 1
let scope = 2

//Types de variables
//Les entiers
let entier = 1
let entier2 = 2
let entier3 = 3

// console.log(entier, entier2, entier3)

//Les nombres flottants
let ft1 = 2.8888
let ft2 = 5.88

// console.log(ft1, ft2)

//Les booléens
let vrai = true
let faux = false
// console.log(vrai, faux)
// console.log(typeof vrai)
// console.log(typeof faux)

//Les chaines
// let nom_complet = "Simon Pierre SAGNO"
// let technologie = "javascript"

// console.log(nom_complet, technologie)
// console.log(typeof nom_complet)

//Les objects
// let developpeurs = {
//     frontEnd: "Reactjs",
//     backEnd: "NodeJS",
//     mobile: "React Native"
// }

// console.log(developpeurs)
// console.log(typeof developpeurs)

//Les nulls
// let nul = null
// let ronaldo = null
// console.log(nul, ronaldo)

/***************************** */
//La concatenation
// let var1 = 2
// let var2 = 3
// let prenom1 = "Simon"
// let prenom2 = "Pierre"
// console.log(var1+""+var2)
// console.log(`${var1}${var2}`)
// console.log(prenom1+" "+prenom2)
// console.log(`${prenom1} ${prenom2}`)

//Les opérateurs de bases
//L'addition
// console.log(2+1)//L'addition
// console.log(2-1)//La soustraction
// console.log(2*1)//La multiplication
// console.log(2/1)//La division
// console.log(2%1)//Le reste
//Incrémentation
let s = 1
// s=s+1
// s++
// ++s
// s+=1
// console.log(s)
let t = 2
// t=t*2
// t*=2
// console.log(t)
let v = 3
// v=v-1
// v--
// --v
// v-=1
// console.log(v)


//Les opérations de comparaisons
//Egalité
let x1 = 1
let x2 = "1"
let x3 = 2

// console.log(typeof x1)
// console.log(typeof x2)
// console.log(x1==x2)
// console.log(x1===x2)
// console.log(x1!=x2)
// console.log(x1!==x2)

// console.log(x1>=x3)
// console.log(x1>x3)
// console.log(x3>=x1)
// console.log(x3>x1)
let age = prompt("Veuillez saisir la valeur l'âge")

if (age < 18){
    alert("Vous etes mineur")
}else if (age >= 18 && age <=24){
    alert("Vous etes majeur")
}else if (age >=25 && age<=45){
    alert("Vous etes adultes")
}else {
    alert("Vieux")
}
