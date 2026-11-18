// Live clock shown in footer
function tick(){var c=document.getElementById("clock");if(c)c.textContent=new Date().toLocaleString("en-MY");}
setInterval(tick,1000);tick();
// Time-based greeting on home page
var g=document.getElementById("greeting");
if(g){var h=new Date().getHours();g.textContent=(h<12?"Good morning":h<18?"Good afternoon":"Good evening")+"! Welcome to my website.";}
// Pop-up notification when the contact form is submitted
function thanks(e){e.preventDefault();alert("Thank you! Your message has been noted.");}
