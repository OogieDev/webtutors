console.log('я'.charCodeAt());
// 33 97 - 122 127  1040 - 1103

class superCrypter {

    constructor() {
        this.symbols = {};
        this.generateSymbols();
        console.log(this.symbols);
    }

    generateSymbols() {

        let iter = 0;

        for (let i = 33; i < 127; i++ ) {
            this.symbols[iter] = String.fromCharCode(i);
            iter++;
        }

        for (let i = 1040; i < 1104; i++) {
            this.symbols[iter] = String.fromCharCode(i);
            iter++;
        }

    }

    encodeVal(world) {
        let listCode = [];
        for (let i = 0; i < world.length; i++) {
            for (let key in this.symbols) {
                if (world[i] == this.symbols[key]) {
                    listCode.push(key);
                }
            }
        }

        return listCode;

    }

    encodeText() {
        this.textCode = this.encodeVal(this.text);
    }

    encodeKey() {
        this.keyCode = this.encodeVal(this.key);
    }

    setText(text){
        this.text = text;
        this.encodeText();
    }

    setKey(key) {
        this.key = key;
        this.encodeKey();
    }

    comparator(value, key) {
        let dic = {};
        let iter = 0;
        let full = 0;

        for (let i in value) {
            dic[full] = [value[i], key[iter]];
            full += 1;
            iter += 1;
            if (iter >= key.length) {
                iter = 0;
            }
        }
        return dic;
    }

    fullEncode() {
        let dic = this.comparator(this.textCode, this.keyCode);
        console.log('Compare full encode', dic);
        let lis = [];
        let symbolsLength = 0;
        for (let i in this.symbols) {
            symbolsLength++;
        }


        for (let i in dic) {
            let go = (dic[i][0] + dic[i][1]) % symbolsLength;
            lis.push(go);
        }

        return lis;

    }

    encode() {
        let shifre = this.fullEncode();

    }

    decode() {

    }

}

let crypter = new superCrypter();
crypter.setText("Hello world");
crypter.setKey("key");
crypter.encode();