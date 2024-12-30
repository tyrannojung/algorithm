function solution(code) {
    var answer = '';
    let code_array = code.split("")
    let mode = true;
    
    for(let i = 0; i < code_array.length; i++){
        if(code_array[i] === "1"){
            mode = !mode
            continue
        } 
        
        if(mode){
            if(i % 2 === 0){
                answer += code_array[i]
            }
        } 
        else {
            if(i % 2 !== 0){
                answer += code_array[i]
            }
        }
    }
    if(answer === "")
        answer = "EMPTY"
    
    return answer;
}