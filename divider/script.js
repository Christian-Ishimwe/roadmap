const submitButton=document.getElementById("subBtn")
const stepInput=document.getElementById("step")
const realNumber=document.getElementById("divider")
let message=""
let contain=[]
submitButton.addEventListener('click', ()=>{
    let stepInputValue=Number(stepInput.value)
    let maxMa=Number(realNumber.value)
    console.log(stepInputValue)
    console.log(typeof maxMa)
    if(maxMa<=0 || stepInputValue<=0){
        [maxMa, stepInputValue].forEach((element) => {
            if(element<=0){
                message="All elements should be greater Than Zero"
                return 
            }
            
        });
    }
    else{
        if(maxMa>stepInputValue){
            for(let i=maxMa; i>0; i--){
                let answer=(i/stepInputValue)
                if(i%stepInputValue==0){
                    contain.push(i)
                    message=contain.join("+")
                    maxMa=answer
                }
              
            }
        }
        else{
            message="The Step should Be Greater than The Divider"
        }
    }
  document.getElementById("result").innerHTML=message
})

// The prime Number Section
const primeNumber=document.getElementById("primeNumber")
const primeBtn=document.getElementById("primeBtn")

// const GetPrime=(num) => {
//     let primeGiven=Number(primeNumber.value)
//     if(primeNumber.value==""){
//         primeNumber.style.border="2px solid red"
//         return
//     }
//     else{
//         for(let i=primeGiven; i>=0;){
//             for(let j=2; j<=primeGiven; j++){
//                 if(i%)
//             }
//         }
//     }
// }
let answerSheet=[]
const GetPrime= (num) =>{
    while(Number(num)>0){
        for(let i=2; i<=num; i++ ){
            if(num/i==0){
                answerSheet.push(i)
                num=(num/i)
                break;
            }
        }
    }
    console.log(answerSheet.join("*"))
}

primeBtn.addEventListener("click", () =>{
    num=Number(primeNumber.value)
    while(Number(num)>0){
        console.log(num)
        for(let i=2; i<=num; i++ ){
            if(num/i==0){
                answerSheet.push(i)
                num=(num/i)
                break;
            }
            else{
                continue
            }
        }
    }
    console.log(answerSheet.join("*"))
})