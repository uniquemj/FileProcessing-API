# File Processing API

## Overview

An API use for uploading file, reading file and reading counted words in api.

## Technology Stack

### Backend
- Runtime: Node.js
- Framework: Express with TypeScript

## Documentation
- [API Document](./API.md) - Detailed API endpoints and usage

## Project Features

- Upload Files: User can upload files.
- Read Content from Files: User can Read content of file.
- Read Counted Word: User can Read counted word from file.

## API Endpoints

### Upload File
- ```POST /api/upload_file``` - Uploads file

### Read File
- ```GET /api/read_file?fileName="fileName"``` - Read content from file

### Read Counted Word from File
- ```GET /api/count_word?fileName="fileName"``` - Read counted word of file

## Getting Started

Follow these steps to setup and run the project:

### Running the Application
1. Clone the Repository (if you haven't already):
```bash
git clone https://github.com/uniquemj/FileProcessing-API.git
cd FileProcessing-API
```
2. Install the required dependencies:
```bash
npm install
```
3. To use this project:
```bash
npm start
```
4. Access the API at ```http://localhost:8000```

## References

While building this project, I look into following docs to learn following module or libraries.

- [fs module](https://nodejs.org/api/fs.html) : For handling file in Node.js
- [multer](https://blog.logrocket.com/multer-nodejs-express-upload-file/): For working with multipart/ form-data