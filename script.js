"use strict";
function handleSubmit() {
  // check error
  const errorEmail = document.getElementById("error-email");
  // wait input value
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log("check email", emailValue);
  const check = emailValue.match(regex);
  // console.log("email", check);
  const hidden = document.querySelector(".hidden");
  console.log("checkk", hidden);

  const submitControl = document.querySelector(".summit-email");
  if (check) {
    hidden.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Error email style";
  }
  // -----------------------------------------------\\
}
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (viewMore.classList.value.includes("View-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parentsEle = element.closest(".parents");
  const viewMore = parentsEle.querySelector(".control-view");
  // console.log(viewMore.classList);
  const sectionContent = parentsEle.querySelectorAll(".content");
  // console.log(sectionContent);
  // sectionContent.forEach((element) => {
  //   element.style.display = "block";
  // });
  if (viewMore.classList.value.includes("View-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("View-more");
    viewMore.classList.add("View-less");
    viewMore.innerHTML = "View Less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("View-less");
    viewMore.classList.add("View-more");
    viewMore.innerHTML = "View more";
  }
}
