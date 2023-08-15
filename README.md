# Tokopedia Play Clone

![Tokopedia Play Clone](/demo.png)

This repository contains a clone of the Tokopedia Play app, built using the MERN (MongoDB, Express, React, Node) stack. The app allows users to view thumbnail videos, watch detailed videos, explore related products, leave comments, and engage with the content.


## Demo

[View the live demo of the Tokopedia Play Clone here.](/)

## Features

1. **Thumbnail Video Viewing:** Users can browse and view a collection of thumbnail videos.

2. **Detailed Video Pages:** Upon clicking a thumbnail, users are redirected to a detailed video page. This page displays the selected video along with related products and comments.

3. **Related Products:** The detailed video page showcases products relevant to the video, allowing users to explore and shop directly.

4. **Comment Section:** Users can view existing comments on the detailed video page and leave their own comments.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js with Express
- **Database:** MongoDB

## Usage

- Browse through the thumbnail videos on the main page.
- Click on a thumbnail to access the detailed video page.
- On the detailed video page, explore related products and leave comments.

## **How To Run In Local**
### Requirements
Before running this application, make sure you have the following software installed:

- Node.js (version 14 or higher)
- MongoDB
- MongoShell
  
### Clone Project

- Clone this repository to your computer
  <pre>
  <code>
  git clone https://github.com/albayaaan/tokpedplay-clone.git
  </code>
  </pre>
- Navigate to the project directory
  <pre>
  <code>
  cd tokpedplay-clone
  </code>
  </pre>


### Initialization Database
- activate mongosh
<pre>
  <code>
  mongosh
  </code>
</pre>
- load database 
<pre>
  <code>
  load("initialDatabase.js")
  </code>
</pre>


### Install Dependencies and Running the Application
- install and run backend server
<pre>
  <code>
  cd api
  yarn install
  yarn dev
  </code>
</pre>
- install and run frontend
<pre>
  <code>
  cd ../ui
  yarn install
  yarn dev
  </code>
</pre>
- access program
<pre>
  <code>
    http://127.0.0.1:5173/
  </code>
</pre>
