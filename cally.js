const AFTERNOON_TIME = 14;
const EVENING_TIME = 20;
const MORNING_TIME = 10;

Cally = function(text, currentdate) {

  this.date = currentdate;
  this.date.setHours(0, 0, 0, 0);
  this.datefound = false;
  this.timefound = false;

  this.subject = "";
  this.subjectfound = false;

  var subjectstart = 0;
  var subjectend;

  var textString = "";
  var textStringLower = "";

  this.parse = function() {
    if (this.textString.length > 0) {
      console.log("Parsing text: ", this.textString);
      this.findDayOfWeek(); //e.g. Monday Tuesday
      if (!this.datefound) {
        this.findDateKeyword(); //e.g. Tonight, Tomorrow, Next Year
      }
      this.findTimeKeyword(); // e.g. evening, morning
      this.findTimeNumber(); // e.g. 3PM, 15:00
      this.populateSubject(); // e.g. 'Meet John'
    }
  };

  // Find day of week e.g. Monday, Mon, Tuesday etc.
  this.findDayOfWeek = function() {
    var foundDay = -1;

    var regexSundayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(sun|sunday)([^a-z]+|$)/);
    var regexMondayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(monday|mon)([^a-z]+|$)/);
    var regexTuesdayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(tuesday|tues|tue)([^a-z]+|$)/);
    var regexWednesdayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(wednesday|wed)([^a-z]+|$)/);
    var regexThursdayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(thursday|thurs|thur|thu)([^a-z]+|$)/);
    var regexFridayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(friday|fri)([^a-z]+|$)/);
    var regexSaturdayPos = this.textStringLower.search(/([^a-z]+|^)(on |this )*(saturday|sat)([^a-z]+|$)/);
    var regexTodayPos = this.textStringLower.search(/([^a-z]+|^)(today)([^a-z]+|$)/);

    var nextFound = false;

    if (regexSundayPos > -1) {
      foundDay = 0;
      this.setSubjectEndPos(regexSundayPos);
      nextFound = this.findNext(regexSundayPos);
      console.log("Day of week found: Sunday");
    } else {
      if (regexMondayPos > -1) {
        foundDay = 1;
        this.setSubjectEndPos(regexMondayPos);
        nextFound = this.findNext(regexMondayPos);
        console.log("Day of week found: Monday");
      } else {
        if (regexTuesdayPos > -1) {
          foundDay = 2;
          this.setSubjectEndPos(regexTuesdayPos);
          nextFound = this.findNext(regexTuesdayPos);
          console.log("Day of week found: Tuesday");
        } else {
          if (regexWednesdayPos > -1) {
            foundDay = 3;
            this.setSubjectEndPos(regexWednesdayPos);
            nextFound = this.findNext(regexWednesdayPos);
            console.log("Day of week found: Wednesday");
          } else {
            if (regexThursdayPos > -1) {
              foundDay = 4;
              this.setSubjectEndPos(regexThursdayPos);
              nextFound = this.findNext(regexThursdayPos);
              console.log("Day of week found: Thursday");
            } else {
              if (regexFridayPos > -1) {
                foundDay = 5;
                this.setSubjectEndPos(regexFridayPos);
                nextFound = this.findNext(regexFridayPos);
                console.log("Day of week found: Friday");
              } else {
                if (regexSaturdayPos > -1) {
                  foundDay = 6;
                  this.setSubjectEndPos(regexSaturdayPos);
                  nextFound = this.findNext(regexSaturdayPos);
                  console.log("Day of week found: Saturday");
                }
              }
            }
          }
        }
      }
    }
    if (foundDay > -1) {
      this.setDayOfWeek(foundDay, nextFound)
    }
  }

  // returns true if the word "next" appears immediately prior to the position supplied
  // used for e.g. "next Monday"
  this.findNext = function(dayPos) {
    var regexNext = /(next )$/;
    if (this.textStringLower.substring(0, dayPos + 1).search(regexNext) > -1) {
      return true;
    }
    return false;
  }

  // Sets day of week, e.g. "0" for Sunday, "1" for Monday
  this.setDayOfWeek = function(day, nextFound) {
    var defaultDate = this.date ? this.date : new Date();
    var currentDay = defaultDate.getDay();
    var diff = 0; // Number of days away the found day is

    if (currentDay >= day) {
      diff = day + 7 - currentDay;
    } else {
      diff = day - currentDay;
    }

    if (nextFound) {
      // if it's a Saturday, all but "next sat" should be >7 days away
      if ((currentDay == 6)) {
        if (diff < 7) {
          diff = diff + 7;
        }
      } else {
        // if it's a sunday, all but "next sat" / "next sun" is >7 days away
        if ((currentDay == 0)) {
          if (diff < 6) {
            diff = diff + 7;
          }
        } else {
          // if found day is past Saturday, add 7 days
          if (diff < (8 - currentDay)) {
            diff = diff + 7;
          }
        }
      }

    }
    defaultDate.setDate(defaultDate.getDate() + diff);
    this.date = defaultDate;
    this.datefound = true;
  }

  // Find date keyword - e.g. Today, Tomorrow, Next Week
  this.findDateKeyword = function() {
    var defaultDate = this.date ? this.date : new Date();

    var regexTodayPos = this.textStringLower.search(/([^a-z]+|^)(today)([^a-z]+|$)/);
    var regexTomorrowPos = this.textStringLower.search(/([^a-z]+|^)(tomorrow)([^a-z]+|$)/);
    var regexThisAfternoonPos = this.textStringLower.search(/([^a-z]+|^)(this afternoon)([^a-z]+|$)/);
    var regexTonightPos = this.textStringLower.search(/([^a-z]+|^)(tonight)|(this evening)([^a-z]+|$)/);
    var regexInTheMorningPos = this.textStringLower.search(/([^a-z]+|^)(in the morning)([^a-z]+|$)/);
    var regexNextWeekPos = this.textStringLower.search(/([^a-z]+|^)(next week)([^a-z]+|$)/);
    var regexNextMonthPos = this.textStringLower.search(/([^a-z]+|^)(next month)([^a-z]+|$)/);
    var regexNextYearPos = this.textStringLower.search(/([^a-z]+|^)(next year)([^a-z]+|$)/);

    if (regexTodayPos > -1) {
      // Keep the default date.
      this.datefound = true;
      this.setSubjectEndPos(regexTodayPos);
      console.log("Day of week found: Today");
    } else {
      if (regexTomorrowPos > -1) {
        this.date.setDate(defaultDate.getDate() + 1);
        this.datefound = true;
        this.setSubjectEndPos(regexTomorrowPos);
        console.log("Day of week found: Tomorrow");
      } else {
        if (regexThisAfternoonPos > -1) {
          // Keep the default date
          this.datefound = true;
          this.timefound = true;
          this.date.setHours(AFTERNOON_TIME);
          this.setSubjectEndPos(regexThisAfternoonPos);
          console.log("Day of week found: This Afternoon");
        } else {
          if (regexTonightPos > -1) {
            // Keep the default date
            this.datefound = true;
            this.timefound = true;
            this.date.setHours(EVENING_TIME);
            this.setSubjectEndPos(regexTonightPos);
            console.log("Day of week found: Tonight / This Evening");
          } else {
            if (regexInTheMorningPos > -1) {
              this.datefound = true;
              this.timefound = true;
              this.date.setDate(defaultDate.getDate() + 1);
              this.date.setHours(MORNING_TIME);
              this.setSubjectEndPos(regexInTheMorningPos);
              console.log("Day of week found: In the Morning");
            } else {
              if (regexNextWeekPos > -1) {
                this.datefound = true;
                this.date.setDate(defaultDate.getDate() + 7);
                this.setSubjectEndPos(regexNextWeekPos);
                console.log("Day of week found: Next Week");
              } else {
                if (regexNextMonthPos > -1) {
                  this.datefound = true;
                  this.date.setMonth(defaultDate.getMonth() + 1);
                  this.setSubjectEndPos(regexNextMonthPos);
                  console.log("Day of week found: Next Month");
                } else {
                  if (regexNextYearPos > -1) {
                    this.datefound = true;
                    this.date.setFullYear(defaultDate.getFullYear() + 1);
                    this.setSubjectEndPos(regexNextYearPos);
                    console.log("Day of week found: Next Year");
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Find time keyword - e.g. Morning, Afternoon, Evening
  this.findTimeKeyword = function() {
    var regexMorningPos = this.textStringLower.search(/([^a-z]+|^)(morning)([^a-z]+|$)/);
    var regexAfternoonPos = this.textStringLower.search(/([^a-z]+|^)(afternoon)([^a-z]+|$)/);
    var regexNightPos = this.textStringLower.search(/([^a-z]+|^)(night)|(evening)([^a-z]+|$)/);

    if (regexMorningPos > -1) {
      this.timefound = true;
      this.date.setHours(MORNING_TIME);
      this.setSubjectEndPos(regexMorningPos);
      console.log("Day of week found: Morning");
    } else {
      if (regexAfternoonPos > -1) {
        this.timefound = true;
        this.date.setHours(AFTERNOON_TIME);
        this.setSubjectEndPos(regexAfternoonPos);
        console.log("Day of week found: Afternoon");
      } else {
        if (regexNightPos > -1) {
          this.timefound = true;
          this.date.setHours(EVENING_TIME);
          this.setSubjectEndPos(regexNightPos);
          console.log("Day of week found: Night / Evening");
        }
      }
    }
  }

  // Find time number - e.g. 3PM, 15:00
  this.findTimeNumber = function() {

    var regexAtNumberPMPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-1]*[0-9](:[0-5][0-9])?(pm| pm)([^a-z]+|$)/);
    var regexAtNumberAMPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-1]*[0-9](:[0-5][0-9])?(am| am)([^a-z]+|$)/);
    var regexAtNumber24HrPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-2]*[0-9](:[0-5][0-9])([^a-z]+|$)/);
    var regexAtNumberPMorAMMatch = /([0-1]*[0-9])(:([0-5][0-9]))?( pm|pm| am|am)/;
    var regexAtNumberMatch = /([0-2]*[0-9])(:([0-5][0-9]))/;

    var hours = 0;

    if (regexAtNumberPMPos > -1) {
      this.timefound = true;
      var matches = this.textStringLower.match(regexAtNumberPMorAMMatch);
      hours = Number(matches[1]) + 12;
      if (hours == 24) {
        hours = 12;
      }
      this.date.setHours(hours);
      if (matches[3] != null) {
        this.date.setMinutes(Number(matches[3]));
      }
      this.setSubjectEndPos(regexAtNumberPMPos);
      console.log("Time found: XPM");
    } else {
      if (regexAtNumberAMPos > -1) {
        this.timefound = true;
        var matches = this.textStringLower.match(regexAtNumberPMorAMMatch);
        hours = Number(matches[1]);
        if (hours == 12) {
          hours = 0;
        }
        this.date.setHours(hours);
        if (matches[3] != null) {
          this.date.setMinutes(Number(matches[3]));
        }
        this.setSubjectEndPos(regexAtNumberAMPos);
        console.log("Time found: XAM");
      } else {
        if (regexAtNumber24HrPos > -1) {
          this.timefound = true;
          var matches = this.textStringLower.match(regexAtNumberMatch);
          hours = Number(matches[1]);
          this.date.setHours(hours);
          if (matches[3] != null) {
            this.date.setMinutes(Number(matches[3]));
          }
          this.setSubjectEndPos(regexAtNumber24HrPos);
          console.log("Time found: XX:XX");
        }
      }
    }
  }

  this.setSubjectEndPos = function(pos) {
    if (pos < subjectend) {
      subjectend = pos;
    }
  }

  this.populateSubject = function() {
    this.subject = this.textString.substring(subjectstart, subjectend).trim();
    if ((this.subject != null) & (this.subject.length > 0)) {
      this.subjectfound = true;
    }
  }

  // Constructor
  this.textString = text;
  this.textStringLower = text.toLowerCase();
  subjectend = text.length;
  this.parse();
};