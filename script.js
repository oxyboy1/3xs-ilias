function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 



function generate_accs(){
    setInterval(()=>{
        document.querySelector('#accs_generator').innerHTML = makeid(7) + '@gmail.com : ' + makeid(6);
    },100);
}






function shuff() {


    clickingShuff();
  
    setTimeout(function () {
      corestuff();
    }, 1350);
  
  
  }
  
  function clickingShuff() {
  
    var audio = new Audio('https://playhack.in/fortnite-accounts/sound/1click.mp3');
    audio.play();
  
    document.getElementsByClassName("shuffle")[0].style.pointerEvents = "none";
    document.getElementsByClassName("card")[0].style.opacity = 0;
    document.getElementsByClassName("card")[1].style.opacity = 0;
    document.getElementsByClassName("card")[2].style.opacity = 0;
    setTimeout(function () {
      var audio = new Audio('https://playhack.in/fortnite-accounts/sound/welc.mp3');
      audio.play();
      document.getElementsByClassName("card")[0].style.opacity = 1;
      document.getElementsByClassName("card")[1].style.opacity = 1;
      document.getElementsByClassName("card")[2].style.opacity = 1;
    }, 1510);
    setTimeout(function () {
      document.getElementsByClassName("shuffle")[0].style.pointerEvents = "auto";
    }, 3550);
  }
  
  
  function usersOnline() {
    var rndUser;
    rndUser = Math.floor(Math.random() * 50) + 500;
    document.getElementsByClassName("wtf")[0].innerHTML ="عدد المستخدمين حالياً : " + rndUser;
    setInterval(function(){
      rndUser = Math.floor(Math.random() * 50) + 500;
      document.getElementsByClassName("wtf")[0].innerHTML ="عدد المستخدمين حالياً : " + rndUser;
    }, 5000);
    corestuff();
  }
  
  function corestuff() {
    var level;
    var vBucks;
    var randd;
  
    level = Math.floor(Math.random() * 20) + 130;
    vBucks = Math.floor(Math.random() * 5000) + 900;
    document.getElementsByClassName("lvl")[0].innerHTML = "LVL " +  level;
    document.getElementsByClassName("vBucks")[0].innerHTML = vBucks + " vBucks";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("outfits")[0].innerHTML = randd + "x Outfits";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("backbling")[0].innerHTML = randd +"x Back Bling";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("pickaxes")[0].innerHTML = randd + "x Pickaxes" ;
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("gliders")[0].innerHTML = randd + "x Gliders";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("dances")[0].innerHTML = randd + "x Dances";
  
  
    level = Math.floor(Math.random() * 20) + 130;
    vBucks = Math.floor(Math.random() * 5000) + 900;
    document.getElementsByClassName("lvl")[1].innerHTML = "LVL " +  level;
    document.getElementsByClassName("vBucks")[1].innerHTML = vBucks + " vBucks";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("outfits")[1].innerHTML = randd + "x Outfits";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("backbling")[1].innerHTML = randd +"x Back Bling";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("pickaxes")[1].innerHTML = randd + "x Pickaxes" ;
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("gliders")[1].innerHTML = randd + "x Gliders";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("dances")[1].innerHTML = randd + "x Dances";
  
  
    level = Math.floor(Math.random() * 20) + 130;
    vBucks = Math.floor(Math.random() * 5000) + 900;
    document.getElementsByClassName("lvl")[2].innerHTML = "LVL " +  level;
    document.getElementsByClassName("vBucks")[2].innerHTML = vBucks + " vBucks";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("outfits")[2].innerHTML = randd + "x Outfits";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("backbling")[2].innerHTML = randd +"x Back Bling";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("pickaxes")[2].innerHTML = randd + "x Pickaxes" ;
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("gliders")[2].innerHTML = randd + "x Gliders";
  
    randd = Math.floor(Math.random() * 20) + 1;
    document.getElementsByClassName("dances")[2].innerHTML = randd + "x Dances";
  }
  
  var glContent = "";
  
  function optionClicked(event) {
    var myArray = [
      "card c1",
      "card c2",
      "card c3"
    ];
  
    var audio = new Audio('https://playhack.in/fortnite-accounts/sound/1click.mp3');
    audio.play();
  
    document.getElementsByClassName("shuffle")[0].style.pointerEvents = "none";
  
    // var eleSize = document.getElementsByClassName("bdWrapper")[0].offsetWidth;
    // var eleHeight = document.getElementsByClassName("bdWrapper")[0].offsetHeight;
    // document.getElementsByClassName("bdWrapper")[0].style.width = eleSize+"px";
    // document.getElementsByClassName("bdWrapper")[0].style.height = eleHeight+"px";
  
    function growDiv() {
    var growDiv = document.getElementsByClassName('bdWrapper')[0];
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  
  
    var target = event.target;
    var parent = target.parentElement;//parent of "target"
    var x = target.classList;
    var clickedPackage = parent.innerText;
    glContent = target;
  
    for(var i=0;i<myArray.length;i++){
      if(x != myArray[i]){
        document.getElementsByClassName(myArray[i])[0].style.transition = "all 1s linear";
        document.getElementsByClassName(myArray[i])[0].style.opacity = 0;
        document.getElementsByClassName(myArray[i])[0].style.pointerEvents = "none";
        document.getElementsByClassName("shuffle")[0].style.transition = "all 1s linear";
        document.getElementsByClassName("shuffle")[0].style.opacity = 0;
        document.getElementsByClassName(x)[0].style.pointerEvents = "none";
      }
    }
  
    setTimeout(function () {
      for(var i=0;i<myArray.length;i++){
        if(x != myArray[i]){
          if(x != myArray[i]){
            document.getElementsByClassName(myArray[i])[0].style.height = "0px";
            document.getElementsByClassName(myArray[i])[0].style.width = "0px";
            document.getElementsByClassName(x)[0].style.marginRight = "0px";
            document.getElementsByClassName(x)[0].style.marginLeft = "0px";
          }
        }
      }
    }, 1050);
  
    setTimeout(function () {
      for(var i=0;i<myArray.length;i++){
        if(x != myArray[i]){
          document.getElementsByClassName(myArray[i])[0].style.display = "none";
          document.getElementsByClassName("shuffle")[0].style.display = "none";
          // document.getElementsByClassName(x)[0].style.marginBottom = "40px";
          // growDiv();
          document.getElementsByClassName("hid")[0].style.display = "flex";
        }
      }
    }, 1150);
  
  
    // setTimeout(function () {
    //   var c = document.getElementsByClassName("tempHold")[0].childNodes;
    //   var cx;
    //   for(cx = 0; cx<c.length; cx++){
    //     c[cx].remove();
    //   }
    //   for(cx = 0; cx<c.length; cx++){
    //     c[cx].remove();
    //   }
    //   for(cx = 0; cx<c.length; cx++){
    //     c[cx].remove();
    //   }
    //   for(cx = 0; cx<c.length; cx++){
    //     c[cx].remove();
    //   }
    // }, 2400);
    //
    // setTimeout(function () {
    //   document.getElementsByClassName("attachme")[0].style.display = "flex";
    //   var node = document.getElementsByClassName("attachme")[0];
    //   document.getElementsByClassName("tempHold")[0].appendChild(node);
    // }, 2500);
    //
    // setTimeout(function () {
    //   document.getElementsByClassName("tempHold")[0].style.opacity = 1;
    // }, 2800);
    //
    // setTimeout(function () {
    //   var loadingf = document.getElementsByClassName("progress-wrapper")[0];
    //   loadingf.style.display = "flex";
    //   move();
    // }, 3200);
  
  }
  
  
  
  function move() {
  
    document.getElementsByClassName("verifybtn")[0].style.pointerEvents = "none";
  
    var elem = document.getElementsByClassName('progress')[0];
    var wholeBox = document.getElementsByClassName('progress-wrapper')[0];
    var myContent = document.getElementsByClassName('percentages')[0];
    var myInterval = 55;
    wholeBox.style.display = "flex";
    var width = 1;
    var id = setInterval(frame, myInterval);



    function frame() {
      if (width >= 99) {
        clearInterval(id);
      }
      else {
        width++;
        elem.style.width = width + '%';
        myContent.innerHTML = width * 1 + '%';
      }
  
      //Dynamic status changes
      if(width >= 1 && width <= 25){
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Preparing Script " + myContent.innerHTML;
      }
  
      if(width >= 25 && width <= 33){
        myInterval = 1190;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Launching Script " + myContent.innerHTML;
      }
      if(width >= 33 && width <= 45){
        myInterval = 180;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Encripting Data " + myContent.innerHTML;
      }
      if(width >= 45 && width <= 47){
        myInterval = 380;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 47 && width <= 47){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("lvl")[0].style.color = "rgb(93, 218, 94)";
        glContent.getElementsByClassName("lvl")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 48 && width <= 54){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 54 && width <= 54){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("vBucks")[0].style.color = "rgb(93, 218, 94)";
        glContent.getElementsByClassName("vBucks")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 55 && width <= 62){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 62 && width <= 62){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("outfits")[0].style.color = "rgb(93, 218, 94)";
        glContent.getElementsByClassName("outfits")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 63 && width <= 67){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 67 && width <= 67){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("backbling")[0].style.color = "rgb(93, 218, 94)";
        glContent.getElementsByClassName("backbling")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 68 && width <= 72){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 72 && width <= 72){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("pickaxes")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 73 && width <= 77){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 77 && width <= 77){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("gliders")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 78 && width <= 84){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
      if(width >= 84 && width <= 84){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
        glContent.getElementsByClassName("dances")[0].style.color = "white";
        var audio = new Audio('https://playhack.in/fortnite-accounts/sound/sucAlert.mp3');
        audio.play();
      }
      if(width >= 85 && width <= 87){
        myInterval = 580;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Connecting account " + myContent.innerHTML;
      }
  
      if(width >= 87 && width <= 89){
        myInterval = 810;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Bypassing Verification " + myContent.innerHTML;
      }
      if(width >= 89 && width <= 96){
        myInterval = 555;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Decrypting Captcha " + myContent.innerHTML;
      }
      if(width >= 96 && width <= 98){
        myInterval = 4000;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Injecting Token " + myContent.innerHTML;
      }
      if(width >= 98 && width <= 99){
        myInterval = 4000;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Auto Verification Failed " + myContent.innerHTML;
        var audio = new Audio('sound/negative.mp3');
        audio.play();
      }
      if(width >= 99 && width <= 99){
        myInterval = 1000;
        var ll = document.getElementsByClassName('ll1')[0];
        ll.innerHTML = "Manual Verification Required " + myContent.innerHTML;
        document.querySelector('.accs-generator').style.display="none";
        document.querySelector('#desc2').style.display="block";
        document.getElementsByClassName("verifybtn")[0].style.opacity = 1;
        document.getElementsByClassName("verifybtn")[0].style.pointerEvents = "auto";
        clearInterval(id);
      }
  
      if(width >= 25 && width < 99){
        clearInterval(id);
        // myInterval = 80;
        id = setInterval(frame, myInterval);
        // var ll = document.getElementsByClassName('ll1')[0];
        // ll.innerHTML = "Loading..." + myContent.innerHTML;
      }
    }
  }
  
  
  function generate() {
  
    var inpVal = document.getElementById("email").value;
  
    if(!inpVal.includes("@")){
      document.getElementById("email").classList.add("alertingg");
      var audio = new Audio('https://playhack.in/fortnite-accounts/sound/4.mp3');
      audio.play();
      setTimeout(function () {
        document.getElementById("email").classList.remove("alertingg");
      }, 350);
    }
    else{
      var audio = new Audio('https://playhack.in/fortnite-accounts/sound/1click.mp3');
      audio.play();
  

      generate_accs();


      document.getElementsByClassName("hid")[0].style.opacity = 0;
  
      var eleSize = document.getElementsByClassName("cards")[0].offsetWidth;
      // var eleHeight = document.getElementsByClassName("cards")[0].offsetHeight;
      document.getElementsByClassName("attachme")[0].style.width = eleSize+"px";
      // document.getElementsByClassName("attachme")[0].style.height = eleHeight+"px";
  
      setTimeout(function () {
        document.getElementsByClassName("hid")[0].style.display = "none";
      }, 510);
      setTimeout(function () {
        document.getElementsByClassName("attachme")[0].style.display = "flex";
        document.getElementsByClassName("attachme")[0].style.opacity = 1;
        var loadingf = document.getElementsByClassName("progress-wrapper")[0];
        loadingf.style.display = "flex";
      }, 520);
  
      setTimeout(function () {
        move();
      }, 530);
    }
  
  }