const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];//해야할 일을 생성했을 때 이 array에 추가되도록 한다.

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
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

    }

}   

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}   

init();