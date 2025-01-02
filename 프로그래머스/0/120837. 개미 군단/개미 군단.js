function solution(hp) {
    var answer = 0;
    let attack_power = [5,3,1]
    let ant1 = 0;
    let ant2 = 0;
    let ant3 = 0;
    
    ant1 = Math.floor(hp / attack_power[0])
    hp = hp - (ant1 * attack_power[0])
    ant2 = Math.floor(hp / attack_power[1])
    hp = hp - (ant2 * attack_power[1])
    ant3 = hp
    
    answer = ant1 + ant2 + ant3
    
    return answer;
}