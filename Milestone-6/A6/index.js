const btnContainer = document.getElementById("btn-container");
const cardContainer = document.querySelector(".card-container"); // Corrected the class name

const fetchCategories = () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";

  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      data.forEach((card) => {
        const newBtn = document.createElement("button");
        newBtn.innerText = card.category;
        newBtn.className = "btn btn-ghost bg-slate-700 text-lg text-white";
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

const fetchdataBycategory = (categoryID) => { // Corrected the function parameter name
  const url = `https://openapi.programming-hero.com/api/videos/category/${categoryID}`;
  fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
      cardContainer.innerHTML = '';
      data.forEach((video) => {
        
        const newCard = document.createElement("div");
        newCard.innerHTML = `
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="${video.thumbnail_url}" alt="${video.title}" /></figure>
            <div class="card-body">
              <h2 class="card-title">${video.title}</h2>
              <p>${video.description}</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        `;

        cardContainer.appendChild(newCard);
      });
    });
};

fetchCategories();
