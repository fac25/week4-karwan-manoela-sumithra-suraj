# Howdie
Live page hosted on [Heroku](https://howdies.herokuapp.com/)


# Role
Scrum facilitator - Sumithra<br>
User Experience lead - Suraj<br>
DevOps - Manoela<br>
Q&A - Karwan<br>

## Setup

Make sure you have Git and Node (v18) installed.

1. Clone this repo and `cd` into the directory
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the server.  
   
This uses the `nodemon` library to auto-restart the server when you save changes. 

This app already has example stories seeded into the database.


# Technical criteria 
- [ ] Express server
- [ ] Well-organised modular codebase
- [ ] SQLite database
- [ ] Hosted on Heroku
- [ ] One of the spike topics
- [ ] Validate user-submitted data on the server
- [ ] Handle errors and inform the user
- [ ] Styled appropriately

# Flowchart
![image](https://user-images.githubusercontent.com/99407460/195119863-d5550e6f-6276-4f73-8a71-28ebae2081bd.png)


## Intro

### What are you building?

A website for users to share and view other users how to guide.

### Why are you building it?

- To fulfil the requirements of the Week 4 project on authentication, server and uplaod image feature.
- To build a community of DIY support.

## Project scope 

### What are you not building?

We are not building a marketplace for books eg Amazon kindle.

### How did you decide what features were important?

We looked at the core user stories and acceptance criteria for this project and prioritised the features that would fulfil these given our limited build time and lack of experience with authentication.


## Requirement analysis 

###  How will you ensure your project is accessible to as many users as possible?

We will use semantic html wherever possible and then conduct a google chrome lighthouse analysis as well as checking the a11y accessibility criteria to ensure our project is accessible to as many users as possible.

###  Are there any legal or regulatory requirements you should consider?

We are not using cookies to track user behaviour but merely for login and signup purposes so we do not need to worry about GDPR and cookie consent (I think?). 
We may also need to consider potential copyright issues if a user submits a story that has already been published by someone else.

### Security

- We handle security by authenticating users via hashed passwords stored in a database. 
- Each login creates a session which has a corresponding cookie and is stored in the database (stateful not stateless). 
- Cookies for a particular login auto-expire after 7 days. 
- We mitigate Cross-site Request Forgery (CSRF) attacks by using the ```SameSite=Lax``` and ```httpOnly: true``` attributes.


## Research and findings 

###  Multer module to upload the image.




