## Objective
**Complete the given ExpressJS Application for Insurance Claim Management**
  - The Application is based on creating, reading, updating & deleting the Medical Insurance Claims
  - All data should persist in MongoDB database
  - It should use mongoose to communicate with MongoDB Database
  - The project is suggested to have a descriptive folder structure.

### Following are the broad tasks:
- Create a Claim Model
- Create a Claim Controller
- Create a Claim Router

### API endpoints to be provided
| HTTP Method  | path                                     | Description                                         |
|--------------|------------------------------------------|-----------------------------------------------------|
| GET          | /api/claims/{id}                         | Get an claim by claim id                            | 
| POST         | /api/claims                              | Create a new claim                                  |
| GET          | /api/claims/policy/{id}                  | Get all claims for given policy id                  |
| GET          | /api/claims?hospital=xxx&date=yyyy-mm-dd | Get all claims for given hospital Id and claim date |
| PUT          | /api/claims                              | Update the claim status                             |
| DELETE       | /api/claims/{id}                         | Delete a claim by claim id                          |

### Important instructions for Participants
> - We expect you to write the assignment on your own by following through the guidelines/objectives.
> - The code must not be plagirized, the mentors will randomly pick the submissions and may ask you to explain the solution.
> - The code must be properly indented, code structure maintained as per the coding standards.
> - Complete the code as per the instructions in this document
> - Submit within the allotted time.

### MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->
> - You add the respective Mentor as a Reporter into your Assignment Repository
