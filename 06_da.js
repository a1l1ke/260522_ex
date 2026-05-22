// 객체 구조 분해 할당
const obj = { name: "윌리엄", age: 18, job: "반찬가게 직원" };
const { name, age, job } = obj; // 이후에는 name 쓸 수 없음 (const)
console.log(`이름 : ${name}`);
console.log(`나이 : ${age}`);
console.log(`직업 : ${job}`);
function f() {
  return {
    name: "박자바",
  };
}
const { name: personName } = obj; // alias(별칭)
const { name: personName2 } = f();
console.log(personName, personName2);

const { salary, pet = "고양이", name: name2, ...rest } = obj;
// const { salary } = undefined; null 같이 좀 객체인가 싶은 애들 -> TypeError
console.log(salary); // 기본객체는 없는 것도 그냥...
console.log(pet); // 기본값
console.log(rest); // 선택 못 받은 객체 프로퍼티들은 나머지 연산자로 끌어올 수 있다
// 재할당, 얕은복사, 깊은복사
const obj2 = obj; // 재할당
console.log(obj2);
obj["name"] = "세바스찬";
console.log(obj2);
const obj3 = { ...obj };
const { ...obj4 } = obj;
obj["name"] = "좐";
console.log(obj3, obj4);
console.log("obj === obj2", obj === obj2);
console.log("obj === obj3", obj === obj3);

// 배열 구조 분해 할당
