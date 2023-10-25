document.querySelector("h2").addEventListener("click",call);

function call(){
    console.log('Hello There');
    var liArray = document.querySelectorAll("java_list li");
    for(i=0 ; i<liArray.length ; i++){
        liArray[i].style = "color:red";
        liArray[i].style.fontSize = "2rem";
    }
    
    $("li").css("color","red");
    if ($(".java_list .java_item").hasClass("java_red")){
        $(".java_list .java_item").removeClass("java_red");
    } else{
        $(".java_list .java_item").addClass("java_red");
    }
}

