// /*F-TASK: 

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi




function findDoublers(str) {
    const charSet = new Set();
    
    for (const char of str) {
        if (charSet.has(char)) {
            return true;
        }
        charSet.add(char);
    }
    
    return false;
}

// Example usage:
console.log(findDoublers("hello")); 
console.log(findDoublers("world")); 















// // E-TASK: 

// // // Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// // // MASALAN: getReverse("hello") return qilsin "olleh"


// function getReverse(str) {
//     return str.split('').reverse().join('');
// }
// console.log(getReverse("hello")); 











// // // // D-TASK: 

// // // // Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// // // // MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// // // function checkContent(str1, str2) {
// // //     // strigni sort qilamiz va taqqoslaymiz
// // //     return str1.split('').sort().join('') === str2.split('').sort().join('');
// // // }

// // // console.log(checkContent("mitgroup", "gmtiprou")); 





// // // // MITASK-C 

// // // // Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// // // // MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
// // // class Shop {
// // //   constructor(bread, lagmon, cola) {
// // //       this.products = {
// // //           bread: bread,
// // //           lagmon: lagmon,
// // //           cola: cola
// // //       };
// // //   }

// // //   logTime() {
// // //       const now = new Date();
// // //       const hours = String(now.getHours()).padStart(2, '0');
// // //       const minutes = String(now.getMinutes()).padStart(2, '0');
// // //       return `now at ${hours}:${minutes}`;
// // //   }

// // //   remaining() {
// // //       console.log(`${this.logTime()} there are ${this.products.bread} breads, ${this.products.lagmon} lagmons and ${this.products.cola} colas!`);
// // //   }

// // //   sell(product, quantity) {
// // //       if (this.products[product] !== undefined && this.products[product] >= quantity) {
// // //           this.products[product] -= quantity;
// // //           console.log(`${this.logTime()} sold ${quantity} ${product}(s)`);
// // //       } else {
// // //           console.log(`${this.logTime()} not enough ${product} to sell`);
// // //       }
// // //   }

// // //   receive(product, quantity) {
// // //       if (this.products[product] !== undefined) {
// // //           this.products[product] += quantity;
// // //           console.log(`${this.logTime()} received ${quantity} ${product}(s)`);
// // //       } else {
// // //           console.log(`${this.logTime()} invalid product: ${product}`);
// // //       }
// // //   }
// // // }


// // // const shop = new Shop(4, 5, 2);
// // // shop.remaining();  // hozir 4ta non, 5 lagmon va 2ta cola"
// // // shop.sell('bread', 3);  // hozir 3ta non sotildi"
// // // shop.receive('cola', 4);  // shu vaqtda 4ta cola qoshildi"
// // // shop.remaining();  // ayni paytda 1ta non, 5 lagmon 6 cola!"





// // // // // B-TASK: 

// // // // // Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// // // // // MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
// // // // function countDigits(str) {
// // // //     let count = 0;
// // // //     for (let i = 0; i < str.length; i++) {
// // // //       if (!isNaN(parseInt(str[i]))) {
// // // //         count++;
// // // //       }
// // // //     }
// // // //     return count;
// // // //   }
  
// // // //   console.log(countDigits("ad2a54y79wet0sfgb9"));


// // // // TASK A
// // // // Harf sifatida kiritilgan birinchi parametr, 
// // // // kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// // // // Funktsiya tuzing

// // // // Masalan: countLetter("e", "engineer")
// // // // 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// // // // 3 sonini qaytaradi

// // // // function countLetter(letter, word) {
// // // //     let count = 0;

// // // //     for (let i = 0; i < word.length; i++) {
// // // //         if (word[i] === letter) {
// // // //             count++;
// // // //         }
// // // //     }
// // // //     // console.log(letter, "is repeated in the word", word, count, "times...");
// // // //     return count;
// // // // }

// // // // console.log(countLetter("e", "engineer")); 

// // // // -------------------------------------------------------------------
// // // // // // 21-22 darslar
// // // // console.log("Jack Ma maslahatlari"); 
// // // // const list = [
// // // //     "yahshi talaba boling", // 0-20
// // // //     "togri boshliq tanlang va koproq hato qiling", // 20-30 
// // // //     "uzingizga ishlashingizni boshlang", // 30-40
// // // //     "siz kuchli bolgan narsalarni qiling", // 40-50
// // // //     "yoshlarga investitsiya qiling", // 50-60 
// // // //     "endi dam oling, foydasi yoq endi", // 60
// // // // ];

// // // // // // this is Callback function
// // // // // function maslahatBering(a, callback) {
// // // // //     if (typeof a !== "number") callback("insert a number", null); 
// // // // //     else if (a <= 20) callback(null, list[0]);
// // // // //     else if (a > 20 && a < 30) callback(null, list[1]); 
// // // // //     else if (a > 30 && a <= 40) callback(null, list [2]); 
// // // // //     else if (a > 40 && a <= 50) callback(null, list [3]); 
// // // // //     else if (a > 50 && a <=60) callback(null, list[4]);
// // // // //     // setting timeout is for example,
// // // // //     else {
// // // // //         setTimeout(() => {
// // // // //             callback(null, list[5]);
// // // // //         }, 5000);
        
// // // // //     }
// // // // // }

// // // // // // maslahatBering(20, (err, data) => { 
// // // // // //     if (err) console.log("ERROR: ", err); 
// // // // // //     console.log("javob: ", data);
// // // // // // });


// // // // // // // string parameter
// // // // // // maslahatBering("salom", (err, data) => { 
// // // // // //         if (err) console.log("ERROR: ", err); 
// // // // // //         else {
// // // // // //             console.log("javob: ", data);
// // // // // //         }
// // // // // //     });


// // // // // // 
// // // // // console.log("pass here 0");
// // // // // maslahatBering(65, (err, data) => { 
// // // // //     if (err) console.log("ERROR: ", err); 
// // // // //     else {
// // // // //         console.log("javob: ", data);
// // // // //     }
// // // // // });
// // // // // console.log("pass here 1");




// // // // // // //  a Asynchronous function
// // // // // Define qismida Asyncdan foydalandik, call qismida then va catchdan foydalandik
// // // // async function maslahatBering(a) {
// // // //     if (typeof a !== "number") throw new Error("insert a number"); 
// // // //     else if (a <= 20) return list[0];
// // // //     else if (a > 20 && a < 30) return list[1];
// // // //     else if (a > 30 && a <= 40) return list[2];
// // // //     else if (a > 40 && a <= 50) return list[3]; 
// // // //     else if (a > 50 && a <=60) return list[4];
// // // //     else {
// // // //         // return list[5];
// // // //         // we will need promise&asyn in many times in real life problems(it gets a value first waits then does second operation based on first value and so on)
// // // //         // time out does not work but there is another way, we`ll see later 
// // // //         // we will se it in our projecrt later in details
// // // //         return new Promise((resolve, reject) => {
// // // //             setTimeout(() => {
// // // //                 resolve(list[5]);
// // // //             }, 5000);
// // // //         })
// // // //     }
// // // // }

// // // // // // then, catch
// // // // // console.log("pass here 0");
// // // // // maslahatBering(20)
// // // // //     .then((data) => {
// // // // //         console.log("javob:", data);
// // // // //     })
// // // // //     .catch((err) => {
// // // // //         console.log("ERROR: ", err);
// // // // //     });
// // // // //     console.log("pass here 1");


// // // // // asynch/await
// // // // async function run() {
// // // //     let javob = await maslahatBering(65);
// // // //     console.log(javob);
// // // //     javob = await maslahatBering(31);
// // // //     console.log(javob);
// // // //     javob = await maslahatBering(41);
// // // //     console.log(javob);
// // // // }
// // // // run();
