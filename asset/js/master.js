const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.querySelector('#container');
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");

})
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");

})

// --------------------start func1--------------
function myForm(e) {
    let flag = 0

    let labels = document.querySelectorAll('label')
    labels.forEach((val) => {
        val.style.display = 'none'
    })
    let _email = document.forms['signup']['email'].value
    let _pass = document.forms['signup']['pass'].value
    let _name = document.forms['signup']['name'].value


    if (
        _name == null ||
        _name == '' ||
        (_name.search(/<script/)) >= 0 ||
        (_name.search(/&lt;script/)) >= 0 ||
        (_name.search(/script/)) >= 0
    ) {
        document.forms['signup']['name'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = _name.match(/@/g)
        if (
            (temp == null) ||
            (_name.search(/@/)) <= 2 ||
            _name.length < 10 ||
            (_name.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (_name.search(/\s+/)) >= 0

        ) {
            document.forms['signup']['name'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }

    if (
        _email == null ||
        _email == '' ||
        (_email.search(/<script/)) >= 0 ||
        (_email.search(/&lt;script/)) >= 0 ||
        (_email.search(/script/)) >= 0
    ) {
        document.forms['signup']['email'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = _email.match(/@/g)
        if (
            (temp == null) ||
            (_email.search(/@/)) <= 2 ||
            _email.length < 10 ||
            (_email.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (_email.search(/\s+/)) >= 0
        ) {
            document.forms['signup']['email'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }

    if (
        _pass == null ||
        _pass == '' ||
        (_pass.search(/<script/)) >= 0 ||
        (_pass.search(/&lt;script/)) >= 0 ||
        (_pass.search(/script/)) >= 0
    ) {
        document.forms['signup']['pass'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        if (
            _pass.search(/[0-9]/) == -1 ||
            _pass.search(/[a-z]/) == -1 ||
            _pass.search(/[A-Z]/) == -1 ||
            _pass.search(/[~!@#$%^&*()_+]/) == -1
        ) {
            document.forms['signup']['pass'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }

    if (flag > 0) {
        e.preventDefault()
    }

}



// -------------------start func2----------------
function myForms(e) {
    let flag = 0

    let labels = document.querySelectorAll('label')
    labels.forEach((val) => {
        val.style.display = 'none'
    })

    let _email = document.forms['signin']['email'].value
    let _pass = document.forms['signin']['pass'].value

    if (
        _email == null ||
        _email == '' ||
        (_email.search(/<script/)) >= 0 ||
        (_email.search(/&lt;script/)) >= 0 ||
        (_email.search(/script/)) >= 0
    ) {
        document.forms['signin']['email'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = _email.match(/@/g)
        if (
            (temp == null) ||
            (_email.search(/@/)) <= 2 ||
            _email.length < 10 ||
            (_email.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (_email.search(/\s+/)) >= 0
        ) {
            document.forms['signin']['email'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }

    if (
        _pass == null ||
        _pass == '' ||
        (_pass.search(/<script/)) >= 0 ||
        (_pass.search(/&lt;script/)) >= 0 ||
        (_pass.search(/script/)) >= 0
    ) {
        document.forms['signin']['pass'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        if (
            _pass.search(/[0-9]/) == -1 ||
            _pass.search(/[a-z]/) == -1 ||
            _pass.search(/[A-Z]/) == -1 ||
            _pass.search(/[~!@#$%^&*()_+]/) == -1
        ) {
            document.forms['signin']['pass'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }

    if (flag > 0) {
        e.preventDefault()
    }

}