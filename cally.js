const AFTERNOON_TIME = 14;
const EVENING_TIME = 20;
const MORNING_TIME = 10;
const MIDDAY_TIME = 12;

Cally = function(text, currentdate) {

  this.date = currentdate;
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
        this.findDateKeyword(); //e.g. Tonight, Tomorrow, Next Year, in 1 month
      }
      this.findDateAndMonth();
      this.findTimeKeyword(); // e.g. evening, morning, in 1 hour
      this.findTimeNumber(); // e.g. 3PM, 15:00
      this.populateSubject(); // e.g. 'Meet John'
    }

    if (this.timefound == false) {
      this.date.setHours(0, 0, 0, 0);
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
    var regexNextPos = this.textStringLower.substring(0, dayPos + 1).search(/(next )$/);
    if (regexNextPos > -1) {
      this.setSubjectEndPos(regexNextPos);
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

  // Find date and month - e.g. on 12th November
  this.findDateAndMonth = function() {
    var defaultDate = this.date ? this.date : new Date();


    var regexJanMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( jan| january)([^a-z]+|$)/;
    var regexJanPos = this.textStringLower.search(regexJanMatch);
    var regexFebMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( feb| february)([^a-z]+|$)/;
    var regexFebPos = this.textStringLower.search(regexFebMatch);
    var regexMarMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( mar| march)([^a-z]+|$)/;
    var regexMarPos = this.textStringLower.search(regexMarMatch);
    var regexAprMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( apr| april)([^a-z]+|$)/;
    var regexAprPos = this.textStringLower.search(regexAprMatch);
    var regexMayMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( may| may)([^a-z]+|$)/;
    var regexMayPos = this.textStringLower.search(regexMayMatch);
    var regexJunMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( jun| june)([^a-z]+|$)/;
    var regexJunPos = this.textStringLower.search(regexJunMatch);
    var regexJulMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( jul| july)([^a-z]+|$)/;
    var regexJulPos = this.textStringLower.search(regexJulMatch);
    var regexAugMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( aug| august)([^a-z]+|$)/;
    var regexAugPos = this.textStringLower.search(regexAugMatch);
    var regexSepMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( sep| september)([^a-z]+|$)/;
    var regexSepPos = this.textStringLower.search(regexSepMatch);
    var regexOctMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( oct| october)([^a-z]+|$)/;
    var regexOctPos = this.textStringLower.search(regexOctMatch);
    var regexNovMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( nov| november)([^a-z]+|$)/;
    var regexNovPos = this.textStringLower.search(regexNovMatch);
    var regexDecMatch = /([^a-z0-9]+|^)(on |on the )?([1-9][0-9]*)(st|nd|th)?( of)?( dec| december)([^a-z]+|$)/;
    var regexDecPos = this.textStringLower.search(regexDecMatch);

    var newDate;
    var found = false;
    var matches = null;

    if (regexJanPos > -1) {
      found = true;
      matches = this.textStringLower.match(regexJanMatch);
      if (matches[3] != null) {
        newDate = new Date(this.date.getFullYear(), 0, Number(matches[3]));
      }
      this.setSubjectEndPos(regexJanPos);
      console.log("Date and Month found: January");
    } else {
      if (regexFebPos > -1) {
        found = true;
        matches = this.textStringLower.match(regexFebMatch);
        if (matches[3] != null) {
          newDate = new Date(this.date.getFullYear(), 1, Number(matches[3]));
        }
        this.setSubjectEndPos(regexFebPos);
        console.log("Date and Month found: February");
      } else {
        if (regexMarPos > -1) {
          found = true;
          matches = this.textStringLower.match(regexMarMatch);
          if (matches[3] != null) {
            newDate = new Date(this.date.getFullYear(), 2, Number(matches[3]));
          }
          this.setSubjectEndPos(regexMarPos);
          console.log("Date and Month found: March");
        } else {
          if (regexAprPos > -1) {
            found = true;
            matches = this.textStringLower.match(regexAprMatch);
            if (matches[3] != null) {
              newDate = new Date(this.date.getFullYear(), 3, Number(matches[3]));
            }
            this.setSubjectEndPos(regexAprPos);
            console.log("Date and Month found: April");
          } else {
            if (regexMayPos > -1) {
              found = true;
              matches = this.textStringLower.match(regexMayMatch);
              if (matches[3] != null) {
                newDate = new Date(this.date.getFullYear(), 4, Number(matches[3]));
              }
              this.setSubjectEndPos(regexMayPos);
              console.log("Date and Month found: May");
            } else {
              if (regexJunPos > -1) {
                found = true;
                matches = this.textStringLower.match(regexJunMatch);
                if (matches[3] != null) {
                  newDate = new Date(this.date.getFullYear(), 5, Number(matches[3]));
                }
                this.setSubjectEndPos(regexJunPos);
                console.log("Date and Month found: Jun");
              } else {
                if (regexJulPos > -1) {
                  found = true;
                  matches = this.textStringLower.match(regexJulMatch);
                  if (matches[3] != null) {
                    newDate = new Date(this.date.getFullYear(), 6, Number(matches[3]));
                  }
                  this.setSubjectEndPos(regexJulPos);
                  console.log("Date and Month found: Jul");
                } else {
                  if (regexAugPos > -1) {
                    found = true;
                    matches = this.textStringLower.match(regexAugMatch);
                    if (matches[3] != null) {
                      newDate = new Date(this.date.getFullYear(), 7, Number(matches[3]));
                    }
                    this.setSubjectEndPos(regexAugPos);
                    console.log("Date and Month found: August");
                  } else {
                    if (regexSepPos > -1) {
                      found = true;
                      matches = this.textStringLower.match(regexSepMatch);
                      if (matches[3] != null) {
                        newDate = new Date(this.date.getFullYear(), 8, Number(matches[3]));
                      }
                      this.setSubjectEndPos(regexSepPos);
                      console.log("Date and Month found: September");
                    } else {
                      if (regexOctPos > -1) {
                        found = true;
                        matches = this.textStringLower.match(regexOctMatch);
                        if (matches[3] != null) {
                          newDate = new Date(this.date.getFullYear(), 9, Number(matches[3]));
                        }
                        this.setSubjectEndPos(regexOctPos);
                        console.log("Date and Month found: October");
                      } else {
                        if (regexNovPos > -1) {
                          found = true;
                          matches = this.textStringLower.match(regexNovMatch);
                          if (matches[3] != null) {
                            newDate = new Date(this.date.getFullYear(), 10, Number(matches[3]));
                          }
                          this.setSubjectEndPos(regexNovPos);
                          console.log("Date and Month found: November");
                        } else {
                          if (regexDecPos > -1) {
                            found = true;
                            matches = this.textStringLower.match(regexDecMatch);
                            if (matches[3] != null) {
                              newDate = new Date(this.date.getFullYear(), 11, Number(matches[3]));
                            }
                            this.setSubjectEndPos(regexDecPos);
                            console.log("Date and Month found: December");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (found) {
      this.datefound = true;
      if (newDate < this.date) {
        this.date.setFullYear(newDate.getFullYear() + 1);
      }
      this.date.setDate(newDate.getDate());
      this.date.setMonth(newDate.getMonth());

    }
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
    var regexInXDaysMatch = /([^a-z]+|^)(in )([1-9][0-9]*)( days| day)([^a-z]+|$)/;
    var regexInXDaysPos = this.textStringLower.search(regexInXDaysMatch);
    var regexInXWeeksMatch = /([^a-z]+|^)(in )([1-9][0-9]*)( weeks| week)([^a-z]+|$)/;
    var regexInXWeeksPos = this.textStringLower.search(regexInXWeeksMatch);
    var regexInXMonthsMatch = /([^a-z]+|^)(in )([1-9][0-9]*)( months| month)([^a-z]+|$)/;
    var regexInXMonthsPos = this.textStringLower.search(regexInXMonthsMatch);
    var regexInXYearsMatch = /([^a-z]+|^)(in )([1-9][0-9]*)( years| year)([^a-z]+|$)/;
    var regexInXYearsPos = this.textStringLower.search(regexInXYearsMatch);


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
          this.date.setHours(AFTERNOON_TIME, 0, 0, 0);
          this.setSubjectEndPos(regexThisAfternoonPos);
          console.log("Day of week found: This Afternoon");
        } else {
          if (regexTonightPos > -1) {
            // Keep the default date
            this.datefound = true;
            this.timefound = true;
            this.date.setHours(EVENING_TIME, 0, 0, 0);
            this.setSubjectEndPos(regexTonightPos);
            console.log("Day of week found: Tonight / This Evening");
          } else {
            if (regexInTheMorningPos > -1) {
              this.datefound = true;
              this.timefound = true;
              this.date.setDate(defaultDate.getDate() + 1);
              this.date.setHours(MORNING_TIME, 0, 0, 0);
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
                  } else {
                    if (regexInXDaysPos > -1) {
                      this.datefound = true;

                      var matches = this.textStringLower.match(regexInXDaysMatch);
                      if (matches[3] != null) {
                        this.datefound = true;
                        this.date.setDate(defaultDate.getDate() + Number(matches[3]));
                      }
                      this.setSubjectEndPos(regexInXDaysPos);
                      console.log("Day of week found: In X Days");
                    } else {
                      if (regexInXWeeksPos > -1) {
                        this.datefound = true;

                        var matches = this.textStringLower.match(regexInXWeeksMatch);
                        if (matches[3] != null) {
                          this.datefound = true;
                          this.date.setDate(defaultDate.getDate() + (Number(matches[3]) * 7));
                        }
                        this.setSubjectEndPos(regexInXWeeksPos);
                        console.log("Day of week found: In X Weeks");
                      } else {
                        if (regexInXMonthsPos > -1) {
                          this.datefound = true;

                          var matches = this.textStringLower.match(regexInXMonthsMatch);
                          if (matches[3] != null) {
                            this.datefound = true;
                            this.date.setMonth(defaultDate.getMonth() + Number(matches[3]));
                          }
                          this.setSubjectEndPos(regexInXMonthsPos);
                          console.log("Day of week found: In X Months");
                        } else {
                          if (regexInXYearsPos > -1) {
                            this.datefound = true;

                            var matches = this.textStringLower.match(regexInXYearsMatch);
                            if (matches[3] != null) {
                              this.datefound = true;
                              this.date.setFullYear(defaultDate.getFullYear() + Number(matches[3]));
                            }
                            this.setSubjectEndPos(regexInXYearsPos);
                            console.log("Day of week found: In X Years");
                          }
                        }
                      }
                    }
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
    var regexNoonPos = this.textStringLower.search(/([^a-z]+|^)(noon)|(midday)([^a-z]+|$)/);
    var regexInXHoursMatch = /([^a-z]+|^)(in )([1-9][0-9]*)( hours| hour)([^a-z]+|$)/;
    var regexInXHoursPos = this.textStringLower.search(regexInXHoursMatch);

    if (regexMorningPos > -1) {
      this.timefound = true;
      this.date.setHours(MORNING_TIME, 0, 0, 0);
      this.setSubjectEndPos(regexMorningPos);
      console.log("Time Keyword found: Morning");
    } else {
      if (regexAfternoonPos > -1) {
        this.timefound = true;
        this.date.setHours(AFTERNOON_TIME, 0, 0, 0);
        this.setSubjectEndPos(regexAfternoonPos);
        console.log("Time Keyword found: Afternoon");
      } else {
        if (regexNightPos > -1) {
          this.timefound = true;
          this.date.setHours(EVENING_TIME, 0, 0, 0);
          this.setSubjectEndPos(regexNightPos);
          console.log("Time Keyword  found: Night / Evening");
        } else {
          if (regexNoonPos > -1) {
            this.timefound = true;
            this.date.setHours(MIDDAY_TIME, 0, 0, 0);
            this.setSubjectEndPos(regexNoonPos);
            console.log("Time Keyword found: Noon / Midday");
          } else {
            if (regexInXHoursPos > -1) {
              var matches = this.textStringLower.match(regexInXHoursMatch);
              if (matches[3] != null) {
                this.timefound = true;
              this.date.setHours(this.date.getHours() +  Number(matches[3]), this.date.getMinutes(), this.date.getSeconds(), this.date.getMilliseconds());
              }
              this.setSubjectEndPos(regexInXHoursPos);
              console.log("Time Keyword found: In X Hours");
            }
          }
        }
      }
    }
  }

  // Find time number - e.g. 3PM, 15:00
  this.findTimeNumber = function() {

    var regexAtNumberPMPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-1]*[0-9](:[0-5][0-9])?(pm| pm)([^a-z]+|$)/);
    var regexAtNumberAMPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-1]*[0-9](:[0-5][0-9])?(am| am)([^a-z]+|$)/);
    var regexAtNumber24HrPos = this.textStringLower.search(/([^a-z]+|^)(at )*[0-2]*[0-9](:[0-5][0-9])([^a-z]+|$)/);
    var regex4DigitTimePos = this.textStringLower.search(/([^a-z]+|^)(at )[0-2][0-9]([0-5][0-9])([^a-z]+|$)/);
    var regexAtNumberPMorAMMatch = /([0-1]*[0-9])(:([0-5][0-9]))?( pm|pm| am|am)/;
    var regexAtNumberMatch = /([0-2]*[0-9])(:([0-5][0-9]))/;
    var regex4DigitMatch = /([0-2][0-9])([0-5][0-9])/;
    var regex2DigitMatch = /([^a-z]+|^)(at )([0-1]*[0-9])([^a-z]+|$)/;
    var regex2DigitTimePos = this.textStringLower.search(regex2DigitMatch);

    var hours = 0;

    if (regexAtNumberPMPos > -1) {
      this.timefound = true;
      var matches = this.textStringLower.match(regexAtNumberPMorAMMatch);
      hours = Number(matches[1]) + 12;
      if (hours == 24) {
        hours = 12;
      }
      this.date.setHours(hours, 0, 0, 0);
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
        this.date.setHours(hours, 0, 0, 0);
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
          this.date.setHours(hours, 0, 0, 0);
          if (matches[3] != null) {
            this.date.setMinutes(Number(matches[3]));
          }
          this.setSubjectEndPos(regexAtNumber24HrPos);
          console.log("Time found: XX:XX");
        } else {
          if (regex4DigitTimePos > -1) {
            this.timefound = true;
            var matches = this.textStringLower.match(regex4DigitMatch);
            hours = Number(matches[1]);
            this.date.setHours(hours, 0, 0, 0);
            if (matches[2] != null) {
              this.date.setMinutes(Number(matches[2]));
            }
            this.setSubjectEndPos(regex4DigitTimePos);
            console.log("Time found: XXXX");
          } else {
            if (regex2DigitTimePos > -1) {
              this.timefound = true;
              var matches = this.textStringLower.match(regex2DigitMatch);
              hours = Number(matches[3]);
              if (hours <= 12) {
                if (!this.datefound && hours <= this.date.getHours()) {
                  hours += 12;
                }
                this.date.setHours(hours, 0, 0, 0);
                this.setSubjectEndPos(regex2DigitTimePos);
                console.log("Time found: XX");
              }
            }
          }
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