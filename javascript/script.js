
const title=document.querySelector("h1")
new Typewriter(title, {
  loop:true
})
.typeString("Savourez et déguster l'art de la pizzeria ")
.pauseFor(2000)

.deleteAll()

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
const menu=document.querySelector(".menu2");
menu.addEventListener("click", ()=>{
  navigation.classList.toggle("active")
})
 window.addEventListener("scroll", ()=>{
  navigation.classList.add("active3")
 });




 const link = document.querySelectorAll("ul>li>a");
 const sections=document.querySelectorAll("section");

const scrollActive=()=>{
    sections.forEach(section=>{
   let top=section.offsetTop;
   
   let height=section.offsetHeight;
   
   let id=section.getAttribute("id");
   
   let scrolls=window.scrollY;
   if(scrolls>=top-250 && scrolls<top + height){
    link.forEach(links=>{
        links.classList.remove("active-link")
    })
    let recuperationId=document.querySelector(` ul li a[href*=${id}]`)
    recuperationId.classList.add("active-link")
   }
    })
};


window.addEventListener("scroll", scrollActive);
 


window.onload = function() {
   document.querySelector('.loader').style.display = 'none';
   document.querySelector('.loader').style.transition='5s ease-out'
 };

 const images=document.querySelectorAll('img');
 let options={
     root:null,
     rootMargin:"-100px 0px 0px 0px",
     threshold:0
 };
 
 
 function handleIntersection(entries){
 
 entries.forEach(entry=>{
     if(entry.isIntersecting){
         entry.target.style.opacity=1
     }
 })
 }
 
 const observer=new IntersectionObserver(handleIntersection, options)
 
 images.forEach(image=>{
 observer.observe(image)
 })