
        // Events will be sent when someone followers
        // Please use event listeners to run functions.
        document.addEventListener('goalLoad', function(obj) {
          // obj.detail will contain information about the current goal
          // this will fire only once when the widget loads
          console.log(obj.detail);
          //$('#title').html(obj.detail.title);
          $('#goal-current').text(obj.detail.amount.current);
          $('#goal-total').text(obj.detail.amount.target);
          //$('#goal-end-date').text(obj.detail.to_go.ends_at);

          var width = 500;
          var widthleft = obj.detail.amount.current * (width / obj.detail.amount.target);
          var widthright = width - widthleft;

          $('#goal-bar-left').css("width", widthleft);
          $('#goal-bar-right').css("width", widthright);
          $('#goal-icon').css("left", widthleft);
          $('#goal-current').css("left", widthleft);
        });

        document.addEventListener('goalEvent', function(obj) {
          // obj.detail will contain information about the goal
          console.log(obj.detail);
          $('#goal-current').text(obj.detail.amount.current);
          $('#goal-total').text(obj.detail.amount.target);

          var width = 500;
          var widthleft = obj.detail.amount.current * (width / obj.detail.amount.target);
          var widthright = width - widthleft;

          $('#goal-bar-left').animate({ width: widthleft }, 500);
          $('#goal-bar-right').animate({ width: widthright }, 500);
          $('#goal-icon').animate({ left: widthleft }, 500);
          $('#goal-current').animate({ left: widthleft }, 500);
        });
