let bt_addStudent = document.getElementById("addStudentBt");
let bt_deleteStudent = document.getElementById("deleteStudentBt");
let content = document.getElementsByClassName("content");
let grade = document.getElementsByClassName("grade");
let tbody_tbody1 =document.getElementById("tbody1");

let chk_check = document.getElementsByClassName("chk");
let avgGrade = document.getElementById("avgGrade");
let tot = document.getElementById("numberOfStudent");
let checkedList = new Array();

bt_addStudent.addEventListener("click",add_row);
bt_deleteStudent.addEventListener("click",delete_handler);

//bt_addStudent.addEventListener("click",function,boolean); -> 가장 대표적인 형태
// boolean 있어도 되고 없어도 됨. 이벤트 버블링, 캡쳐링 과정에서 쓰는 변수임.
//보통 click과 function만 사용 click이라는 이벤트가 실행되었을 때 function이라는 함수를 실행시키겠다
/* 
    -chk_check.addEventListener("click",alert);
    ->이렇게 쓰면 안돌아감. chk 클래스를 가지는 애들이 배열로 들어오기 때문에
    */
   
   
   //<평균 학점 계상, 총 인원 계산>
window.onload = function(){
    avgGrade.innerHTML=0;
    tot.innerHTML=content.length;
    
    //학점 평균 계산
    let sum=0;
    for(let i=1; i<content.length+1;i++){
        chk_check[i-1].addEventListener("click",getChekced);
        //
        let td_grade = grade[i].innerHTML;    
        switch(td_grade){
            case 'A+': sum += 4.5;
            break;
            default: sum += 3.0;
            break;
        }
        //if 조건 보다 switch를 더 추천 -> 성능상 좋음 앵간 스위치로 처리하기
    }
    sum = sum/content.length;
    avgGrade.innerHTML=sum;

}
/*
window.onload=funtion(){
    html 파일 로드 후 무언가를 해달라
    이 괄호 안에 code는 html 로드 이후에 실행됩니다. 
} 
*/

/*html 파일을 받아오고 element를 구성하는 시간과 js를 구성하는 시간이 다를 수도 있다. 
    -onload : HTML 파일이 다 로드된 다음에 해당 함수를 실행하시오
        ->한번만 사용될 일회용 함수가 사용됨.
        ->로드 이후에 평균 학점과 총 인원을 계산해야 하므로 onload 사용
    -innerHTML -> 해당 값을 변경하고자 할때 사용 span에 해당하는 내용을 가리킨다
        -> 자동으로 Stirng으로 변환->HTML에 적힐 때
*/

function getChekced(){//반복을 돌면서 체크되어있는 것을 확인
    let arr = new Array(); // 새로운 배열 선언
    for(let i=0;i<chk_check.length;i++){
        if(chk_check[i].checked){ // 체크박스가 체크가 되어있을 때
            arr.push(i); // 배열에 값을 넣어준다
        }
    }
    checkedList =arr;
    console.log(checkedList);
}
//<추가>
function add_row(){
    let row = tbody_tbody1.insertRow(-1);
    row.className += "content";

    let checkbox = document.createElement("input"); // input이라는 element를 가지는 변수 생성
    checkbox.className ="chk";//클래스 지정
    checkbox.type="checkbox"; // input 타입 지정

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.appendChild(checkbox); // 체크박스 추가 
    cell2.innerHTML = 11;
    cell3.innerHTML = 20190000;
    cell4.innerHTML = 21;
    cell5.className += "grade"; //class지정
    cell5.innerHTML = "A";//값 설정

    avgGrade.innerHTML=0;
    tot.innerHTML=content.length;
    
    let sum=0;
    for(let i=1;i<content.length+1;i++){
        let td_grade = grade[i].innerHTML;    
        switch(td_grade){
            case 'A+': sum += 4.5;
                break;
            default: sum += 3.0;
                break;
        }
    }
    sum = sum/content.length;
    sum =sum.toFixed(2);
    avgGrade.innerHTML=sum;
    checkbox.addEventListener("click",getChekced); // 추가되는 셀에서도 체크 가능
}
/*
- let row = tbody_tbody1.insertRow(tbody_tbody1.rows.length);
- insertRow(추가하고자 하는 위치);
    가장 마지막 줄에 추가하는 경우는 인자가 -1이면 된다.
-.className = class 지정 가능
-element를 붙이는 방법 => appendChild 그냥 알고만 있기 뒤에 할거임 아마 ㅇㅇ
-toFixed(n) 소숫점 n번째자리까지 자름
*/

function k(){
    alert("!");
}
//<삭제>
function delete_handler(){
    if(checkedList.length){
        delete_checkedRows();
    }else{
        delete_row();
    }
}
function delete_row(){
    tbody_tbody1.deleteRow(-1);
    let sum=0;
    for(let i=1;i<content.length+1;i++){
        let td_grade = grade[i].innerHTML;    
        switch(td_grade){
            case 'A+': sum += 4.5;
                break;
            default: sum += 3.0;
                break;
        }
    }
    if(content.length==0){
        sum=0;
    }else{
        sum = sum/content.length;
        sum =sum.toFixed(2);
    }
    avgGrade.innerHTML=sum;
    tot.innerHTML=content.length;

}
function delete_checkedRows(){
    while(checkedList.length!=0){
        tbody_tbody1.deleteRow(checkedList.pop());
    }
    let sum=0;
    for(let i=1;i<content.length+1;i++){
        let td_grade = grade[i].innerHTML;    
        switch(td_grade){
            case 'A+': sum += 4.5;
                break;
            default: sum += 3.0;
                break;
        }
    }
    if(content.length==0){
        sum=0;
    }else{
        sum = sum/content.length;
        sum =sum.toFixed(2);
    }
    avgGrade.innerHTML=sum;
    tot.innerHTML=content.length;
}