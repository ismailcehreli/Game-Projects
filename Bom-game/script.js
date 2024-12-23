let msg = "BOM Oyunu";
console.log(msg);
let sayi = 0;
let kacaKadar = parseInt(prompt("Kaça kadar"));
console.log(`Belirlenen sınır ${kacaKadar}`);
let bomSayisi = parseInt(prompt("Bom sayısı belirle"));
console.log(`Belirlenen bom sayısı ${bomSayisi}`);
console.log("Oyun Başlıyor");

while (sayi < kacaKadar) {
    // Computer's turn
    sayi++;
    if (sayi % bomSayisi === 0) {
        console.log("Bilgisayar: BOM");
    } else {
        console.log(`Bilgisayar: ${sayi}`);
    }
    
    // Player's turn
    if (sayi < kacaKadar) {
        sayi++;
        const readLine = prompt("");
        const expectedAnswer = sayi % bomSayisi === 0 ? "BOM" : sayi.toString();
        
        if (readLine !== expectedAnswer) {
            console.log(`Üzgünüm kaybettiniz. ${sayi % bomSayisi === 0 ? 
                `${sayi} sayısı ${bomSayisi} sayısına bölünebilmektedir, BOM demeliydiniz.` : 
                `${sayi} sayısını girmeliydiniz.`}`);
            break;
        }
        console.log(`Kullanıcı: ${readLine}`);
    }
}


