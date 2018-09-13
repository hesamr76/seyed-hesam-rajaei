$('.fullScreen1').on('load', function() {
    $(".loading").hide()
});

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

function toggleElem(element){
  if ($(element).css("opacity") == '1') {
    $(element).css({"opacity":"0","display":"block"})
  }else{$(element).css({"opacity":"1","display":"block"})}
}
