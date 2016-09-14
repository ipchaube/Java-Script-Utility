/*
    Multi line alert message.
    args is an array.
 */
function multiLineAlert(args){

    if(args.length){
        alert(args.join('\n'));
    }

}


/*
 * Get current time Javascript
 */
function getCurrentTime() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
}