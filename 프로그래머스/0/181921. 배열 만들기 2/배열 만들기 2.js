function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++){
        if(i % 5 === 0){
            if(i === 5){
                answer.push(i)
                continue
            }
            let check_array = String(i).split("")
            let check_count = 0;
            if(check_array[0] === "5"){
                for(let z = 0; z < check_array.length; z++){
                    if(check_array[z] === "5" || check_array[z] === "0")
                        check_count ++
                }        
            }
            if(check_count === check_array.length)
                answer.push(i)
        
        }
    }
    if(answer.length === 0)
        answer.push(-1)
    
    return answer;
}