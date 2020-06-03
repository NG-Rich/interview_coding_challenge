# Wallchat

* [Introduction](#introduction)
* [Setup](#setup)
* [Testing](#testing)
* [Usage](#usage)


### Introduction

I've created a simple application that allows users to post comments on a wall. Users are able to see what other users post as well, but all posts are labeled anonymously with a random 9-digit number accompanying it.

![Front Page](https://github.com/NG-Rich/interview_coding_challenge/blob/master/src/assets/landing.png)

### Setup

Setup is simple since you just need to run `npm start` and the app is up and running!

### Testing

I've made three test specs if you wish to run tests on the app features.  
1. `static_spec.js` which tests the landing page.
2. `wall_spec.js` which tests the wall page.
3. `posts_spec.js` which tests the post resource.
All can be run with `npm test spec/integration/(test_spec_here.js)`.

### Usage

Pretty straightforward from here on out since `View Wall` should take you to the wall page and the post form is at the bottom of the page. Just enter a title and fill out the body with whatever you want then hit submit! Once you do that your post should appear just like that, with your randomly generated 9-digit number and timestamp!

![Wall Page](https://github.com/NG-Rich/interview_coding_challenge/blob/master/src/assets/wall.png)
