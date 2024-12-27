function solution(a, b) {
    var answer = 0;
    var sum1 = 0;
    var sum2 = 0;
    
    sum1 = parseInt(a+""+b+"")
    sum2 = parseInt(b+""+a+"")
    
    if(sum1 > sum2) 
        answer = sum1
    else
        answer = sum2
    
    return answer;
}