function solution(x1, x2, x3, x4) {
    var answer = true;
    let check1 = x1 || x2
    let check2 = x3 || x4
    answer = check1 && check2
    
    return answer;
}