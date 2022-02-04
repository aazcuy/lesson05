const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
let myItem = input.value;
input.value = '';

const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBttn = document.createElement('button');

listItem.appendChild(listText);
listText.textContent = myItem;
listItem.appendChild(listBttn);
listBttn.textContent = 'X';
list.appendChild(listItem);

listBttn.onclick = function(e) {
    list.removeChild(listItem);
  }

  input.focus();
}



);