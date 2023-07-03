let display = document.getElementById('display');
let numbersDisplay = document.getElementById('numbers-display');
let numbersOperated = [];

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                numbersOperated = [];
                break;
            case '=':
                try {
                    let result = eval(display.innerText);
                    display.innerText = result;
                   
                } catch {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
                numbersOperated.push(e.target.innerText);
        }

        // Update numbers display
        numbersDisplay.innerText = numbersOperated.join(' ');
    });
});
