function solution(angle) {
    var answer = 0;
    
    switch(true) {
        case angle === 180:
            answer = 4;
            break
        case angle > 90:
            answer = 3;
            break
        case angle === 90:
            answer = 2;
            break
        default:
            answer = 1;
            break
            
    }
    
    return answer;
}