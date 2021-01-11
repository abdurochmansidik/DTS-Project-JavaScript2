// Program Java Script declare variable array namaMasiswa berisi array kosong
// 1. Tambahkan 3 nama ke array tersebut -> tampilkan
// 2. Tambahkan 4 nama didepan array tersebut -> tampilkan
// 3. Hapus 1 nama di belakang -> tampilkan
// 4. Tampilkan jumlah array yang ada sekarang -> tampilkan

var namaMahasiswa = [];
namaMahasiswa.push("Budi");
namaMahasiswa.push("Anduk");
namaMahasiswa.push("Bagus");
console.log("Menambah 3 nama ke array");
console.log(namaMahasiswa);
console.log("=============================");

namaMahasiswa.unshift("Joko");
namaMahasiswa.unshift("Udin");
namaMahasiswa.unshift("Ucup");
namaMahasiswa.unshift("Marucup");
console.log("Menambah 4 nama di depan array");
console.log(namaMahasiswa);
console.log("=============================");

namaMahasiswa.shift();
console.log("Hapus 1 nama dari depan array");
console.log(namaMahasiswa);
console.log("=============================");

namaMahasiswa.pop();
console.log("Hapus 1 nama di belakang array");
console.log(namaMahasiswa);
console.log("=============================");

console.log("Jadi panjang array saat ini : " + namaMahasiswa.length);
console.log(namaMahasiswa);
console.log("=============================");