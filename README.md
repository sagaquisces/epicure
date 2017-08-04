# Epicure
A web page that brings patients together with specialists for a particular medical issue.

## Configuration/dependencies
  * An API key is required for the [BetterDoctor API](https://developer.betterdoctor.com/). Please visit the link above and click *Get a free API key*. Fill out the form, listing "Epicodus" as the *Organization/Company Name*. Your API key should be found on the front page
  * Create a file named `.env` at the top level and put this one line in it: `exports.apiKey = "YOUR_API_KEY";`, providing your own API key in the double quotes.
  * When we clone this project, we must navigate to the top of the cloned directory and at the command line run `npm install` and then `bower install` which will, in turn, read from the manifest files and install all dependencies.
  * Then we run `gulp build` followed by `gulp serve` in the terminal.

## Specs
  * User will choose a malady from a select list, and a maximum of 20 doctors within the given coordinates will be returned.
  * User will expand resulting doctor entry to see a bio, picture and more by clicking on doctor's name.

## Technologies Used

  * Javascript
  * gulp
  * bower
  * HTML
  ### License
  Copyright 2017 Michael Dunlap

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
