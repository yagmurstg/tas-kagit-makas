

let ilkHamle = prompt('taş, kağıt, makas?')

let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));

alert("Bilgisayarın Hamlesi:" + bilgisayarHamlesi)

if(ilkHamle === bilgisayarHamlesi) {
  alert('Berabere!')
} 
if (ilkHamle === 'taş' && bilgisayarınHamlesi === 'makas' || ilkHamle === 'makas' && bilgisayarHamlesi == 'kağıt' || ilkHamle == 'makas' && bilgisayarHamlesi == 'taş') {
  alert('Tebrikler, kazandınız!')
} 
if(ilkHamle == 'makas' && bilgisayarHamlesi == 'taş' || ilkHamle == 'kağıt' && bilgisayarHamlesi == 'makas' || ilkHamle == 'taş' && bilgisayarHamlesi == 'makas') {
  alert('Bilgisayar Kazandı.')
} 
else {
  alert('Hatalı Kullanım')
}


