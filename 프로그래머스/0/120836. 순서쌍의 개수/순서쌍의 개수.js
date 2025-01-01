function solution(n) {
    var answer = 0;
    let first_num = n;
    let calculator_num = 1;

    while(true){
        if(first_num === 0)
            break
        if(first_num * calculator_num > n){
            first_num --
            calculator_num = 0;
            continue
        }
        if(n === first_num * calculator_num)
            answer ++
        calculator_num ++
    }
    
    return answer;
}