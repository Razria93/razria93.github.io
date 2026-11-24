
const original=document.querySelector('#play video');
document.querySelectorAll('[data-seek]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault(); original.currentTime=Number(link.dataset.seek);original.play().catch(()=>{});}));
const clip=document.querySelector('#counter-video');
const choices=[...document.querySelectorAll('[data-angle]')];
function angle(item,play){clip.src=item.getAttribute('href');choices.forEach(a=>a.setAttribute('aria-current',String(a===item)));if(play)clip.play().catch(()=>{});}
angle(choices.find(a=>a.dataset.angle===(matchMedia('(max-width:650px)').matches?'B':'two-pc')),false);
choices.forEach(a=>a.addEventListener('click',e=>{e.preventDefault();angle(a,true);}));
