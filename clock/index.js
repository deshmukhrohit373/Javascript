// Set Interval For Refreshing And Getting A New Date
 setInterval(() => {
   //  Getting  Date and Time 
    let mydate = new Date();    
   // Declaring Hours To Do Further Operation
    myhour = mydate.getHours();

 if (myhour<12) {
     ampm = "AM";
 } 
 else if (myhour==12) {
    ampm = "PM";    
 }
 else {
     ampm = "PM";
     myhour = myhour-12; 
 }

 myminutes = mydate.getMinutes();
 myseconds = mydate.getSeconds();
 mycurrentdate = mydate.getDate();
 mymonth = mydate.getMonth()+1;
 myyear = mydate.getFullYear();



    document.getElementById('timeh1').innerHTML = myhour+":"+myminutes+":"+myseconds+" "+ampm;  
    document.getElementById('dateh1').innerHTML = mycurrentdate+"/"+mymonth+"/"+myyear;        
 }, 1000);
