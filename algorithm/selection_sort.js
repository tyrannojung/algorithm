/**
 * 선택 정렬 알고리즘
 * @param {Array} array - 정렬할 배열
 * @returns {Array} - 정렬된 새 배열
 * 
 * 시간복잡도: O(n²) - n은 배열의 길이
 * 
 * 특징: 
 * - 불안정 정렬 (동일한 값의 순서가 보장되지 않음)
 * - 정렬 상태와 관계없이 항상 동일한 시간 소요
 */
function selectionSort(array) {
    // 입력 유효성 검사
    if (!Array.isArray(array)) {
        throw new Error('입력값이 배열이 아닙니다.');
    }

    // 원본 배열을 수정하지 않기 위해 복사
    const result = [...array];
    const length = result.length;

    // 전체 배열을 순회
    for (let i = 0; i < length - 1; i++) {
        // 현재 위치를 최솟값의 위치로 설정
        let minIndex = i;

        // i 다음 위치부터 배열 끝까지 순회하며 최솟값 찾기
        for (let j = i + 1; j < length; j++) {
            // 현재 최솟값보다 작은 값을 발견하면 minIndex 업데이트
            if (result[j] < result[minIndex]) {
                minIndex = j;
            }
        }

        // 최솟값이 현재 위치와 다르다면 swap
        if (minIndex !== i) {
            [result[i], result[minIndex]] = [result[minIndex], result[i]];
        }
    }

    return result;
}

// 사용 예시
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('정렬 전:', testArray);

try {
    const sortedArray = selectionSort(testArray);
    console.log('정렬 후:', sortedArray);
    console.log('원본 배열:', testArray); // 원본 배열은 변경되지 않음
} catch (error) {
    console.error('오류:', error.message);
}

// 중복 값이 있는 배열 테스트
const duplicateArray = [64, 34, 25, 12, 22, 11, 90, 34];
console.log('\n중복 값이 있는 배열 테스트');
console.log('정렬 전:', duplicateArray);
console.log('정렬 후:', selectionSort(duplicateArray));