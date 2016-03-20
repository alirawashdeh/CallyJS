var buster = require("buster");
var cally = require("../cally.js");

buster.testCase("Day of Week Tests", {
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
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find subject when there is a keyword prior to day of week": function(){
    var appt;
    appt = new Cally("Meet John on Monday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");


    appt = new Cally("Meet John this Tuesday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.date.getDay() == 2);
    buster.assert(appt.subject == "Meet John");
  },

  "Can find a subject before a day of the week with comma": function(){
    var appt;
    appt = new Cally("Meet John, Monday");
    buster.assert(appt.subjectfound);
    buster.assert(appt.date.getDay() == 1);
    buster.assert(appt.subject == "Meet John");
  }

});
