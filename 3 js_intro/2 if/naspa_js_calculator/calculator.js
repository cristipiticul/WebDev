function compute() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let op = document.getElementById('op').value;
    let rez;
    
    // Varianta 1
    // if (op == '+') {
    //     rez = a+b;
    // }
    // if (op == '-') {
    //     rez = a-b;
    // }
    // if (op == '*') {
    //     rez = a*b;
    // }
    // if (op == '/') {
    //     rez = a/b;
    // }

    // Varianta 2
    switch (op) {
        case '+':
            rez = a+b;
            break;
        case '-':
            rez = a-b;
            break;
        case '*':
            rez = a*b;
            break;
        case '/':
            rez = a/b;
            break;
    }
    
    document.getElementById('rez').innerHTML = rez;
}