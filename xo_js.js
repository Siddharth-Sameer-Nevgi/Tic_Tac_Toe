let matrix=[[0,0,0],[0,0,0],[0,0,0]];
let btns=document.querySelectorAll(".box");
let flag=0;
let c=false;
let q=0

function xo(id){
    let temp=id.target
    if (flag===0){
        temp.innerText='X'
        temp.style.color='black';
        temp.style.backgroundColor='#fccb05';
        matrix[temp.id[0]][temp.id[1]]=1
        flag=1
        q++
    }
    else{
        temp.innerText='O'
        temp.style.color='white';
        temp.style.backgroundColor='#008081';
        matrix[temp.id[0]][temp.id[1]]=2
        flag=0
        q++
    }
    this.disabled = true;
    check(matrix)
    if (q===9){
        if (c==false){
            alert('match drawn')
        }
    }


}
function check(mat,id){
    for (let i=0;i<3;i++){
        if (mat[i][0]===mat[i][1] && mat[i][1]===mat[i][2] && mat[i][0]!==0){
            if (mat[i][0]===1){
                alert('X wins')
                c=true
                disableAllButtons()
                return;
            }
            else{
                alert('O wins')
                c=true
                disableAllButtons()
                return;
            }
        }
        else if (mat[0][i]===mat[1][i] && mat[1][i]===mat[2][i] && mat[0][i]!==0){
            if (mat[0][i]===1){
                alert('X wins')
                c=true
                disableAllButtons()
                return;  
            }
            else{
                alert('O wins')
                c=true
                disableAllButtons()
                return;
            }
        };
    }
    if (mat[1][1]===mat[0][0] && mat[0][0]===mat[2][2] && mat[1][1]!==0){
        if (mat[1][1]===1){
            alert('X wins')
            c=true
            disableAllButtons()
            return;
        }
        else{
            alert('O wins')
            c=true
            disableAllButtons()
            return;
        }
    };
    if (mat[0][2]===mat[1][1] && mat[1][1]===mat[2][0] && mat[0][2]!==0){
        if (mat[0][2]===1){
            alert('X wins')
            c=true
            disableAllButtons()
            return;
        }
        else{
            alert('O wins')
            c=true
            disableAllButtons()
            return;
        }
    };
};
btns.forEach(btn => {
    btn.addEventListener('click', xo);
});
function disableAllButtons() {
    btns.forEach(btn => {
        btn.disabled = true;
    });
}
