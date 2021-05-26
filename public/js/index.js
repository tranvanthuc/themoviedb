const cards = document.getElementsByClassName('card');
Array.from(cards).forEach(card => {
  card.onclick = function () {
    window.location.href = '/detail.html'
  }
});