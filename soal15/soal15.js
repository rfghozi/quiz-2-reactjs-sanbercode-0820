let warna =["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "John Doe",
    tahunTerbit: 2020
}

let buku ={
    nama: "Pemrograman Dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

let gabungWarna = [...warna,...buku.warnaSampul];
let gabungData = {...dataBukuTambahan,...buku};

console.log(gabungWarna);
console.log(gabungData);