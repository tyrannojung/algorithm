function solution(number) {
    var answer = 0;
    let number_array = number.split("")
    let sum_num = 0;
    for(let i = 0; i < number_array.length; i++){
        sum_num += parseInt(number_array[i])
    }
    answer = sum_num % 9
    return answer;
}