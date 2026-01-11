# Setup Instructions

## Frontend Setup (React) - No Backend Required!

This project sends emails directly from the frontend using EmailJS. **No backend server needed!**

### 1. Install Dependencies

```bash
cd frontend
npm install
```

Or if using yarn:
```bash
cd frontend
yarn install
```

### 2. Set Up EmailJS (Required for Contact Form)

**See `EMAILJS_SETUP.md` for detailed instructions.**

Quick setup:
1. Create free account at [emailjs.com](https://www.emailjs.com/)
2. Add email service (Gmail, Outlook, etc.)
3. Create email template
4. Get your Service ID, Template ID, and Public Key

### 3. Configure Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run the Frontend

```bash
cd frontend
npm start
```

Or if using yarn:
```bash
cd frontend
yarn start
```

The frontend will run on `http://localhost:3000`

## Contact Form

The contact form sends emails directly from the frontend to `palanisamy20044@gmail.com` using EmailJS:
- Name
- Email
- Subject
- Message

All fields are required and validated.

**No backend server needed!** Everything works from the frontend.
