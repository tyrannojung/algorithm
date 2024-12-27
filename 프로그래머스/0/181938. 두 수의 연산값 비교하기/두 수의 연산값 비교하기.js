function solution(a, b) {
    var answer = 0;
    let sum1 = a+"" + b+"";
    let sum2 = 2 * a * b
    
    if(sum1 > sum2)
        answer = parseInt(sum1)
    else
        answer = parseInt(sum2)
    
    
    return answer;
}