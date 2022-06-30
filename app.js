let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




// var bannerData = ["one.jfif", "two.jfif", "three.jfif", "four.jfif", "five.jfif", "six.jfif",]
// var dom = document.getElementById("banner");
// function bannerInit(index){
//     var img = document.createElement('img');
//     img.setAttribute('src', "./img/" + bannerData[index]);
//     dom.innerHTML = `<img class="banner" src="./img/${bannerData[index]}"/>`
// } 
// // document.getElementById("banner").innerHTML = bannerInit



// var count = 0;
// setInterval(function(){
//     if (pic.lenth ===0){
//         count = 0
//     }
//     bannerData(count++)
// },1000)



// // var pic = new Array();

// // pic[0] = new Image();
// // pic[0].src = "one.jfif";

// // pic[1] = new Image();
// // pic[1].src = "two.jfif";

// // pic[2] = new Image();
// // pic[2].src = "three.jfif";

// // pic[3] = new Image();
// // pic[3].src = "four.jfif";

// // pic[4] = new Image();
// // pic[4].src = "five.jfif";

// // pic[5] = new Image();
// // pic[5].src = "six.jfif";

// // var a = 0;    
// // function next()
// //         {
// //         a = a+ 1;      
// //         if(a>3)
// //             {
// //                 a = 0;  
// //             }
// //     document.pic.src = pic[a].src;
// //     }
// // function pre()
// //         {
// //         a = a- 1;             
// //         if(a<0)
// //             {
// //                 a = 3;   
// //             }
// //     document.pic.src = pic[a].src;
// //     }



