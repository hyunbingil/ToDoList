const toDoForm = document.querySelector(".js-toDoForm"), // todo 리스트 적는 곳 전체
    toDoInput = toDoForm.querySelector("input"), // todo 리스트 적는 부분
    toDoList = document.querySelector(".js-toDoList"); // todo 리스트 보여주는 곳.

const TODOS_LS = 'toDos';

let toDos = [];//해야할 일을 생성했을 때 이 array에 추가되도록 한다.(비어있다는 것을 기억하렴)

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);//3번째줄 친구 데려온거
    const cleanToDos = toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);
            //parseInt : 숫자형으로 바꿔!
        
        }//forEach에서 function을 실행하는 것 같이 각각의 item과 같이 실행될겨!(이거랑 forEach 중요!)
    );
    //filter는 array의 모든 아이템을 통해 함수를 실행하고 true인 아이템들만 가지고 새로운 array 만든다.
    toDos = cleanToDos;
    saveToDos();
}//어떤 버튼이 클릭되는지 알려면 부모를 먼저 알아야하고 우리가 id를 줘놨잖아 그걸로 알 수 있어!

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    //localStorage에는 string으로 밖에 저장이 되지 않아요 그래서 string으로 바꿔주는겁니다.^.^
    //json이 뭔데! JavaScript Object Notation의 줄인말.. 데이터 전달 시 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능이래..
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; // 배열의 길이 1 늘려주기
    delBtn.innerText = "❌"; // 버튼에 이거 넣어주기
    delBtn.addEventListener("click", deleteToDo); // delBtn 클릭시 deleteToDo 실행.
    span.innerText = text;
    li.appendChild(delBtn); // 버튼 넣기
    li.appendChild(span); // 뒤에 내용
    li.id = newId;
    toDoList.appendChild(li);
    //span과 delete 버튼을 li안에 append하고 li를 ul에다가 append.
    const toDoObj = {
       text: text,
       id: newId
    };//왜이렇게 해야하나..? local storage에도 todo 저장해야해서..ㅎㅎ

    toDos.push(toDoObj);//toDos에 toDoObj를 넣는다.
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";//작성 후 enter치면 앞에 내용 input 박스에서 삭제
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS); 
    if(loadedToDos !== null ){
        const parsedToDos = JSON.parse(loadedToDos);//object로 바꿔줍니당~!
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); // parsedToDos 각각에 대해서 paintToDo라는 function 실행
        })
        //기본적으로 함수 실행, array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜주는거!
    }

}   

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}   

init();