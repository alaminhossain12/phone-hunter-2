const loadPhone = (searchText) => {
  const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowsPhone(data.data));
};

const displayShowsPhone = (phones) => {
  // console.log(phones);
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.innerHTML = "";
  phones.forEach((phone) => {
    // console.log(phone);
    const phonesDiv = document.createElement("div");
    phonesDiv.classList.add("col");
    phonesDiv.innerHTML = `
    <div class="card">
    <img src="${phone.image}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h3>Brand: ${phone.brand}</h3>
        <h5 class="card-title">Name: ${phone.phone_name}</h5>
        <p class="card-text">
          Slug: ${phone.slug}
        </p>
        <button onclick="loadPhonesDetails('${phone.slug}')" class="btn btn-info text-white">Phones Details</button>
      </div>
  </div>
    `;
    phonesContainer.appendChild(phonesDiv);
  });
};

const searchPhone = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhone(searchText);
  searchField.value = "";
};

const loadPhonesDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayShowDetails(data.data));
};

const displayShowDetails = (phone) => {
  console.log(phone);
  const showesDetails = document.getElementById("showes-details");
  showesDetails.innerHTML = "";
  const phonesDiv = document.createElement("div");
  phonesDiv.classList.add("card");
  phonesDiv.innerHTML = `
  <img src="${phone.image}" class="card-img-top" alt="..." />
  <div class="card-body">
    <h3>Brand: ${phone.brand}</h3>
    <h5 class="card-title">Name: ${phone.phone_name}</h5>
    <p class="card-text">
      Slug: ${phone.slug}
    </p>
  </div>
  `;
  showesDetails.appendChild(phonesDiv);
};

loadPhone("apple");
