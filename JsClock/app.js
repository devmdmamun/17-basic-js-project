function showTime() {
  document.getElementById("jsclock").innerHTML =
    new Date().toLocaleTimeString();
  setTimeout(showTime, 1000);
}
showTime();
