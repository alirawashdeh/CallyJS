const AFTERNOON_TIME = 14;
const EVENING_TIME = 20;
const MORNING_TIME = 10;

Cally = function(text, currentdate){

  this.date = currentdate;
  this.date.setHours(0,0,0,0);
  this.datefound = false;
  this.timefound = false;

  this.subject = "";
  this.subjectfound = false;

  var subjectstart = 0;
  var subjectend;

  var textString = "";
  var textStringLower = "";

  this.parse = function(){
    if(this.textString.length > 0){
      console.log("Parsing text: ", this.textString);
      this.findDayOfWeek(); //e.g. Monday Tuesday
      if(!this.datefound){
        this.findDateKeyword(); //e.g. Tonight, Tomorrow
      }
      this.findTimeKeyword(); // e.g. evening, morning
      this.populateSubject(); // e.g. 'Meet John'
    }
  };

  this.findDayOfWeek = function(){
      var foundDay = -1;

    var regexSunday = /([^a-z]+|^)(on |this )*(sun|sunday)([^a-z]+|$)/;
    var regexMonday = /([^a-z]+|^)(on |this )*(monday|mon)([^a-z]+|$)/;
    var regexTuesday = /([^a-z]+|^)(on |this )*(tuesday|tues|tue)([^a-z]+|$)/;
    var regexWednesday = /([^a-z]+|^)(on |this )*(wednesday|wed)([^a-z]+|$)/;
    var regexThursday = /([^a-z]+|^)(on |this )*(thursday|thurs|thur|thu)([^a-z]+|$)/;
    var regexFriday = /([^a-z]+|^)(on |this )*(friday|fri)([^a-z]+|$)/;
    var regexSaturday = /([^a-z]+|^)(on |this )*(saturday|sat)([^a-z]+|$)/;
    var regexToday = /([^a-z]+|^)(today)([^a-z]+|$)/;

    var regexNext = /(next )$/;
    var nextFound = false;

    if(this.textStringLower.search(regexSunday) > -1){
      foundDay = 0;
      this.setSubjectEndPos(this.textStringLower.search(regexSunday));
      if(this.textStringLower.substring(0,this.textStringLower.search(regexSunday)+1).search(regexNext) > -1)
      {
        nextFound = true;
      }
      console.log("Day of week found: Sunday");
    } else {
      if(this.textStringLower.search(regexMonday) > -1){
        foundDay = 1;
        this.setSubjectEndPos(this.textStringLower.search(regexMonday));
        if(this.textStringLower.substring(0,this.textStringLower.search(regexMonday)+1).search(regexNext) > -1)
        {
          nextFound = true;
        }
        console.log("Day of week found: Monday");
      } else {
        if(this.textStringLower.search(regexTuesday) > -1){
          foundDay = 2;
          this.setSubjectEndPos(this.textStringLower.search(regexTuesday));
          if(this.textStringLower.substring(0,this.textStringLower.search(regexTuesday)+1).search(regexNext) > -1)
          {
            nextFound = true;
          }
          console.log("Day of week found: Tuesday");
        } else {
          if(this.textStringLower.search(regexWednesday) > -1){
            foundDay = 3;
            this.setSubjectEndPos(this.textStringLower.search(regexWednesday));
            if(this.textStringLower.substring(0,this.textStringLower.search(regexWednesday)+1).search(regexNext) > -1)
            {
              nextFound = true;
            }
            console.log("Day of week found: Wednesday");
          } else {
            if(this.textStringLower.search(regexThursday) > -1){
              foundDay = 4;
              this.setSubjectEndPos(this.textStringLower.search(regexThursday));
              if(this.textStringLower.substring(0,this.textStringLower.search(regexThursday)+1).search(regexNext) > -1)
              {
                nextFound = true;
              }
              console.log("Day of week found: Thursday");
            } else {
              if(this.textStringLower.search(regexFriday) > -1){
                foundDay = 5;
                this.setSubjectEndPos(this.textStringLower.search(regexFriday));
                if(this.textStringLower.substring(0,this.textStringLower.search(regexFriday)+1).search(regexNext) > -1)
                {
                  nextFound = true;
                }
                console.log("Day of week found: Friday");
              } else {
                if(this.textStringLower.search(regexSaturday) > -1){
                  foundDay = 6;
                  this.setSubjectEndPos(this.textStringLower.search(regexSaturday));
                  if(this.textStringLower.substring(0,this.textStringLower.search(regexSaturday)+1).search(regexNext) > -1)
                  {
                    nextFound = true;
                  }
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
      this.setDayOfWeek(foundDay,nextFound)
    }

  }

  // sets day of week, e.g. "0" for Sunday, "1" for Monday
  this.setDayOfWeek = function(day,nextFound)
  {
      var defaultDate = this.date ? this.date : new Date();
      var currentDay = defaultDate.getDay();
      var diff = 0; // Number of days away the found day is

      if(currentDay >= day)
      {
        diff = day + 7 - currentDay;
      }
      else
      {
        diff = day - currentDay;
      }

      if(nextFound)
      {
        // if it's a Saturday, all but "next sat" should be >7 days away
        if((currentDay == 6))
        {
          if(diff < 7){
            diff = diff + 7;
          }
        }
        else {
          // if it's a sunday, all but "next sat" / "next sun" is >7 days away
          if((currentDay == 0) )
          {
            if(diff < 6){
              diff = diff + 7;
            }
          }
          else {
            // if found day is past Saturday, add 7 days
            if(diff < (8-currentDay))
            {
              diff = diff + 7;
            }
          }
        }

      }
      defaultDate.setDate(defaultDate.getDate() + diff);
      this.date = defaultDate;
      this.datefound = true;
  }


  this.findDateKeyword = function(){
    var defaultDate = this.date ? this.date : new Date();

    var regexToday = /([^a-z]+|^)(today)([^a-z]+|$)/;
    var regexTomorrow = /([^a-z]+|^)(tomorrow)([^a-z]+|$)/;
    var regexThisAfternoon = /([^a-z]+|^)(this afternoon)([^a-z]+|$)/;
    var regexTonight = /([^a-z]+|^)(tonight)|(this evening)([^a-z]+|$)/;
    var regexInTheMorning = /([^a-z]+|^)(in the morning)([^a-z]+|$)/;

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
      else {
        if(this.textStringLower.search(regexThisAfternoon) > -1)
        {
          // Keep the default date
          this.datefound = true;
          this.timefound = true;
          this.date.setHours(AFTERNOON_TIME);
          this.setSubjectEndPos(this.textStringLower.search(regexThisAfternoon));
          console.log("Day of week found: This Afternoon");
        }
        else {
          if(this.textStringLower.search(regexTonight) > -1)
          {
            // Keep the default date
            this.datefound = true;
            this.timefound = true;
            this.date.setHours(EVENING_TIME);
            this.setSubjectEndPos(this.textStringLower.search(regexTonight));
            console.log("Day of week found: Tonight / This Evening");
          }
          else
          {
            if(this.textStringLower.search(regexInTheMorning) > -1)
            {
              // Keep the default date
              this.datefound = true;
              this.timefound = true;
              this.date.setDate(defaultDate.getDate() + 1);
              this.date.setHours(MORNING_TIME);
              this.setSubjectEndPos(this.textStringLower.search(regexInTheMorning));
              console.log("Day of week found: In the Morning");
            }
          }
        }
      }
    }
  }

  this.findTimeKeyword = function(){
    var regexMorning = /([^a-z]+|^)(morning)([^a-z]+|$)/;
    var regexAfternoon = /([^a-z]+|^)(afternoon)([^a-z]+|$)/;
    var regexNight = /([^a-z]+|^)(night)|(evening)([^a-z]+|$)/;

    if(this.textStringLower.search(regexMorning) > -1)
    {
      this.timefound = true;
      this.date.setHours(MORNING_TIME);
      this.setSubjectEndPos(this.textStringLower.search(regexMorning));
      console.log("Day of week found: Morning");
    }
    else {
      if(this.textStringLower.search(regexAfternoon) > -1)
      {
        this.timefound = true;
        this.date.setHours(AFTERNOON_TIME);
        this.setSubjectEndPos(this.textStringLower.search(regexAfternoon));
        console.log("Day of week found: Afternoon");
      }
      else {
        if(this.textStringLower.search(regexNight) > -1)
        {
          this.timefound = true;
          this.date.setHours(EVENING_TIME);
          this.setSubjectEndPos(this.textStringLower.search(regexNight));
          console.log("Day of week found: Night / Evening");
        }
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
