
var endDate = new Date("June 30, 2019 12:00:00").getTime();
console.log(endDate)


const Timer = setInterval(function(){
    let now = new Date().getTime()
    let millSecLeft = endDate - now
    
    let days = Math.floor(millSecLeft / (1000 * 60 * 60 * 24)) 
  
    let rem1 = millSecLeft - days * (1000 * 60 * 60 * 24)
    let hours = Math.floor(rem1 / (1000 * 60 * 60))

    let rem2 = rem1 - hours * (1000 * 60 * 60)
    let minutes = Math.floor(rem2 / (1000 * 60))
   
    let rem3 = rem2 - minutes * (1000 * 60)
    let seconds = Math.floor(rem3 / 1000)
  

    document.querySelector("#timer-days").innerHTML = `${days}d`
    document.querySelector("#timer-hours").innerHTML = `${hours}h`
    document.querySelector("#timer-mins").innerHTML = `${minutes}m`
    document.querySelector("#timer-secs").innerHTML = `${seconds}s Left!`



}, 1000)








    