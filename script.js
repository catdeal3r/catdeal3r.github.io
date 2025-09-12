
window.onload = function() {
  document.addEventListener("mousemove", parallax);
  document.getElementById("fibreglass").addEventListener('click', function() {
      window.open('https://github.com/catdeal3r/fibreglass', '_blank');
  });
  document.getElementById("fibreglass-classic").addEventListener('click', function() {
      window.open('https://github.com/catdeal3r/fibreglass/tree/old', '_blank');
  });
  document.getElementById("screate").addEventListener('click', function() {
      window.open('https://github.com/catdeal3r/screate', '_blank');
  });
}

function parallax(event) {
  this.querySelectorAll(".bg-vid-div").forEach((shift) => {
    const position = 10;
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.2)`;
  });
}
