function solution(slice, n) {
    var answer = 0;
    let pizza_count = 1;
    while(true){
        if(Math.floor(slice * pizza_count / n) === 0){
            pizza_count ++
        } else 
            break
    }
    answer = pizza_count
    return answer;
}