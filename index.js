const body = document.querySelector("body");
const percent = document.querySelector(".percent");

let pval = 0;
const interval_id = setInterval(() => {
  percent.innerHTML = `${pval}%`;
  percent.style.opacity = `${100 - pval}%`;
  body.style.backdropFilter = `blur(${100 - pval}px)`;
  pval++;
  if (pval > 100) {
    clearInterval(interval_id);
  }
}, 30);
