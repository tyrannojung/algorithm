function solution(ineq, eq, n, m) {
    var answer = 0;
    let bool_val = false;
    
    if(ineq === ">" && eq === "=")
        bool_val = n >= m
    else if(ineq === "<" && eq === "=")
        bool_val = n <= m
    else if (ineq === ">" && eq ==="!")
        bool_val = n > m
    else
        bool_val = n < m
    
    if(bool_val)
        answer = 1
    else
        answer = 0

        
    return answer;
}