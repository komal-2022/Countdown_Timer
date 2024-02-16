const endDate = "02 May 2024 12:00 AM";
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;
  // console.log(diff);
  //convert into days
  inputs[0].value = Math.floor(diff / 3600 / 24);
  //convert into hours
  inputs[1].value = Math.floor((diff / 3600) % 24);
  //convert into minutes
  inputs[2].value = Math.floor(diff / 60) % 60;
  //convert into seconds
  inputs[3].value = Math.floor(diff) % 60;
}
clock();
// 1 day = 24hrs
// 1hr = 60 mins
// 60 min = 3600 secs

setInterval(() => {
  clock();
}, 1000);
