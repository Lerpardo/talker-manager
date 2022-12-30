
# Talker Manager

In this project, An application for registration of talkers (speakers) in which it will be possible to register, view, search, edit and delete information.

## Installation

Clone and install the dependencies for `talker-manager` locally:

```bash
  git clone git@github.com:Lerpardo/talker-manager.git
  cd talker-manager
  npm install
```

## Deployment

To view this project run

```bash
  npm run dev
```
Open [talker endpoint](http://localhost:3000/talker) to acess and interact with database.
Open [login endpoint](http://localhost:3000/login) to get logged.

## Technologies used in its development 🧑‍💻

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
## Features

- In this API there are query endpoints for people who are already registered.
- Option to search for a specific person, informing his ID.
- Registration of people, who need to meet a series of validations.
- It is possible to update data of people already registered.
- Delete by specific ID.
- Search for terms.

## Lessons Learned

In this project, I used Node.js with Express. I created endpoints to read and write to a file using the fs module.
Using CRUD (Create, Read, Update, and Delete) of talkers to manipulate data.

## Feedback

If you have any feedback, please reach out to us at ls6182315@gmail.com
