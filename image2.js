// for (let index = 1; index < 3 ; index++) {
//     document.querySelector("button").addEventListener("click", changeImg);
//     function changeImg(){
//         var image = document.querySelector("img");
//         var imageName = "pic"+ index +".jpg";
//         var imageSource = "./Image/" + imageName;
//         image.setAttribute("src", imageSource);
//     }
    
// }

var i = 1;
document.querySelector("#frontbutton").addEventListener("click", frontButton);
// var i = 1;
function frontButton() {
    var imageName = "pic" + i + ".jpg";
    var imageSource = "./image/" + imageName;
    var image = document.querySelector("img");
    image.setAttribute("src", imageSource);
    i++;
    if (i==3){
    i = i-2;
}
}

 var k = 1;
document.querySelector("#backbutton").addEventListener("click", backbutton);
function backbutton() {
     imageName = "pic" + k + ".jpg";
     imageSource = "./image/" + imageName;
     image = document.querySelector("img");
    image.setAttribute("src", imageSource);
    k--;
    if(k==0){
        k= k+2;
    }
}


