function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject){
        var books = [
            {name: "shinchan", totalPage: "50", isColorful :true},
            {name: "Kalkulus", totalPage: "250", isColorful :false},
            {name: "doraemon", totalPage: "40", isColorful :true},
            {name: "algoritma", totalPage: "300", isColorful :false},
            ]
        if (amountOfPage > 0){
            resolve(books.filter(x => x.totalPage >= amountOfPage && x.isColorful == colorful ));
        } else {
            var reason =new Error("maaf parameter salah")
            reject(reason);
        }
    });
}

let colorful = true;
let amountOfPage = 50;

function cek(colorful){
    filterBooksPromise(colorful, amountOfPage)
    .then (function (fulfilled) {
        console.log(fulfilled);
    })
    .catch(function (error) {
        console.log(error.message);
    });
}

cek(colorful);

