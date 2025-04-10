from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
from fastapi.responses import ORJSONResponse
from response import SalesRepResponse, AIResponse
from args import AIRequest
from dotenv import load_dotenv
import os
from google import genai

# Load environment variables
load_dotenv()

# Access variables
gemini_api_key = os.getenv("GEMINI_API_KEY")

# Initialize the Google Gemini API client
client = genai.Client(api_key=gemini_api_key)

app = FastAPI(
    title="Opera AI API",
    description="API for Opera AI sales assistant application",
    version="0.1.0",
    docs_url="/docs",
    redoc_url="/redocly",
)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load dummy data
with open("dummyData.json", "r") as f:
    DUMMY_DATA = json.load(f)

@app.get("/api/sales-reps", tags=["Sales Reps"], response_model=SalesRepResponse)
def get_sales_reps():
    """
    Retrieve all sales representatives.
    """
    try:
        users = DUMMY_DATA.get("salesReps", [])
        user_count = len(users)

        return {
            "status": 200,
            "message": "Data retrieved successfully",
            "data": users,
            "total_data": user_count,
        }
    except FileNotFoundError:
        return {
            "status": 500,
            "message": "File not found",
            "data": None,
            "total_data": 0,
        }

@app.post("/api/ai", tags=["AI"], response_model=AIResponse)
def ai_endpoint(req: AIRequest):
    """
    Accepts a user question and returns a AI response.
    """
    try:
        user_question = req.question
        
        response = client.models.generate_content(
            model="gemini-2.0-flash", contents=user_question
        )

        return {
            "status": 200,
            "message": "AI response generated successfully",
            "data": response.text,
        }
    except Exception as e:
        return {
            "status": 500,
            "message": f"Error generating AI response: {str(e)}",
            "data": None,
        }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

