const stdin = process.stdin;
const stdout = process.stdout

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
    if (key === 'b') {
        stdout.write('\x07');
    } else if (key === '\u0003') {
        console.log('Thanks for using me, ciao');
        process.exit();
    } else {
        for(let i = 0; i < 10; i++) {
            if (key === i.toString()) {
                console.log(`Setting timer for ${i} seconds`);
                setTimeout(() => {
                stdout.write('\x07');
                }, i*1000)
            }  
        }
    }
})