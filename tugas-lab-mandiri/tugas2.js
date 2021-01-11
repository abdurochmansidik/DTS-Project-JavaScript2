function mySubs1() {
    //mengambil nilai dari komponen input
    var numbers = parseInt(document.getElementById("input").value)
    //perhitungan dengan aritmatika dasar
    var selisih1 = numbers - 10
    //fungsi untuk pengisian elemen hasil
    document.getElementById("input").value = selisih1
}

function mySubs2() {
    //mengambil nilai dari komponen input
    var numbers = parseInt(document.getElementById("input").value)
    //perhitungan dengan aritmatika dasar
    var selisih2 = numbers - 1
    //fungsi untuk pengisian elemen hasil
    document.getElementById("input").value = selisih2
}

function mySubs3() {
    //mengambil nilai dari komponen input
    var numbers = parseInt(document.getElementById("input").value)
    //perhitungan dengan aritmatika dasar
    var selisih3 = numbers + 1
    //fungsi untuk pengisian elemen hasil
    document.getElementById("input").value = selisih3
}

function mySubs4() {
    //mengambil nilai dari komponen input
    var numbers = parseInt(document.getElementById("input").value)
    //perhitungan dengan aritmatika dasar
    var selisih4 = numbers + 10
    //fungsi untuk pengisian elemen hasil
    document.getElementById("input").value = selisih4
}

//fungsi pendefinisian bahwa seiap kali tombol diklik, fungsi perhitungan dijalankan
document.getElementById("tombol1").onclick = mySubs1;
document.getElementById("tombol2").onclick = mySubs2;
document.getElementById("tombol3").onclick = mySubs3;
document.getElementById("tombol4").onclick = mySubs4;