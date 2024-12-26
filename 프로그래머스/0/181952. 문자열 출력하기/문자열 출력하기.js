// 데이터를 읽을 수 있는 스트림 (ex. 키보드입력 stdin, 스트림이란 데이터를 읽을 수 있는 통로)
const readline = require('readline');

// readline을 사용하기 위한 설정. 키보드 입력(stdin), 출력(stdout) 하는 통로를 만든다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

// 사용자가 엔터를 치면 입력한 내용을 input에 저장하며, 입력이 끝나면 input 배열의 첫 번째 값을 출력
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    console.log(input[0]);
});
