let turn ="X";
let isGameOver=false;
//function to switch turn
const changeTurn=()=>{
    if(turn==="X")
    return "O";
    return "X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    
    let boxes = document.getElementsByClassName("box");
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
wins.forEach(e => {
if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[2]].innerText === boxtexts[e[1]].innerText && boxtexts[e[0]].innerText != "" )
{
    document.querySelector('.info').innerText= boxtexts[e[0]].innerHTML + " Won ! ";
    isGameOver=true;
    box[e[0]].style.backgroundColor="yellow";
    box[e[1]].style.backgroundColor="yellow";
    box[e[2]].style.backgroundColor="yellow";
    
}
});
}
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
let boxText = element.querySelector(".boxtext");
element.addEventListener('click',()=>{
    if(boxText.innerText==='')
    boxText.innerText=turn;
    checkWin();
    if(!isGameOver)
    {
        turn=changeTurn();       
        document.querySelector(".info").innerText="Turn for : "+turn;
    }
    else turn='';
})
});
let resetBtn=document.getElementById("reset");
resetBtn.addEventListener("click",()=>{
    isGameOver=false;
    document.location.reload();

});

