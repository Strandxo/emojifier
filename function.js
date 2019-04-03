window.onload=function(){     
const numStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 
const emoji = input => {
      return input.toLowerCase()
        .replace(/\s/g, "   ")
        .replace(/([a-z])/g, ":regional_indicator_$1: ")
        .replace(/([0-9])/g, $1 => {
          return ":" + numStr[$1] + ": ";
        });
    }  
$(document).ready(() => {
      $('#in').on('change keyup paste', e => {
        $('#out').val(emoji($("#in").val()));
      });
      $('#copy').click(() => {
        $('#out').select();
        document.execCommand('copy');
      });  
   })};
    