/**
 * 삽입 정렬 알고리즘
 * @param {Array} array - 정렬할 배열
 * @returns {Array} - 정렬된 새 배열
 * 
 * 시간복잡도: 
 * - 최악의 경우: O(n²) - 역순으로 정렬된 경우
 * - 최선의 경우: O(n) - 이미 정렬된 경우
 * 
 * 특징: 
 * - 안정 정렬 (동일한 값의 순서가 보존됨)
 * - 실시간으로 들어오는 데이터 정렬에 유용
 */
function insertionSort(array) {
    // 입력 유효성 검사
    if (!Array.isArray(array)) {
        throw new Error('입력값이 배열이 아닙니다.');
    }

    // 원본 배열을 수정하지 않기 위해 복사
    const result = [...array];
    const length = result.length;

    // 두 번째 요소부터 시작 (첫 번째 요소는 이미 정렬된 것으로 취급)
    for (let i = 1; i < length; i++) {
        // 현재 삽입할 요소를 선택
        const currentValue = result[i];
        let j = i - 1;

        // 정렬된 부분에서 삽입할 위치를 찾음
        // 현재 선택한 값보다 큰 원소는 오른쪽으로 이동
        while (j >= 0 && result[j] > currentValue) {
            result[j + 1] = result[j];
            j--;
        }

        // 찾은 위치에 현재 값을 삽입
        result[j + 1] = currentValue;
    }

    return result;
}

// 사용 예시
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('정렬 전:', testArray);

try {
    const sortedArray = insertionSort(testArray);
    console.log('정렬 후:', sortedArray);
    console.log('원본 배열:', testArray); // 원본 배열은 변경되지 않음
} catch (error) {
    console.error('오류:', error.message);
}

// 거의 정렬된 배열 테스트 (삽입 정렬이 효율적인 경우)
const nearSortedArray = [1, 2, 3, 5, 4, 6, 7];
console.log('\n거의 정렬된 배열 테스트');
console.log('정렬 전:', nearSortedArray);
console.log('정렬 후:', insertionSort(nearSortedArray));