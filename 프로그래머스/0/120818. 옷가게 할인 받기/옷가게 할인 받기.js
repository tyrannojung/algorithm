function solution(price) {
    var answer = 0;
    switch(true) {
        case price >= 500000:
            price = price * 0.8;
            break;
        case price >= 300000:
            price = price * 0.9;
            break;
        case price >= 100000:
            price = price * 0.95;
            break
    }
    answer = Math.floor(price)
    return answer;
}