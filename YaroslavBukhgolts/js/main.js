new WOW().init();
var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".projects-pagination",
    bulletClass: "projects-bullet",
    bulletActiveClass: "projects-bullet-active",
    clickable: true,
  },
});

// обработчик формы
$(document).ready(function(){
  $('.form-button').click(function(){
    let formName = $('.input-name').val();
    let formTel = $('.input-tel').val();
    $.ajax({
      url: 'form.php',
      type: 'post',
      dataType: 'json',
      data: {
        'input-name': input-name,
        'input-tel': input-tel
      },
      success: function (data){
        $('.messages').html(data.result);
      }
    });
  });
});