# Introduction
This test contains challenges for both frontend and backend speciality.
You may choose to focus on whichever areas best demonstrate your expertise and experience.

For example, if you are more comfortable with backend, databases, APIs, etc. you may choose to simplify the presentation logic in favour of an elaborate backend design.

The questions are quite open, and you are encouraged to extend them to best demonstrate your skills and knowledge.

Data and assets required for the rpoblem can be found in the [/data](/data) and [/assets](/assets) folders of this repository.

The choice of technologies used for this challenge is up the individual, but consider the following preferred solutions:

* AWS
* Java
* Sling
* Node JS
* React JS
* Angular
* TypeScript
* ES6+
* HTML 5
* CSS 3 (SASS, LESS)

# Problem Statement
You are working on a project that analyses data from various crypto currencies and offers it to a customer.

The requirement is to process an historical price list of currencies provided by a currency exchange and clearly present this information to a customer.

A sample data set below shows prices of BTC, ETH and LTC crypto currencies at various times on 7th May.

# Front-end
## Description
* For each currency type, make a page or view to show prices at different times of the day (data provided) and display the maximum trade profit (see back-end)
* Create an index page or view containing three cards that link through to the page or view for each individual currency.
* Make these cards responsive. Three cards per row on desktop, two on iPad and one on mobile.
* Each card should demonstrate the content that it links through to, please use the assets and content provided in [/assets](/assets).
* Consider focus and hover states.

## Goals

* Create a user friendly interface to display the data and ensure the content is presented accurately.
* Build a responsive interface that will work on any sized device, including desktop, mobile and tablet.
* Develop an interface that is accessible to a variety of users.
* Demonstrate code maintenance best practices including TDD methodologies.

# Back-end
## Description
* For each currency type, find out the best possible profit that would have been made from buying a currency at a given price and selling it later on the same day. 
* Display the calculated profit in the page or view (see front-end). Consider the following format as an example: 

|BTC		|		|ETH		|		|LTC		|		|
|---		|---	|---		|---	|---		|---	|
|Buy		|Sell	|Buy		|Sell	|Buy		|Sell	|
|$34.98		|$37.01	|$1.45		|$2.15	|$14.32		|$15.03	|
|09:15AM	|12:30PM|09:00AM	|05:00PM|09:30AM	|12:45PM|
|Profit		|$2.03	|Profit		|$0.70	|Profit		|$0.71	|

* Read the data from a database or build an API. Use the following details as suggestions.
	* If you are working with a relational database, you can assume it to have similar schema as the provided [data CSV](/data/20180507.csv).
	* If you are working with an API, NoSQL DB or JSON file, see the provided [data JSON](/data/20180507.json).

## Goals
* Read data by querying a database or fetching from an API.  
* Process the data, building efficient computational logic.
* Demonstrate code maintenance best practices including TDD methodologies.

# General comments
Ensure the prevalent best coding practices are followed and write clean code.

Branch or fork this challenge on GitHub and follow Git best practices during development. 
Provide the URL of the final branch or pull request, making sure the project available for review and is not in a private repository.

If you are successful in obtaining a 1st round interview, please come prepared to discuss your solution/implementation as this will form a part of the interview process.

# Stretch Objectives
The requirements provided are minimal. We encourage any improvements to the functionality that demonstrate developer skill and experience.

# Important Note
This is purely a skills test as part of an interview process and any code written will be owned by the individual submitting and not used in full or in part by the receiving company in any way, now or in the future.