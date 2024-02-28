const aiHubApi = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);

  const data = await res.json();
  const aiHubdata = data.data.tools;

  aiHubdisplay(aiHubdata);
};

const aiHubdisplay = (allData) => {
  const aiContainer = document.getElementById("ai-container");

  allData.forEach((ai) => {
    console.log(ai);

    const aiCard = document.createElement("div");
    aiCard.classList = `card  bg-base-100 shadow-xl`;
    aiCard.innerHTML = `
        
        <figure><img src=${ai.image}
        alt="Image Not Founded" /></figure>
<div class="card-body">
    <h2 class="card-title">Featurs</h2>
   
    <ol class="list-disc">
        <li>${ai.features[0]}</li>
        <li>${ai.features[1]}</li>
        <li>${ai.features[2]}</li>
    </ol>
    <hr>

    <h3 class="font-medium ">${ai.name}</h3>
    <p>${ai.published_in}</p>


</div>
        
        
        `;



aiContainer.appendChild(aiCard)



  });
};

aiHubApi();
