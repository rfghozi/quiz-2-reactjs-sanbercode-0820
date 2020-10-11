console.log("Menghitung Volume Balok dan Kubus");

const volumeBalok = (...angka) => {
    return angka.reduce((a,b) => a*b)
}

const volumeKubus = (...s) => {
    return s.reduce((a,b) => a*b)
}

const balok = "Volume Balok adalah = " + volumeBalok(5,4,6);
const kubus = " dan Volume Kubus adalah = " + volumeKubus(2,2,2);

const volume = `${balok}, ${kubus}`
console.log(volume);

