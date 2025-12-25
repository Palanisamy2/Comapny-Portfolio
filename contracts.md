# GenYuga Portfolio Website - API Contracts

## Backend Implementation Requirements

### Contact Form Email API

**Endpoint**: `POST /api/contact`

**Purpose**: Accept contact form submissions and send email notifications to company email

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response Success (200)**:
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response Error (400/500)**:
```json
{
  "detail": "Error message description"
}
```

**Implementation Details**:
1. Use SMTP to send emails
2. Send to: palanisamy20044@gmail.com
3. Email content should include:
   - From: form submitter's email
   - Subject: Contact Form: [subject]
   - Body: Formatted with name, email, subject, and message
4. Validate all required fields
5. Store submission in MongoDB for record keeping (optional but recommended)

**Environment Variables Needed**:
- SMTP_HOST (e.g., smtp.gmail.com)
- SMTP_PORT (e.g., 587)
- SMTP_USER (sender email)
- SMTP_PASSWORD (app-specific password or email password)
- CONTACT_EMAIL (palanisamy20044@gmail.com)

**Frontend Integration**:
- Contact page already implemented with form validation
- Uses toast notifications for success/error feedback
- Form resets after successful submission
