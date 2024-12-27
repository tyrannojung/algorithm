function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // numer1 ,2 분자
    // denom1 ,2 분모
    let LCM = 0;
    let low_value = denom1 * denom2
    let top_value = (numer1 * denom2) + (numer2 * denom1)
    
    let inner_value1 = 0;
    let inner_value2 = 0;
    let remain = -1;
    let GCD = 0;
    
    if(low_value > top_value){
        inner_value1 = low_value
        inner_value2 = top_value
    } else {
        inner_value1 = top_value
        inner_value2 = low_value
    }
    
    while(true) {
        remain =  inner_value1 % inner_value2
        if (remain !== 0 ){
            inner_value1 = inner_value2;
            inner_value2 = remain
            continue
        }
        GCD = inner_value2
        break
    }

    
    
    console.log(GCD)
    answer[0] = top_value / GCD
    answer[1] = low_value / GCD
    
    return answer;
}