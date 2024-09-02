# Dmoney-Trnx-API-Testing Using Postman

This project is a practice initiative for API testing, utilizing the DMoney Transaction API as a demonstration platform. To validate various API functionality aspects, a comprehensive set of test cases was developed using Postman. Newman has been employed to execute the Postman collections and generate detailed reports to ensure efficient and automated reporting.

## Test Scenarios Covered

- Admin creates an agent and random 2 customers.
- Deposit some money from SYSTEM account to the agent. System account: SYSTEM (range 10 tk to 10000 tk)
- Agent deposit to any of 1 customer
- Check agent balance
- Then withdraw any amount by the customer from the agent (range 10 tk to 10000 tk)
- Then the customer checks balance
- Then send money to the other customer
- Then from the another customer payment to any merchant (create a merchant account)
- Then the second customer will check both balance and statement
- Then the merchant will check his own balance

## Tools:
- Postman
- Newman
  
## Prerequisites
- NodeJs(latest LTS)
- Newman
- Newman-htmlextra

## Postman Documentation: 
https://documenter.getpostman.com/view/25228731/2sA3QwdAt3

## Dmoney_REST_API_Test_Case:
https://docs.google.com/spreadsheets/d/1m6_jdUNlH2RK4y7K50f0HjbItjj9AqnE/edit?usp=sharing&ouid=110248418070689819745&rtpof=true&sd=true

## Bug Report:
https://docs.google.com/spreadsheets/d/1PLSge8FzlXDTXZBWeDbOh0MNh_2CSBdz/edit?usp=sharing&ouid=110248418070689819745&rtpof=true&sd=true

## Newman Report Screenshot:

![NEWMANassign](https://github.com/ra-hul/dmoney_API_assignment/assets/65038922/580b3890-7ee7-46bb-b68d-e329efbddb4d)

