# Pyre
A networking website that matches mentors with mentees.

## Inspiration
We wanted to be able to connect with mentors. There are very few opportunities to do that outside of LinkedIn where many of the mentors are in a foreign field to our interests'.

## What it does
A networking website that connects mentors with mentees. It uses a weighted matching algorithm based on mentors' specializations and mentees' interests to prioritize matches.

## How we built it
Google Firebase is used for our NoSQL database which holds all user data. The other website elements were programmed using JavaScript and HTML.

## Challenges we ran into
There was no suitable matching algorithm module on Node.js that did not have version mismatches so we abandoned Node.js and programmed our own weighted matching algorithm. Also, our functions did not work since our code completed execution before Google Firebase returned the data from its API call, so we had to make all of our functions asynchronous.

## Accomplishments that we're proud of
We programmed our own weighted matching algorithm based on interest and specialization. Also, we refactored our entire code to make it suitable for asynchronous execution.

## What we learned
We learned how to use Google Firebase, Node.js and JavaScript from scratch. Additionally, we learned advanced programming concepts such as asynchronous programming.

## What's next for Pyre
We would like to add interactive elements such as integrated text chat between matched members. Additionally, we would like to incorporate distance between mentor and mentee into our matching algorithm.

## Built With:
bootstrap, css, firebase, html, javascript, jquery, nosql, visual-studio
