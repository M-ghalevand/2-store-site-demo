var countDownDate=new Date("August 1, 2023 15:37:25").getTime(),x=setInterval(function(){for(var e=(new Date).getTime(),e=countDownDate-e,t=Math.floor(e/864e5),n=Math.floor(e%864e5/36e5),a=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3),r=document.getElementsByClassName("demos"),o=0;o<r.length;o++)r[o].innerHTML='<span id="day">'+t+'</span><span id="hours">'+n+'</span><span id="minutes">'+a+'</span><span id="seconds">'+s+"</span>";if(e<0){clearInterval(x);for(var l=document.getElementsByClassName("demos"),o=0;o<r.length;o++)l[o].innerHTML="مهلت تخفیف به پایان رسیده است";for(var m=document.getElementsByClassName("after-expire"),o=0;o<r.length;o++)m[o].classList.add("offer-expire-text");for(var f=document.getElementsByClassName("offer-expire-text-inner"),o=0;o<r.length;o++)f[o].innerHTML="پیشنهاد ویژه این محصول به پایان رسیده!",f[o].classList.add("badge");for(var i=document.getElementsByClassName("offer-blur"),o=0;o<r.length;o++)i[o].style.filter="blur(2px)"}},1e3);