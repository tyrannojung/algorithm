function solution(num_list) {
    var answer = [...num_list];
    let last_num = num_list[num_list.length -1]
    let second_last_num = num_list[num_list.length -2]
   
    
    if(last_num >  second_last_num)
        answer.push(last_num - second_last_num)
    else
        answer.push(last_num * 2)
    
    return answer;
}