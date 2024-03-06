localStorage.setItem("Rahe", 713715);



const add = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const nameInput = document.getElementById("storage-value");
  const name = nameInput.value;

  if (id && name) {
    localStorage.setItem(name, id);
  }
  idInput.value = "";
  nameInput.value = "";

};
