document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', 
    onclick, false)

    function onclick(){
        chrome.tabs.query({currentWindow: true, active: true},
        function (tabs){
            chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        })
    }
    
    function setCount (res) {
        if (res.count > 6) {
            const div = document.createElement('div')
            div.textContent = 'This is a spam/phising email!'
            div.style = 'color: red; font-size: 18px;'
            document.body.appendChild(div)
        }
        else {
            const div = document.createElement('div')
            div.textContent = 'This is not a spam/phising email'
            div.style = 'color: green; font-size: 18px;'
            document.body.appendChild(div)
        }
        const br = document.createElement('br')
        document.body.appendChild(br)
    }
}, false)