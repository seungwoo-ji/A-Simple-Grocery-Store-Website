window.onload = function () {
  // subscribe button
  document.querySelector("#close").onclick = function () {
    document.querySelector(".subscribe").style.display = "none";
  };

  document.querySelector("#open").onclick = function () {
    document.querySelector(".subscribe").style.display = "block";
  };

  // order number

  document.querySelector("#problem").onclick = function () {
    document.querySelector(".o_number").style.display = "block";
  };

  document.querySelector("#question").onclick = function () {
    document.querySelector(".o_number").style.display = "none";
  };

  document.querySelector("#comment").onclick = function () {
    document.querySelector(".o_number").style.display = "none";
  };
};
