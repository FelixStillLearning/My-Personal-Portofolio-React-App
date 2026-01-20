"""
Vercel Serverless Function - Main API
Compatible dengan Vercel Python Runtime
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
import os

app = FastAPI(title="Portfolio API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Dalam production, ganti dengan domain Anda
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "message": "Portfolio API is running!",
        "status": "success",
        "version": "1.0.0"
    }

@app.get("/api/health")
def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "database": "connected" if os.getenv("DATABASE_URL") else "not_configured"
    }

@app.get("/api/projects")
def get_projects():
    """
    Get all projects from database
    TODO: Implement database connection
    """
    # Sample data - ganti dengan database query
    projects = [
        {
            "id": 1,
            "title": "Sample Project",
            "description": "This is a sample project",
            "technologies": ["React", "Node.js"],
            "link": "https://github.com/your-repo"
        }
    ]
    return {"projects": projects}

@app.post("/api/contact")
def contact_form(name: str, email: str, message: str):
    """
    Handle contact form submission
    TODO: Implement email sending or database storage
    """
    return {
        "status": "success",
        "message": "Message received! I'll get back to you soon."
    }

# Handler untuk Vercel
handler = Mangum(app)
