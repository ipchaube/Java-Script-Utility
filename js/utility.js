/*
    Multi line alert message.
    args is an array.
 */
function multiLineAlert(args){

    if(args.length){
        alert(args.join('\n'));
    }

}