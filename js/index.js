const link = document.querySelector('a');
link.textContent = 'Best website in the World!';
link.href = 'https://programmingmentor.com';


const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
const clonedText = text.cloneNode(true);
sect.appendChild(clonedText);

setTimeout( () => clonedText.parentNode.removeChild(clonedText), 2000 );

para.classList.add('selected');

// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

// Clock
const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = (new Date()).toLocaleTimeString(), 1000);

const products = [
    {
        title: 'Tesla X',
        color: 'white',
        price: 120000
    },    
    {
        title: 'Honda Accord',
        color: 'black',
        price: 40000
    },
    {
        title: 'Lexus NX200t',
        color: 'red',
        price: 36000
    }
];



products.sort( (a, b) => a.title < b.title 
                            ? -1
                            : a.title > b.title 
                            ? 1
                            : 0 );


const priceList = document.querySelector('.price-list');
for (const product of products) {
    const productPara = document.createElement('p');
    productPara.textContent = `Title: ${product.title}, Color: ${product.color}, Price: ${product.price},`;
    priceList.appendChild(productPara);
}


const clockToggleButton = document.querySelector('.clockToggle');
clockToggleButton.addEventListener('click', clockToggle);

function clockToggle() {
    clockContainer.hidden = !clockContainer.hidden;  
    clockToggleButton.innerText = clockContainer.hidden ? 'Show Clock' : 'Hide Clock';
}

// jQuery Sample
$('.toggle-pars').click( () => $('p').toggle(3000) );


const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
digits.forEach( btn => btn.addEventListener('click', digitPressed) );
function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}
const opers = document.querySelectorAll('.opers button');
opers.forEach( btn => btn.addEventListener('click', operPressed) );
function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}