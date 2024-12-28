/**
 * 버블 정렬 알고리즘
 * @param {Array} array - 정렬할 배열
 * @returns {Array} - 정렬된 새 배열
 * 
 * 시간복잡도: O(n²) - n은 배열의 길이
 * 
 * 특징: 
 * - 안정 정렬 (동일한 값의 순서가 보존됨)
 * - 이미 정렬된 경우 최적의 성능 O(n)
 */
function bubbleSort(array) {
    // 입력 유효성 검사
    if (!Array.isArray(array)) {
        throw new Error('입력값이 배열이 아닙니다.');
    }

    // 원본 배열을 수정하지 않기 위해 복사
    const result = [...array];
    const length = result.length;

    // 최적화를 위한 스왑 발생 여부 체크 변수
    // 해당 변수의 체크가 없으면, 배열이 이미 정렬되어 있어도 모든 반복문을 다 실행
    // 한 번의 순회에서 자리바꿈이 전혀 일어나지 않았다면 → 이미 정렬이 완료된 상태
    // swapped = false로 유지되면 → break로 반복문 종료
    let swapped;

    // 외부 루프: 전체 배열을 순회
    for (let i = 0; i < length - 1; i++) {
        swapped = false;

        // 내부 루프: 인접한 요소들을 비교하여 정렬
        for (let j = 0; j < length - 1 - i; j++) {
            // 현재 요소가 다음 요소보다 크면 swap
            if (result[j] > result[j + 1]) {
                // 구조분해할당을 이용한 swap
                [result[j], result[j + 1]] = [result[j + 1], result[j]];

               // 구조분해할당을 사용하지 않은 전통적인 swap 방식
               // let temp = result[j];
               // result[j] = result[j + 1];
               // result[j + 1] = temp;
               
                swapped = true;
            }
        }

        // 만약 swap이 한 번도 일어나지 않았다면 이미 정렬된 상태
        if (!swapped) {
            break;
        }
    }

    return result;
}

// 사용 예시
const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('정렬 전:', testArray);

try {
    const sortedArray = bubbleSort(testArray);
    console.log('정렬 후:', sortedArray);
    console.log('원본 배열:', testArray); // 원본 배열은 변경되지 않음
} catch (error) {
    console.error('오류:', error.message);
}

// 이미 정렬된 배열에서의 테스트
const sortedTestArray = [1, 2, 3, 4, 5];
console.log('\n정렬된 배열 테스트');
console.log('정렬 전:', sortedTestArray);
console.log('정렬 후:', bubbleSort(sortedTestArray));