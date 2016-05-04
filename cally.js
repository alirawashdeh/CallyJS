Cally = function(text){

  this.date = new Date()
  this.date.setHours(0,0,0,0);
  this.datefound = false;

  this.subject = "";
  this.subjectfound = false;
  var subjectstart = 0;
  var subjectend;

  var textString = "";
  var textStringLower = "";

  this.parse = function(){
    if(this.textString.length > 0){
      console.log("Parsing text: ", this.textString);
      this.findDayOfWeek();
      if(!this.datefound){
        this.findDateKeyword();
      }
      this.populateSubject();
    }
  };

  this.findDayOfWeek = function(){
    var defaultDate = this.date ? this.date : new Date();
    var currentDay = defaultDate.getDay();
    var foundDay = -1;

    var regexSunday = /([^a-z]+|^)(on |this )*(sun|sunday)([^a-z]+|$)/;
    var regexMonday = /([^a-z]+|^)(on |this )*(monday|mon)([^a-z]+|$)/;
    var regexTuesday = /([^a-z]+|^)(on |this )*(tuesday|tues|tue)([^a-z]+|$)/;
    var regexWednesday = /([^a-z]+|^)(on |this )*(wednesday|wed)([^a-z]+|$)/;
    var regexThursday = /([^a-z]+|^)(on |this )*(thursday|thurs|thur|thu)([^a-z]+|$)/;
    var regexFriday = /([^a-z]+|^)(on |this )*(friday|fri)([^a-z]+|$)/;
    var regexSaturday = /([^a-z]+|^)(on |this )*(saturday|sat)([^a-z]+|$)/;
    var regexToday = /([^a-z]+|^)(today)([^a-z]+|$)/;

    if(this.textStringLower.search(regexSunday) > -1){
      foundDay = 0;
      this.setSubjectEndPos(this.textStringLower.search(regexSunday));
      console.log("Day of week found: Sunday");
    } else {
      if(this.textStringLower.search(regexMonday) > -1){
        foundDay = 1;
        this.setSubjectEndPos(this.textStringLower.search(regexMonday));
        console.log("Day of week found: Monday");
      } else {
        if(this.textStringLower.search(regexTuesday) > -1){
          foundDay = 2;
          this.setSubjectEndPos(this.textStringLower.search(regexTuesday));
          console.log("Day of week found: Tuesday");
        } else {
          if(this.textStringLower.search(regexWednesday) > -1){
            foundDay = 3;
            this.setSubjectEndPos(this.textStringLower.search(regexWednesday));
            console.log("Day of week found: Wednesday");
          } else {
            if(this.textStringLower.search(regexThursday) > -1){
              foundDay = 4;
              this.setSubjectEndPos(this.textStringLower.search(regexThursday));
              console.log("Day of week found: Thursday");
            } else {
              if(this.textStringLower.search(regexFriday) > -1){
                foundDay = 5;
                this.setSubjectEndPos(this.textStringLower.search(regexFriday));
                console.log("Day of week found: Friday");
              } else {
                if(this.textStringLower.search(regexSaturday) > -1){
                  foundDay = 6;
                  this.setSubjectEndPos(this.textStringLower.search(regexSaturday));
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

  this.findDateKeyword = function(){
    var defaultDate = this.date ? this.date : new Date();

    var regexToday = /([^a-z]+|^)(today)([^a-z]+|$)/;
    var regexTomorrow = /([^a-z]+|^)(tomorrow)([^a-z]+|$)/;

    if(this.textStringLower.search(regexToday) > -1)
    {
      // Keep the default date.
      this.datefound = true;
      this.setSubjectEndPos(this.textStringLower.search(regexToday));
      console.log("Day of week found: Today");
    }
    else {
      if(this.textStringLower.search(regexTomorrow) > -1)
      {
        this.date.setDate(defaultDate.getDate() + 1);
        this.datefound = true;
        this.setSubjectEndPos(this.textStringLower.search(regexTomorrow));
        console.log("Day of week found: Tomorrow");
      }
    }
  }

  this.setSubjectEndPos = function(pos){
    if(pos < subjectend)
    {
      subjectend = pos;
    }
  }

  this.populateSubject = function(){
    this.subject = this.textString.substring(subjectstart,subjectend).trim();
    if((this.subject != null) & (this.subject.length > 0))
    {
      this.subjectfound = true;
    }
  }

  // Constructor
  this.textString = text;
  this.textStringLower = text.toLowerCase();
  subjectend = text.length;
  this.parse();
};
