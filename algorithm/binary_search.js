/**
 * 이진 탐색 알고리즘
 * @param {Array} array - 정렬된 배열
 * @param {*} searchValue - 찾고자 하는 값
 * @returns {number} - 찾은 값의 인덱스 (없으면 -1 반환)
 * 
 * 시간복잡도: O(log n) - n은 배열의 길이
 * 조건: 배열이 오름차순으로 정렬되어 있어야 함
 */
function binarySearch(array, searchValue) {
    // 입력 유효성 검사
    if (!Array.isArray(array)) {
        throw new Error('첫 번째 인자는 배열이어야 함.');
    }

    // 정렬 여부 확인
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            throw new Error('배열이 정렬되어 있지 않습니다.');
        }
    }

    // 탐색 범위의 시작과 끝 인덱스
    let start = 0;
    let end = array.length - 1;

    // 탐색 범위가 유효한 동안 반복
    while (start <= end) {
        // 중간 인덱스 계산
        // Math.floor 입력 값 소수 점 내림.
        let mid = Math.floor((start + end) / 2);

        // 중간값이 찾는 값과 같으면 해당 인덱스 반환
        if (array[mid] === searchValue) {
            return mid;
        }
        
        // 중간값이 찾는 값보다 크면 왼쪽 부분 탐색
        if (array[mid] > searchValue) {
            end = mid - 1;
        }
        // 중간값이 찾는 값보다 작으면 오른쪽 부분 탐색
        else {
            start = mid + 1;
        }
    }

    // 값을 찾지 못한 경우 -1 반환
    return -1;
}

// 사용 예시
const testArray = [10, 15, 20, 25, 30, 35, 40];
const searchValue = 25;

try {
    const result = binarySearch(testArray, searchValue);
    console.log(result !== -1 
        ? `찾은 값의 위치: ${result}번 인덱스` 
        : '값을 찾을 수 없습니다.');
} catch (error) {
    console.error('오류:', error.message);
}