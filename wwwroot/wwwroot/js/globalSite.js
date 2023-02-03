//for the whole site

function navigateURL(vURL) {
    var newWindow = window.open(vURL, '_blank');
    newWindow.focus();
    return false;
}