function solution(array) {
    var answer = 0;
    let test_num = -1;
    let test_num_count = -1;
    let answer_list=[]
    
    console.log(array)
    console.log(array.sort())
    
    if(array.length === 1){
        return array[0]
    }
    
    for(let i = 0; i < array.length; i++){
        
        if(test_num === -1 && test_num_count === -1){
            test_num = array[i]
            test_num_count = 1
            continue
        }
        
        if(test_num !== array[i]){
            answer_list.push([test_num, test_num_count])
            test_num = array[i]
            test_num_count = 1
            
            if(array.length === i+1){
                answer_list.push([test_num, test_num_count])
                break
            }
            continue
        } else{
            test_num_count++
            if(array.length === i+1){
                answer_list.push([test_num, test_num_count])
                break
            }
        }
    }
    
    let max_num = answer_list[0][1];
    let max_num_index = 0;
    let max_num_count = 1;
    for(let z=1; z < answer_list.length; z++){
        if(answer_list[z][1] > max_num){
            max_num = answer_list[z][1]
            max_num_index = z
            max_num_count = 1
            continue
        }
        if(answer_list[z][1] === max_num){
            max_num_count ++;
        }
    }
    
    if(max_num_count > 1){
        return -1
    } else{
        return answer_list[max_num_index][0]
    }
    
    return answer;
}