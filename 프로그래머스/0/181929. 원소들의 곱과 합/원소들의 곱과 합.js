function solution(num_list) {
    var answer = 0;
    let multiplication = 1;
    let sum = 0;
    
    for(let i =0; i< num_list.length; i ++){
        multiplication *= num_list[i]
        sum += num_list[i]
    }
    
    let sum_square = sum * sum

    if(sum_square > multiplication)
        answer = 1
    else
        answer = 0
    
    
    return answer;
}