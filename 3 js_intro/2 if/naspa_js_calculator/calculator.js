function compute() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var op = document.getElementById('op').value;
    var rez;
    
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