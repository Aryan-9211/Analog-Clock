setInterval( function()
{
   d = new Date();
   hour1 = d.getHours();
   minute1  = d.getMinutes();
   second1 = d.getSeconds();
   hr = 30*hour1 + minute1/2 ;
   mr = 6*minute1 + second1/10;
   sr = 6*second1;

   hour.style.transform = `rotate(${hr}deg)`;
   minutes.style.transform = `rotate(${mr}deg)`;
   seconds.style.transform = `rotate(${sr}deg)`;
 }
 , 1000
);
