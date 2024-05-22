/*  여러가지 타입  */
console.log(typeof 'STRING') // String 타입 : 문자열
console.log(typeof 1) // number 타입 : 숫자 (int, double, float 등)
console.log(typeof true) // boolean 타입 : 참/거짓
console.log(typeof {}) // object 타입 : 객체 (e.g. Error, Array, Object 등)

// Object
console.log({ a: true, b: 2, c: 'string' }) // 파이썬의 딕셔너리와 유사 / 값의 종류는 다양해도 상관없음

// Array
console.log([ 1, 'two', 3, 4 ]) // 파이썬의 배열과 동일


/*  변수 선언  */

// 변수 : const로 변수 선언시 재선언 및 재할당 불가
const const_변수명 = "변수값"
const_변수명 = "" // 재할당 불가
console.log(const_변수명)
// Output : TypeError: Assignment to constant variable. # ERROR

// 변수 : let으로 변수 선언시 재선언 불가 / 재할당 가능
let let_변수명 = "변수값"
let_변수명 = "변경된 변수값" // 재할당 가능
console.log(let_변수명)
// Output : 변경된 변수값

// 변수 : var로 변수 선언시 재선언 및 재할당 가능
var var_변수명 = "변수값"
var var_변수명 = "변경된 변수값" // 재"선언" 가능
console.log(var_변수명)
// Output : 변경된 변수값


/*  조건문  */
const 이름 = '김진호'
if(/* 조건내용 (결과값이 boolean이면 어떤 내용도 상관 X)*/ 이름 == '김진호' /* true인 값 */) {
    console.log('김진호가 맞음')
    // true일때 실행됨
} else {
    console.log('김진호가 아님')
    // false일때 실행됨
}
/*
if(조건 A) {
    조건 A가 true일때
} else if(조건 B) {
    조건 A가 false이고 조건 B가 true일때
} else {
    조건 A와 조건 B가 모두 false일때
}
*/

// OR / AND 사용법
const 조건A = true
const 조건B = false
if(조건A || 조건B) {
    // 조건A 또는 조건B 둘중 한가지 이상이 true일때
}
if(조건A && 조건B) {
    // 조건A 와 조건B 모두 true일때

    /* 주의사항 */
    // 조건A가 false일 경우 조건B는 실행되지 아니함. (즉, 왼쪽부터 오른쪽 순서로 실행되나 중간에 false일 경우 즉시 중단됨.)
}



/*  반복문  */
let 반복횟수 = 0
while(/* 조건 (결과값이 boolean이면 어떤 내용도 상관 X)*/ 반복횟수 < 10) {
    console.log(반복횟수)
    반복횟수 ++
}

for(/* 변수선언 및 초기화 */let index = 0; /* 반복조건 */index < 10; /* 반복시 실행할 내용 */index++) {
    console.log(반복횟수)
    // for문의 변수선언 및 초기화 부분에서는 const 사용 불가
}

// break : while문, for문 내부에서 해당 반복문을 중지할 때 사용
// continue : 반복문 내에서 해당 코드가 사용될 경우 이후 내용은 무시하고 바로 다음 반복 실행

while(true) {
    console.log("BREAK")
    break
}
// Output : BREAK (1번만 실행됨)

let 반복횟수2 = 0
while(반복횟수2 !== 2) {
    if(반복횟수2 == 1) continue
    반복횟수2++
}
// Output : 무한루프 (Timeout) - 반복횟수2가 1일때 증가할 수 없음

// switch / case 문
const 구별대상 = '구본찬'
switch (구별대상) {
    case '구본찬':
        console.log('바보다')
        break
    case '김도윤':
        console.log('진짜 바보다')
        break
    default:
        console.log('아무것도 아니다')
        break
}
// 위 코드는 아래와 동일함
if(구별대상 == '구본찬') {
    console.log('바보다')
} else if(구별대상 == '김도윤') {
    console.log('진짜 바보다')
} else {
    console.log('아무것도 아니다')
}

/* 주의사항 */
// switch / case 문에서 break 사용 안하면 해당 case 이후의 모든 case 부분이 작동됨
switch ("A") {
    case 'A': console.log('이건 A')
    case 'B': console.log('이건 B')
    default: console.log('이건 암것도 아님')
}
// Output : 이건 A\n이건B\n이건 암것도 아님 (3개가 모두 실행됨)
// 활용법
const 남학생 = '구본찬'
switch (남학생) {
    case '구본찬':
    case '김도윤':
    case '김진호':
        console.log('2학년')
        break
    case '오승찬':
    case '박재현':
        console.log('1학년')
        break
}
// 위 코드는 아래 코드와 동일
if(남학생 == '구본찬' || 남학생 == '김도윤' || 남학생 == '김진호') {
    console.log('2학년')
} else if(남학생 == '오승찬' || 남학생 == '박재현') {
    console.log('1학년')
}


/*  함수  */
// 함수 선언법
function 함수명 () {
    return
}
const 함수명 = () => {
    return
}
// 둘다 동일함

// 파라미터 전달
function 함수명 (이름) {
    if(이름 == '이현명') {
        return '디자이너'
    }
    return '누구?'
}
// 호출법
const 이름함수호출결과 = 함수명('이름') // => 이름에 이현명을 넣을 경우 "디자이너" 가 돌아옴
console.log(이름함수호출결과)
// Output : 누구?

const 이현명함수호출결과 = 함수명('이현명')
console.log(이현명함수호출결과)
// Output : 디자이너


/*
####### 남은 시간동안 해볼것

- JUST 학생의 이름을 넣으면 학년, 성별이 나오는 함수를 만들어보자
조건 : switch case 문을 이용할 것


예시)
저스트멤버찾기('이현명') // Output : 2학년남자
*/