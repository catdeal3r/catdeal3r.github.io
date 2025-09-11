
window.onload = function() {
  document.addEventListener("mousemove", parallax);
}
  
function parallax(event) {
  this.querySelectorAll(".bg-vid-div").forEach((shift) => {
    const position = 10;
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.2)`;
  });
}
