function solution(a, b, c, d) {
    var answer = 0;
    let dice_array = [a,b,c,d]
    let check_array = []
    let check_sum = 0;
    for(let i = 0; i < dice_array.length; i++){
        let check_count = 0;
        for(let z = 0; z < dice_array.length; z++){
            if(dice_array[i] === dice_array[z])
                check_count ++
            if(z === dice_array.length -1){
                check_array.push(check_count)
                check_sum += check_count
                break
            }
        }
    }
    
    switch(check_sum){
        case 16:
            answer = 1111 * a
            break
        case 10:
            let one_value = 0;
            let three_value = 0;
            for(let k = 0; k < check_array.length; k++){
                if(check_array[k] === 1)
                    one_value = dice_array[k]
                else
                    three_value = dice_array[k]
            }
            let calculate_value = 10 * three_value + one_value
            answer = calculate_value * calculate_value
            break
        case 8:
            let check_value1 = 0;
            let check_value2 = 0;
            for(let z = 0; z < check_array.length; z++){
                if(z === 0){
                    check_value1 = dice_array[z]
                    continue
                }
                
                if(check_value1 !== dice_array[z]){
                    check_value2 = dice_array[z]
                    break
                }
            }
            answer = (check_value1 + check_value2) * Math.abs((check_value1 - check_value2))
            break
        case 6:
            let value1 = 0;
            let value2 = 0;
            let value3 = 0;
            for(let y = 0; y < check_array.length; y++){
                if(check_array[y] === 2){
                    value1 = dice_array[y]
                }
                if(check_array[y] === 1 && value2 === 0) {
                    value2 = dice_array[y]
                    continue
                }
                if(check_array[y] === 1 && dice_array[y] != value2){
                    value3 = dice_array[y]
                    continue   
                }
            }
            answer = value2 * value3
            break
        case 4:
            dice_array.sort()
            answer = dice_array[0]
            break
            
    }
    
    return answer;
}