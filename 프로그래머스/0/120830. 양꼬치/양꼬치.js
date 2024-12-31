function solution(n, k) {
    var answer = 0;
    const lamb_price = 12000
    const juice_price = 2000
    
    answer = lamb_price * n + juice_price * k - (Math.floor(n / 10) * 2000)  
    
    return answer;
}