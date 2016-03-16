Cally = function(text){

  this.date = new Date()
  this.date.setHours(0,0,0,0);
  this.datefound = false;

  var textString = "";
  var textStringLower = "";

  this.parse = function(){
    if(this.textString.length > 0){
      console.log("Parsing text: ", this.textString);
      this.findDayOfWeek();
    }
  };

  this.findDayOfWeek = function(){
    var defaultDate = this.date ? this.date : new Date();
    var currentDay = defaultDate.getDay();
    var foundDay = -1;
    if((this.textStringLower.indexOf('sunday') > -1) || (this.textStringLower.indexOf('sun') > -1)){
      foundDay = 0;
      console.log("Day of week found: Sunday");
    } else {
      if((this.textStringLower.indexOf('monday') > -1) || (this.textStringLower.indexOf('mon') > -1)){
        foundDay = 1;
        console.log("Day of week found: Monday");
      } else {
        if((this.textStringLower.indexOf('tuesday') > -1) || (this.textStringLower.indexOf('tues') > -1) || (this.textStringLower.indexOf('tue') > -1)){
          foundDay = 2;
          console.log("Day of week found: Tuesday");
        } else {
          if((this.textStringLower.indexOf('wednesday') > -1) || (this.textStringLower.indexOf('wed') > -1)){
            foundDay = 3;
            console.log("Day of week found: Wednesday");
          } else {
            if((this.textStringLower.indexOf('thursday') > -1) || (this.textStringLower.indexOf('thurs') > -1) || (this.textStringLower.indexOf('thur') > -1)  || (this.textStringLower.indexOf('thu') > -1)){
              foundDay = 4;
              console.log("Day of week found: Thursday");
            } else {
              if((this.textStringLower.indexOf('friday') > -1) || (this.textStringLower.indexOf('fri') > -1)){
                foundDay = 5;
                console.log("Day of week found: Friday");
              } else {
                if((this.textStringLower.indexOf('saturday') > -1) || (this.textStringLower.indexOf('sat') > -1)){
                  foundDay = 6;
                  console.log("Day of week found: Saturday");
                }
              }
            }
          }
        }
      }
    }
    if(foundDay > -1)
    {
      var diff = 0;
      if(currentDay >= foundDay)
      {
        diff = foundDay + 7 - currentDay;
      }
      else
      {
        diff = foundDay - currentDay;
      }
      defaultDate.setDate(defaultDate.getDate() + diff);
      this.date = defaultDate;
      this.datefound = true;
    }
  }

  // Constructor
  this.textString = text;
  this.textStringLower = text.toLowerCase();
  this.parse();
};
