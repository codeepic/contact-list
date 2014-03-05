WhatClinic Javascript Test Project
==================================

Contact for Questions
-----------------
Ronan Clarke - rclarke@whatclinic.com

Objective
-----------
Build a demo app that exercises a sample API and to display and edit some simple contact information in a single page App.
We'd like the app to demonstrate some basic skills ideally using Backbone, jQuery and Bootstrap. 
We've included a "hello world" app to get you started .. installation and running instructions below.
Focus on functionality rather than design (bootstrap conventions for design will be fine)

We've left some of the requirements purposely vague for you to either ask pertinent questions (via email/chat) or make sensible assumptions
e.g. use bootstrap (or your preferred) conventions for error handling etc

There is no time limit for this exercise but we realise people are busy so just do as much as you feel will convey your skills 
(maybe just let us know if you are still working on it and roughly when we could expect it)

Obviously we don't expect this app to be perfect and its perfectly fine to take shortcuts or return it with known issues. 
In these cases simply add comments to highlight the issue or limitation and what you'd do given more time etc

No such thing as a stupid question (in fact better to ask than build the wrong thing) so any questions at all please email Ronan 

Requirements
------------

The app should be a single page app with 2 primary views (see wireframe image attached)

Contact List View
	- This view should list the contacts returned by the contact API
	- It should be possible to click on an individual contact to enter the contact detail view in "edit mode"
	- It should be possible to click on the "add contact" button to enter the contact detail view in "add mode"

Add/Edit Contact View

	- The user should be able to capture Name, Phone and Email information
	- We should validate these entries with basic validations 
		- must have a name
		- must have an email or phone number
		- email must be valid format
	- clicking save will save the contact details to the API and navigate back to the list view
	- clicking cancel will navigate back without saving

	Extra Credit :-)
		- use the documented phone validation API to validate the phone number for a selected country before saving


API Documentation
--------------
Some brief Api Documentation is available at http://hidden-oasis-1864.herokuapp.com/api-docs
(again any questions or bugs with this just ask)

Installation 
----------
Assuming you have node.js installed: 
	cd to the root of this folder 
	npm install
	node server.js

This should load a "hello world" starter view at http://localhost:8080

Submitting
-------------
When you are done please email it back to Ronan and we'll confirm receipt
