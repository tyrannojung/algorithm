function solution(money) {
    var answer = [];
    let ice_coffee_price = 5500;
    let cup_count = 0;
    let remain_money = 0;
    
    remain_money = money % ice_coffee_price
    cup_count = Math.floor(money / ice_coffee_price)
    answer = [cup_count, remain_money]
    
    
    return answer;
}