var contentHeight = 800;
var pageHeight = document.documentElement.clientHeight;
var scrollPosition;
var n = 10;
var xmlhttp;


function putImages() {
    
    if (xmlhttp.readyState === 4 ){
        if(xmlhttp.responseText){
            var resp = xmlhttp.responseText.replace("\r\n", "");
            var files = resp.split(";");

            var j = 0;
            for(var i=0; i<files.length; i++){
                if(files[i] != ""){
                    document.getElementById("photostream").innerHTML += '<a href="img/'+files[i]+'"><img src="Medium/'+files[i]+'" /></a>';
                    j++;
                    if(j === 3 || j === 6){
                    document.getElementById("photostream").innerHTML += '<br />';
                        document.getElementById("photostream").innerHTML += '<p>'+(n-1)+" Images Displayed | <a href='#top'>Top</a></p><hr />";
                     j = 0;
                    }
                }
            }
        }
    }
}

function scroll(){
    
    if(navigator.appName === "Microsoft Internet Explorer"){
        scrollPosition = document.documentElement.scrollTop;
    }else{
        scrollPosition = window.pageYOffset;
    }
    if((contentHeight - pageHeight - scrollPosition) < 500) {
        if(window.XMLHttpRequest){
            //Firefox, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        }else{ 
            if(window.ActiveXObject){
                //Internet Explorer
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } else{
            alert("Bummer! Your browser does not support XMLHTTP!");
            }
        }    
        var url="Marts.php?n="+n;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        n += 9;
        xmlhttp.onreadystatechange = putImages;
         contentHeight += 800;
    }
}

    
    
    
    
    
    
