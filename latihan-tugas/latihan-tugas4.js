// Buat input menghitung luas lingkaran

function getLuasLingkaran(r){
    var luas = 3.14 * r * r ;
    return luas;
}

function luasLingkaran() {
    var jari2 = document.getElementById("jari2").value;
    var luas = getLuasLingkaran(jari2)
    document.getElementById("hasil").innerHTML=luas;
}