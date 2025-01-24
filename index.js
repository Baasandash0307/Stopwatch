 // const tipsRef = document.getElementById('perc');
// const tips = document.getElementsByClassName('tip-buttons');

// for (let i = 0; i < tips.length; i++){
//     tips[i].addEventListener('click', (event) => {
//         const tipStrings = event.target.innerHTML;
//         const tipsGetValues = parseFloat(tipStrings.replace('%', ''));
//         const input = document.getElementById('billAmount')
//         const inputValue = parseFloat(input.value);
        
//         if(!isNaN(inputValue)) {
//             const result = (inputValue * tipsGetValues) / 100;
//             const sum = result + inputValue;
//             document.getElementById('tip').innerHTML = sum;  
//         }
//         else{
//             console.log('error');
//         }
//     })
// };
    
//     document.getElementById('clear').addEventListener('click', () => {
//     document.getElementById('billAmount').value = '';
//     document.getElementById('tip').textContent = '';
// });


const countRef = document.getElementById('time');

const startRef = document.getElementById('start');
const stopRef = document.getElementById('stop');
const resettRef = document.getElementById('reset');


