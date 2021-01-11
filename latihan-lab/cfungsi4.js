// cara menyambungkan Javascript ke HTML.
// Fungsi akan dilakukan ketika button ditekan (dideklarasikan dengan sintaks) 

function printArray() {
    var namaBuah = ["anggur", "apel", "jambu"]
    document.getElementById("array").innerHTML = namaBuah;
}

document.getElementById("tombol").onclick = printArray;