
// function digitalRiver(num){
//     let x = num;
//     for (let i = 1; )
//     x.push(num)
//     return x
// }

function digitalRiver(num){
    let a =[]
    let x = ""
    let y = num
    let z = num
    for (let j = 10; y !=0; j *= 10){

        // x = x.concat(y % 10);
        // console.log('modulus 10', y % 10);
        // x = x.toNum
        console.log("start", y, " ", z)
        y = (y - (y % 10)) / 10;
        z += y
        // console.log("This is y", y);
    } 
    // console.log("this is x", x);
    console.log(z);
    return z;
}

//  digitalRiver(20)

 function riverIterations(its, startRiverNum){
    let riverNums = startRiverNum;
    for(let i = 0;i < its; i++){
        console.log("Before ex", riverNums);
        riverNums = digitalRiver(riverNums);
        console.log("After ex", riverNums + "/b");
    }
 }

//  riverIterations(10, 20);

 digitalRiver(digitalRiver(24))

 //Why does my terminal have an exclamation mark after the zsh-elias-sepulveda-CTD-intro-26.2 at the top of the terminal next to the terminal, ports, and gitlens tabs?
 

