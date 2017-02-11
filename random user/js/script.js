function ajax_get(url, callback) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture', function(data) {
    document.getElementById("title").innerHTML = data["results"];
 
    // var html = "<h2>" + data["title"] + "</h2>";
    // html += "<h3>" + data["description"] + "</h3>";
    // html += "<ul>";
    //    for (var i=0; i < data["articles"].length; i++) {
    //        html += '<li><a href="' + data["articles"][i]["url"] + '">' + data["articles"][i]["title"] + "</a></li>";
    //    }
    // html += "</ul>";
    // document.getElementById("root").innerHTML = html;
});