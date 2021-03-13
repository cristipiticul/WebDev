let products = ['apple', 'banana', 'bread', 'cake', 'cheesecake', 'shawarma']
function search() {
    // save what the user typed in searchText variable
    let searchText = document.getElementById('searchText').value;

    // clear previous suggestions
    document.getElementById('suggestions').innerHTML = '';

    // take each product
    for (let i = 0; i < products.length; i++) {
        // if it contains searchText
        if (products[i].includes(searchText)) {
            // create a new div in suggestions
            document.getElementById('suggestions').innerHTML += `<div>${products[i]}</div>`;
        }
    }
}