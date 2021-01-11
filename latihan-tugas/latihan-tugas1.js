// Html berisi input nama kemudian datanya
// disimpan ke dalam array namaMahasiswa
// Tampilkan arraynamaMasiswa ke dalam console

var namaMahasiswa=[];
function simpanMhs () {
    var nama=document.getElementById("nama").value;
    namaMahasiswa.push(nama);
    console.log(namaMahasiswa);
    document.getElementById("nama").value="";
}