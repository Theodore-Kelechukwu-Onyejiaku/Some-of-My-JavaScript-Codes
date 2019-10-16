function ageCon(yOB){
    console.log("Your year of birth is "+yOB);
    return function(age){
        var realAge = 2019 - yOB;
        if(realAge === age){
            console.log("Wow, you are truly "+age+" years old.");
        }else{
            console.log("Either your age or year of birth is wrong!!!");
        }
    }
}
var theodore = ageCon(1996);    //now theodore becomes the returned function
    theodore(23);               //now start parsing the arguments that theodore, the returned fxn, needs.
    theodore(34);
    theodore(23);
    theodore = ageCon(1993);
    theodore(26);
    chidera = ageCon(1997)
    chidera(22);

/*FROM THE ABOVE, AFTER THE FUNCTION ABOVE EXECUTES, THAT IS BEFORE IT GETS TO THE LINE
*OF THE FUNCTION IT WILL RETURN, IT WILL RETURN ITSELF AS THE FUNCTION THAT WILL BE RETURNED.
* SO, WHAT YOU NOW HAVE TO DO IS TO PASS ITS OWN ARGUMENT TO IT, SINCE IT IS NOW THAT FXN 
* THAT IS RETURNED
*/