document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('a[href="/resume.html"]')
    .addEventListener("click", function (e) {
      e.preventDefault();

      // Get user inputs
      const selectedPlanet = document.getElementById("planeta").value;
      const departureDate = document.getElementById("partida").value;
      const arrivalDate = document.getElementById("chegada").value;
      const selectedNave = document.getElementById("nave").value;

      // Construct URL for the second page with query parameters
      const url = `/resume.html?planet=${selectedPlanet}&departure=${departureDate}&arrival=${arrivalDate}&nave=${selectedNave}`;

      // Redirect to the second page with the query parameters
      window.location.href = url;
    });
});
