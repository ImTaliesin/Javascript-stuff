var tweet=prompt("Enter your tweet here:")
//alert("You have written "+tweet.length+" characters, you have "+(140-tweet.length)+" characters remaining.");
tweet=(tweet.slice(0,140));
alert(tweet);