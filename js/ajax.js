function ajax_read(){

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(this.responseText)
      // document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "docs/json/ajax_temp.json");
    xhttp.send();

}
