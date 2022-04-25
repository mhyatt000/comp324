
function ajax_read(path, cfunc) {
    // inspired from https://www.w3schools.com/js/js_ajax_http.asp
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cfunc(this);}
    xhttp.open("GET", path);
    xhttp.send();
}

function ajax_write(path, str) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {console.log(this.responseText);}
    xhttp.open("POST", path, true);
    xhttp.send(str);
}


function enter_key(){

    if(event.keyCode == 13) {

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        console.log(username, password)
        ajax_read("docs/json/users.json", signin)
    }

}


function signin(){
    ajax_read("docs/json/users.json", _signin)
}
function _signin(xhttp){
    let field_user = document.getElementById("username")
    let field_pass = document.getElementById("password")

    const username = field_user.value
    const password = field_pass.value

    let users = JSON.parse(xhttp.responseText);
    let user = users.users[username]

    if (user){
        if (user.password == password){

            console.log('you can log in now')
            field_user.setAttribute("style","background:#6c6")
            field_pass.setAttribute("style","background:#6c6")

            ajax_write('docs/json/web_state.json', `{"current_user" : ${user}}`)

        } else {
            field_pass.value = "wrong password"
            field_pass.setAttribute("style","background:#c66")
            field_user.setAttribute("style","")

        }
    } else {
        field_user.value = "invalid user"
        field_user.setAttribute("style","background:#c66")
        console.log('invalid user')
    }
}
function signout(){

}

function signup(){
    ajax_read("docs/json/users.json", _signup)
}
function _signup(){
    const field_user = document.getElementById("username")
    const field_pass = document.getElementById("password")

    const username = field_user.value
    const password = field_pass.value

    let users = JSON.parse(xhttp.responseText);
    let user = users.users[username]

    if (user){
        console.log('user already exists')
    } else {

    }


}



function log_in(user){

}
function log_out(){

}

function listen(){
    document.addEventListener('mousedown', function(e) {
        // clears a text input when clicked
        // empty text inputs that arent selected retain their default value

        let target = e.target
        if (target.tagName == 'INPUT' && target.type == 'text' && target.value == target.defaultValue) {
            target.setAttribute("value","")
        }

        textinputs = Array.from(document.getElementsByTagName('input')).filter(item => item.type == 'text')
        others = textinputs.filter(item => item !== target)
        for (var item of others) {
            if (item.value == "") {
                item.setAttribute('value', item.getAttribute('defaultValue') )
            }
        }

    })
}
