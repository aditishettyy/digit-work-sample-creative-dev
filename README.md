# Welcome!

We're extremely excited to further explore the Web Developer opportunity with you!

Throughout our careers, we've repeatedly found that the best way to mutually 
decide whether a new role will be a great fit is to dive right in on realistic 
projects together. As such, we’ve assembled a small sample that simulates very 
closely the type of work you would do if you joined Digits.

## Scenario
One of our partner agencies has handed off HTML for the new Alliance marketing 
and sign up page. Our goal is to review the code and make it production ready 
by improving any implementations and fixing any bugs we come across.

## Getting Started
- Run `npm install`  
- Run `npm start` to run on `http://localhost:8080`
- Run `npm run serve` to start the Go server, listening on `http://localhost:8081`

> ### Tip
>
> Start by familiarizing yourself with the source files of the codebase since
> that's where all your work will be. Additionally, feel free to use your browser
> or any other sources of information to help solve any of these tasks.

## Tasks

1. First up, let’s load up the page and have a look at the developer console…Oh no! 
Looks like there are a few errors. Definitely don’t want to ship this in a broken state. 
Let’s figure out what’s causing each one and fix it!

2. Great! No more console errors 😄. Next up, let’s make sure the interactions we have on 
the page are working as expected. There is a quote carousel that is expected to auto-rotate 
but…it seems to be broken. Let’s fix the carousel to correctly rotates through the quotes.

3. Okay, now that it’s auto-rotating, let’s make sure the rest of the functionality is working 
correctly. Clicking on each logo should also move the carousel but looks like that is not 
working when the screen is less than 1300px wide. Let’s get that fix too.

4. Now for a little optimization. The carousel items seem to have a bunch of repeated code. 
Can you figure out a way to use [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/) templates
to DRY up the code a bit?

5. Now that the page is all good, let’s check out the build system and ensure it’s ready for 
production use as well. Looks like we don’t have a way of handling caching for our assets 
(images, css, js). We could use hashes or a cache busting system. Let’s update the 11ty build 
configuration to fix that. 
> **HINT:** Feel free to use any search engine to look up approaches for Eleventy cache busting.

6. The Join the Alliance button at the bottom launches a form that can be submitted. However, it
looks like the form does not validate all fields correctly. Let's get that working next.

7. When the form submits, we want to show the `#success-message`. However, that does not seem
to be wired up correctly. Can you get that working?

8. Lastly, our CSS is not getting minified in production. Let's take a look at the 
`styles.11ty.js` file which handles our SASS pre-processing and see if we can minify the CSS that 
goes to production.

### If You're Stuck
Please do not hesitate to reach out if you have any questions or run into any issues at any time as 
you work through the brief. Our team is happy to help :) 
