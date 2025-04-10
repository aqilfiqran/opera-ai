from pydantic import BaseModel

class AIRequest(BaseModel):
    question: str
    
    class Config:
        schema_extra = {
            "example": {
                "question": "How can I improve my sales performance?"
            }
        }