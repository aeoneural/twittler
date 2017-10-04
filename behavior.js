     <script>

        $(document).ready(function(){
          var $body = $('body');
          $body.html('');

          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message).addClass('tweets');
            $tweet.appendTo($body);
            index -= 1;
          }

        });
