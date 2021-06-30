const showAnswer = (obj) => {
  qst_container = obj;

  var previous_faq = document.getElementById("previous-ans");
  if (previous_faq) {
    previous_faq.classList.remove("show-answer");
    previous_faq.previousElementSibling.classList.remove("bold-qst");
    previous_faq.removeAttribute("id", "previous-ans");
  }

  var arrow_down = qst_container.lastElementChild;
  if (arrow_down.classList.contains("flip-arrow")) {
    arrow_down.classList.remove("flip-arrow");
  } else {
    arrow_down.classList.add("flip-arrow");
  }

  question_div = qst_container.firstElementChild;

  qst_div = question_div.firstElementChild;
  if (qst_div.classList.contains("bold-qst")) {
    qst_div.classList.remove("bold-qst");
  } else {
    qst_div.classList.add("bold-qst");
  }

  ans_div = question_div.lastElementChild;

  if (ans_div.classList.contains("show-answer")) {
    ans_div.classList.remove("show-answer");
  } else {
    ans_div.classList.add("show-answer");
    ans_div.setAttribute("id", "previous-ans");
  }
};
