let btn = document.querySelectorAll(".btn");

for (let question of btn) {
  question.onclick = myfunction = function () {
    question.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}
