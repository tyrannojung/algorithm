function solution(arr, queries) {
    var answer = [...arr];
    for(let i = 0; i < queries.length; i++){
        let first_index = queries[i][0]
        let second_index = queries[i][1]
        let temp = answer[first_index];
        
        answer[first_index] = answer[second_index];
        answer[second_index] = temp;
        
    }
    
    
    return answer;
}