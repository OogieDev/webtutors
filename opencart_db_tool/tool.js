const readLine = require('readline');

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter fields\n', function (out) {

    doString(out);

});

function doString(fieldsStr) {

    let fields = fieldsStr.split(' ');

    let result = '"';

    for (let i = 0; i < fields.length; i++) {
        if (i == fields.length - 1) {
            result += fields[i] + ` = '" . $data['${fields[i]}'] . "'"`;
            continue;
        }
        result += fields[i] + ` = '" . $data['${fields[i]}'] . "', `;
    }

    console.log(result);

}

