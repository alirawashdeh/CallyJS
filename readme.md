[![Build Status](https://travis-ci.org/alirawashdeh/callyjs.svg?branch=master)](https://travis-ci.org/alirawashdeh/callyjs)

![CallyJS logo](/logo.png)

# CallyJS

Natural language processing for the creation of calendar appointments.


Node.js is only required if you wish to run the unit tests.

## Installation

### Node.js installation

Install CallyJS into a node.js application using npm:
```
npm install callyjs --save
```

Reference it in your application (e.g. ```index.js```) using the following:

```
var Cally = require('callyjs');
```

### Web application installation

Clone the repository and copy ```cally-min.js``` to the public ```scripts``` folder of your web application.

Reference CallyJS in your HTML header:

```html
<script type="text/javascript" src="scripts/cally-min.js"></script>
```

## Usage

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
