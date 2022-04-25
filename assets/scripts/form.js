$(document).ready(function() {
"use strict";

// Contact Form
var request;

$('.rsvp-form form').submit(function(event) {

  var $name = $(this).find('input[name="name"]');
  var $email = $(this).find('input[name="email"]');
  var $message = $(this).find('textarea');
  var $guests = $(this).find('select[name="guests"]');
  var $rsvp = $(this).find('select[name="rsvp"]');

  $('.rsvp-form p.error').show();
  $('input[name="name"], input[name="email"], textarea').removeClass('error');

  if ($name.val() == '') {
    $('.rsvp-form p.error').addClass('active').html('<i class="fa fa-exclamation"></i> Please enter your name.');
    $name.addClass('error').focus();
    return false;
  }

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  if ($email.val() == '') {
    $('p.error').addClass('active').html('<i class="fa fa-exclamation"></i> Please enter your email.');
    $email.addClass('error').focus();
    return false;
  }

  if(!IsEmail($email.val())) {
    $('.rsvp-form p.error').addClass('active').html('<i class="fa fa-exclamation"></i> Looks like that email address is not correct. Try again.');
    $email.addClass('error').focus();
    return false;
  }

  if ($message.val() == "") {
    $('.rsvp-form p.error').addClass('active').html('<i class="fa fa-exclamation"></i> Please enter your message.');
    $message.addClass('error').focus();
    return false;
  }

  if (request) {
    request.abort();
  }

  var $form = $(this);
  var $inputs = $form.find('input, button, textarea');
  var serializedData = $form.serialize();

  $inputs.prop('disabled', true);

  request = $.ajax({
    url: 'contact.php',
    type: 'post',
    data: serializedData
  });

  request.done(function (response, textStatus, jqXHR){
    $('.rsvp-form p.error').hide();
    $('.rsvp-form p.message').html('Contact Form Submitted! We will be in touch soon.').fadeOut(2000);
    $('.rsvp-form form').find('input[type=text], textarea, select').val('');
  });

  request.fail(function (jqXHR, textStatus, errorThrown){
    console.error(
      'The following error occured: '+
      textStatus, errorThrown
    );
  });

  request.always(function () {
    $inputs.prop('disabled', false);
  });

  event.preventDefault();

});

});