


document.getElementById('previewbutton').addEventListener('click', function() {

    const to = document.getElementById("to").value;
    const from = document.getElementById("from").value;
    const title = document.getElementById("title").value;
    const subtitle = document.getElementById("subtitle").value;
    const message = document.getElementById("message").value;
  
    document.querySelector('.to-text').textContent = to;
    document.querySelector('.from-text').textContent = from;
    document.querySelector('.title-text').textContent = title;
    document.querySelector('.subtitle-text').textContent = subtitle;
    document.querySelector('.message-text').textContent = message;

});

const cardform = document.querySelector('.card-form');
const saveButton = document.getElementById('savebutton');
saveButton.addEventListener('click', saveCard);
function saveCard(event) {
  event.preventDefault(); 
  let cardsArray = JSON.parse(localStorage.getItem('cards')) || [];
  const newCard = {
    to: cardform.elements['to'].value,
    from: cardform.elements['from'].value,
    title: cardform.elements['title'].value,
    subtitle: cardform.elements['subtitle'].value,
    message: cardform.elements['message'].value
  };

  cardsArray.push(newCard);
  localStorage.setItem('cards', JSON.stringify(cardsArray));
  form.reset();
}