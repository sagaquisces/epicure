## Planning

1. Configuration/dependencies
  * An API key is required for the [BetterDoctor API](https://developer.betterdoctor.com/) that this website pulls information from. Please visit the link above and click *Get a free API key*. Fill out the form, listing "Epicodus" as the *Organization/Company Name*. Your API key should be found on the front page
  * Create a file named `.env` at the top level and put this one line in it: `exports.apiKey = "YOUR_API_KEY";`, providing your own API key in the double quotes.
  * When we clone this project, we must navigate to the top of the cloned directory and at the command line run `npm install` and then `bower install` which will, in turn, read from the manifest files and install all dependencies.
  * Then we run `gulp build` followed by `gulp serve` in the terminal.

2. Specs
  * User will choose a malady from a select list, and a maximum of 20 doctors within the given coordinates will be returned.
  *

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome
