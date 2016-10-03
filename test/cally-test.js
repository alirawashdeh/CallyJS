"use strict";
var assert = require('assert');
var Cally = require('../src/cally.js');

var eveningTime = 20;
var morningTime = 10;
var afternoonTime = 14;
var noonTime = 12;

describe('Cally', function() {

  // ********** Day of the week *************
  describe('Day of the week', function() {

    it("Does not find a date when no day of the week is present", function() {
      var appt;
      appt = new Cally("MOOONNNNNDDDAAAAYYYY", new Date());
      assert(!appt.datefound);
    });

    it("Can find full days of the week, for example: " +
    "Meet John Monday", function() {

      var appt;

      var date = new Date();
      appt = new Cally("Meet John monday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 1);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tuesday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 2);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John wednesday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 3);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thursday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 4);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John friday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 5);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John saturday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 6);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sunday", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() === 0);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getDate() <= date.setDate(date.getDate() + 7));
    });

    it("Can find shortened days of the week, for example: " +
    "Meet John Mon", function() {
      var appt;

      var date = new Date();
      appt = new Cally("Meet John mon", new Date());

      assert(appt.datefound);
      assert(appt.date.getDay() == 1);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tues", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 2);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tue", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 2);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John wed", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 3);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thurs", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 4);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thur", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 4);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));


      date = new Date();
      appt = new Cally("Meet John thu", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 4);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John fri", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 5);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sat", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() == 6);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sun", new Date());
      assert(appt.datefound);
      assert(appt.date.getDay() === 0);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
    });


    it("Can find day of the week keywords with 'Next', for example: " +
    "Meet John next mon", function() {
      var appt;

      //Monday
      var date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 8);
      assert(appt.subjectfound === true);
      assert(appt.subject == "Meet John");

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 9);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 10);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 11);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 12);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 13);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 14);

      // Friday
      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 8);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 9);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 10);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 11);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 12);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 13);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 14);


      // Saturday
      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 15);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 16);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 17);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 18);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 19);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 13);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 14);



      // Sunday
      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 15);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 16);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 17);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 18);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 19);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 13);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.date.getDate() == 14);
    });

    it("Can ignore words that contain days of the week, for example: " +
    "Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn", function() {
      var appt;

      var date = new Date();
      date.setHours(0, 0, 0, 0);
      appt = new Cally("Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn Cafe on Saturday", new Date());

      assert(appt.datefound);
      assert(appt.date.getDay() == 6);
      assert(appt.date.getTime() > date.getTime());
      assert(appt.date.getTime() <= date.setDate(date.getDate() + 7));
    });

    it("Can find a subject before a day of the week, for example: " +
    "Meet John Monday", function() {
      var appt;
      appt = new Cally("Meet John Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDay() == 1);
      assert(appt.subject == "Meet John");
    });

    it("Can find subject when there is a keyword prior to day of week, for example: " +
    "Meet John on Monday", function() {
      var appt;
      appt = new Cally("Meet John on Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDay() == 1);
      assert(appt.subject == "Meet John");


      appt = new Cally("Meet John this Tuesday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDay() == 2);
      assert(appt.subject == "Meet John");
    });

    it("Can find a subject before a day of the week with comma, for example: " +
    "Meet John, Monday", function() {
      var appt;
      appt = new Cally("Meet John, Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDay() == 1);
      assert(appt.subject == "Meet John");
    });

  });

  // ********** Date Keywords *************
  describe('Date Keywords', function() {

    it("Can find date keyword today", function() {
      var appt;
      appt = new Cally("Meet John today", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      var date = new Date();
      assert(appt.date.getDate() == date.getDate());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword tomorrow", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow", date);
      assert(appt.subjectfound);
      assert(appt.datefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword this afternoon", function() {
      var appt;
      appt = new Cally("Meet John this afternoon", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var date = new Date();
      assert(appt.date.getDate() == date.getDate());
      assert(appt.date.getHours() == afternoonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword tonight", function() {
      var appt;
      appt = new Cally("Meet John tonight", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var date = new Date();
      assert(appt.date.getDate() == date.getDate());
      assert(appt.date.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - this evening", function() {
      var appt;
      appt = new Cally("Meet John this evening", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var date = new Date();
      assert(appt.date.getDate() == date.getDate());
      assert(appt.date.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in the morning", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in the morning", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == morningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - next week", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John next week", date);
      assert(appt.subjectfound);
      assert(appt.datefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 7);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - next month", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John next month", date);
      assert(appt.subjectfound);
      assert(appt.datefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setMonth(dateClean.getMonth() + 1);
      assert(appt.date.getMonth() == dateClean.getMonth());
      assert(appt.subject == "Meet John");
    });


    it("Can find date keyword - next year", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John next year", date);
      assert(appt.subjectfound);
      assert(appt.datefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setFullYear(dateClean.getFullYear() + 1);
      assert(appt.date.getFullYear() == dateClean.getFullYear());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X days", function() {
      var appt;
      appt = new Cally("Meet John in 3 days", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 days", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X weeks", function() {
      var appt;
      appt = new Cally("Meet John in 1 week", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 7);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 weeks", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 18);
      assert(appt.date.getMonth() === 0);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X months", function() {
      var appt;
      appt = new Cally("Meet John in 1 month", new Date("December 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getMonth() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 months", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getMonth() == 4);
      assert(appt.date.getFullYear() == 2018);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X years", function() {
      var appt;
      appt = new Cally("Meet John in 1 year", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 years", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getFullYear() == 2036);
      assert(appt.subject == "Meet John");
    });

    it("Can find date and month", function() {
      var appt;
      appt = new Cally("Meet John on 2nd January", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 2);
      assert(appt.date.getMonth() === 0);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 12th Feb", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 12);
      assert(appt.date.getMonth() == 1);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 21st Mar", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 21);
      assert(appt.date.getMonth() == 2);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 12th April", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 12);
      assert(appt.date.getMonth() == 3);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 2nd May", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 2);
      assert(appt.date.getMonth() == 4);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 1st June", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 1);
      assert(appt.date.getMonth() == 5);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 5th July", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 5);
      assert(appt.date.getMonth() == 6);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 30th August", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 30);
      assert(appt.date.getMonth() == 7);
      assert(appt.date.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th September", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 8);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th October", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 9);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th Nov", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 10);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 11);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th of December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 11);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on the 20th of December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.date.getDate() == 20);
      assert(appt.date.getMonth() == 11);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");
    });

  });

  // ********** Time Keywords *************
  describe('Time Keywords', function() {


    it("Can find time keywords - morning", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow morning", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == morningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - afternoon", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow afternoon", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == afternoonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - night", function() {
      var appt;
      appt = new Cally("Meet John tomorrow night", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var date = new Date();
      assert(appt.date.getDate() == date.getDate() + 1);
      assert(appt.date.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - evening", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow evening", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - tomorrow noon", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow noon", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == noonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - tomorrow midday", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow midday", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.date.getDate() == dateClean.getDate());
      assert(appt.date.getHours() == noonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keyword combined with day - Tuesday evening", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John Tuesday evening", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.timefound);

      assert(appt.date.getDay() == 2);
      assert(appt.date.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - in X hours", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in 1 hour", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.timefound);
      assert(appt.date.getHours() == 1);

      appt = new Cally("Meet John in 25 hours", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 22);
      assert(appt.date.getMinutes() == 53);
      assert(appt.date.getDate() == 1);
      assert(appt.date.getMonth() == 8); // september
      assert(appt.subject == "Meet John");
    });


    it("Can find time keywords - in X minutes", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in 1 minute", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.timefound);
      assert(appt.date.getMinutes() == 1);

      appt = new Cally("Meet John in 18 minutes", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 22);
      assert(appt.date.getMinutes() == 11);
      assert(appt.date.getDate() == 31);
      assert(appt.date.getMonth() == 7);
      assert(appt.subject == "Meet John");
    });
  });

  // ********** Time *************
  describe('Time', function() {

    it("Can find time - 11PM, 12PM, 3AM, 10:00AM, 10:30, 14:30, 6:30PM, 0900", function() {
      var appt;
      appt = new Cally("Meet John at 11PM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 23);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 11 PM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 23);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 12PM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 12);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 3AM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 12AM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 3 AM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:30AM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 10);
      assert(appt.date.getMinutes() == 30);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:55 AM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 10);
      assert(appt.date.getMinutes() == 55);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:55PM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 22);
      assert(appt.date.getMinutes() == 55);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 03:01 PM", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 15);
      assert(appt.date.getMinutes() == 1);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 14:39", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 14);
      assert(appt.date.getMinutes() == 39);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 23:59", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 23);
      assert(appt.date.getMinutes() == 59);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 0800", new Date());
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 8);
      assert(appt.date.getMinutes() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 7", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.date.getHours() == 7);
      assert(appt.date.getDate() == 31);
      assert(appt.date.getMonth() == 7);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 7", new Date("August 31, 2016 07:00:00"));
      assert(appt.subjectfound);
      assert(appt.date.getHours() == 19);
      assert(appt.date.getDate() == 31);
      assert(appt.date.getMonth() == 7);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 11", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.date.getHours() == 23);
      assert(appt.date.getDate() == 31);
      assert(appt.date.getMonth() == 7);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 3 days at 11", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.date.getHours() == 11);
      assert(appt.date.getDate() == 3);
      assert(appt.date.getMonth() == 8);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 3 days at 11:00", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.date.getHours() == 11);
      assert(appt.date.getDate() == 3);
      assert(appt.date.getMonth() == 8);
      assert(appt.date.getFullYear() == 2016);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - half past X", function() {
      var appt;
      appt = new Cally("Meet John at half past 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 9);
      assert(appt.date.getMinutes() == 30);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John half 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 8);
      assert(appt.date.getMinutes() == 30);
      assert(appt.subject == "Meet John");
    });


    it("Can find time - quarter past X", function() {
      var appt;
      appt = new Cally("Meet John at quarter past 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 9);
      assert(appt.date.getMinutes() == 15);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John quarter past 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 8);
      assert(appt.date.getMinutes() == 15);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - quarter to X", function() {
      var appt;
      appt = new Cally("Meet John at quarter to 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 8);
      assert(appt.date.getMinutes() == 45);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John quarter to 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 7);
      assert(appt.date.getMinutes() == 45);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - starting at", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John starting at 10PM", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.timefound);
      assert(appt.date.getHours() == 22);
    });

    it("Can find time combined with time of day - tonight at 8", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tonight at 8", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.timefound);
      assert(appt.date.getHours() == 20);

      appt = new Cally("Meet John tomorrow night at 9", new Date("August 31, 2016 10:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 21);
      assert(appt.date.getMinutes() === 0);
      assert(appt.date.getDate() == 1);
      assert(appt.date.getMonth() == 8);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John this afternoon at 4", new Date("August 31, 2016 10:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 16);
      assert(appt.subject == "Meet John");


      appt = new Cally("Meet John at 4 this afternoon", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 16);
      assert(appt.subject == "Meet John");
    });

    it("Can find time words - one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve", function() {
      var appt;
      appt = new Cally("Meet John at one", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 1);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at two", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 2);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at three", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at four", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 4);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at five", new Date("August 31, 2016 08:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 17);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at six tonight", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 18);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at seven pm", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 19);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at eight", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 8);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at nine", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 9);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at ten", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 10);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at eleven", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 11);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at twelve", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.timefound);
      assert(appt.date.getHours() == 12);
      assert(appt.subject == "Meet John");
    });
  });
});
