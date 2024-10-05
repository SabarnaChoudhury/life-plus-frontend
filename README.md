
# Life-Plus Microservices Application

## Project Overview
Life-Plus is a microservices-based hospital management system designed to manage and display patient and doctor data. This project was initially developed as a monolithic application and later transitioned to a microservices architecture. The frontend is built using Angular 16+, while the backend microservices are developed using Django REST Framework.

The goal of this project is to demonstrate the comparative advantages of monolithic vs. microservices architecture and deploy the application to a cloud-based platform for scalability and easy management.

## Table of Contents
1. [Project Architecture](#project-architecture)
2. [Microservices Overview](#microservices-overview)
3. [Installation and Setup](#installation-and-setup)
4. [Dockerization and Deployment](#dockerization-and-deployment)
5. [Live Deployment Links](#live-deployment-links)
6. [GitHub Repository Structure](#github-repository-structure)
7. [Technologies Used](#technologies-used)
8. [Future Improvements](#future-improvements)
9. [Contact Information](#contact-information)

## Project Architecture
The Life-Plus project follows a microservices architecture with the following components:

- **Frontend Service**: Built using Angular and served with Nginx. Handles the UI for displaying and managing patient and doctor data.
- **Doctor Service**: A Django-based REST API for managing doctor-related operations (CRUD operations).
- **Patient Service**: A Django-based REST API for managing patient-related operations (CRUD operations).

Each service is containerized using Docker, enabling easy deployment and scaling.

### Monolithic vs. Microservices Architecture
The initial version of the Life-Plus system was built as a single monolithic application that contained both the frontend and backend components in one codebase. This made it simpler to start but had limitations in scalability and maintainability.

By adopting microservices architecture:
1. **Frontend** is separated as an independent service.
2. **Backend** is split into separate services: `doctor-service` and `patient-service`.
3. Each service can be developed, deployed, and scaled independently.

## Microservices Overview
### Doctor Service
- **Base URL**: `/api/doctors/`
- **Endpoints**:
  - `GET /` - Retrieve all doctors.
  - `POST /` - Create a new doctor.
  - `GET /<id>/` - Retrieve a doctor by ID.
  - `PUT /<id>/` - Update a doctor by ID.
  - `DELETE /<id>/` - Delete a doctor by ID.

### Patient Service
- **Base URL**: `/api/patients/`
- **Endpoints**:
  - `GET /` - Retrieve all patients.
  - `POST /` - Create a new patient.
  - `GET /<id>/` - Retrieve a patient by ID.
  - `PUT /<id>/` - Update a patient by ID.
  - `DELETE /<id>/` - Delete a patient by ID.

## Installation and Setup
Follow the instructions below to set up the project on your local machine.

### Prerequisites
- Node.js (version 18 or above)
- Python 3.11+
- Docker and Docker Compose

### Step-by-Step Setup
#### Clone the Repository
```bash
git clone https://github.com/SabarnaChoudhury/life-plus-microservices.git
cd life-plus-microservices
```

#### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend/life-plus
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the Angular project:
   ```bash
   npm run build
   ```

#### Backend Setup (Doctor and Patient Services)
1. Navigate to each backend service folder (`doctor-service` and `patient-service`) and set up a virtual environment:
   ```bash
   cd doctor-service
   python3 -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```

4. Repeat the same steps for the `patient-service` folder.

### Dockerization and Deployment
Each service has its own `Dockerfile` for containerization. The `docker-compose.yml` file at the root directory orchestrates the services.

#### Build and Run the Docker Containers
1. Navigate to the root directory where `docker-compose.yml` is located.
   ```bash
   cd life-plus-microservices
   ```
2. Build and run the services:
   ```bash
   docker-compose up --build
   ```

3. Access each service using the following URLs:
   - **Frontend**: `http://localhost`
   - **Doctor Service**: `http://localhost:8000/api/doctors/`
   - **Patient Service**: `http://localhost:8001/api/patients/`

## Live Deployment Links
- **Frontend**: [Frontend Service Link](https://frontend-production.up.railway.app)
- **Doctor Service**: [Doctor Service Link](https://doctor-service-production.up.railway.app)
- **Patient Service**: [Patient Service Link](https://patient-service-production.up.railway.app)

## GitHub Repository Structure
```
life-plus-microservices/
│
├── doctor-service/            # Doctor service folder
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
│
├── patient-service/           # Patient service folder
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
│
├── frontend/                  # Angular frontend folder
│   ├── life-plus/
│   │   ├── src/
│   │   ├── angular.json
│   │   ├── Dockerfile
│   │   └── ...
│
├── docker-compose.yml         # Orchestration file for all microservices
└── README.md                  # Project documentation
```

## Technologies Used
- **Frontend**: Angular 16+, TypeScript, SCSS, HTML5
- **Backend**: Django REST Framework, Python 3.11+
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx
- **Deployment**: Railway

## Future Improvements
- Add authentication and authorization.
- Implement a database for persistent storage.
- Creation of Appointment page for direct mapping of Doctor and Patient

## Contact Information
For any inquiries, feel free to reach out:

- **Project Maintainer**: Sabarna Choudhury
- **Email**: choudhurysabarna96745@gmail.com
- **GitHub**: [SabarnaChoudhury](https://github.com/SabarnaChoudhury)
