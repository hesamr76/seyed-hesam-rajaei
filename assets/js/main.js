$('.icon , .section').css({"opacity":"0"})

$('.fullScreen1').on('load', function() {

    setIcons()

    $(".loading").hide(function(){
      $('.icon , .section').css({"opacity":"1"})
      ScrollReveal().reveal('.icon', { interval: 250 });
       ScrollReveal().reveal('.section', { delay:150 , duration:1500 , interval:300 , distance:'100px'} );
       ScrollReveal().reveal('.boxItem , .guidLine' , {delay:50 , duration:700 , interval:260 ,distance:"50px"})
       ScrollReveal().reveal('.contact-content > h2 , .contact-content > ul , .contact-content > h5' , {delay:1000 , interval:300 ,duration:800,distance:"50px"})

    });
});

function setIcons() {
  let imageHeight = $(".fullScreen1").height();
  let iconsHeight = imageHeight/2;
  let marginTop = imageHeight/4;
  $("ul.icons").css({"height":iconsHeight,"top":marginTop})
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

function copyToClipboard(element){
  var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(element).text()).select();
      document.execCommand("copy");
      $temp.remove();
}

function toggleElem(element,e){
  if(e.target.className == 'icon'){
    if ($(element).css("opacity") == '1') {
      $(element).css({"opacity":"0","display":"block"})
    }else{$(element).css({"opacity":"1","display":"block"})}
  }
}
