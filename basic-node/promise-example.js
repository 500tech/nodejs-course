function setTimeoutWithPromise() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve(true)
        } else {
            reject(false)
        }
    });
}

// console.log(1)

// setTimeout(() => {
//     console.log(2);
// }, 1000)

// console.log(3)

setTimeoutWithPromise()
    .then((data) => { console.log(data);})
    .catch((err) => { console.error(err);})
