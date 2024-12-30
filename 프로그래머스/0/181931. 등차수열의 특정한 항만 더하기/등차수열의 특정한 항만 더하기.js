function solution(a, d, included) {
    var answer = 0;
    let arithmetic_sequence_array = [a]
    let sum_count = a;
    for(i = 1; i < included.length; i++){
        arithmetic_sequence_array.push(sum_count += d)
    }
    
    for(z = 0; z < included.length; z++){
        if(included[z]){
            answer += arithmetic_sequence_array[z]
        }    
    }

    return answer;
}