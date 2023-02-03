// JScript File

function CloseAndRebind(args) {
    GetRadWindow().Close();
    GetRadWindow().BrowserWindow.refreshGrid(args);
}

function GetRadWindow() {
    var oWindow = null;
    if (window.radWindow) oWindow = window.radWindow; //Will work in Moz in all cases, including clasic dialog
    else if (window.frameElement.radWindow) oWindow = window.frameElement.radWindow; //IE (and Moz as well)

    return oWindow;
}

function CancelEdit() {
    GetRadWindow().Close();
}


function PopUpShowing(sender, eventArgs) {

    var myWidth = 0, myHeight = 0;
    if (typeof (window.innerWidth) == 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }

    popUp = eventArgs.get_popUp();

    var popUpWidth = popUp.style.width.substr(0, popUp.style.width.indexOf("px"));
    var popUpHeight = popUp.style.height.substr(0, popUp.style.height.indexOf("px"));
    popUp.style.left = ((myWidth - popUpWidth) / 2 + sender.get_element().offsetLeft).toString() + "px";
    popUp.style.top = ((myHeight - popUpHeight) / 2 + sender.get_element().offsetTop).toString() + "px";

}