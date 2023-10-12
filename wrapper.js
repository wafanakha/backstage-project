const issue1 = document.querySelector("#issue1");
const issue2 = document.querySelector("#issue2");
const issue3 = document.querySelector("#issue3");

function scrollEventWrapper(issue, colour) {
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        document.body.style.backgroundColor = colour;
      }
    },
    { threshold: [0.5] }
  );

  observer.observe(issue);
}

scrollEventWrapper(issue1, "#e30512");
scrollEventWrapper(issue2, "#1d3fbb");
scrollEventWrapper(issue3, "#ffbe00");
scrollEventWrapper(issue4, "#ff651a");
scrollEventWrapper(issue5, "#00c1b5");
scrollEventWrapper(issue6, "#ffffff");
scrollEventWrapper(issue7, "#FF608C");
