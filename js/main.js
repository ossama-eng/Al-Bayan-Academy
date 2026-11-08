var WA='201551368980',MAIL='info@quranacademy.com';
document.querySelector('.burger').onclick=function(){document.querySelector('.menu').classList.toggle('open')};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=+e.target.dataset.count,n=0,s=Math.ceil(t/60);var h=setInterval(function(){n=Math.min(n+s,t);e.target.textContent=n+'+';if(n>=t)clearInterval(h)},25)})});
document.querySelectorAll('[data-count]').forEach(function(el){co.observe(el)});
document.querySelectorAll('.filters button').forEach(function(b){b.onclick=function(){
document.querySelectorAll('.filters button').forEach(function(x){x.classList.remove('on')});b.classList.add('on');
document.querySelectorAll('.tile').forEach(function(t){t.classList.toggle('hide',b.dataset.f!=='all'&&t.dataset.cat!==b.dataset.f)})}});
var f=document.getElementById('enrollForm');
if(f){
function msg(){var d=new FormData(f);
return 'السلام عليكم ورحمة الله وبركاته\nأرغب في التسجيل بأكاديمية القرآن الكريم:\n- اسم الطالب: '+d.get('name')+'\n- العمر: '+d.get('age')+'\n- رقم الهاتف: '+d.get('phone')+'\n- البرنامج المطلوب: '+d.get('program')+'\n- ملاحظات: '+(d.get('notes')||'لا يوجد')}
document.getElementById('sendWa').onclick=function(){if(f.reportValidity())window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg()),'_blank')};
document.getElementById('sendMail').onclick=function(){if(f.reportValidity())location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('طلب التحاق جديد')+'&body='+encodeURIComponent(msg())};
}
