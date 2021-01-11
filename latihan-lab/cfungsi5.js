function ubahkeCelcius() {
    //mengambil nilai dari komponen input
    var suhu = document.getElementById("input").value; 
    //perhitungan dengan aritmatika dasar
    var hasil = (5/9) * (suhu - 32)
    //fungsi untuk pengisian elemen hasil
    document.getElementById("hasil").innerHTML = suhu + "F dalam celcius = " + hasil + "C"; 
}

//fungsi pendefinisian bahwa seiap kali tombol diklik, fungsi ubah kecelcius akan dijalankan
document.getElementById("tombol").onclick = ubahkeCelcius;