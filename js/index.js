// const API_URL = "http://192.168.0.144:5555/api/";
// const API_URL = "http://comingsoon.pythonanywhere.com/api/";
// const API_URL = "https://comingsoon.pythonanywhere.com/api/";
const API_URL = "http://157.90.29.1:8006/api/";

const splideProps = {
  type: "loop",
  width: "100%",
  perPage: 5,
  perMove: 1,
  gap: 25,
  pagination: false,
  breakpoints: {
    480: {
      gap: 10,
    },
  },
};

const showNotification = (type, text) => {
  Toastify({
    text,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    className: "custom-toast toast-type-" + type,
  }).showToast();
};

const showStoreInfo = (storeId) => {
  for (let i = 1; i < 4; i++) {
    if (i === storeId) {
      activateNavigation(i);
    } else {
      hideNavigation(i);
    }
  }
  new Splide(`#slider${storeId}`, splideProps).mount();
};

const activateNavigation = (id) => {
  let store = document.getElementById(`store${id}`);
  let storelogo = document.getElementById(`storelogo${id}`);
  let storelogoactive = document.getElementById(`storelogo${id}active`);
  let navtext = document.getElementById(`storenav${id}`);
  store.style.display = "flex";
  storelogo.style.display = "none";
  storelogoactive.style.display = "block";
  navtext.style.color = "var(--primary-color)";
};

const hideNavigation = (id) => {
  let store = document.getElementById(`store${id}`);
  let storelogo = document.getElementById(`storelogo${id}`);
  let storelogoactive = document.getElementById(`storelogo${id}active`);
  let navtext = document.getElementById(`storenav${id}`);
  store.style.display = "none";
  storelogo.style.display = "block";
  storelogoactive.style.display = "none";
  navtext.style.color = "var(--text-color)";
};

const showMap = (id) => {
  const map = document.getElementById(`map${id}`);
  const preview = document.getElementById(`preview${id}`);
  map.style.display = "block";
  preview.style.display = "none";
};

const showImage = (id, url) => {
  const map = document.getElementById(`map${id}`);
  const preview = document.getElementById(`preview${id}`);
  map.style.display = "none";
  preview.style.display = "block";
  preview.src = url;
};

const isEmail = (text) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailFormat.test(text);
};

const isNumber = (text) => {
  var numberFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g;
  return numberFormat.test(text);
};

const subscriptionForm = document.getElementById("subscriptionform");
subscriptionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target.numberormail.value;
  let data = {};
  if (isEmail(text)) {
    Object.assign(data, { subMail: text });
  } else if (isNumber(text)) {
    Object.assign(data, { subNumber: text });
  }
  fetch(`${API_URL}`, {
    method: "post",
    headers: {
      Authorization: "Basic " + btoa("davud:davud19"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        showNotification("success", "You have subscribed successfully!");
        event.target.numberormail.value = "";
      } else {
        showNotification("warning", "You have already subscribed!");
      }
    })
    .catch((error) => {
      console.log(error);
      showNotification("danger", "Someting went wrong!");
    });
});

const orderForm = document.getElementById("orderform");
orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const number = event.target.number.value;
  console.log(number);
  if (isNumber(number)) {
    fetch(`${API_URL}numbers/`, {
      method: "post",
      headers: {
        Authorization: "Basic " + btoa("davud:davud19"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subnNumber: number }),
    })
      .then((res) => {
        console.log(res);
        showNotification("success", "Call ordered successfully!");
        event.target.number.value = "";
      })
      .catch((error) => {
        console.log(error);
        showNotification("danger", "Someting went wrong!");
      });
  }
});

showStoreInfo(1);
