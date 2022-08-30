let usado = false;
let a = 0;
let b = 1;
let c = 1;
let numero = Number(prompt("Ingrese la canidad de digitos de la serie fibonacci que desea ver."));
for (let i = 1; i<= numero; i++) {
    if (usado === false) {
        alert("1");
        usado = true;
    }
    else {
        alert(a + b);
        a = b;
        b = c;
        c = a+b;
    }
}       
