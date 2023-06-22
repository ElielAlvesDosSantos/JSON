const pesquisa = document.querySelector('#pesquisa')


pesquisa.addEventListener('click',()=>{


    const cep = document.querySelector('#cep').value
   
    const pesq_cep = new XMLHttpRequest()
    pesq_cep.open('GET','https://viacep.com.br/ws/'+cep+'/json/')
    pesq_cep.send()
    pesq_cep.onload = function () {


        let objeto_cep = JSON.parse(pesq_cep.responseText)
        console.log(objeto_cep)
       
    }
console.log(pesq_cep)
})
