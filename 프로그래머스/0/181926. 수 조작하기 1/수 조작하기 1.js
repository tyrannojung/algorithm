function solution(n, control) {
    var answer = n;
    let control_array = control.split("");
    
    for(let i = 0; i < control_array.length; i++){
        switch(control_array[i]) {
            case "w":
                answer += 1
                break
            case "s":
                answer -= 1
                break
            case "d":
                answer += 10
                break
            case "a":
                answer -= 10
                break
        } 
    }
    
    
    
    
    return answer;
}