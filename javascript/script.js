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
