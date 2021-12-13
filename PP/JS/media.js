// window.addEventListener("load"()=>{

// });

function showMenu(){

  // 함수호출확인
  // alert("나야나");

  // 1.변경대상 선정 : .gnb
  // 선택요소를 gnb 라는 이름의 변수에 담는다
  var gnb = 
  document.getElementsByClassName("gnb").item(0);
  // 전체문서.가져와클래스(클래스명).몇번째(0)

  // 2. 변경내용 : 대상에게 클래스 "on"넣거나 빼기
  gnb.classList.toggle("on");
}