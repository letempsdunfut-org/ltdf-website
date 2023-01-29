This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Booking backend
### Concept
we are using 2 collections in firebase :
- One that store the availability (1 doc for 1 day for 1 machine)
- One that store the bookings with informations


### Availability
First we check if the dates requested are in the past then we query all documents that are between the date requested.
Finally, we group the result by date

### Booking
First we calculate the number of days of the booking request then we query availability during dates of booking request.
Theses availability are grouped by machine and we check if a machine have the same number of availability than the number of day we have calculated at first step.
If no machine are avaialable, we return a 200 with failed status in body.
If a machine is available, we delete all availability first to ensure that no overbokking can be done and we return a success status