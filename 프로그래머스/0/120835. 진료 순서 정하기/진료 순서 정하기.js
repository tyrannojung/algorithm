function solution(emergency) {
    var answer = [];
    const new_array = [...emergency]
    new_array.sort((a,b) => (a-b))
    
    for(let i = 0; i < emergency.length; i ++){
        let count = 1;
        for (let z = new_array.length -1; 0 <= z; z --){
            if(emergency[i] === new_array[z]){
                answer.push(count)
                break
            }
            count ++
        }
    }
    
    return answer;
}