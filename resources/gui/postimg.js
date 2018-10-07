var http = new XMLHttpRequest();
var url = "http://localhost:9000/image";
var img = undefined;
http.open("POST", url, true);
http.withCredentials = true;
http.setRequestHeader("Content-Type", "application/json");
http.setRequestHeader("Access-Control-Allow-Origin", "*");
http.setRequestHeader("Access-Control-Allow-Methods", "POST");
http.onreadystatechange = function () {
    if (http.readyState === 4 && http.status === 200) {
        document.getElementById("texto").innerHTML = http.response;
        $("#myModal").modal()
    }
};

function postImgB64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        img = reader.result.split(',')[1];
        var data = JSON.stringify({"uri": img});
        http.send(data);
    };
    reader.readAsDataURL(file);
}