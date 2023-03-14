function onSubmit () {
    const form = document.getElementById('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target)

    const form = e.target

    const { valor, pagador, } = form

    console.log(valor.value, pagador.value)
    })
}