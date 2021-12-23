const {hostname} = new URL(document.URL)

function skipAd(event) {
    const skipBtn = document.querySelector("button.ytp-ad-skip-button");
    if (skipBtn && event.key == "s") {
        skipBtn.click();
    }
}

if (hostname == "www.youtube.com") {
    document.onkeydown = skipAd;
}
