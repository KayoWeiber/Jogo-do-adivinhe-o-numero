function iniciar(){
    const form=document.querySelector(".form")
    const iniciar=document.querySelector(".iniciar")
    iniciar.addEventListener("click",(e)=>{
        e.preventDefault()
        form.querySelectorAll("div").forEach(div => div.remove()) //remover a div se o jogo já foi criado antes
        form.querySelectorAll("h1").forEach(h1 => h1.remove()) 
        form.querySelectorAll("button").forEach(button => button.remove())

        const buttonReturn=document.createElement("button")
        buttonReturn.innerText="Reiniciar"
        buttonReturn.classList.add("buttonReturn")
        form.appendChild(buttonReturn)
    
        const div=document.createElement("div")
        form.appendChild(div)
    
        const num=numAlea()
        div.innerHTML="<h3>O Número aleatório entre 1 e 100 foi criado</h3>"
    
        const label=document.createElement("label")
    
        const input=document.createElement("input")
        input.type="number"
    
        div.appendChild(label)
        label.innerText+="Tente Adivinhar o Número"
    
        div.appendChild(input)
    
        const buttonVerificar=document.createElement("button")
        buttonVerificar.innerText="Verificar número"
        div.appendChild(buttonVerificar)
    
        const resp=document.createElement("h3")
        div.appendChild(resp)
    
        //console.log(num) //para teste
        let dicaQuan=3
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault()
            }
        });
        
        buttonVerificar.addEventListener("click",(e)=>{
            e.preventDefault()
            const numDigitado=Number(input.value)
            

            let resposta=verificacaoNum(numDigitado,num,resp)
            if (resposta){
                div.querySelectorAll(".buttonDica").forEach(button => button.remove())
                let buttonDica=document.createElement("button")
                buttonDica.innerText=`Dica (${dicaQuan})`
                buttonDica.classList.add("buttonDica")
                div.appendChild(buttonDica)
                buttonDica.addEventListener("click",(e)=>{
                    e.preventDefault()
                    dicas(dicaQuan,num,resp)
                    dicaQuan-=1
                    if (dicaQuan <= 0){buttonDica.remove()}
                    buttonDica.innerText=`Dica (${dicaQuan})`
                

                })
            }else{
                div.querySelectorAll(".buttonDica").forEach(button => button.remove())
            }

            
        })
    })}


function numAlea(){
    const num=Number((Math.random()*(100-1)+1).toFixed(0))
    return num
}

function verificacaoNum(numero,num,resp){
    if (numero>100 ||numero<0){
        resp.innerHTML="O Número digitado não é válido."
    }else if(!numero){
        resp.innerHTML="Por favor, digite um número"
    }
        else{
            valoresDigitados.push(numero)
            if(numero===num){
                
                resp.innerHTML="Parabéns você acertou!!" 
                return false
            }else{
                resp.innerHTML="Você errou, tente novamente!"
                return true
            }
    }
}

function dicas(dicaQuan,num,resp){
    if(dicaQuan<=0){
        resp.innerHTML="Você não possuí mais dicas"
    }else{
        if(dicaQuan===3){
            resp.innerHTML=num>50?"O número aleatório é maior que 50.":"O número aleatório é menor ou igual a 50"
        }else if(dicaQuan===2){
            resp.innerHTML=num%2===0?"o número aleatório é par.":"O número aleatório é impar" 
        }else if (dicaQuan === 1) {
            let numMaisProximo = valoresDigitados.reduce((prev, curr) =>
                Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev
            );
            resp.innerHTML = `O número mais próximo que você digitou foi ${numMaisProximo}.`
        }
    }
}
let valoresDigitados=[]
iniciar()