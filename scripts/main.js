'use strict';

$(document).ready(function () {
  let totalItems = 0;
  let cost = 0;
  $(document).ready(function () {
    // When the Jewel button is clicked
    $('.jewel-btn').click(function () {
      $('.overlay').toggle();
      $('.cart-modal').slideDown();
    });

    // When overlay is clicked
    $('.overlay').click(function () {
      $('.overlay').toggle('hide');
      $('.cart-modal').toggle('hide');
    });

    // When Gowns modal is clicked
    $('.gowns-btn').click(function () {
      $('.overlay2').toggle();
      $('.gowns-modal').slideDown();
    });

    // When overlay2 is clicked
    $('.overlay2').click(function () {
      $('.overlay2').toggle('hide');
      $('.gowns-modal').toggle('hide');
    });

    // FOOTWEAR MODAL
    // When Footwear modal is clicked
    $('.footwear-btn').click(function () {
      $('.overlay3').toggle();
      $('.footwear-modal').slideDown();
    });

    // When overlay2 is clicked
    $('.overlay3').click(function () {
      $('.overlay3').toggle('hide');
      $('.footwear-modal').toggle('hide');
    });

    // When the close modal button is clicked
    $('.close-btn').click(function () {
      $('.overlay').toggle('hide');
      $('.cart-modal').toggle('hide');
    });

    // When the gown close modal button is clicked
    $('.close-gowns').click(function () {
      $('.overlay2').toggle('hide');
      $('.gowns-modal').toggle('hide');
    });

    // When the footwear close modal button is clicked
    $('.close-footwear').click(function () {
      $('.overlay3').toggle('hide');
      $('.footwear-modal').toggle('hide');
    });

    // When the Total Order Button is clicked

    $('.total-order-btn').click(function () {
      $('.overlay').toggle('hide');
      $('.cart-modal').toggle('hide');
    });

    $('.gowns-order-btn').click(function () {
      $('.overlay2').toggle('hide');
      $('.gowns-modal').toggle('hide');

      const orderTotal = function () {
        $('.modal-item-btn').click(function () {
          console.log($(this).val());
        });
      };

      $('.total-order-btn').click(function () {
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
      });

      $('.gowns-order-btn').click(function () {
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
      });

      $('.fcost').click(function () {
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
      });

      // When a user clicks on the amount button
      // // FOOTWEAR 
      let total = 0;
      let totalItems = 0;
      $('.modal-item-btn').click(function () {
        $(this).css('backgroundColor', '#4e854e');
        $(this).text('Added');
        total += parseInt($(this).attr('value'));
        $('.fw-order-btn').html(
          'Items selected: ' + ++totalItems + '<br/>' + 'total cost: ' + total
        );
        $('.order-counter').text(totalItems);
        
      });
    });

    // GOWNS
    let gCost = 0;
    let gTotalItems = 0;
    $('.gbtn').click(function () {
      $(this).css('backgroundColor', '#4e854e');
      $(this).text('Added');
      gCost += parseInt($(this).attr('value'));
      $('.gcost').html(
        'Items selected: ' + ++gTotalItems + '<br/>' + 'total cost: ' + gCost
      );
      $('.order-counter').text(gTotalItems);
      $('.cart').html(gTotalItems);
      $('.amount').html(gCost);
      $('.i').html("Total Amount");
      $('.cart-empty').hide();
    });

    // JEWELERY
    let fCost = 0;
    let fTotalItems = 0;
    $('.fbtn').click(function () {
      $(this).css('backgroundColor', '#4e854e');
      $(this).text('Added');
      fCost += parseInt($(this).attr('value'));
      $('.fcost').html(
        'Items selected: ' + ++fTotalItems + '<br/>' + 'total cost: ' + fCost
      );
      $('.order-counter').text(fTotalItems);
      $('.cart').html(fTotalItems);
      $('.amount2').html(fCost);
      $('.i2').html("Total Amount");
      $('.cart-empty').hide();
    });

    // When the Cart Icon is clicked
    $('.shopping-cart-btn').click(function () {
      $('.shop-cart-modal').slideToggle('medium');
      
    });

    // Jewlery modal function for total cost

    let totalJewelryItems = 0;
    let jewelryCost = 0;

    // onLoadCartNumbers()
    $('.jbtn').click(function () {
      $(this).css('backgroundColor', '#4e854e');
      $(this).text('Added');
      jewelryCost += parseInt($(this).attr('value'));
      $('.jcost').html('Items selected: ' + ++totalJewelryItems + '<br/>' + 'total cost: ' +jewelryCost
      );
    });
    // When the close cart icon is clicked
    $('.close-cart').click(function () {
      $('.shop-cart-modal').slideToggle('medium');
    });

    // When Complete Order button is clicked
    $('.complete-order').click(function () {
      $('.complete-order').toggle('hide');
      $('.cart-order-total').toggle('hide');
      $('.cart-order-items').hide();
      $('.cart').text('0');
      $('.alert').toggle('show');
    });
  });
});
