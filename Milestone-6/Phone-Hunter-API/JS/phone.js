const loadPhone = async(searchText) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)

    const data = await res.json()
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones)

}


const phoneContainer = document.getElementById('phone-container');
phoneContainer.textContent = '';



const displayPhone = phones =>{

    const showAll = document.getElementById('show-allContainer')

    if(phones.length >12){
        showAll.classList.remove('hidden')
    }
    else{
        showAll.classList.add('hidden')
    }


    phones= phones.slice(0,12)
    
    phones.forEach(phone =>{
        
        // 1 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList= 'card  p-4 bg-base-100 shadow-xl';
        phoneCard.innerHTML = `
        
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      
        
        `

        phoneContainer.appendChild(phoneCard);



    })

    toogleloading(false);


}



const handleSearch = ()=>{
    toogleloading(true);
    const searchField = document.getElementById('searchfield');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


const toogleloading = (isLoading) =>{
    const loadingspinner = document.getElementById('loading-spnner');
    if(isLoading){
        loadingspinner.classList.remove('hidden');
    }
    else{
        loadingspinner.classList.add('hidden');
    }
}

