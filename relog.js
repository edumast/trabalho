relog();
function relog() {
				var rel=new Date();
				var h=rel.getHours();
				var m=rel.getMinutes();
				var s=rel.getSeconds();
				if (h >= 12) {
period = "PM";
} else {
period = "AM";
}
if (h == 0) {
h = 12;
} else {
if (h > 12) {
h = h - 12;
}
}
h=checkTime(h);
m=checkTime(m);
s=checkTime(s);
document.getElementById('relogio').innerHTML=h+":"+m+":"+s;
t=setTimeout('relog()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}
