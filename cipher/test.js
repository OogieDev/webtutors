class VisenerCrypt {

    constructor() {

        this.text = "";
        this.key = "";
        this.symbolsCount = 57;
        this.symbols = {};

    }

    setText(text) {
        this.text = text;
    }

    setKey(key) {
        this.key = key;
        this.fitKey();
    }

    fitKey() {

        let iterator = 0;

        for (let i = 0; i < this.text.length; i++) {
            if (this.key.length >= this.text.length) {
                return;
            }

            this.key += this.key[iterator];

            iterator++;
            if (iterator >= this.key.length) {
                iterator = 0;
            }
        }

    }

    encode() {

        let iterator = 0;
        for (let i = 65; i < 123; i++) {
            this.symbols[iterator] = String.fromCharCode(i);
            iterator++;
        }

        let ed = [];

        for (let i in this.text) {
            ed.push(String.fromCharCode((i.charCodeAt() - this.key[i].charCodeAt()) % this.symbolsCount + 'A'.charCodeAt()))
        }

        this.code = ed.join();

    }

    decode() {

        this.text = this.code;
        this.key = 'LEMON';
        this.fitKey();

        let ed = [];

        for (let i in this.text) {
            ed.push(String.fromCharCode((i.charCodeAt() - this.key[i].charCodeAt()) % this.symbolsCount + 'A'.charCodeAt()))
        }

        this.dcode = ed.join();

        console.log(this.dcode);

    }

}

console.log('A'.charCodeAt());
console.log('z'.charCodeAt());
vc = new VisenerCrypt();
vc.setText('ATTACKATDAWN');
vc.setKey('LEMON');
vc.encode();
vc.decode();