const cards = document.getElementsByClassName('card');
Array.from(cards).forEach(card => {
  card.onclick = function () {
    window.location.href = '/detail.html'
  }
});

const logo = document.getElementById('logo');
logo.onclick = function () {
  window.location.href = '/index.html'
}