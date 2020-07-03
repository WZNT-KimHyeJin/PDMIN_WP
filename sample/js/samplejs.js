let a; //변수 지정은 let으로 한다
a =0;
a="lang";
a=2.3;
//어떤 값을 넣어도 실행 과정에서 오류가 없음 
/*
타입이 엄격하지 않기때문에 타입 미스매치를 주의해야 함
js 같은 경우는 html이 있는 id, class등으 ㅣ로드 값으로 값을 가져오는데
값을 가져올 때 묵시적으로 string타입으로 반환되게 되어있음.
예를 들어 sample의 id가 a 인 span에 해당하는 값을 가지고 올 때 그 값인 0은 텍스트로 반환이 된다.
 */

 a=document.getElementById("a");
 let b = a.innerHTML; // => String 형태임
 /* 혹여 HTML에서의 a값이 정수라고 정수로 취급하면 
    ☆작살☆이 날 수 있음주의해야 함
  */

  document.getElementById();
  //id는 고유하게 단 하나이기 때문에 Element이고 
  document.getElementsByClassName();
  //클래스는 HTML에서 클래스로 여러개를 줄 수있기 때문에 Elements이다

  //이제 이걸 변수에 저장
  let b = document.getElementById("a");
  /* 
  a를 불러오게 될 때 id가 a인 어트리뷰트 전체를 가지고 오게 됨
  == 반환형을 Object 타입
  console 창에 찍었을 때 전체 태그가 찍히는 것을 확인할 수 있음
*/

let c = document.getElementsByClassName("b");

/*  getElementById VS getElementsByClassName
    id 는 딱 하나이기 때문에 하나의 어트리뷰트만 가지고 옴

    class는 여러개를 줄 수 있기 때문에 해당 클래스를 가지고있는
    모든 어트리뷰트가 넘어온다. == 배열의 형태로 담겨오게 된다

    ☆단일형태 -> 그냥 사용
    ☆복수형태 -> 배열로 접근 해야 함.
    */
//접근 시
c[0].innerHTML;
c[1].innerHTML;
//이런 식으로 배열의 형태로 접근
console.log(); // console에 출력해주는 기능 자바의 print와 같은 역할
//개발자모드를 키고 확인해야 함 개발자모드 키지 않은면 화면에 아무것도 나타나지 않음. 

alert("1");//경고창 -> 위에 코드 다 지우고 해야 뜸
console.log("2"); // 콘솔창에 뜸

/* 
<정리>
alert();
console.log();
document.getElementById();
document.getEmelentsByClassName();
 */

