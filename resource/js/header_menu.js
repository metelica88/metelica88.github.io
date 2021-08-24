const body = document.querySelector("body");
  const usauidemes = document.querySelector(".usauidemes");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = ()=>{
  usauidemes.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
  }
  cancelBtn.onclick = ()=>{
  body.classList.remove("disabled");
  usauidemes.classList.remove("show");
  menuBtn.classList.remove("hide");
  }
  window.onscroll = ()=>{
  this.scrollY > 20 ? usauidemes.classList.add("consequaka") : usauidemes.classList.remove("consequaka");
  }