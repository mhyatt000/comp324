function ajax_read(path, cfunc) {
    // inspired from https://www.w3schools.com/js/js_ajax_http.asp

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {cfunc(this);}
    xhttp.open("GET", path);
    xhttp.send();
}


function submit(){

    if(event.keyCode == 13) {

        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        console.log(username, password)
        ajax_read("docs/json/users.json", signin)
    }

}

function signin(xhttp){
    let users = JSON.parse(xhttp.responseText);

    let user = users.users[username]
    if (user){
        console.log('the user exists')
        if (user.password == password){
            console.log('you can log in now')
        }
        else {
            console.log('wrong password')
        }
    }
    else{
        console.log('no user ... create?')
    }
}
function log_in(user){

}
function log_out(){

}
