// countdown timer

const date1=new Date();
const date2=new Date("2028-07-14T00:00:00");

const date3=date2-date1;
const days=Math.floor(date3/(1000*60*60*24));
const hours=Math.floor(date3/(1000*60*60)%24);
const minutes=Math.floor(date3/(1000*60)%60);
const seconds=Math.floor(date3/(1000)%60);
const milliseconds=Math.floor(date3%1000);

console.log(`Olympics Countdown Time: Days:${days}  Hours:${hours}  Minutes:${minutes}  Seconds:${seconds}  Millisecons:${milliseconds}`);

