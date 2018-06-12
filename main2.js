var a = prompt("Введите любое целое число: ");
var b = 0;
for (var i = 1; i <= a; i++) {
document.write(i);
if (i <= (a - 1)) document.write( " + " );
b = b + i; 
if (i == a) document.write( " = " + b);
}