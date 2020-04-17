/** Add any JavaScript you need to this file. */
var itemlist = [
  {
    code: 1,
    cat: "Fruits and Vegetables",
    name: "Fresh Apple",
    desc: "a sweet, edible fruit",
    price: 1.15,
    src: "./images/apple.png",
  },
  {
    code: 1,
    cat: "Fruits and Vegetables",
    name: "Fresh Cauliflower",
    desc: "sweet, nutty flavour",
    price: 4.99,
    src: "./images/cauliflower.png",
  },
  {
    code: 1,
    cat: "Fruits and Vegetables",
    name: "Fresh Orange",
    desc: "a sweet, sour fruit",
    price: 1.12,
    src: "./images/orange.png",
  },
  {
    code: 2,
    cat: "Meats and Seafoods",
    name: "Fresh Sausage",
    desc: "spicy, salty taste",
    price: 6.16,
    src: "./images/sausage.png",
  },
  {
    code: 2,
    cat: "Meats and Seafoods",
    name: "Fresh Lobster",
    desc: "chewier texture",
    price: 11.99,
    src: "./images/lobster.png",
  },
  {
    code: 2,
    cat: "Meats and Seafoods",
    name: "Fresh Bacon",
    desc: "sweet, salty taste",
    price: 5.99,
    src: "./images/bacon.png",
  },
  {
    code: 3,
    cat: "Dairy and Eggs",
    name: "Fresh Cheese",
    desc: "sweet, salty flavour",
    price: 12.99,
    src: "./images/cheese.png",
  },
  {
    code: 3,
    cat: "Dairy and Eggs",
    name: "Fresh Eggs",
    desc: "mild, bland flavour",
    price: 4.69,
    src: "./images/egg.png",
  },
  {
    code: 3,
    cat: "Dairy and Eggs",
    name: "Fresh Milk",
    desc: "enjoyable, sweet flavour",
    price: 4.49,
    src: "./images/milk.png",
  },
];
// create an item
let item = function (obj) {
  let i = document.createElement("div");
  i.setAttribute("class", "item");

  let img = document.createElement("img");
  img.src = obj.src;
  img.alt = obj.name;
  i.appendChild(img);

  let c = document.createElement("span");
  c.setAttribute("class", "p_cat");
  c.innerHTML = obj.cat;
  i.appendChild(c);

  let n = document.createElement("span");
  n.setAttribute("class", "p_name");
  n.innerHTML = obj.name;
  i.appendChild(n);

  let d = document.createElement("span");
  d.setAttribute("class", "p_desc");
  d.innerHTML = obj.desc;
  i.appendChild(d);

  let p = document.createElement("span");
  p.setAttribute("class", "p_price");
  p.innerHTML = `$ ${obj.price} ea`;
  i.appendChild(p);

  let list = document.querySelector(".itemlist");
  list.appendChild(i);
};
// get items for each category based on the codes
let getItems = function (code) {
  itemlist.forEach((obj) => {
    if (obj.code === code) {
      item(obj);
    }
  });
};

// clear any existing items
let clearlist = function () {
  let list = document.querySelector(".itemlist");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

// Update the list with an appropriate title.
let category = function (select) {
  let title = document.querySelector("#list_title");
  title.innerHTML = select;

  clearlist();
};

window.onload = function () {
  getItems(1);
  getItems(2);
  getItems(3);

  document.querySelector("#all").onclick = function () {
    category("Products > All");
    getItems(1);
    getItems(2);
    getItems(3);
  };
  document.querySelector("#fruit").onclick = function () {
    category("Products > Fruits and Vegetables");
    getItems(1);
  };
  document.querySelector("#meat").onclick = function () {
    category("Products > Meats and Seafoods");
    getItems(2);
  };
  document.querySelector("#dairy").onclick = function () {
    category("Products > Dairy and Eggs");
    getItems(3);
  };

  // subscribe button
  document.querySelector("#close").onclick = function () {
    document.querySelector(".subscribe").style.display = "none";
  };

  document.querySelector("#open").onclick = function () {
    document.querySelector(".subscribe").style.display = "block";
  };
};
