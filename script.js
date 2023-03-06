let isgameover=false;
let turn="X";

const changeturn=()=>{
    return turn==="X"?"O":"X";
}
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let win=[
        [0,1,2,-15,4.8,180],
        [3,4,5,-15,14.8,180],
        [6,7,8,-15,24.8,180],
        [0,4,8,-16,14,45],
        [2,4,6,-15,15,-45],
        [0,3,6,-25.2,15,90],
        [1,4,7,-15.2,15,90],
        [2,5,8,-5.2,15,90]
    ];
    win.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!=='')){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won";
        isgameover=true;
        document.querySelector(".line").style.width="30vw";
         document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;
         document.querySelector(".img").style.display="inline";
         
        }
    })
    
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
     if(boxtext.innerText===''){
     boxtext.innerText=turn;
     turn=changeturn();
     checkwin();
     
     if(!isgameover){
     document.getElementsByClassName('info')[0].innerText="Turn for "+turn;
     }
    }
})
});