var buster = require("buster");
var cally = require("../cally.js");

var eveningTime = 20;
var morningTime = 10;
var afternoonTime = 14;

buster.testCase("Date Tests", {
  "Can not find day of week date": function(){
    var appt;
    appt = new Cally("MOOONNNNNDDDAAAAYYYY");
    buster.assert(!appt.datefound);
  },

  "Can find monday, tuesday, wednesday, thursday, friday, saturday, sunday": function(){
    var appt;

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John monday");

    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John tuesday");

    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 2);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John wednesday");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 3);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John thursday");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 4);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John friday");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 5);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John saturday");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 6);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John sunday");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 0);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
  },

  "Can find mon,tues,wed,thurs,fri,sat,sun": function(){
    var appt;

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John mon");

    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John tues");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 2);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John tue");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 2);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John wed");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 3);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John thurs");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 4);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John thur");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 4);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));


    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John thu");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 4);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John fri");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 5);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John sat");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 6);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John sun");
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 0);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
  },

  "Can ignore day of week embedded in other words": function(){
    var appt;

    date = new Date();
    date.setHours(0,0,0,0);
    appt = new Cally("Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn Cafe on Saturday");

    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 6);
    buster.assert(appt.date.getTime() > date.getTime());
    buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
  },

  "Can find a subject before a day of the week": function(){
    var appt;
    appt = new Cally("Meet John Monday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find subject when there is a keyword prior to day of week": function(){
    var appt;
    appt = new Cally("Meet John on Monday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");


    appt = new Cally("Meet John this Tuesday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 2);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find a subject before a day of the week with comma": function(){
    var appt;
    appt = new Cally("Meet John, Monday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword today": function(){
    var appt;
    appt = new Cally("Meet John today");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate());
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword tomorrow": function(){
    var appt;
    appt = new Cally("Meet John tomorrow");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    var date = new Date();
    date.setDate(date.getDate() + 1);
    buster.assert(appt.date.getDate() == date.getDate());
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword this afternoon": function(){
    var appt;
    appt = new Cally("Meet John this afternoon");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate());
    buster.assert(appt.date.getHours() == afternoonTime);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword tonight": function(){
    var appt;
    appt = new Cally("Meet John tonight");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate());
    buster.assert(appt.date.getHours() == eveningTime);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword this evening": function(){
    var appt;
    appt = new Cally("Meet John this evening");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate());
    buster.assert(appt.date.getHours() == eveningTime);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find keyword in the morning": function(){
    var appt;
    appt = new Cally("Meet John in the morning");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate()+1);
    buster.assert(appt.date.getHours() == morningTime);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find time keywords - morning": function(){
    var appt;
    appt = new Cally("Meet John tomorrow morning");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate()+1);
    buster.assert(appt.date.getHours() == morningTime);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find time keywords - afternoon": function(){
    var appt;
    appt = new Cally("Meet John tomorrow afternoon");
    buster.assert(appt.subjectfound);
    buster.assert(appt.datefound);
    buster.assert(appt.timefound);

    var date = new Date();
    buster.assert(appt.date.getDate() == date.getDate()+1);
    buster.assert(appt.date.getHours() == afternoonTime);
    buster.assert(appt.subject == "Meet John");
  }


});
