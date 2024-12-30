function solution(n) {
    var answer = 0;
    let pizza_piece = 6
    let pizza_count = 1;
    
    while(true){
        if(pizza_count * pizza_piece % n !== 0){
            pizza_count ++
        }
        else{
            break
        }
    }
    answer = pizza_count
    
    return answer;
}