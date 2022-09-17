chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var searches = ["Access now", "Act now", "Act Immediately", "Action Required", "Apply now", "Apply online", "Buy"
            , "Buy now", "Buy direct", "Can't live without", "Call", "Call now", "Click here", "Clearance", "Deal ending soon"
            , "Do it now", "Do it today", "Don't delete", "Don't hesitate", "Drastically reduced", "Exclusive deal", "Get it now"
            , "Get it today", "Get started now", "Hurry up", "Important information regarding", "Instant", "Limited time"
            , "New customers only", "Now only", "Offer expires", "Once in a lifetime", "One time", "Order now", "Order today"
            , "Please read", "Special promotion", "Take action", "Take action now", "This won't last", "Urgent", "While stocks last"
            , "While supplies last", "Weekend Offers", "minimal prices", "you like!", "buy and sell", "latest offers"];
        
        var totalpoints = 0;
        for (search of searches) {
            let re = new RegExp(search, 'gi')
            let matches = document.documentElement.innerHTML.match(re);
            if (matches != null) {
                totalpoints = totalpoints + 1;
            }
        }
        
        sendResponse({count: totalpoints})
    }
);