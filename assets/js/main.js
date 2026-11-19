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
