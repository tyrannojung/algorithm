/**
 * 선형 탐색 알고리즘
 * @param {Array} array - 탐색할 배열
 * @param {*} searchValue - 찾고자 하는 값
 * @returns {number} - 찾은 값의 인덱스 (없으면 -1 반환)
 * 
 * 시간복잡도: O(n) - n은 배열의 길이
 */
function linearSearch(array, searchValue) {
    // 입력 유효성 검사
    if (!Array.isArray(array)) {
        throw new Error('첫 번째 인자는 배열이어야 함.');
    }

    // 배열의 각 요소를 순차적으로 확인
    for (let index = 0; index < array.length; index++) {
        // 찾고자 하는 값과 일치하면 해당 인덱스 반환
        if (array[index] === searchValue) {
            return index;
        }
    }

    // 값을 찾지 못한 경우 -1 반환
    return -1;
}

// 사용 예시
const testArray = [10, 15, 20, 25, 30];
const searchValue = 20;

const result = linearSearch(testArray, searchValue);
console.log(result !== -1 
    ? `찾은 값의 위치: ${result}번 인덱스` 
    : '값을 찾을 수 없습니다.');