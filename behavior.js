var displayTweets = function(tweets) {
    var $tweetDisplay = $('.tweet-display');
    $tweetDisplay.html('');

    var index = tweets.length - 1;
    while(index >= 0){
      var tweet = tweets[index];
      var $tweet = $('<div class="tweet"><span class="user"></span><span class="message"></span></div>');
      $tweet.children('.user').text('@' + tweet.user);
      $tweet.children('.message').text(' : ' + tweet.message);
      $tweet.appendTo($tweetDisplay);
      index -= 1;
    }
  };

/* refresh button */
var refreshTweet = function() {
    displayTweets(streams.home);
  };

$(document).ready(function(){
	// jquery style
	$('.refresh-button').on('mouseenter', function(){ 
    	$(this).addClass('highlight');
	})
  	$('.refresh-button').on('mouseleave', function(){ 
    	$(this).removeClass('highlight');
 	})
 	$('.user')

  refreshTweet();

  $('.refresh-button').on('click', refreshTweet);
 
});
