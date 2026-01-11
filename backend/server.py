from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

# Email configuration
CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'palanisamy20044@gmail.com')
SMTP_HOST = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '587'))
SMTP_USER = os.environ.get('SMTP_USER', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')

def send_email(form_data: ContactForm) -> bool:
    """Send email using SMTP"""
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = SMTP_USER or form_data.email
        msg['To'] = CONTACT_EMAIL
        msg['Subject'] = f"Contact Form: {form_data.subject}"
        msg['Reply-To'] = form_data.email
        
        # Create email body
        body = f"""
New Contact Form Submission

Name: {form_data.name}
Email: {form_data.email}
Subject: {form_data.subject}

Message:
{form_data.message}

---
This email was sent from the company portfolio contact form.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            if SMTP_USER and SMTP_PASSWORD:
                server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
        
        return True
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")
        return False

# Routes
@api_router.get("/")
async def root():
    return {"message": "Company Portfolio API"}

@api_router.post("/contact")
async def contact(form_data: ContactForm):
    """Handle contact form submission and send email"""
    try:
        # Validate required fields
        if not all([form_data.name, form_data.email, form_data.subject, form_data.message]):
            raise HTTPException(status_code=400, detail="All fields are required")
        
        # Send email
        success = send_email(form_data)
        
        if success:
            return {
                "success": True,
                "message": "Email sent successfully"
            }
        else:
            raise HTTPException(status_code=500, detail="Failed to send email. Please try again later.")
    
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="An error occurred while processing your request")

# Include the router in the main app
app.include_router(api_router)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)