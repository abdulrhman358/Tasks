var nameInput = document.getElementById('name');
var descInput = document.getElementById('desc');
var colorInput = document.getElementById('color');
var stockInput = document.getElementById('stock');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var searchInput = document.getElementById('search');
var tbody = document.getElementById('tbody');

var products = [];
var tmpIndex; 

if (localStorage.getItem('myProducts') != null) {
    products = JSON.parse(localStorage.getItem('myProducts'));
    displayData(products); 
}

addBtn.onclick = function() {
    if (validateData() == true) {
        var product = {
            name: nameInput.value,
            desc: descInput.value,
            color: colorInput.value,
            stock: stockInput.checked 
        };

        products.push(product); 
        localStorage.setItem('myProducts', JSON.stringify(products)); 
        displayData(products); 
        clearForm(); 
    }
}

function clearForm() {
    nameInput.value = '';
    descInput.value = '';
    colorInput.value = 'white';
    stockInput.checked = false;
}

function displayData(arr) {
    var tableRows = '';
    for (var i = 0; i < arr.length; i++) {
        tableRows += `
            <tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].desc}</td>
                <td>${arr[i].color}</td>
                <td>${arr[i].stock ? 'Not Available' : 'Available'}</td>
                <td><button onclick="setupUpdate(${i})">edit</button></td>
                <td><button onclick="deleteData(${i})">delete</button></td>
            </tr>
        `;
    }
    tbody.innerHTML = tableRows;
}

function deleteData(index) {
    products.splice(index, 1); 
    localStorage.setItem('myProducts', JSON.stringify(products)); 
    displayData(products); 
}

function setupUpdate(index) {
    tmpIndex = index; 
    
    nameInput.value = products[index].name;
    descInput.value = products[index].desc;
    colorInput.value = products[index].color;
    stockInput.checked = products[index].stock;

    addBtn.style.display = 'none';
    updateBtn.style.display = 'block';
}

updateBtn.onclick = function() {
    if (validateData() == true) {
        products[tmpIndex].name = nameInput.value;
        products[tmpIndex].desc = descInput.value;
        products[tmpIndex].color = colorInput.value;
        products[tmpIndex].stock = stockInput.checked;

        localStorage.setItem('myProducts', JSON.stringify(products)); 
        displayData(products); 
        clearForm(); 

        addBtn.style.display = 'block';
        updateBtn.style.display = 'none';
    }
}

searchInput.onkeyup = function() {
    var searchVal = searchInput.value.toLowerCase(); 
    var matchedProducts = []; 

    for (var i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(searchVal)) {
            matchedProducts.push(products[i]);
        }
    }
    displayData(matchedProducts); 
}

function validateData() {
    if (nameInput.value.length <= 3) {
        alert("the product name must be more than 3 letters long.");
        return false;
    }
    if (descInput.value.length < 10 || descInput.value.length > 30) {
        alert("the product description must be between 10 to 30 letters long.");
        return false;
    }
    return true; 
}