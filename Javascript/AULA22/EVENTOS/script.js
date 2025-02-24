let num1 = Number(document.getElementById('num1'))
let num2 = Number(document.getElementById('num2'))

let btnSomar = document.getElementById('btnSomar')
let btnSubtrair = document.getElementById('btnSubtrair')

/* function somar() {
    alert(`A soma dos numeros é ${num1.value + num2.value}`)
} */

btnSomar.addEventListener('click', (e) => {
    e.preventDefault( alert(`A soma dos numeros é ${(num1.value) + (num2.value)}`))
})