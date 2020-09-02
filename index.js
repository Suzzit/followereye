
let retina = document.querySelectorAll(".retina");
window.addEventListener("mousemove", retinamove);
function retinamove(event){
    const {innerWidth, innerHeight} = window;
    let x = (event.clientX / innerWidth) * 100;
    let y = (event.clientY / innerHeight) * 100;
    retina.forEach((retina)=>{
        retina.style.left = x > 80 ? 90+"%" : x+"%";
        retina.style.top = y > 80 ? 80+"%" : y+"%";
    });
}

