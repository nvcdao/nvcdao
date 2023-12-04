// YEAR 

var currentYear = new Date().getFullYear();

document.getElementById("currentYear").innerHTML = currentYear;

// BUTTON ALERRRTTTTT // 

var btnAlert = document.getElementById("btn-alert");

btnAlert.addEventListener("click", function() {
    alert("Did you know Alberta was once a giant inland Sea?");
});

// BUTTON ALERRRTTTTT - HOVER // 

var myButton = document.getElementById('btn-alert');

myButton.addEventListener('mouseover', function () {
    myButton.innerText = 'Click me to learn a fun fact!';
});

myButton.addEventListener('mouseleave', function () {
    myButton.innerText = 'Hover to Reveal!';
});

// iNcrEmeNt CoUnteR //

let count = 1;

var btnCounter = document.getElementById('btn-counter');
var txtCounter = document.getElementById('txt-counter');

btnCounter.addEventListener('click', function() {
    // Incrementing the count
    count = count + 1;

        if (count % 2 === 0) {
            txtCounter.classList.remove('odd');
            txtCounter.classList.add('even');
        } else {
            txtCounter.classList.remove('even');
            txtCounter.classList.add('odd');
        }
    txtCounter.innerHTML = `Number: ${count}`;
});

const numbersList = document.getElementById('numbers');

// LOOOP // 
for (let i = 1; i <= 100; i++) {
  const listItem = document.createElement('li');

  listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

  numbersList.appendChild(listItem);
}
