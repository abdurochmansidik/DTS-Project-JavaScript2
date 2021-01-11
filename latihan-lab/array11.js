// Compare adalah sebuah fungsi yang digunakan untuk mengurutkan elemen dari sebuah array yang bertipe NUMBER

var angka = [25,100,400,13]

var urutNaik = angka.sort(function(a, b){return a - b})
console.log(urutNaik)

var urutTurun = angka.sort(function(a, b){return b - a})
console.log(urutTurun)