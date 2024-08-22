# Data Validation and Filtration Assignment

## Overview

This project demonstrates a Node.js application designed to validate and filter data from an uploaded `csvtojson.json` file. The application ensures that the uploaded file meets specific criteria before further processing, leveraging powerful technologies such as MongoDB, Redis, Express, and Node.js.

## Tech Stack

- **Node.js:** The runtime environment used for executing JavaScript server-side.
- **Express:** A minimal and flexible Node.js web application framework for handling routing and middleware.
- **MongoDB:** A NoSQL database used for storing validated and filtered data.
- **Redis:** An in-memory data structure store used for caching, improving the efficiency of data retrieval.

## Features

- **File Upload Handling:** Utilizes Multer middleware to handle file uploads securely.
- **Data Validation:** Uses Joi for schema-based validation to ensure the integrity of the uploaded data.
- **Data Filtration:** Filters the uploaded data to retain only the valid and relevant entries.
- **Error Handling:** Implements robust error handling to manage invalid file types, unexpected fields, and other potential issues.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dcode0n1/Assignment.git
   ```
2. **After Cloning: Open POSTMAN and and paste the code provided via email:**

3. **Install the dependencies:**

```
npm install
```

4 **Set up the environment variables:**
Create a .env file in the root of your project and add the following variables:

```
PORT=3000
NODE_ENV="development"

# Database
MONGODB_URI=< Your MONGO_URI>

# Cache Database
REDIS_URI=<Your REDIS_URI>
```

Start the application with tsc build:

```
npm run dev
```

## Project Structure
The project is organized as follows:
```
Project Structure
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│   
├───data
│       csvjson.json
│       
└───src
    │   .env
    │   index.ts
    │
    ├───config
    │   │   index.ts
    │   │
    │   ├───database
    │   │       config.database.ts
    │   │
    │   ├───multer
    │   │       multer.config.ts
    │   │
    │   └───redis
    │           redis.config.ts
    │
    ├───controllers
    │   │   index.ts
    │   │
    │   └───storein
    │           storeIn.ts
    │
    ├───helpers
    │       normalizerQuery.ts
    │       parseShotHands.ts
    │       responseCodec.ts
    │
    ├───middleware
    │       isFileExist.ts
    │
    ├───model
    │       index.ts
    │
    └───routes
            index.ts

```


## Contact 
For any questions or feedback, please contact dcode.0n1@outlook.com.
