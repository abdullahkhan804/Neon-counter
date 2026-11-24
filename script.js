const inc = document.getElementById("inc"),
  dec = document.getElementById("dec"),
  reset = document.getElementById("reset"),
  count = document.getElementById("count");
let n = 0;
function flash(c) {
  count.style.color = c;
  count.animate(
    [
      { transform: "scale(.8)" },
      { transform: "scale(1.15)" },
      { transform: "scale(1)" },
    ],
    { duration: 220 },
  );
  setTimeout(() => (count.style.color = "#fff"), 180);
}
inc.onclick = () => {
  count.textContent = ++n;
  flash("#22c55e");
};
dec.onclick = () => {
  count.textContent = --n;
  flash("#ef4444");
};
reset.onclick = () => {
  n = 0;
  count.textContent = n;
  flash("#f59e0b");
};
