const inputToDoList = document.getElementById("todoContent");
const btnToDoList = document.getElementById("todoCreate");
const dataList = document.getElementById("list");
const arrayList = [];

btnToDoList.addEventListener('click', function (e) {
    e.preventDefault();
    if (!check()) return;
    addArray();
    printData();
    inputToDoList.value = '';
});

function check() {
    if (inputToDoList.value === '') {
        alert('Form Non valido');
        return false;
    }
    else {
        return true;
    }
}

function addArray() {
    arrayList.push(inputToDoList.value);
}

function printData() {
    list.innerHTML = '';
    for (let i = 0; i < arrayList.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerText = arrayList[i];
        list.appendChild(newLi);
        let btncanc = document.createElement('button');
        btncanc.setAttribute('type', 'button');
        btncanc.setAttribute('class','cancel');
        btncanc.setAttribute('onclick', `deleteItem(${i})`);
        btncanc.innerText = '🗑️';
        newLi.appendChild(btncanc);
    }
}

function deleteItem(index) {
    arrayList.splice(index, 1);
    printData();
}