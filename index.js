/* eslint-disable no-undef */
/* Listen for the item user submits and add it as a listed item with the check and
delete button*/

'use strict';

$(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    
    let item = $('input').first().val();
    $('ul').append(
      '<li>' +
        '<span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>' +
      '</li>'
    );
  });

  $('li').on('click', '.shopping-item-toggle', function(event){
    $(event.currentTarget).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });

  $('.shopping-item-delete').click(function(event){
    this.closest('li').remove();
  });
});