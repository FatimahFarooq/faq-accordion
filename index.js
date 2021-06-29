// const what = () => ({
//     alert("hello");
// });

const showAnswer = (obj) => {
  // console.log(obj);
  qst_container = obj;
  answers = document.getElementsByClassName("show-answers");

  // answer.display = "none";

  var arrow_down = qst_container.lastElementChild;
  if (arrow_down.classList.contains("flip-arrow")) {
    arrow_down.classList.remove("flip-arrow");
  } else {
    arrow_down.classList.add("flip-arrow");
  }
  // arrow_down.style.transform = "rotate(180deg)";
  question_div = qst_container.firstElementChild;

  qst_div = question_div.firstElementChild;
  if (qst_div.classList.contains("bold-qst")) {
    qst_div.classList.remove("bold-qst");
  } else {
    qst_div.classList.add("bold-qst");
  }

  // qst_div.style.fontWeight = 700;
  // qst_div.style.color = "hsl(238, 29%, 16%)";

  ans_div = question_div.lastElementChild;
  if (ans_div.classList.contains("show-answer")) {
    ans_div.classList.remove("show-answer");
  } else {
    ans_div.classList.add("show-answer");
  }
  // ans_div.style.display = "block";
};
