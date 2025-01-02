function solution(arr) {
    var stk = [];
    while(true){
        if(arr.length === 0)
            break
        if(stk.length === 0){
            stk.push(arr[0])
            arr.shift()
            continue
        }
        if(arr[0] > stk[stk.length - 1]){
            stk.push(arr[0])
            arr.shift()
        } else{
            stk.pop()
        }
    }
        
    
    
    return stk;
}