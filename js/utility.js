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

/*
    Backslashes  for the ID in case HTML eelement id has special char
    Return full id along with # to pass to the jQuery Selecter like $(jquerySelectorID(<ID>))
 */
function jquerySelectorID( id ) {
    return (!id) ? null : '#' + myid.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');

}

/*
    Backslashes  for the ID in case HTML eelement id has special char
    Return only id along, user need to add # along with the jQuery Selecter like $('#'+jquerySelectorID(<ID>))
*/
function jQueryID( id ) {
    return (!id) ? null : myid.replace(/([ #;&,.+*~\':"!^$[\]()=>|\/@])/g, '\\$1');
}


/*
  IP address Vailidators
 */
function validateIPaddress(ipaddress)
{
    var regs=/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (regs.test(ipaddress))
    {
        return (true)
    }
    alert("You have entered an invalid IP address!")
    return (false)
}