const warnning = document.querySelector(".warnning");
const subscribe = document.querySelector(".subs-btn");
const email = document.querySelector("#email");
const validate = () => {
  event.preventDefault();
  let emailRegex = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z]{2,4}");
  if (email.value.match(emailRegex)) {
    warnning.style.opacity = 0;
  } else {
    warnning.style.opacity = 1;
  }
};
subscribe.addEventListener("click", () => validate(warnning, email));
