const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function swap(string) {
    if (string === string.toUpperCase()) {
        return string.toLowerCase()
    }
    else {
        return string.toUpperCase()
    }
}

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    ans = ''
    for (i=0;i<str.length;i++) {
        ans+=swap(str[i])
    }
    console.log(ans)
});
