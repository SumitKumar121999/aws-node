******************************{Steps to run this Application}*********************************

   *======>open mysql workbench 

   *======>creation of database 

   CREATE DATABASE resultdatabase;
   USE resultdatabase;
	
	
   *======>creation of table "teacher"
   
   CREATE TABLE resultdatabase.teacher (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255),
    role VARCHAR(50)
    );

   
   *=======>creation of table "student"
   
   CREATE TABLE resultdatabase.student 
   ( _id INT AUTO_INCREMENT PRIMARY KEY, 
   roll INT, name VARCHAR(255), 
   dob VARCHAR(255), 
   score INT );


   
   *========>add some sample data to teacher table :-
   
   
    INSERT INTO resultdatabase.teacher (username, password, role)
    VALUES
    ('teacher1', 'password1', 'teacher'),
    ('student1', 'password2', 'student');
	
	  
   
   *========>add some sample data to student table :-
   
   INSERT INTO resultdatabase.student (roll, name, dob, score)
    VALUES
    (101, 'John Doe', '1998-05-10', 85),
    (102, 'Jane Smith', '1999-02-15', 92),
    (103, 'Alice Johnson', '2000-09-20', 78),
    (104, 'Bob Williams', '1997-11-30', 67),
    (105, 'Emily Brown', '2001-07-08', 95);

  
   
   *to download all packages :-

    npm install

    *to run application use :-
	
    npm start





During the login process, a token is generated for both teachers and students, ensuring secure access to their respective accounts.
Logout functionality seamlessly deletes the token, rendering the site inaccessible to unauthorized users.

