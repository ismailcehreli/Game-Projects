let msg = "BOM Oyunu";
console.log(msg);
let sayi = 0;
let kacaKadar = parseInt(prompt("Kaça kadar"))
console.log(`Belirlenen sınır ${kacaKadar}`);
let bomSayisi = parseInt(prompt("Bom sayısı belirle"));
console.log(`Belirlenen bom sayısı ${bomSayisi}`);
console.log("Oyun Başlıyor");

while (sayi <= kacaKadar){
    sayi++;
    if (sayi + 1 < kacaKadar + 1){
        console.log(`Bilgisayar : ${sayi}`);
        let readLine = prompt("");
        console.log(`Kullanıcı : ${readLine}`);

        if ((sayi + 1) % bomSayisi == 0){

            if (readLine != "BOM") { 
                console.log(`Üzgünüm kaybettiniz. Girdiğiniz sayı ${bomSayisi} sayısına bölünebilmektedir.`) 
                break;
            } else { 
                sayi = sayi + 1; 
            }
            
        } else {

            sayi = sayi + 1;
            if ((sayi + 1) % bomSayisi == 0){
                console.log("Bilgisayar: BOM");
                sayi = sayi + 1;
                let readLine = prompt("");
                console.log(`Kullanıcı : ${readLine}`);
                sayi = sayi + 1;
            } 
    }
 }
}


