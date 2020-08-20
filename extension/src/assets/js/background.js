chrome.runtime.onInstalled.addListener(function () {
    let time = new Date();
    setInterval((res) => {
        time = new Date();
        if (time.getHours() === 21 && time.getMinutes() === 0 && time.setSeconds() === 0) {
            chrome.notifications.create(
                'gr8tfl', {
                type: 'basic',
                iconUrl: 'assets/images/logo.png',
                title: "Time save your memories!!",
                message: "Please save your valuable memories with gr8tfl."
            }, function () { });
        }
    }, 1000)

});