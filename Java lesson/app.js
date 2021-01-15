let a=1

function capet(){
    console.log(a);
    a++
    if(a<51){
        capet()
    }
}

capet()