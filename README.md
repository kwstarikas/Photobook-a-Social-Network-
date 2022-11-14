#Photobook a Social Network
In this project, I and a classmate designed and implement a social network in 5 phases.

Phase 1: In this part, we implement the front-end part of the sign-up form of the social platform. 

Phase 2: Next we add OpenStreetMaps (OSM) API, which can check if the address of the user is valid or autocomplete the user's address during sign-up.

Phase 3: Here we implement the registration functionality for the social platform, but now the registration will be completed in the database of the server, and with the use of servlets that we implement, we check that all the values are valid.
The functionality for the registered user is 1) sign-in  2) Logout 3) See personal information and be able to update it 4) see all the registered users.

We also managed to setup tomcat appropriately to enable SSL for end-to-end cryptography of http (https), and complete cross site scripting attacks so we can provide a safe implementation for the registration form.

Phase 4: we update the platform for supporting persistent sessions, meaning that a session should be active after the browser has been closed.
Add user creation/deletion post functionality which contains a free-text description, a timestamp, related geo-location, and an optional image. For each displayed post, the platform show information about the user and the time of the post. If a post has an image, the image is rendered.
We also design and implement a REST API where we can create, update, delete and retrieve any information related to users and posts of the photobook platform.

Phase 5: This phase was a code sprint! We managed to do the following:
1. Delete user: user can delete his account, along with any information related to this account.
2. Show a map for posts with geo information: Display a button over posts that contain geo information. When pressed it will open a map centered on this specific location with a marker.
3. Cryptography of passwords: Modify the client and backend to encode the passwords using an md5 hash. Also, add a salt to each password.
4. User's status: A user should be able to see all active users except himself/herself. An active user is a user that has not logged-out and has been idle for less than a minute. The status is updated automatically.
5. Comments for posts: A user can insert a comment in any post. Any user should be able to see all the comments of a post, including the author and when the comment was posted in a human readable way (a few minutes ago, 2 hours ago, etc.). A user can update/delete her/his comments. The platform should allow the user to sort the displayed posts based on their heat (i.e. the number of comments) or recency.
6. Ratings of posts: A user can rate a post with one or more stars (up to five). Every post should report its score (the average given stars). Further, by clicking a button, a modal will offer more details regarding the ratings, like the number of users that rated the post with 1, 2, …, 5 stars. A user can also update his/her rating. The platform should allow sorting of the displayed posts based on their rating, heat, or recency.
