var displayTweets = function(tweets) {
    var $tweetDisplay = $('.tweet-display');
    $tweetDisplay.html('');
    
    var maxTweet = 0
    var index = tweets.length - 1;
    while(index >= 0 && maxTweet < 25){
      var tweet = tweets[index];


      //used children instead of find to only use the direct child 
      var $tweet = $('<div class="tweet"><span class="user"></span><span class="message"></span></div>');
      $tweet.children('.user').text('@' + tweet.user);
      $tweet.children('.message').text(' : ' + tweet.message);
      $tweet.appendTo($tweetDisplay);

      
      //used timeage timeago jquery plugin for user friendly timestamp
      var $timestamp = $('<div class="timestamp"></div>');
      $timestamp.text($(.timeago(tweet.created_at));
      $timestamp.appendTo($tweetDisplay);
      index -= 1;
      maxTweet++

    }
  };

// refresh tweet button, it's modified code of original stream
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
