from pydantic import BaseModel
from typing import List, Dict, Any

class SalesRepResponse(BaseModel):
    status: int
    message: str
    data: List[Dict[str, Any]]
    total_data: int

    class Config:
        schema_extra = {
            "example": {
                "status": 200,
                "message": "Data retrieved successfully",
                "data": [
                    {
                        "id": 1,
                        "name": "John Doe",
                        "email": "john.doe@example.com", 
                        "region": "North America",
                        "performance": 92
                    }
                ],
                "total_data": 1
            }
        }

class AIResponse(BaseModel):
    status: int
    message: str
    data: str
    
    class Config:
        schema_extra = {
            "example": {
                "status": 200,
                "message": "AI response generated successfully",
                "data": "This is a placeholder answer to your question: What is the sales forecast for next quarter?"
            }
        }
