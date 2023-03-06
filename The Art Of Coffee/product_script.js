/* Bill calculations*/

let product_counts = [0, 0, 0, 0, 0, 0];
let product_prices = [4, 5, 7, 6, 4, 5];
let total_bill = 0;
let bill_val_display = document.getElementById("bill-val");

let image_1 = document.getElementById("1-image");
let add_cart_1 = document.getElementById("1-add-cart");
let plus_btn_1 = document.getElementById("plus-btn-1");
let minus_btn_1 = document.getElementById("minus-btn-1");
let display_1 = document.getElementById("1-display");

let display_1_val = 0;

plus_btn_1.addEventListener("click", increment_1);
minus_btn_1.addEventListener("click", decrement_1);

function increment_1() {
  display_1_val += 1;
  product_counts[0] += 1;
  display_1.innerText = display_1_val;
  renderTotal();
}

function decrement_1() {
  if (display_1_val >= 1) {
    display_1_val -= 1;
    product_counts[0] -= 1;
    display_1.innerText = display_1_val;
    renderTotal();
  }
}

let image_2 = document.getElementById("2-image");
let add_cart_2 = document.getElementById("2-add-cart");
let plus_btn_2 = document.getElementById("plus-btn-2");
let minus_btn_2 = document.getElementById("minus-btn-2");
let display_2 = document.getElementById("2-display");

let display_2_val = 0;

plus_btn_2.addEventListener("click", increment_2);
minus_btn_2.addEventListener("click", decrement_2);

function increment_2() {
  display_2_val += 1;
  product_counts[1] += 1;
  display_2.innerText = display_2_val;
  renderTotal();
}

function decrement_2() {
  if (display_2_val >= 1) {
    display_2_val -= 1;
    product_counts[1] -= 1;
    display_2.innerText = display_2_val;
    renderTotal();
  }
}

let image_3 = document.getElementById("3-image");
let add_cart_3 = document.getElementById("3-add-cart");
let plus_btn_3 = document.getElementById("plus-btn-3");
let minus_btn_3 = document.getElementById("minus-btn-3");
let display_3 = document.getElementById("3-display");

let display_3_val = 0;

plus_btn_3.addEventListener("click", increment_3);
minus_btn_3.addEventListener("click", decrement_3);

function increment_3() {
  display_3_val += 1;
  product_counts[2] += 1;
  display_3.innerText = display_3_val;
  renderTotal();
}

function decrement_3() {
  if (display_3_val >= 1) {
    display_3_val -= 1;
    product_counts[2] -= 1;
    display_3.innerText = display_3_val;
    renderTotal();
  }
}

let image_4 = document.getElementById("4-image");
let add_cart_4 = document.getElementById("4-add-cart");
let plus_btn_4 = document.getElementById("plus-btn-4");
let minus_btn_4 = document.getElementById("minus-btn-4");
let display_4 = document.getElementById("4-display");

let display_4_val = 0;

plus_btn_4.addEventListener("click", increment_4);
minus_btn_4.addEventListener("click", decrement_4);

function increment_4() {
  display_4_val += 1;
  product_counts[3] += 1;
  display_4.innerText = display_4_val;
  renderTotal();
}

function decrement_4() {
  if (display_4_val >= 1) {
    display_4_val -= 1;
    product_counts[3] -= 1;
    display_4.innerText = display_4_val;
    renderTotal();
  }
}

let image_5 = document.getElementById("5-image");
let add_cart_5 = document.getElementById("5-add-cart");
let plus_btn_5 = document.getElementById("plus-btn-5");
let minus_btn_5 = document.getElementById("minus-btn-5");
let display_5 = document.getElementById("5-display");

let display_5_val = 0;

plus_btn_5.addEventListener("click", increment_5);
minus_btn_5.addEventListener("click", decrement_5);

function increment_5() {
  display_5_val += 1;
  product_counts[4] += 1;
  display_5.innerText = display_5_val;
  renderTotal();
}

function decrement_5() {
  if (display_5_val >= 1) {
    display_5_val -= 1;
    product_counts[4] -= 1;
    display_5.innerText = display_5_val;
    renderTotal();
  }
}

let image_6 = document.getElementById("6-image");
let add_cart_6 = document.getElementById("6-add-cart");
let plus_btn_6 = document.getElementById("plus-btn-6");
let minus_btn_6 = document.getElementById("minus-btn-6");
let display_6 = document.getElementById("6-display");

let display_6_val = 0;

plus_btn_6.addEventListener("click", increment_6);
minus_btn_6.addEventListener("click", decrement_6);

function increment_6() {
  display_6_val += 1;
  product_counts[5] += 1;
  display_6.innerText = display_6_val;
  renderTotal();
}

function decrement_6() {
  if (display_6_val >= 1) {
    display_6_val -= 1;
    product_counts[5] -= 1;
    display_6.innerText = display_6_val;
    renderTotal();
  }
}

function renderTotal() {
  console.log(product_counts);
  total_bill = 0;
  for (let i = 0; i < 6; i++) {
    total_bill = total_bill + product_counts[i] * product_prices[i];
  }
  console.log(total_bill);
  bill_val_display.innerText = `${total_bill}`;
  renderItems();
}

let add_cart_containers = document.querySelectorAll(".add-cart-container");
add_cart_containers.forEach((add_cart_item) => {
  add_cart_item.style.display = "none";
});

let image_cards = document.querySelectorAll(".image-card");

for (let i = 0; i < 6; i++) {
  image_cards[i].addEventListener("mouseenter", displayAddToCart);
}

for (let i = 0; i < 6; i++) {
  image_cards[i].addEventListener("mouseleave", hideAddToCart);
}

function displayAddToCart(e) {
  // console.log(e.target.id);
  document.getElementById(`${e.target.id}-add-cart`).style.display = "flex";
}

function hideAddToCart(e) {
  // console.log(e.target.id);
  document.getElementById(`${e.target.id}-add-cart`).style.display = "none";
}

let place_order_btn = document.getElementById("place-order-btn");
place_order_btn.addEventListener("click", validateInputs);
let order_summary_container = document.getElementById(
  "order-summary-container"
);

function renderItems() {
  let item_list_html = "";

  for (let i = 0; i < product_counts.length; i++) {
    if (product_counts[i] > 0) {
      // console.dir(image_cards[i]);
      // console.dir(image_cards[i].children[1].children[0].children[0].innerText);
      // console.log(product_counts[i]);
      item_list_html += `<p>${image_cards[i].children[1].children[0].children[0].innerText}: <span>${product_counts[i]}</span></p>\n\n`;
    }
  }
  // console.log(item_list_html);
  item_list_html += `<p class="total-item-count">Total no. of items: ${product_counts.reduce(
    function (previousValue, currentValue) {
      return previousValue + currentValue;
    }
  )}</p>`;
  order_summary_container.innerHTML = item_list_html;
}

function validateInputs() {
  let name_val = document.getElementById("name").value;
  let mail_val = document.getElementById("mail").value;
  let item_count = product_counts.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + currentValue;
  });

  if (name_val != "" && mail_val != "" && item_count > 0) {
    renderSummary(name_val, mail_val);
  } else {
    let alert_str = "Please fill in the\n\n";
    if (name_val == "") {
      alert_str += "Name\n\n";
    }

    if (mail_val == "") {
      alert_str += "E-mail\n\n";
    }

    if (item_count == 0) {
      alert_str += "Also choose at least 1 item\n\n";
    }

    alert(alert_str);
  }
}

let invoice_items_container = document.getElementById("invoice-items-container");

function renderSummary(name, mail) {
  let product_section = document.getElementById("product-section");
  let detail_section = document.getElementById("detail");
  let invoice_container = document.getElementById("invoice-container");

  product_section.style.display = "none";
  detail_section.style.display = "none";
  invoice_container.style.display = "block";

  document.getElementById("invoice-name-display").innerText = name;
  document.getElementById("invoice-mail-display").innerText = mail;

  let invoice_item_list_html = "";

  for (let i = 0; i < product_counts.length; i++) {
    if (product_counts[i] > 0) {
      
      invoice_item_list_html += 
        `<div class="invoice-item">
            <p>Product: ${image_cards[i].children[1].children[0].children[0].innerText}</p>
            <p>Quantity: ${product_counts[i]}</p>
            <p>Price: $ ${product_counts[i] * product_prices[i]}</p>
         </div>`;
    }
  }

//   console.log(invoice_item_list_html);
  invoice_items_container.innerHTML = invoice_item_list_html;
  document.getElementById("invoice-order-total").innerText = ``;
}
