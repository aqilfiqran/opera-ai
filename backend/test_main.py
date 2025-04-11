import json
import os
import pytest
from unittest.mock import patch, MagicMock, mock_open
from fastapi.testclient import TestClient
from main import app
from args import AIRequest

client = TestClient(app)

# Mock data for tests
MOCK_SALES_REPS = {
    "salesReps": [
        {"id": 1, "name": "John Doe", "region": "North"},
        {"id": 2, "name": "Jane Smith", "region": "South"},
    ]
}

class MockGeminiResponse:
    def __init__(self, text):
        self.text = text

# Test the /api/sales-reps endpoint
@patch("builtins.open", mock_open(read_data=json.dumps(MOCK_SALES_REPS)))
def test_get_sales_reps():
    response = client.get("/api/sales-reps")
    assert response.status_code == 200

# Test the /api/ai endpoint
@patch("main.client.models.generate_content")
def test_ai_endpoint(mock_generate_content):
    # Mock the Gemini API response
    mock_response = MockGeminiResponse("This is a test AI response")
    mock_generate_content.return_value = mock_response
    
    # Test request
    payload = {"question": "How can I improve sales?"}
    response = client.post("/api/ai", json=payload)
    
    # Verify request handling
    assert response.status_code == 200
    
    # Verify the response structure
    data = response.json()
    assert data["status"] == 200
    assert data["message"] == "AI response generated successfully"
    assert data["data"] == "This is a test AI response"
    
    # Verify Gemini API was called correctly
    mock_generate_content.assert_called_once()
    args, kwargs = mock_generate_content.call_args
    assert kwargs["model"] == "gemini-2.0-flash"
    assert kwargs["contents"] == "How can I improve sales?"

# Test empty question handling
@patch("main.client.models.generate_content")
def test_ai_endpoint_empty_question(mock_generate_content):
    mock_response = MockGeminiResponse("Response to empty question")
    mock_generate_content.return_value = mock_response
    
    # Test with empty question
    payload = {"question": ""}
    response = client.post("/api/ai", json=payload)
    
    assert response.status_code == 200
    data = response.json()
    assert data["data"] == "Response to empty question"

# Test invalid input handling
def test_ai_endpoint_invalid_input():
    # Missing required field
    payload = {"not_question": "This will fail"}
    response = client.post("/api/ai", json=payload)
    assert response.status_code == 422  # FastAPI validation error

# Test API documentation
def test_docs_endpoint():
    response = client.get("/docs")
    assert response.status_code == 200
    assert "text/html" in response.headers["content-type"]

if __name__ == "__main__":
    pytest.main(["-v"])