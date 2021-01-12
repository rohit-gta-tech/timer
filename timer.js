const arr = process.argv.slice(2);
const array = arr.sort(function(a, b) {
    return a - b;
});

let filtArr = array.filter(x => !Number.isNaN(Number(x)));

for (let i = 0; i < filtArr.length; i++) {
    if (filtArr[i] >= 0) {
        setTimeout(() => {
            process.stdout.write('\x07');
        }, filtArr[i]*1000)
    }  
}



