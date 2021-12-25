
const defaultSkipKey = 's';
const defaultSkipType = "manualskip";

// getUserPreference
const pref = window.localStorage.getItem("yt-skip-pref");

if (pref != undefined) {
    // pref['skip-type']
    document.querySelector('key-set-input').innerHTML = pref['skip-key'] || defaultSkipKey;
    const skip_type = pref['skip-type'] || defaultSkipType;
    document.querySelector(`input[value=${skip_type}]`).checked = true;
}

function changePref(event) {
    event.preventDefault();
    const form = document.querySelector("form");
    alert("WOrking !");
    // document.querySelector("#test").innerHTML = "nicely working !"
    // skip-type
    // skip-key
}