document.querySelectorAll('.book-box img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = img.dataset.title;
    document.getElementById('modal-author').textContent = "Author : " + img.dataset.author;
    document.getElementById('modal-description').textContent = img.dataset.description;

    document.getElementById('book-modal').style.display = 'block';
  });
});


document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('book-modal').style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target.id === 'book-modal') {
    document.getElementById('book-modal').style.display = 'none';
  }
});


//Add function 
function handleAddButtonClick(name,author,description,url){
    let bookContainer = document.getElementsByClassName("book-boxes")[0];
    let newBookBox = document.createElement("div");
    newBookBox.className = "book-box";
    let newBookImage = document.createElement("img");
    newBookImage.dataset.title = name;
    newBookImage.dataset.author = author;
    newBookImage.dataset.description = description;
    newBookImage.src = url;
    newBookBox.appendChild(newBookImage);

    
}

const addButton = document.getElementById('add-button');


