const btnContainer = document.getElementById("btn-container");
const cardContainer = document.querySelector(".card-container");
let selectedCatagory = 1000; // Corrected the class name

const fetchCategories = () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";

  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      data.forEach((card) => {
        const newBtn = document.createElement("button");
        newBtn.innerText = card.category;
        newBtn.className = "btn btn-ghost bg-slate-100 text-lg ";
        newBtn.addEventListener("click", () =>
          fetchdataBycategory(card.category_id) // Corrected the function name
        );
        btnContainer.appendChild(newBtn);
      });
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });
};

const fetchdataBycategory = (categoryID) => { 
  selectedCatagory = categoryID;// Corrected the function parameter name
  const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      cardContainer.innerHTML = '';
      data.forEach((video) => {
        console.log(video);
        
        const newCard = document.createElement("div");
        newCard.innerHTML = `
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="${video.thumbnail}" alt="${video.title}" /></figure>
            <div class="card-body">
              <h2 class="card-title">${video.title}</h2>
              <p>${video.image}</p>
              
            </div>
          </div>
        `;

        cardContainer.appendChild(newCard);
      });
    });
};

fetchCategories();
