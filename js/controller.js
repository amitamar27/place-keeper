
'use strict'

function onInit(){
    console.log('good')
}

function onSubmitBtn(ev){
    ev.preventDefault()
    var elFullName = document.querySelector('.full-name').value
    var elBgColor = document.querySelector('.bg-color').value
    var elColor = document.querySelector('.color').value
    var elEmail = document.querySelector('.email').value
    var elBirthDate = document.querySelector('.birth-date').value
    var elAge = document.querySelector('.age').value
    
    saveUser(elFullName,elBgColor,elBirthDate,elColor,elAge,elEmail)
    renderPage(elBgColor,elColor)
}

function renderPage(elBgColor,elColor){
    var elBody = document.querySelector('body')   
    elBody.style.backgroundColor = elBgColor
    elBody.style.color = elColor
}


