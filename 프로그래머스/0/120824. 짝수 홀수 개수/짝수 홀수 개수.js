function solution(num_list) {
    var answer = [];
    let even_count = 0;
    let odd_count = 0;
    
    for(let i =0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0)
            even_count ++
        else
            odd_count ++
    }
    answer = [even_count, odd_count]
    
    return answer;
}