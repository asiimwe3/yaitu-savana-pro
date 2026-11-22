document.addEventListener('DOMContentLoaded',function(){
  var b=document.getElementById('burger'),n=document.getElementById('navLinks');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false')});
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('quoteForm');
  if(f)f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(i){return(document.getElementById(i).value||'').trim()};
    var t='Hello Yaitu Savana Pro UG Ltd,\n\n*Name:* '+v('name')+'\n*Phone:* '+v('phone')+'\n*Needs:* '+v('service')+'\n*Site:* '+v('place')+'\n*Details:* '+v('details');
    window.open('https://wa.me/256789733644?text='+encodeURIComponent(t),'_blank');
  });
});

/* ---- photo viewer: tap any picture to open it, tap again to zoom in and out ---- */
(function(){
  var SEL='.gallery img, .card-media img, .hero-img, article img, .proj img';
  var box=null, img=null, cap=null, zoomed=false;

  function build(){
    box=document.createElement('div');
    box.className='lightbox';
    box.setAttribute('role','dialog');
    box.setAttribute('aria-modal','true');
    box.setAttribute('aria-label','Photo viewer');
    box.innerHTML='<button class="lb-close" type="button" aria-label="Close photo">&times;</button>'+
                  '<img alt=""><span class="lb-hint">Tap the photo to zoom</span>';
    document.body.appendChild(box);
    img=box.querySelector('img'); cap=box.querySelector('.lb-hint');

    box.addEventListener('click', function(e){
      if(e.target===box || e.target.classList.contains('lb-close')) return close();
      // clicking the picture toggles zoom
      zoomed=!zoomed;
      box.classList.toggle('zoomed', zoomed);
      cap.textContent = zoomed ? 'Tap the photo to zoom back out' : 'Tap the photo to zoom in';
    });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
  }

  function open(src, alt){
    if(!box) build();
    img.src=src; img.alt=alt||'';
    zoomed=false; box.classList.remove('zoomed');
    cap.textContent='Tap the photo to zoom in';
    box.classList.add('open');
    document.body.style.overflow='hidden';
  }

  function close(){
    if(!box) return;
    box.classList.remove('open','zoomed');
    document.body.style.overflow='';
    zoomed=false;
  }

  document.addEventListener('click', function(e){
    var el=e.target;
    if(el.tagName!=='IMG') return;
    if(!el.matches(SEL)) return;
    if(el.closest('.lightbox')) return;
    e.preventDefault();
    open(el.currentSrc||el.src, el.alt);
  });
})();
