# ATC-SupportSquard

<b> This project is a part of Adamas Tech Consultancy and it is solely developed for support team work purposes. </b>

<hr>

SupportSquard is a online system that automates the support team and client communation process and
increases speed, transparency, and security. It provides various interfaces for different stakeholders like admin and support team user. 

The dashboard tracks the following segments:

* **Payment Success / Fail:** This segment is examining the number of successful payments in relation to failed payments, valuable insights can be gained regarding payment performance. This information aids in detecting any recurring problems or anomalies that may be impeding the smooth processing of payments.
* **Payment Success but Registration Fail in SMS:** This segment is analyzing the number of successful payments associated with failed registration attempts due to SMS system problems, insights can be gained into the extent of these technical issues. This information facilitates the troubleshooting process and enables the identification of specific areas where improvements or resolutions are needed to ensure seamless registration experiences for customers.

* **SMS to LMS Transfer:** This segment aims to monitor the quantity of successful student transfers from the SMS system to the Learning Management System (LMS). By tracking this data, it becomes possible to verify that all pertinent information is being accurately and promptly transferred between systems.

* **SMS to Ticketing System:** This segment tracks the number of successful transfers, valuable insights can be gained into the efficiency and reliability of the data transfer process between the SMS system and the ticketing system. This information plays a critical role in guaranteeing that customer inquiries and issues are seamlessly and timely routed to the appropriate channels for resolution.

* **LMS:** This segment presents comprehensive information about the Learning Management System (LMS), including the number of registered users, the range of courses offered, and the completion rates for various courses. This data is instrumental in identifying potential areas for improvement or the need for additional resources.

Overall, the dashboard acts as a powerful tool to optimize the support system's effectiveness and ensure the delivery of high-quality support services. Its insights enable organizations to continuously monitor and improve the system, resulting in enhanced customer satisfaction and a more seamless support experience.

<hr> 

### Requirements :
1. Python v3.10.5
2. Django v4.1.7  
3. MySQL(recommended), PostgreSQL, Oracle Database and SQLite  
4. POSTMAN (recommended), Swagger

<hr>

## Set up the website
* Clone the repo 
```bash
https://github.com/MousumiDutta2000/ATC-SupportSquard.git
cd ATC-SupportSquard
```
* Now install the requirements  
```
pip install -r requirements.txt
```
* Set Virtual Environment 
```bash
python -m venv venv
```
now to activate venv
```bash
cd venv/Scripts/activate.ps1
```
* Make Migrations
```bash
cd dashboard
```
## Usage

Fill database name , database password and user in settings.py like

DATABASES = {
   'default': {
       'ENGINE': 'django.db.backends.mysql',
       'NAME': 'your_databse_name',
       'USER': 'username',
       'PASSWORD': 'password',
       'HOST': '127.0.0.1',
       'PORT': '3306',
   }
 }
 
Then migrate to load the operations of Data Migrations in database.
``` 
python manage.py makemigrations
```
* Migrate ATCdash app
```
python manage.py migrate
```
* Create Super user  
```
python manage.py createsuperuser
```
<hr>
<li> username: [your username] </li>
<li> email: [your email id] </li>
<li> password: [your password] </li>
<hr>
  
* Now in terminal run the server and go to http://localhost:8000/ or http://127.0.0.1:8000/ 
```
python manange.py runserver
```
