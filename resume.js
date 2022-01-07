document.querySelector("img.cv").addEventListener("mousemove", function(e) {
    this.style.objectPosition =
      (e.offsetX / this.offsetWidth) * 100 + "% " +
      (e.offsetY / this.offsetHeight) * 100 + "%";
  });

