var namaMahasiswa = [];
function masukan(){
    var nama = document.getElementById("nama").value;
    namaMahasiswa.push(nama);
    console.log(namaMahasiswa);
    document.getElementById("list").innerText = namaMahasiswa
    document.getElementById("nama").value = "";
}

