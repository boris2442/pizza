// const titre=document.querySelector("h1");
// new Typewriter(titre,{
//     loop:true
    // delay:100,
// })

// .typeString("Savourez et deguster l'art de la pizzeria")
// .pauseFor(2000)
// .deleteSpeed(300)
// .deleteAll()

// .start();

const title=document.querySelector("h1")
new Typewriter(title, {
  loop:true
})
.typeString("Savourez et déguster l'art de la pizzeria ")
.pauseFor(2000)
// .deleteSpeed(500)
.deleteAll()
// .typeString("Le lieu de l'apprentissage idéal")
.start();



// partie du code destinee au scrollReveal

const sr=ScrollReveal({
  duration:1500,
  origin:"top",
  distance:"30px",
  reset:true
})

sr.reveal(".accueil, .about, .father-about, .contact, .menu, .service, .copy, .father-service, .footer-text", {interval:200})



const navigation=document.querySelector("header ul");
const menu=document.querySelector(".menu");

