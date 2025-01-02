function solution(arr, queries) {
    var answer = [];
    
    for(let i = 0; i< queries.length; i++ ){
        for(let z = queries[i][0]; z < queries[i][1] + 1; z ++){
            if(z % queries[i][2] === 0){
                arr[z] = arr[z] + 1
            }
        }
    }
    
    answer = [...arr]
    
    return answer;
}