/* ============================================================
   Animaciones de la web de Carla Bill
   - Aparición al scrollear
   - Contadores de "Sobre mí"
   No hay nada para configurar acá.
   ============================================================ */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vh = window.innerHeight;
  function fmt(n){return n.toLocaleString('es-AR')}
  function countTo(el,to,ms){
  var pre = el.getAttribute('data-prefix') || '';
  if(reduce){el.textContent=pre+fmt(to);return}
  var t0=null;
  function f(t){ if(!t0)t0=t; var p=Math.min((t-t0)/ms,1); var e=1-Math.pow(1-p,3);
    el.textContent=pre+fmt(Math.round(to*e)); if(p<1)requestAnimationFrame(f)}
  requestAnimationFrame(f);
}

  // reveal: solo se oculta lo que empieza debajo de la pantalla
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){
        var t=e.target;
        if(t.hasAttribute('data-count')){ countTo(t,+t.dataset.count,1400) } else { t.classList.remove('pre') }
        io.unobserve(t);
      }});
    },{threshold:.2,rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.rv, .dr').forEach(function(el){
      if(el.getBoundingClientRect().top > vh*0.95){ el.classList.add('pre'); io.observe(el) }
    });
    document.querySelectorAll('[data-count]').forEach(function(c){
  if(c.getBoundingClientRect().top > vh*0.95){ c.textContent=(c.getAttribute('data-prefix')||'')+'0'; io.observe(c) }
});
  }
})();
