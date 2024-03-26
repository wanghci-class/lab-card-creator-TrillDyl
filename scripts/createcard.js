


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