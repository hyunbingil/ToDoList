const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/programming_real/JavaScript/ToDoList/images/${imgNumber + 1}.jpg`;
    image.classList.add("backgroundImage");//이미지 추가(새로운 클래스 name)~> css 고고링
    body.appendChild(image);//html에 body안에 img파일을 넣어주는역할인듯..
    
    /*image.addEventListener("loadend", handleImgLoad);
    ~> API로 할거면 이 과정이 필요하다 뭐 로딩이 어쩌구 . . . 지금은 필요 없음*/
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);//floor은 버림, ceil은 올림 

    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();