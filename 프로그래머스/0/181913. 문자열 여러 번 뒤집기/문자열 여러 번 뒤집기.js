function solution(my_string, queries) {
    var answer = '';
    let string_array = my_string.split("")
    
    for(let i = 0; i < queries.length; i++){
        let new_array = string_array.slice(queries[i][0], queries[i][1] +1)
        new_array.reverse();
        let index = 0;
        for(let z = queries[i][0]; z <= queries[i][1]; z ++){
            string_array[z] = new_array[index]
            index ++
        }
    }
    answer = string_array.join('')
    
    return answer;
}