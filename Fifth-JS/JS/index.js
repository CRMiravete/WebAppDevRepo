document.querySelector("h1").addEventListener("click",call);

function call(){
    //alert("I've been clicked");
    console.log('Hello There');
    document.getElementsByTagName("p")[1].innerHTML="Sup G";
    //document.getElementsByTagName("sample1")[0].innerHTML="Sup Doc"; 
    var sample1Array = document.getElementsByClassName ("sample1");

    for(i=0;i<sample1Array.length;i++){
        sample1Array[i].textContent = "Sup Doc"
    }
    sample1Array[0].classList.toggle("special")
    document.getElementById("header").style = "color:red";

    var liArray = document.querySelectorAll("my_numbers li");
    for(i=0 ; i<liArray.length ; i++){
        liArray[i].style = "color:green";
        liArray[i].style.fontSize = "2rem";
    }

    document.querySelector("a").setAttribute("href","https://www.google.com"); /*MAKE SURE TO REFERENCE THE AJAX LINK WHEN USING JQUERRY*/

    /*EMPLOYING JQUERY CARACTERISTICS*/
    
    $("li").css("color","purple"); /*HTML*/
    if ($(".my_numbers .s_item").hasClass("super")){   /*If it has the class*/ /*ADD a dot for every class IN THE JS SCRIPT, NOT THE HTML*/
        $(".my_numbers .s_item").removeClass("super");
    }else {
        $(".my_numbers .s_item").addClass("super");
    }

    //$("p").text($("p")[1].text() + "Dilly Daddle"); /*TEXT*/
    $(".my_numbers").append("<li>Element" + ($(".my_numbers li").length + 1) + "</li>");


}