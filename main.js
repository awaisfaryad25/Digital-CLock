//   24 Hours format
// let hrs = document.getElementById('hours');
// let mns = document.getElementById('minutes');
// let sec = document.getElementById('seconds');


// setInterval(() => {
//   let currentTime = new Date();
//   hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
//   mns.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
//   sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

// }, 1000); 

// 12 Hours format
let hrs = document.getElementById('hours');
let mns = document.getElementById('minutes');
let sec = document.getElementById('seconds');

setInterval(() => {
  let currentTime = new Date();
  
  // Get hours in 12-hour format
  let hours = currentTime.getHours();
  let period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format, and handle 0 as 12
  
  // Format hours, minutes, and seconds with leading zeros if needed
  hrs.innerHTML = (hours < 10 ? "0" : "") + hours + `<span class="period"> ${period}</span>`;
  mns.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);


