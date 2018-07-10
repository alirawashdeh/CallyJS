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
      assert(appt.startdate.getDay() == 1);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tuesday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 2);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John wednesday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 3);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thursday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 4);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John friday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 5);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John saturday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 6);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sunday", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() === 0);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getDate() <= date.setDate(date.getDate() + 7));
    });

    it("Can find shortened days of the week, for example: " +
    "Meet John Mon", function() {
      var appt;

      var date = new Date();
      appt = new Cally("Meet John mon", new Date());

      assert(appt.datefound);
      assert(appt.startdate.getDay() == 1);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tues", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 2);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John tue", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 2);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John wed", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 3);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thurs", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 4);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John thur", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 4);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));


      date = new Date();
      appt = new Cally("Meet John thu", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 4);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John fri", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 5);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sat", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 6);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));

      date = new Date();
      appt = new Cally("Meet John sun", new Date());
      assert(appt.datefound);
      assert(appt.startdate.getDay() === 0);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));
    });


    it("Can find day of the week keywords with 'Next', for example: " +
    "Meet John next mon", function() {
      var appt;

      //Monday
      var date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 8);
      assert(appt.subjectfound === true);
      assert(appt.subject == "Meet John");

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 9);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 10);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 11);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 12);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 13);

      date = new Date("August 01, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 14);

      // Friday
      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 8);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 9);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 10);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 11);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 12);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 13);

      date = new Date("August 05, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 14);


      // Saturday
      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 15);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 16);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 17);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 18);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 19);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 13);

      date = new Date("August 06, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 14);



      // Sunday
      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next mon", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 15);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next tues", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 16);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next wed", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 17);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next thurs", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 18);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next fri", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 19);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next sat", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 13);

      date = new Date("August 07, 2016 00:00:00");
      appt = new Cally("Meet John next sun", date);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 14);
    });

    it("Can ignore words that contain days of the week, for example: " +
    "Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn", function() {
      var appt;

      var date = new Date();
      date.setHours(0, 0, 0, 0);
      appt = new Cally("Meet John to discuss the Sunshine Monster Virtue Wedding Thunder Fritter Saturn Cafe on Saturday", new Date());

      assert(appt.datefound);
      assert(appt.startdate.getDay() == 6);
      assert(appt.startdate.getTime() > date.getTime());
      assert(appt.startdate.getTime() <= date.setDate(date.getDate() + 7));
    });

    it("Can find a subject before a day of the week, for example: " +
    "Meet John Monday", function() {
      var appt;
      appt = new Cally("Meet John Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 1);
      assert(appt.subject == "Meet John");
    });

    it("Can find subject when there is a keyword prior to day of week, for example: " +
    "Meet John on Monday", function() {
      var appt;
      appt = new Cally("Meet John on Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 1);
      assert(appt.subject == "Meet John");


      appt = new Cally("Meet John this Tuesday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 2);
      assert(appt.subject == "Meet John");
    });

    it("Can find a subject before a day of the week with comma, for example: " +
    "Meet John, Monday", function() {
      var appt;
      appt = new Cally("Meet John, Monday", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDay() == 1);
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
      assert(appt.startdate.getDate() == date.getDate());
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
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword this afternoon", function() {
      var appt;
      appt = new Cally("Meet John this afternoon", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var date = new Date();
      assert(appt.startdate.getDate() == date.getDate());
      assert(appt.startdate.getHours() == afternoonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword tonight", function() {
      var appt;
      appt = new Cally("Meet John tonight", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var date = new Date();
      assert(appt.startdate.getDate() == date.getDate());
      assert(appt.startdate.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - this evening", function() {
      var appt;
      appt = new Cally("Meet John this evening", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var date = new Date();
      assert(appt.startdate.getDate() == date.getDate());
      assert(appt.startdate.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in the morning", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in the morning", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == morningTime);
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
      assert(appt.startdate.getDate() == dateClean.getDate());
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
      assert(appt.startdate.getMonth() == dateClean.getMonth());
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
      assert(appt.startdate.getFullYear() == dateClean.getFullYear());
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X days", function() {
      var appt;
      appt = new Cally("Meet John in 3 days", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 days", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X weeks", function() {
      var appt;
      appt = new Cally("Meet John in 1 week", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 7);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 weeks", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 18);
      assert(appt.startdate.getMonth() === 0);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X months", function() {
      var appt;
      appt = new Cally("Meet John in 1 month", new Date("December 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getMonth() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 months", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getMonth() == 4);
      assert(appt.startdate.getFullYear() == 2018);
      assert(appt.subject == "Meet John");
    });

    it("Can find date keyword - in X years", function() {
      var appt;
      appt = new Cally("Meet John in 1 year", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 20 years", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getFullYear() == 2036);
      assert(appt.subject == "Meet John");
    });

    it("Can find date and month", function() {
      var appt;
      appt = new Cally("Meet John on 2nd January", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 2);
      assert(appt.startdate.getMonth() === 0);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 12th Feb", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 12);
      assert(appt.startdate.getMonth() == 1);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 21st Mar", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 21);
      assert(appt.startdate.getMonth() == 2);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 12th April", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 12);
      assert(appt.startdate.getMonth() == 3);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 2nd May", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 2);
      assert(appt.startdate.getMonth() == 4);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 3rd June", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 3);
      assert(appt.startdate.getMonth() == 5);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 5th July", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 5);
      assert(appt.startdate.getMonth() == 6);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 30th August", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 30);
      assert(appt.startdate.getMonth() == 7);
      assert(appt.startdate.getFullYear() == 2017);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th September", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 8);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th October", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 9);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th Nov", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 10);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 11);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on 20th of December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 11);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John on the 20th of December", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.startdate.getDate() == 20);
      assert(appt.startdate.getMonth() == 11);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");
    });

  });

  // ********** Start Time Keywords *************
  describe('Start Time Keywords', function() {


    it("Can find time keywords - morning", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow morning", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == morningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - afternoon", function() {
      var appt;

      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow afternoon", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == afternoonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - night", function() {
      var appt;
      appt = new Cally("Meet John tomorrow night", new Date());
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var date = new Date();
      assert(appt.startdate.getDate() == date.getDate() + 1);
      assert(appt.startdate.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - evening", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow evening", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - tomorrow noon", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow noon", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == noonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - tomorrow midday", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow midday", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == noonTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keyword combined with day - Tuesday evening", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John Tuesday evening", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);

      assert(appt.startdate.getDay() == 2);
      assert(appt.startdate.getHours() == eveningTime);
      assert(appt.subject == "Meet John");
    });

    it("Can find time keywords - in X hours", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in 1 hour", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 1);

      appt = new Cally("Meet John in 25 hours", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 22);
      assert(appt.startdate.getMinutes() == 53);
      assert(appt.startdate.getDate() == 1);
      assert(appt.startdate.getMonth() == 8); // september
      assert(appt.subject == "Meet John");
    });


    it("Can find time keywords - in X minutes", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John in 1 minute", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.starttimefound);
      assert(appt.startdate.getMinutes() == 1);

      appt = new Cally("Meet John in 18 minutes", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 22);
      assert(appt.startdate.getMinutes() == 11);
      assert(appt.startdate.getDate() == 31);
      assert(appt.startdate.getMonth() == 7);
      assert(appt.subject == "Meet John");
    });
  });

  // ********** Start Time *************
  describe('Start Time', function() {

    it("Can find time - 11PM, 12PM, 3AM, 10:00AM, 10:30, 14:30, 6:30PM, 0900", function() {
      var appt;
      appt = new Cally("Meet John at 11PM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 23);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 11 PM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 23);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 12PM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 12);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 3AM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 12AM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 3 AM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:30AM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 10);
      assert(appt.startdate.getMinutes() == 30);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:55 AM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 10);
      assert(appt.startdate.getMinutes() == 55);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 10:55PM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 22);
      assert(appt.startdate.getMinutes() == 55);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 03:01 PM", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 15);
      assert(appt.startdate.getMinutes() == 1);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 14:39", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 14);
      assert(appt.startdate.getMinutes() == 39);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John 23:59", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 23);
      assert(appt.startdate.getMinutes() == 59);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 0800", new Date());
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 8);
      assert(appt.startdate.getMinutes() === 0);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 7", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.startdate.getHours() == 7);
      assert(appt.startdate.getDate() == 31);
      assert(appt.startdate.getMonth() == 7);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 7", new Date("August 31, 2016 07:00:00"));
      assert(appt.subjectfound);
      assert(appt.startdate.getHours() == 19);
      assert(appt.startdate.getDate() == 31);
      assert(appt.startdate.getMonth() == 7);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at 11", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.startdate.getHours() == 23);
      assert(appt.startdate.getDate() == 31);
      assert(appt.startdate.getMonth() == 7);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 3 days at 11", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.startdate.getHours() == 11);
      assert(appt.startdate.getDate() == 3);
      assert(appt.startdate.getMonth() == 8);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John in 3 days at 11:00", new Date("August 31, 2016 21:53:00"));
      assert(appt.subjectfound);
      assert(appt.startdate.getHours() == 11);
      assert(appt.startdate.getDate() == 3);
      assert(appt.startdate.getMonth() == 8);
      assert(appt.startdate.getFullYear() == 2016);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - half past X", function() {
      var appt;
      appt = new Cally("Meet John at half past 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 9);
      assert(appt.startdate.getMinutes() == 30);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John half 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 8);
      assert(appt.startdate.getMinutes() == 30);
      assert(appt.subject == "Meet John");
    });


    it("Can find time - quarter past X", function() {
      var appt;
      appt = new Cally("Meet John at quarter past 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 9);
      assert(appt.startdate.getMinutes() == 15);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John quarter past 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 8);
      assert(appt.startdate.getMinutes() == 15);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - quarter to X", function() {
      var appt;
      appt = new Cally("Meet John at quarter to 9", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 8);
      assert(appt.startdate.getMinutes() == 45);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John quarter to 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 7);
      assert(appt.startdate.getMinutes() == 45);
      assert(appt.subject == "Meet John");
    });

    it("Can find time - starting at", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John starting at 10PM", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 22);

      appt = new Cally("Meet John starting at quarter to 8", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 7);
      assert(appt.startdate.getMinutes() == 45);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John starting at half 5", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 5);
      assert(appt.startdate.getMinutes() == 30);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John starting at quarter past 5", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 5);
      assert(appt.startdate.getMinutes() == 15);
      assert(appt.subject == "Meet John");
    });

    it("Can find time combined with time of day - tonight at 8", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tonight at 8", date);
      assert(appt.subjectfound);
      assert(appt.subject == "Meet John");
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 20);

      appt = new Cally("Meet John tomorrow night at 9", new Date("August 31, 2016 10:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 21);
      assert(appt.startdate.getMinutes() === 0);
      assert(appt.startdate.getDate() == 1);
      assert(appt.startdate.getMonth() == 8);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John this afternoon at 4", new Date("August 31, 2016 10:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 16);
      assert(appt.subject == "Meet John");


      appt = new Cally("Meet John at 4 this afternoon", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 16);
      assert(appt.subject == "Meet John");
    });

    it("Can find time words - one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve", function() {
      var appt;
      appt = new Cally("Meet John at one", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 1);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at two", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 2);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at three", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 3);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at four", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 4);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at five", new Date("August 31, 2016 08:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 17);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at six tonight", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 18);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at seven pm", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 19);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at eight", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 8);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at nine", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 9);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at ten", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 10);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at eleven", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 11);
      assert(appt.subject == "Meet John");

      appt = new Cally("Meet John at twelve", new Date("August 31, 2016 00:00:00"));
      assert(appt.subjectfound);
      assert(appt.starttimefound);
      assert(appt.startdate.getHours() == 12);
      assert(appt.subject == "Meet John");
    });

      it("Can find all-day events", function() {
        var appt;
        appt = new Cally("Meet John tomorrow all day", new Date("August 31, 2016 00:00:00"));
        assert(appt.subjectfound);
        assert(appt.subject == "Meet John");
        assert(appt.startdate.getDate() == 1);
        assert(appt.startdate.getMonth() == 8);
        assert(appt.allday == true);

        appt = new Cally("Meet John all-day tomorrow", new Date("August 31, 2016 00:00:00"));
        assert(appt.subjectfound);
        assert(appt.subject == "Meet John");
        assert(appt.startdate.getDate() == 1);
        assert(appt.startdate.getMonth() == 8);
        assert(appt.allday == true);

      });

  });

  describe('Durations', function() {

    it("Can find duration - for X days", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow morning for 12 days", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);
      assert(appt.endtimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == morningTime);
      assert(appt.enddate.getDate() == 13);
      assert(appt.subject == "Meet John");
    });

    it("Can find duration - for X hours", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow morning for 25 hours", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);
      assert(appt.endtimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == morningTime);
      assert(appt.enddate.getDate() == 2);
      assert(appt.enddate.getHours() == morningTime + 1);
      assert(appt.subject == "Meet John");
    });

    it("Can find duration - for X minutes", function() {
      var appt;
      var date = new Date("August 31, 2016 00:00:00");
      appt = new Cally("Meet John tomorrow morning for 120 minutes", date);
      assert(appt.subjectfound);
      assert(appt.datefound);
      assert(appt.starttimefound);
      assert(appt.endtimefound);

      var dateClean = new Date("August 31, 2016 00:00:00");
      dateClean.setDate(dateClean.getDate() + 1);
      assert(appt.startdate.getDate() == dateClean.getDate());
      assert(appt.startdate.getHours() == morningTime);
      assert(appt.enddate.getHours() == morningTime + 2);
      assert(appt.enddate.getMinutes() == 0);
      assert(appt.subject == "Meet John");
    });

  });

});
