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
