const $=id=>document.getElementById(id);
const show=(a,b)=>{ $(a).classList.add('hide'); $(b).classList.remove('hide'); };
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

function rain(n){
  if(reduce) return;
  const icons=['❤️','🌸','💗','✨','🌹'];
  for(let i=0;i<n;i++){
    const s=document.createElement('span');
    s.className='seed';
    s.textContent=icons[Math.floor(Math.random()*icons.length)];
    s.style.left=Math.random()*100+'vw';
    s.style.fontSize=(14+Math.random()*20)+'px';
    s.style.animationDuration=(3+Math.random()*3)+'s';
    s.style.animationDelay=(Math.random()*1.5)+'s';
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),7000);
  }
}

$('env').addEventListener('click',()=>{
  $('env').classList.add('open');
  setTimeout(()=>show('s1','s2'), reduce?0:750);
});

document.querySelectorAll('[data-yes]').forEach(b=>b.addEventListener('click',()=>{
  rain(40); show('s2','s3');
}));

let choice='';
document.querySelectorAll('.opt').forEach(o=>o.addEventListener('click',()=>{
  document.querySelectorAll('.opt').forEach(x=>x.setAttribute('aria-pressed','false'));
  o.setAttribute('aria-pressed','true'); choice=o.textContent;
}));

$('done').addEventListener('click',()=>{
  const c = choice || '🌸 Bahor';
  $('final').textContent = `Demak, to’yimiz ${c} faslida bo’ladi! Bu kunni intiqlik bilan kutaman.`;
  rain(60); show('s3','s4');
});
