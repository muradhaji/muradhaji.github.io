const showStoreInfo = (storeId) => {
  let store1 = document.getElementById("store1");
  let store2 = document.getElementById("store2");
  let store3 = document.getElementById("store3");
  store1.style.display = "none";
  store2.style.display = "none";
  store3.style.display = "none";
  switch (storeId) {
    case 1:
      store1.style.display = "block";
      break;
    case 2:
      store2.style.display = "block";
      break;
    case 3:
      store3.style.display = "block";
      break;
  }
  // fetch("../data/stores.json", { method: "get" })
  //   .then((res) => res.json())
  //   .then((json) => {
  //     let store = json.find((item) => item.id === storeId);
  //     renderStoreInfo(store);
  //     // renderImages(store.images);
  //   });
};

const renderImages = (images) => {
  if (!Array.isArray(images) || !images.length) {
    return "There is no images images.";
  }
  let imagelist = document.getElementById("image-list");
  let render = "";
  for (let url of images) {
    render += `<li class="splide__slide"><img src="${url}" alt="slide" /></li>`;
  }
  imagelist.innerHTML = render;
  console.log("Render: ", render);
};

const renderStoreInfo = (store) => {
  const storeHolder = document.getElementById("info");
  const render = `
    <div class="name">${store.name}</div>
    <div class="location">
      <img
        class="logo"
        src="/images/location-outlined.svg"
        alt="location"
      />
      <div class="content">${store.location}</div>
    </div>
    <div class="email">
      <img class="logo" src="/images/email.svg" alt="email" />
      <a href="mailto:${store.email}">${store.email}</a>
    </div>
    <div class="number">
      <img class="logo" src="/images/telephone.svg" alt="telephone" />
      <a href="tel:${store.number}">${store.number}</a>
      <div class="media">
        <a class="link" href="${store.number_whatsapp_link}" target="_blank"
          ><img
            class="logo"
            src="/images/whatsapp-icon.svg"
            alt="whatsapp"
        /></a>
        <a class="link" href="${store.number_telegram_link}" target="_blank"
          ><img
            class="logo"
            src="/images/telegram-icon.svg"
            alt="telegram"
        /></a>
      </div>
    </div>
    <div class="working-hours">
      <img class="logo" src="/images/clock.svg" alt="clock" />
      <div class="content">
        <div class="label">${store.working_hours.label}</div>
        <div class="store">${store.working_hours.store}</div>
        <div class="delivery">${store.working_hours.delivery}</div>
      </div>
    </div>
    <div class="media">
      <a class="link" href="${store.media_links.whatsapp}" target="_blank"
        ><img
          class="logo"
          src="/images/whatsapp-icon.svg"
          alt="whatsapp"
      /></a>
      <a class="link" href="${store.media_links.telegram}" target="_blank"
        ><img
          class="logo"
          src="/images/telegram-icon.svg"
          alt="telegram"
      /></a>
      <a class="link" href="${store.media_links.instagram}" target="_blank"
        ><img
          class="logo"
          src="/images/instagram-icon.svg"
          alt="instagram"
      /></a>
      <a class="link" href="${store.media_links.vcontact}" target="_blank"
        ><img
          class="logo"
          src="/images/vcontact-icon.svg"
          alt="vcontact"
      /></a>
    </div>
    <div class="show-on-map">Показать на карте</div>
  `;
  storeHolder.innerHTML = render;
};

showStoreInfo(1);
