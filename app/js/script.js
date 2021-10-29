const bill = document.getElementById('bill');
const people = document.getElementById('people');
const custom = document.getElementById('custom');
const btntip = document.querySelectorAll('#btntip');
const amount = document.getElementById('amount');
const total = document.getElementById('total');
const btnreset = document.getElementById('btnreset');
const zero = document.getElementById('zero');

//calculator tip function
const calculatortip = (tip) => {
    let totaltip = Number(bill.value) + ((Number(tip/100)) * Number(bill.value));
    let tipperson = (totaltip - Number(bill.value)) / Number(people.value);
    let totalperson = totaltip / Number(people.value);

    amount.innerHTML = tipperson.toFixed(2);
    total.innerHTML = totalperson.toFixed(2);
}

//number of people validation 
const validation = () => {
    if (people.value == '0' || people.value == ''){
        people.classList.add('input__false');
        zero.innerHTML = `Can't be zero`;
        return false;
    }else{
        people.classList.remove('input__false');
        zero.innerHTML = '';
        return true;
    }

}

//btn tip listener
btntip.forEach(btn => {
    btn.addEventListener('click', () => {
        let tip = Number(btn.value);
        if(validation()) calculatortip(tip)
    })
})

//custom tip listener
custom.addEventListener('input', () => {
    let tip = Number(custom.value);
    if (validation()) calculatortip(tip)
})

//btn reset listener
btnreset.addEventListener('click', () => {
    bill.value = '';
    people.value = '';
    custom.value = '';
    amount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';
    people.classList.remove('input__false');
    zero.innerHTML = '';
})

