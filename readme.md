# Welcome to AirOzon

## PROJECT SETUP
-> clone the project on your local.

-> execute `npm i/npm install`  on the same path of your root directory.

-> create a `.env` file in the root directory and add the following `environments variables`.
{
    `PORT = 3000`
    `MONGODB_CONNECTION_STRING = "....."`
}

-> as the project is using `mysql along with mongodb`, so we have to define and add the `configuration file`
that is `config.json` for mysql in following directory `src/config/mysql/config`. To add the `config.json` which is the configuration file for mysql execute the command `npx sequelize init` `OR` copy and paste the following file
configrations given below, to the `config.json` file present at following location `src/config/mysql/config/config.json`.
{
  "development": {
    "username": "root",
    "password": "12345", // ` your password of mysql, if it is other widse make it null`
    "database": "AirOzon", // ` name of the database`
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

-> Once all the server and db configurations has made successfully , go to the following
location `src/config/mysql` within the terminal and execute the command ` npx sequelize db:create`

## Flight And Search Services

Requirments

-> Create Flights
  - Flights will have their own Timmings and they will be avaliable on their respective days only.
  - Flights will have their own Timmings and they will be avaliable on their respective days only.
  - Internation flights will have econmy, business and A class, whereas domestic flights will have econmy and business class only.
  - The internation and domestic fligts owned by different companies will have seating capacity, as well as they will have  different capacity for different classes. 

-> Delete Flights

-> Update Flights

-> Search for Flights
  - based on multiple filteration criteria.
  - Pagination. 


###################################################################################################

Functional Requirments.

1. This 'AirOzon' application can be used by both airlines as well as airports seperately.

2. Flights will have their own Timmings and they will be avaliable on their respective days only.

3. Internation flights will have econmy, business and A class.
Whereas domestic flights will have econmy and business class only.

4. The internation and domestic fligts owned by different companies will have seating capacity,
as well as they will have different capacity for different classes.

5. Each airport will maintain their record of avaliable flight for the respective cities
as well as keep track of the logs for arrival and departure of a flight from an individual airport.

6. Each flight will have their route. it will be either direct from one city to another or via different cities. 

6. payment confirmation and ticket booking, as well as refund on ticket cancellation.
notification messages regarding payments and refunds.

7. Notifications for the users regarding any delay, cancellation or departure time of flight.

8. passengers can give their feedback or they can register thie complain to both airline as well as to the airports.

9. user should be allowd to logIn via password or via an OTP, as well as OAuth facility should also be given. 

10. The user/passenger view should show the avablity of flight on a particular date,
their cost on single and round trip on the respective dates from the respective airports.

10. banning and shadow banning.
banning -> application should not allow a passenger at all who is banned by the goverment agencies,
as well as he should not be allowed to departure for the airport, which banned him.
shadow banning -> 
 a. A passenger who cancells his flight ticket should not be allowed to book any flight 
for the same city for next 18 hours.
 b. The airport authority or the airline can ban a passenger for a particular period of time.

11. users should have their own views. A passenger shdould have it's own views of website
airline companies should have thie own view and admin pannel. (As like swiggy have for different cities)
airports should have their own view and admin pannel. (As like swiggy have for different cities)






