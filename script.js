
const multiplicatorForm = document.querySelector('#multiplicator-form');
const informe = document.querySelector('#informe');

const textTabuada = document.querySelector('#multiplication-title')


multiplicatorForm.addEventListener('submit', (e) => {
    const multiplicationTable = document.querySelector('#multiplication-table');
    multiplicationTable.innerHTML = ''
    e.preventDefault()
    let inputNum = document.querySelector('#inputnum');
    let multnum = document.querySelector('#multnum');
    let num = Number(inputNum.value);
    let numMult = Number(multnum.value);
    if (!num || !numMult) {
        window.alert('Digite um número');
        return
    } else {
      let ressult = document.querySelector('#resul');

        for (let i = 1; i <= numMult; i++ ) {
            const result = num*i;

            const creatText = `<div class="row">
                <div class="operation" id="resul">${num} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`

            const parser = new DOMParser();

            const htmlText = parser.parseFromString(creatText, "text/html");

            const row = htmlText.querySelector('.row');

            

            multiplicationTable.appendChild(row)

            textTabuada.innerHTML = `Tabuada do Número ${num} :`

            
        }  
    }

    informe.innerHTML = ''

    







});
