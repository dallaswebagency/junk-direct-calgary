(function(){var d=document;
var b=d.querySelector('.burger'),m=d.getElementById('menu');
b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});d.querySelectorAll('.reveal').forEach(function(e){io.observe(e)})}else{d.querySelectorAll('.reveal').forEach(function(e){e.classList.add('in')})}
d.querySelectorAll('.rslider').forEach(function(s){var t=s.querySelector('.rtrack');function st(){return t.firstElementChild.offsetWidth+24}
 s.querySelector('.prev').onclick=function(){t.scrollBy({left:-st(),behavior:'smooth'})};s.querySelector('.next').onclick=function(){if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4)t.scrollTo({left:0,behavior:'smooth'});else t.scrollBy({left:st(),behavior:'smooth'})}});
d.querySelectorAll('form[data-wa]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var ok=true;f.querySelectorAll('[required]').forEach(function(x){if(!x.value.trim()){ok=false;x.classList.add('bad')}else x.classList.remove('bad')});
 var msg=f.querySelector('.msg');msg.className='msg show';if(!ok){msg.textContent='Please add your name and phone number.';return}
 var L=['Hi Junk Direct, I would like a free quote.'];new FormData(f).forEach(function(v,k){if(String(v).trim())L.push(k+': '+v)});
 msg.textContent='Opening WhatsApp with your request...';window.open('https://wa.me/15879715865?text='+encodeURIComponent(L.join('\n')),'_blank','noopener')})});
})();
