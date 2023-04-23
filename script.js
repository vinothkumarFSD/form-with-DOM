function labelcreate(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function linebreakers(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
function inputele(tagname,attrname,attrvalue,attrname1,attrvalue2){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue2);
    return ele;
}
var firstname=labelcreate("label","for","firstname","Firstname");
var br1=linebreakers("br");
var firstnameinput=inputele("input","type","text","id","firstname");
var br11=linebreakers("br");


var middlename=labelcreate("label","for","middlename","Middlename");
var br2=linebreakers("br");
var middlenameinput=inputele("input","type","text","id","middlename");
var br22=linebreakers("br");


var lastname=labelcreate("label","for","lastname","Lastname");
var br3=linebreakers("br");
var lastnameinput=inputele("input","type","type","id","lastname");
var br33=linebreakers("br");


var email=labelcreate("label","for","email","Email");
var br4=linebreakers("br");
var emailinput=inputele("input","type","email","id","email");
var br44=linebreakers("br");


var password=labelcreate("label","for","password","Password");
var br5=linebreakers("br");
var passwordinput=inputele("input","type","password","id","password");
var br55=linebreakers("br");
document.body.append(firstname,br1,firstnameinput,br11,middlename,br2,middlenameinput,br22,lastname,br3,lastnameinput,br33,email,br4,emailinput,br44,password,br5,passwordinput,br55);