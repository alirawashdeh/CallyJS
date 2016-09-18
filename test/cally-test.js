var buster = require("buster");
var cally = require("../cally.js");

var eveningTime = 20;
var morningTime = 10;
var afternoonTime = 14;
var noonTime = 12;

buster.testCase("Date Tests", {
    "Can not find day of week date": function() {
        var appt;
        appt = new Cally("MOOONNNNNDDDAAAAYYYY", new Date());
        buster.assert(!appt.datefound);
        buster.assert(true == false);
    },

    "Day of week - Can find monday, tuesday, wednesday, thursday, friday, saturday, sunday": function() {
        var appt;

        date = new Date();
        appt = new Cally("Meet John monday", new Date());

        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 1);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John tuesday", new Date());

        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 2);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John wednesday", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 3);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John thursday", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 4);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John friday", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 5);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John saturday", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 6);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John sunday", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 0);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));
    },

    "Day of week - Can find mon,tues,wed,thurs,fri,sat,sun": function() {
        var appt;

        date = new Date();
        appt = new Cally("Meet John mon", new Date());

        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 1);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John tues", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 2);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John tue", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 2);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John wed", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 3);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John thurs", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 4);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John thur", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 4);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));


        date = new Date();
        appt = new Cally("Meet John thu", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 4);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John fri", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 5);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John sat", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 6);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

        date = new Date();
        appt = new Cally("Meet John sun", new Date());
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 0);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
    },

    "Day of week - Can find next mon,tues,wed,thurs,fri,sat,sun": function() {
        var appt;

        //Monday
        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next mon", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 8);
        buster.assert(appt.subjectfound == true);
        buster.assert(appt.subject == "Meet John");

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next tues", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 9);

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next wed", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 10);

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next thurs", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 11);

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next fri", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 12);

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next sat", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 13);

        date = new Date("August 01, 2016 00:00:00");
        appt = new Cally("Meet John next sun", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 14);

        // Friday
        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next mon", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 8);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next tues", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 9);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next wed", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 10);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next thurs", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 11);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next fri", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 12);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next sat", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 13);

        date = new Date("August 05, 2016 00:00:00");
        appt = new Cally("Meet John next sun", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 14);


        // Saturday
        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next mon", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 15);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next tues", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 16);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next wed", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 17);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next thurs", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 18);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next fri", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 19);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next sat", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 13);

        date = new Date("August 06, 2016 00:00:00");
        appt = new Cally("Meet John next sun", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 14);



        // Sunday
        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next mon", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 15);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next tues", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 16);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next wed", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 17);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next thurs", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 18);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next fri", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 19);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next sat", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 13);

        date = new Date("August 07, 2016 00:00:00");
        appt = new Cally("Meet John next sun", date);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 14);
    },

    "Day of week - Can ignore day of week embedded in other words": function() {
        var appt;

        date = new Date();
        date.setHours(0, 0, 0, 0);
        appt = new Cally("Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn Cafe on Saturday", new Date());

        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 6);
        buster.assert(appt.date.getTime() > date.getTime());
        buster.assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
    },

    "Day of week - Can find a subject before a day of the week": function() {
        var appt;
        appt = new Cally("Meet John Monday", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 1);
        buster.assert(appt.subject == "Meet John");
    },

    "Day of week - Can find subject when there is a keyword prior to day of week": function() {
        var appt;
        appt = new Cally("Meet John on Monday", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 1);
        buster.assert(appt.subject == "Meet John");


        appt = new Cally("Meet John this Tuesday", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 2);
        buster.assert(appt.subject == "Meet John");
    },

    "Day of week - can find a subject before a day of the week with comma": function() {
        var appt;
        appt = new Cally("Meet John, Monday", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDay() == 1);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword today": function() {
        var appt;
        appt = new Cally("Meet John today", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        var date = new Date();
        buster.assert(appt.date.getDate() == date.getDate());
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword tomorrow": function() {
        var appt;

        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword this afternoon": function() {
        var appt;
        appt = new Cally("Meet John this afternoon", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var date = new Date();
        buster.assert(appt.date.getDate() == date.getDate());
        buster.assert(appt.date.getHours() == afternoonTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword tonight": function() {
        var appt;
        appt = new Cally("Meet John tonight", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var date = new Date();
        buster.assert(appt.date.getDate() == date.getDate());
        buster.assert(appt.date.getHours() == eveningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - this evening": function() {
        var appt;
        appt = new Cally("Meet John this evening", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var date = new Date();
        buster.assert(appt.date.getDate() == date.getDate());
        buster.assert(appt.date.getHours() == eveningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - in the morning": function() {
        var appt;

        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John in the morning", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == morningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - next week": function() {
        var appt;

        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John next week", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 7);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - next month": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John next month", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setMonth(dateClean.getMonth() + 1);
        buster.assert(appt.date.getMonth() == dateClean.getMonth());
        buster.assert(appt.subject == "Meet John");
    },


    "Can find date keyword - next year": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John next year", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setFullYear(dateClean.getFullYear() + 1);
        buster.assert(appt.date.getFullYear() == dateClean.getFullYear());
        buster.assert(appt.subject == "Meet John");
    },

       "Can find date keyword - in X days": function() {
        var appt;
        appt = new Cally("Meet John in 3 days", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 3);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 20 days", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - in X weeks": function() {
        var appt;
        appt = new Cally("Meet John in 1 week", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 7);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 20 weeks", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 18);
        buster.assert(appt.date.getMonth() == 0)
        buster.assert(appt.subject == "Meet John");
    },

    "Can find date keyword - in X months": function() {
        var appt;
        appt = new Cally("Meet John in 1 month", new Date("December 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getMonth() == 0);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 20 months", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getMonth() == 4);
        buster.assert(appt.date.getFullYear() == 2018);
        buster.assert(appt.subject == "Meet John");
    },

        "Can find date keyword - in X years": function() {
        var appt;
        appt = new Cally("Meet John in 1 year", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 20 years", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getFullYear() == 2036);
        buster.assert(appt.subject == "Meet John");
    },

        "Can find date and month": function() {
        var appt;
        appt = new Cally("Meet John on 2nd January", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 2);
        buster.assert(appt.date.getMonth() == 0);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 12th Feb", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 12);
        buster.assert(appt.date.getMonth() == 1);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 21st Mar", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 21);
        buster.assert(appt.date.getMonth() == 2);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John on 12th April", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 12);
        buster.assert(appt.date.getMonth() == 3);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John on 2nd May", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 2);
        buster.assert(appt.date.getMonth() == 4);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");
        
        appt = new Cally("Meet John on 1st June", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 1);
        buster.assert(appt.date.getMonth() == 5);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");
      
        appt = new Cally("Meet John on 5th July", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 5);
        buster.assert(appt.date.getMonth() == 6);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");
          
        appt = new Cally("Meet John on 30th August", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 30);
        buster.assert(appt.date.getMonth() == 7);
        buster.assert(appt.date.getFullYear() == 2017);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John on 20th September", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 8);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
          
        appt = new Cally("Meet John on 20th October", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 9);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
          
        appt = new Cally("Meet John on 20th Nov", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 10);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
          
        appt = new Cally("Meet John on 20th December", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 11);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
          
        appt = new Cally("Meet John on 20th of December", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 11);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John on the 20th of December", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.date.getDate() == 20);
        buster.assert(appt.date.getMonth() == 11);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
    },


    "Can find time keywords - morning": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow morning", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == morningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - afternoon": function() {
        var appt;

        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow afternoon", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == afternoonTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - night": function() {
        var appt;
        appt = new Cally("Meet John tomorrow night", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var date = new Date();
        buster.assert(appt.date.getDate() == date.getDate() + 1);
        buster.assert(appt.date.getHours() == eveningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - evening": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow evening", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == eveningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - tomorrow noon": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow noon", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == noonTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - tomorrow midday": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tomorrow midday", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        var dateClean = new Date("August 31, 2016 00:00:00");
        dateClean.setDate(dateClean.getDate() + 1);
        buster.assert(appt.date.getDate() == dateClean.getDate());
        buster.assert(appt.date.getHours() == noonTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keyword combined with day - Tuesday evening": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John Tuesday evening", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.datefound);
        buster.assert(appt.timefound);

        buster.assert(appt.date.getDay() == 2);
        buster.assert(appt.date.getHours() == eveningTime);
        buster.assert(appt.subject == "Meet John");
    },

    "Can find time keywords - in X hours": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John in 1 hour", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.subject == "Meet John");
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 1);

        appt = new Cally("Meet John in 25 hours", new Date("August 31, 2016 21:53:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 22);
        buster.assert(appt.date.getMinutes() == 53);
        buster.assert(appt.date.getDate() == 1);
        buster.assert(appt.date.getMonth() == 8); // september
        buster.assert(appt.subject == "Meet John");
    },


    "Can find time keywords - in X minutes": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John in 1 minute", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.subject == "Meet John");
        buster.assert(appt.timefound);
        buster.assert(appt.date.getMinutes() == 1);

        appt = new Cally("Meet John in 18 minutes", new Date("August 31, 2016 21:53:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 22);
        buster.assert(appt.date.getMinutes() == 11);
        buster.assert(appt.date.getDate() == 31);
        buster.assert(appt.date.getMonth() == 7);
        buster.assert(appt.subject == "Meet John");
    },

    "Time - 11PM, 12PM, 3AM, 10:00AM, 10:30, 14:30, 6:30PM, 0900": function() {
        var appt;
        appt = new Cally("Meet John at 11PM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 23);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 11 PM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 23);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 12PM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 12);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 3AM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 3);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 12AM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 0);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 3 AM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 3);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 10:30AM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 10);
        buster.assert(appt.date.getMinutes() == 30);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 10:55 AM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 10);
        buster.assert(appt.date.getMinutes() == 55);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 10:55PM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 22);
        buster.assert(appt.date.getMinutes() == 55);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 03:01 PM", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 15);
        buster.assert(appt.date.getMinutes() == 1);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 14:39", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 14);
        buster.assert(appt.date.getMinutes() == 39);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John 23:59", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 23);
        buster.assert(appt.date.getMinutes() == 59);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 0800", new Date());
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 8);
        buster.assert(appt.date.getMinutes() == 0);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 7", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.date.getHours() == 7);
        buster.assert(appt.date.getDate() == 31);
        buster.assert(appt.date.getMonth() == 7);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 7", new Date("August 31, 2016 07:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.date.getHours() == 19);
        buster.assert(appt.date.getDate() == 31);
        buster.assert(appt.date.getMonth() == 7);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John at 11", new Date("August 31, 2016 21:53:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.date.getHours() == 23);
        buster.assert(appt.date.getDate() == 31);
        buster.assert(appt.date.getMonth() == 7);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 3 days at 11", new Date("August 31, 2016 21:53:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.date.getHours() == 11);
        buster.assert(appt.date.getDate() == 3);
        buster.assert(appt.date.getMonth() == 8);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John in 3 days at 11:00", new Date("August 31, 2016 21:53:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.date.getHours() == 11);
        buster.assert(appt.date.getDate() == 3);
        buster.assert(appt.date.getMonth() == 8);
        buster.assert(appt.date.getFullYear() == 2016);
        buster.assert(appt.subject == "Meet John");
    },

     "Can find time - starting at": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John starting at 10PM", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.subject == "Meet John");
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 22);
    },

        "Can find time combined with time of day - tonight at 8": function() {
        var appt;
        var date = new Date("August 31, 2016 00:00:00");
        appt = new Cally("Meet John tonight at 8", date);
        buster.assert(appt.subjectfound);
        buster.assert(appt.subject == "Meet John");
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 20);

        appt = new Cally("Meet John tomorrow night at 9", new Date("August 31, 2016 10:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 21);
        buster.assert(appt.date.getMinutes() == 0);
        buster.assert(appt.date.getDate() == 1);
        buster.assert(appt.date.getMonth() == 8);
        buster.assert(appt.subject == "Meet John");

        appt = new Cally("Meet John this afternoon at 4", new Date("August 31, 2016 10:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 16);
        buster.assert(appt.subject == "Meet John");


        appt = new Cally("Meet John at 4 this afternoon", new Date("August 31, 2016 00:00:00"));
        buster.assert(appt.subjectfound);
        buster.assert(appt.timefound);
        buster.assert(appt.date.getHours() == 16);
        buster.assert(appt.subject == "Meet John");
    }

});