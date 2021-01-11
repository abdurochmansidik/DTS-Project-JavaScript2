//array berisikan nama lernhkap
var namalengkap = ["Abdurochman", "Sidik"]
console.log(namalengkap)
//array berisikan umur
var usia = [26]
console.log(usia)
//array gabungan menggunakan concat
var biodata = namalengkap.concat(usia)
console.log(biodata)
//menambahkan tahun kelahiran diatara nama dan umur menggunakan splice
biodata.splice(2,0,1994)
console.log(biodata)
//melakukan perulangan setiap elemen dari array menggunakan for
for (i = 0; i < biodata.length; i++) {
    console.log(biodata[i]);
}