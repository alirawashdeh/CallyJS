[![Build Status](https://travis-ci.org/alirawashdeh/CallyJS.svg?branch=master)](https://travis-ci.org/alirawashdeh/CallyJS)

# CallyJS

Natural language processing for the creation of calendar appointments.


Node.js is only required if you wish to run the unit tests.


## Usage

If using CallyJS in a web application, add ```cally-min.js``` to your scripts folder then reference it in your HTML header:

```html
<script type="text/javascript" src="scripts/cally-min.js"></script>
```

Use CallyJS by passing your text string and a current date:

```javascript
var inputString = "Meet John on 1st Nov at 6 in the evening";
var appointment = new Cally(inputString, new Date());
```

Then access the appointment object using ```date``` and ```subject``` to see the contents:

```javascript
if(appointment.subjectfound){
  console.log(appointment.subject);
}
if(appointment.datefound){
  console.log(appointment.date.toLocaleDateString());
}
if(appointment.timefound){
  console.log(appointment.date.toLocaleTimeString());
}
```

This results in the following output:

```
> Meet John
> "11/1/2016"
> "6:00:00 PM"
```

## Developers

No build is required, clone the repostory and run the following commands to execute the tests (requires [Node.js](https://nodejs.org/en/download/)):
```
npm install
npm test
```

After you update any code, you can create an updated ```cally-min.js``` file by running:
```
npm run prepublish
```
