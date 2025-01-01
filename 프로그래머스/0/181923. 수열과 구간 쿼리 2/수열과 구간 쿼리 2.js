function solution(arr, queries) {
    var answer = [];
    
    for(let i = 0; i < queries.length; i++){
        let first_num = queries[i][0]
        let second_num = queries[i][1]
        let third_num = queries[i][2]
        
        let minimum = 0;
        for(let z = first_num; z < second_num + 1; z++){
            if(arr[z] > third_num) {
                if (minimum === 0){
                     minimum = arr[z]
                     continue
                }
                if (arr[z] < minimum){
                    minimum = arr[z]
                }
            }
            
        }
        if(minimum === 0){
            answer.push(-1)
        } else {
            answer.push(minimum)
            minimum = 0
        }
            
    }
    
    return answer;
}