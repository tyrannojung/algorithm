function solution(num_list) {
    var answer = 0;
    let even_num = "";
    let odd_num = "";
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0)
            even_num += (num_list[i] + "")
        else
            odd_num += (num_list[i] + "")
    }
    
    answer = parseInt(even_num) + parseInt(odd_num)
    
    return answer;
}