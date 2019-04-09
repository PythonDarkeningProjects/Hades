$(function() {
  $('.material-form .form-group .form-control').focusout(function() {
      var $text_val = $(this).val();
      if ($text_val === "") {
        $(this).removeClass('active');
      } 
      else {
        $(this).addClass('active');
      }
  });
});