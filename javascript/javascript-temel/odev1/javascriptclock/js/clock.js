function naming() {
  let myName = document.querySelector("#myName");

  let name = prompt("Bana adını söyle");
  if (name) {
    myName.innerHTML = name;
  } else {
    myName.innerHTML = "Yabancı";
  }
}

naming();
// Date

function timing() {
  var date = new Date();

  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var days = date.getDay();

  //Günler
  switch (days) {
    case 1:
      days = "Pazartesi";
      break;
    case 2:
      days = "Salı";
      break;
    case 3:
      days = "Çarşamba";
      break;
    case 4:
      days = "Perşembe";
      break;
    case 5:
      days = "Cuma";
      break;
    case 6:
      days = "Cumartesi";
      break;
    case 7:
      days = "Pazar";
      break;
    default:
      break;
  }

  //Saat ayarı

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = `${h} : ${m} : ${s} <small style="font-weight:bold; font-size: 2rem">${days}</small>`;
  document.querySelector("#myClock").innerHTML = time;

  setTimeout(timing, 1000);
}

timing();
