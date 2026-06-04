const reveals=document.querySelectorAll(".reveal");const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.14});reveals.forEach(el=>observer.observe(el));

document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",e=>{
    const r=card.getBoundingClientRect();
    const x=e.clientX-r.left;
    const y=e.clientY-r.top;
    const rx=((y/r.height)-.5)*-8;
    const ry=((x/r.width)-.5)*8;
    card.style.transform=`perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
  });
  card.addEventListener("mouseleave",()=>card.style.transform="");
});

const title=document.querySelector(".hero h1");
if(title){
  window.addEventListener("mousemove",e=>{
    const x=(e.clientX/window.innerWidth-.5)*10;
    const y=(e.clientY/window.innerHeight-.5)*10;
    title.style.textShadow=`${x}px ${y}px 45px rgba(0,229,255,.34)`;
  });
}