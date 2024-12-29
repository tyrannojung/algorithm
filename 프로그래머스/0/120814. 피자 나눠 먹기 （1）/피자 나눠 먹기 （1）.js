function solution(n) {
    var answer = 0;
    const pizza_piece = 7
    let pizza_count = 1;
    
    if(n > pizza_piece){
        if(n % pizza_piece === 0)
            answer = n / pizza_piece
        else {
            answer = Math.floor(n / pizza_piece) + 1
        }
    }else
        answer = 1
    
    return answer;
}