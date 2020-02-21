const breakPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Your order is ready, take it.");
        reject(Error("Problem with order"));
    }, 3000);
});

console.log(breakPromise);
breakPromise
    .then(val => {
        console.log(val);
    })
    .catch(err => {
        console.log(err);
    });
