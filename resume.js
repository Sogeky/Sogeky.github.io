document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const planet = urlParams.get("planet");
  const departure = urlParams.get("departure");
  const arrival = urlParams.get("arrival");
  const nave = urlParams.get("nave");

  document.querySelector(".planeta").textContent = planet;
  document.querySelector(".data1").textContent = departure;
  document.querySelector(".data2").textContent = arrival;
  document.querySelector(".nave").textContent = nave;
});
