let daraamad = [0];
let hazine = [0];
let moj = document.querySelector('#moj');
let btt = document.querySelector('.btt');
let list = document.querySelector('ul');
let radioDar = document.querySelector('#radioDar')
let radioHaz = document.querySelector('#radioHaz')
let meghdar = document.querySelector('#meghdar')
let details = document.querySelector('#details')

btt.addEventListener('click' , ()=>{
    if(radioDar.checked && meghdar.valueAsNumber > 0){
        daraamad.push(meghdar.valueAsNumber);
        mosbat(meghdar.valueAsNumber , details.value || '-بدون توضیحات-');
        meghdar.value = '0';
        details.value = ""
        moj.innerHTML = mojodi()
    }else if(radioHaz.checked && meghdar.valueAsNumber > 0) {
        if( mojodi() >= meghdar.valueAsNumber){
        hazine.push(meghdar.valueAsNumber);
        manfi(meghdar.valueAsNumber , details.value || '-بدون توضیحات-');
        moj.innerHTML = mojodi()
        } else {
            alert('هزینه بیشتر از موجودی می باشد')
        }
        meghdar.value = '0';
        details.value = ""
    }
})

function mojodi(){
    return daraamad.reduce((total, number) => total + number, 0) - hazine.reduce((total, number) => total + number, 0);
}

function mosbat(x , y){
    let newLi = document.createElement('li');
    let newI = document.createElement('i');
    let newDiv = document.createElement('div');
    let newH2 = document.createElement('h2');
    let newP = document.createElement('p');
    newP.innerText = y
    newI.innerText = '+'
    newLi.className = 'green'
    newDiv.appendChild(newH2);
    newH2.innerText = x + ' ' + "ریال"
    newDiv.appendChild(newP);
    newLi.appendChild(newDiv);
    newLi.appendChild(newI);
    list.appendChild(newLi);
}

function manfi(x , y){
    let newLi = document.createElement('li');
    let newI = document.createElement('i');
    let newDiv = document.createElement('div');
    let newH2 = document.createElement('h2');
    let newP = document.createElement('p');
    newP.innerText = y
    newI.innerText = '-'
    newLi.className = 'red'
    newDiv.appendChild(newH2);
    newH2.innerText = x + ' ' + "ریال"
    newDiv.appendChild(newP);
    newLi.appendChild(newDiv);
    newLi.appendChild(newI);
    list.appendChild(newLi);
}


