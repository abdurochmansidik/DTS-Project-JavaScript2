// Program Html berisi input nama kemudian datanya di simpan ke dalam array namaMahasiswa
// Tampilkan data dalam bentuk tabel/list

var namaMahasiswa=[];
var isi="";

function simpanMhs(){
    var nama=document.getElementById("nama").value;
    namaMahasiswa.push(nama);
    console.log(namaMahasiswa);
    document.getElementById("nama").value="";

//tambahan utk menambahkan isi table
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = nama;
}