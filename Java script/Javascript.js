var zoomimg = function(){
    var clone = this.cloneNode();
    clone.classList.remove("zoom");

    var ib = document.getElementById("inner");
    ib.innerHTML = "";
    ib.appendChild(clone);

    ib = document.getElementById("outer");
    ib.classList.add("show")
}

window.addEventListener("load", function(){
var images = document.getElementsByClassName("zoom");
if (images.length > 0) {
    for (let img of images) {
        img.addEventListener("click", zoomimg);
    }
}
document.getElementById("outer").addEventListener("click", function(){
    this.classList.remove("show");
});
});

function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    alert("Successfully Sign up!");
    return true;
  }