function solution(n) {
    var answer = 0;
    if(n % 2 !== 0){
        for (i = 1; i <= n; i++){
            answer += i
            i++
        }
    }
    else{
        for(i = 2; i <= n; i++){
            answer += i*i
            i++
        }
    }
        
    return answer;
}