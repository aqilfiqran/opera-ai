# Coding Challenge: Sales Dashboard with Next.js & FastAPI

## Getting Started

1. **Backend Setup**

   - Navigate to the `backend` directory.
   - Create a virtual environment (optional but recommended).
   - Copy the `.env.example` to `.env` and fill in the required environment variables.
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Run the server:
     ```bash
     uvicorn main:app --host 0.0.0.0 --port 8000 --reload
     ```
   - Confirm the API works by visiting `http://localhost:8000/docs`.

2. **Frontend Setup**
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Open `http://localhost:3000` to view your Next.js app.

## Unit Tests

- For the backend, navigate to the `backend` directory and run:
  ```bash
  pytest test_main.py -v
  ```
- For the frontend, navigate to the `frontend` directory and run:
  ```bash
  npm test
  ```
