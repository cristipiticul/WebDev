var items = [
    {
        name: 'item1',
        bought: false
    },
    {
        name: 'item2',
        bought: false
    }
];

function creazaTabel() {
    
    for (let i = 0; i < items.length; i++) {
        var newTr = document.createElement('tr');
        var newTd1 = document.createElement('td');
        var newTd2 = document.createElement('td');
        var newButton = document.createElement('button');

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTd2.appendChild(newButton);

        newTd1.innerText = items[i].name;
        if (items[i].bought) {
            newTd1.style.textDecoration = 'line-through';
        }
        newButton.innerText = 'Mark as done';
        newButton.addEventListener('click', function() {
            items[i].bought = true;
            creazaTabel();
        });

        document.getElementById('tbody_id').appendChild(newTr);
    }
}

creazaTabel();