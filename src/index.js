module.exports = function reverse(n){
    let b = String(n);
    let c = "";
    for(let i=b.length-1; i>= 0; i--){
        if(b[i] == "-"){
        }else{
            c += b[i];  
        }    
    }
    return Number(c);
}
