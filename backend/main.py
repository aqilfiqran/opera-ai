from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import json
from fastapi.responses import ORJSONResponse
from response import SalesRepResponse

app = FastAPI(
    title="Opera AI API",
    description="API for Opera AI sales assistant application",
    version="0.1.0",
    docs_url="/docs-swagger",
    redoc_url="/docs",
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
    users = DUMMY_DATA.get("salesReps", [])
    user_count = len(users)

    return {
        "status": 200,
        "message": "Data retrieved successfully",
        "data": users,
        "total_data": user_count,
    }

@app.post("/api/ai")
async def ai_endpoint(request: Request):
    """
    Accepts a user question and returns a AI response.
    """
    body = await request.json()
    user_question = body.get("question", "")
    
    # Placeholder logic: echo the question or generate a simple response
    # Replace with real AI logic as desired (e.g., call to an LLM).
    return {"answer": f"This is a placeholder answer to your question: {user_question}"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

