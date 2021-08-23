const API_URL = "http://192.168.0.144:5555/api/"

const showStoreInfo = (storeId) => {
  for(let i = 1 ; i < 4 ; i++) {
    if(i === storeId) {
      activateNavigation(i);
    } else {
      hideNavigation(i);
    }
  }
};

const activateNavigation = (id) => {
  let store = document.getElementById(`store${id}`);
  let storelogo = document.getElementById(`storelogo${id}`);
  let storelogoactive = document.getElementById(`storelogo${id}active`);
  let navtext = document.getElementById(`storenav${id}`)
  store.style.display = "flex";
  storelogo.style.display = "none";
  storelogoactive.style.display = "block";
  navtext.style.color = "var(--primary-color)"
}

const hideNavigation = (id) => {
  let store = document.getElementById(`store${id}`);
  let storelogo = document.getElementById(`storelogo${id}`);
  let storelogoactive = document.getElementById(`storelogo${id}active`);
  let navtext = document.getElementById(`storenav${id}`)
  store.style.display = "none";
  storelogo.style.display = "block";
  storelogoactive.style.display = "none";
  navtext.style.color = "var(--text-color)"
}

const showMap = (id) => {
  const map = document.getElementById(`map${id}`);
  const preview = document.getElementById(`preview${id}`);
  map.style.display = 'block';
  preview.style.display = 'none';
}

const showImage = (id, url) => {
  const map = document.getElementById(`map${id}`);
  const preview = document.getElementById(`preview${id}`);
  map.style.display = 'none';
  preview.style.display = 'block';
  preview.src = url;
}

const isEmail = (text) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailFormat.test(text);
}

const isNumber = (text) => {
  var numberFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g
  return numberFormat.test(text);
}

const subscriptionForm = document.getElementById('subscriptionform');

subscriptionForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = event.target.numberormail.value;
  console.log(text)
  console.log(isEmail(text));
  console.log(isNumber(text));
})

const orderForm = document.getElementById('orderform');

orderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = event.target.number.value;
  console.log(number);
  fetch(`${API_URL}numbers/`, {
    method: "post",
    headers: {
      "Authorization": 'Basic ' + btoa("davud:davud19"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({"subnNumber": number})
  }).then(res => console.log(res))
})

showStoreInfo(1);
