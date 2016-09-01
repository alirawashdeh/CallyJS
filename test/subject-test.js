var buster = require("buster");
var cally = require("../cally.js");

buster.testCase("Subject Tests", {
  "Can find a simple subject": function(){
    var appt;
      date = new Date();
    appt = new Cally("Meet John", date);
    buster.assert(appt.subjectfound);
    buster.assert.match(appt.subject,"Meet John");
  }

    // ,
    //   "Can find a subject before a day of the week with comma": function(){
    //     var appt;
    //     appt = new Cally("Meet John, Monday");
    //     buster.assert(appt.subjectfound);
    //     console.log(appt.subject);
    //     buster.assert(appt.subject == "Meet John");
    //   }
  });
