const form=document.querySelector(".form")
const iniciar=document.querySelector(".iniciar")
iniciar.addEventListener("click",(e)=>{
    e.preventDefault()
    form.querySelectorAll("div").forEach(div => div.remove()) //remover a div se o jogo já foi criado antes

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

    console.log(num) //para teste

    buttonVerificar.addEventListener("click",(e)=>{
        e.preventDefault()
        if(Number(input.value)===num){
            resp.innerHTML="Você Acertou!!! Parábens"
        }else{
            resp.innerHTML="Você Errou, tente novamente!"
        }
    })
})
function numAlea(){
    const num=Number((Math.random()*(100-1)+1).toFixed(0))
    return num
}