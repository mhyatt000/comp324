function ajax_read(path, cfunc) {
    // inspired from https://www.w3schools.com/js/js_ajax_http.asp

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cfunc(this);}
    xhttp.open("GET", path);
    xhttp.send();
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
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    let users = JSON.parse(xhttp.responseText);

    let user = users.users[username]
    if (user){
        if (user.password == password){
            console.log('you can log in now')
        }
        else {
            console.log('wrong password')
            console.log('highlight password field red')
        }
    }
    else { return }
}
function log_in(user){

}
function log_out(){

}
