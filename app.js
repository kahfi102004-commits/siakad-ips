// SIAKAD mini: data nilai mahasiswa dan perhitungan IPS
const nilaiMahasiswa = [
  { npm: '248160027', nama: 'Jonathan Immanuel Sihombing', nilai: [
    { matkul: 'Algoritma', sks: 3, bobot: 4 },
    { matkul: 'Basis Data', sks: 3, bobot: 3 },
    { matkul: 'Etika Profesi', sks: 1, bobot: 2 },
  ] },
  { npm: '248160028', nama: 'Siti Rahma', nilai: [
    { matkul: 'Algoritma', sks: 3, bobot: 3 },
    { matkul: 'Basis Data', sks: 3, bobot: 3 },
  ] },
];

// Hitung IPS dari daftar nilai (bobot nilai: A=4, B=3, C=2, D=1, E=0)
function hitungIps(daftarNilai) {
  if (daftarNilai.length === 0) return 0;
  const total = daftarNilai.reduce((jumlah, n) => jumlah + n.bobot, 0);
  return Math.round((total / daftarNilai.length) * 100) / 100;
}

module.exports = { nilaiMahasiswa, hitungIps };

// Demo: node app.js
if (require.main === module) {
  for (const m of nilaiMahasiswa) {
    console.log(`${m.npm} ${m.nama}: IPS ${hitungIps(m.nilai)}`);
  }
}
