function solution(a, b, c) {
    var answer = 0;
    
    switch(true) {
        case a === b && a===c && b === c :
           answer = (a+b+c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c)
           break;
        case a !== b && a !== c && b!== c :
           answer = (a+b+c)
           break;
        default:
           answer = (a+b+c) * (a*a + b*b + c*c)
            
    }
    
    return answer;
}