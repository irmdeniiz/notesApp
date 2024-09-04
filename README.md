# Kütüphaneler

- react-router-dom
- react-bootstrap
- bootstrap
- react-markdown
- react-select
- uuid

const numbers = [10, 20, 30, 40, 50, 60, 70];

// dizideki bütün sayılar 5'ten büyük mü?
const cevap1 = numbers.every((num) => num > 5);

// dizideki bütün sayılar 20'den büyük mü?
const cevap2 = numbers.every((num) => num > 20);

console.log("hepsi 5 ten büyük mü ?", cevap1);
console.log("hepsi 20 den büyük mü ?", cevap2);

// \* every dizideki bütün elemanlar verilen koşula uyuyor mu kontrol eder

// dizideki elemenlardan en az biri 65'ten büyük mü?
const cevap3 = numbers.some((num) => num > 65);

// dizideki elemenlardan en az biri 90'dan büyük mü?
const cevap4 = numbers.some((num) => num > 90);

console.log("en az biri 65 den büyük mü ?", cevap3);
console.log("en az biri 90 dan büyük mü ?", cevap4);

// \* every dizideki elemanlardan en az bir tansesi verilen koşula uyuyor mu kontrol eder
