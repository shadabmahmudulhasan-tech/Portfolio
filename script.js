
const c=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px';});
const obs=new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting&&x.target.classList.add('show')), {threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
