const readLine = require('readline');

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

class ConsoleWorker {

    static readLine() {
        let result = rl.question(function (out) {
            return out;
        });
        return result;
    }

}

