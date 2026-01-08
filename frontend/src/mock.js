// Content Management Template System
// Easy to add, update, and remove content

/* ============================================
   COMPANY INFORMATION
   Update your company details here
   ============================================ */
export const companyInfo = {
  name: "GenYuga Software Private Limited",
  tagline: "Innovating Tomorrow's Technology, Today",
  description: "We build cutting-edge EdTech solutions, custom software, and scalable SaaS products that transform businesses and education.",
  email: "contact.genyuga@gmail.com",
  phone: "+91 6382726436",
  phones: ["+91 6382726436", "+91 8807480254"], // Multiple phone numbers
  address: "Salem, Tamilnadu, India",
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

/* ============================================
   HERO SECTION CONTENT
   Customize your homepage hero section
   ============================================ */
export const heroContent = {
  title: "Building the Future of Technology & Education",
  subtitle: "Empowering businesses and learners with innovative EdTech solutions, custom software development, and powerful SaaS products.",
  primaryCTA: "Get Started",
  primaryCTALink: "/contact",
  secondaryCTA: "View Our Work",
  secondaryCTALink: "/products",
  heroImage: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  showStats: true,
  stats: [
    { number: "50+", label: "Projects" },
    { number: "30+", label: "Clients" },
    { number: "5+", label: "Years" }
  ]
};

/* ============================================
   ABOUT US CONTENT
   Define your company's mission, vision & values
   ============================================ */
export const aboutContent = {
  title: "About GenYuga",
  mission: "Our mission is to bridge technology and education, creating innovative solutions that make learning accessible and businesses more efficient.",
  vision: "To be a leading technology partner for startups and enterprises, driving digital transformation through cutting-edge software solutions.",
  image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
  
  // Company Statistics
  stats: [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "15+", label: "Team Members" }
  ],
  
  // Core Values - Add or remove as needed
  values: [
    {
      title: "Innovation",
      description: "We embrace creativity and constantly push the boundaries of what's possible with technology.",
      icon: "Award" // Lucide icon name
    },
    {
      title: "Quality",
      description: "Excellence is not an act, but a habit. We deliver nothing less than the best.",
      icon: "Globe"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients.",
      icon: "Users"
    },
    {
      title: "Growth",
      description: "Continuous learning and improvement drive us forward in this ever-evolving tech landscape.",
      icon: "Zap"
    }
  ]
};

/* ============================================
   SERVICES - Add/Update/Remove Services
   To add a new service, copy the template below
   ============================================ */
export const services = [
  {
    id: 1,
    title: "EdTech Solutions",
    description: "Transform education with interactive learning platforms, virtual classrooms, student management systems, and AI-powered personalized learning experiences.",
    icon: "GraduationCap", // Lucide icon name
    image: "https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg",
    features: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Student Analytics & Tracking",
      "Interactive Course Builder"
    ]
  },
  {
    id: 2,
    title: "Custom Software Development",
    description: "End-to-end software development services tailored to your business needs. From concept to deployment, we build scalable, secure, and efficient solutions.",
    icon: "Code2",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "Legacy System Modernization"
    ]
  },
  {
    id: 3,
    title: "API & Backend Services",
    description: "Robust, scalable backend architectures and RESTful APIs that power your applications. Cloud-native solutions built for performance and reliability.",
    icon: "Server",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    features: [
      "RESTful API Development",
      "Microservices Architecture",
      "Cloud Infrastructure Setup",
      "Database Design & Optimization"
    ]
  },
  {
    id: 4,
    title: "SaaS Product Development",
    description: "Build and launch your SaaS product with our expertise. From MVP to full-scale platform, we handle architecture, development, and deployment.",
    icon: "Cloud",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
    features: [
      "MVP Development",
      "Multi-tenant Architecture",
      "Subscription Management",
      "Analytics & Reporting"
    ]
  }
  
  /* TO ADD A NEW SERVICE, copy this template:
  ,
  {
    id: 5,
    title: "Your Service Name",
    description: "Detailed description of the service",
    icon: "IconName",
    image: "image-url",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  }
  */
];

/* ============================================
   PRODUCTS - Add/Update/Remove Products
   Easily manage your product portfolio
   ============================================ */
export const products = [
  {
    id: 1,
    name: "EduFlow",
    tagline: "Learning Management Made Simple",
    description: "EduFlow is a comprehensive, enterprise-grade Learning Management System (LMS) designed for educational institutions, training providers, and corporates. It streamlines course delivery, event management, payments, task evaluation, and certificate automation in a single secure platform. EduFlow is built to handle courses, workshops, internships, and custom learning events with strict role separation, automated workflows, and full auditability.",
    category: "EdTech",
    status: "Live", // Options: "Live", "Beta", "Coming Soon"
    image: "https://images.pexels.com/photos/4145347/pexels-photo-4145347.jpeg",
    features: [
      "Role-Based Access Control (RBAC) with Super Admin, Event Manager, Finance Manager, Task Reviewer, and Read-Only Admin roles",
      "Separate authentication systems for Admin (internal only) and Student/Participant (public registration)",
      "Comprehensive Event Management supporting Courses, Workshops, Internships, and custom event types",
      "Automated Razorpay Payment Integration with full/partial payment support and webhook verification",
      "Task Management & Verification system with screenshot uploads and GitHub repository links",
      "Automated Certificate Issuance based on 70% task completion and full payment eligibility",
      "Real-time Metrics & Dashboards for enrollments, payments, task completion, and certificates",
      "Complete Audit Logs with immutable change history visible only to Super Admin",
      "Automated Payment Reminders sent 3 days and 2 days before event end",
      "MVC Architecture with RESTful APIs, Sequelize ORM, and secure JWT-based authentication"
    ],
    demoLink: "#", // Optional
    price: "Enterprise Pricing Available" // Optional
  },
  {
    id: 2,
    name: "AuraCart AI",
    tagline: "AI-Powered Personalized Beauty & Fashion Commerce",
    description: "AuraCart AI is an advanced AI-driven eCommerce platform that delivers hyper-personalized product recommendations based on skin tone detection, facial analysis, user preferences, and event context. It enables brands and businesses to offer camera-based product matching, making shopping more accurate, inclusive, and conversion-focused.",
    category: "AI Commerce",
    status: "Live",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg",
    features: [
      "AI Skin Tone Detection using device camera with user consent for accurate product matching",
      "Personalized Product Recommendations based on detected skin tone, event context (Wedding, Party, Office, Festival, Casual), and user preferences",
      "LLM-Powered Shopping Assistant for conversational product guidance and recommendations",
      "Event-Based Styling with context-aware suggestions for makeup, outfits, and skincare products",
      "Smart eCommerce Capabilities including product catalog management, dynamic recommendations, and real-time AI-driven filtering",
      "Mobile-First UI optimized for camera usage and seamless shopping experience",
      "Client-Ready White-Label Solution with custom branding for beauty, fashion, and lifestyle brands",
      "Secure Checkout & Order Tracking with complete eCommerce functionality",
      "Higher Conversion Rates through accurate product matching and reduced returns",
      "Scalable Platform suitable for beauty brands, fashion retailers, D2C brands, and agencies"
    ]
  }
  
  /* TO ADD A NEW PRODUCT, copy this template:
  ,
  {
    id: 4,
    name: "Product Name",
    tagline: "Short catchy tagline",
    description: "Detailed product description",
    category: "Category",
    status: "Live",
    image: "image-url",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
    demoLink: "#",
    price: "Pricing info"
  }
  */
];

/* ============================================
   TESTIMONIALS - Client Reviews
   Add customer feedback and reviews
   ============================================ */
export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CTO",
    company: "EduTech Innovations",
    content: "GenYuga transformed our vision into reality. Their EdTech expertise helped us launch our platform 2 months ahead of schedule. Exceptional quality and professionalism.",
    rating: 5,
    avatar: "" // Optional: URL to customer photo
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder",
    company: "LearnHub",
    content: "Working with GenYuga was a game-changer. They understood our needs perfectly and delivered a robust, scalable LMS that our users love. Highly recommended!",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Product Manager",
    company: "TechCorp",
    content: "The team's technical expertise and commitment to quality is outstanding. They built our SaaS platform from scratch and it's performing flawlessly.",
    rating: 5
  }
  
  /* TO ADD A NEW TESTIMONIAL:
  ,
  {
    id: 4,
    name: "Customer Name",
    role: "Job Title",
    company: "Company Name",
    content: "Review text",
    rating: 5,
    avatar: "image-url"
  }
  */
];

/* ============================================
   TEAM MEMBERS - Optional
   Showcase your team (uncomment to use)
   ============================================ */
export const teamMembers = [
  // {
  //   id: 1,
  //   name: "John Doe",
  //   role: "CEO & Founder",
  //   bio: "Passionate about building innovative solutions",
  //   image: "image-url",
  //   social: {
  //     linkedin: "url",
  //     twitter: "url"
  //   }
  // }
];

/* ============================================
   BLOG POSTS - Optional
   Add company blog posts (uncomment to use)
   ============================================ */
export const blogPosts = [
  // {
  //   id: 1,
  //   title: "Blog Post Title",
  //   excerpt: "Short description",
  //   content: "Full content",
  //   author: "Author Name",
  //   date: "2024-01-01",
  //   category: "Technology",
  //   image: "image-url",
  //   slug: "blog-post-url"
  // }
];

/* ============================================
   FAQ - Frequently Asked Questions
   ============================================ */
export const faqs = [
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern tech stacks including React, Node.js, Python, MongoDB, PostgreSQL, AWS, and more. We choose the best technologies based on your project requirements."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. An MVP can be ready in 6-8 weeks, while a full-scale product may take 3-6 months. We provide detailed timelines during the planning phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer comprehensive maintenance and support packages to ensure your application runs smoothly. This includes bug fixes, updates, and feature enhancements."
  },
  {
    question: "Can you help with an existing project?",
    answer: "Absolutely! We can take over existing projects, modernize legacy systems, or add new features to your current applications."
  }
];

/* ============================================
   TECHNOLOGY STACK
   Technologies you work with
   ============================================ */
export const techStack = [
  "React", "Node.js", "Python", "MongoDB", "PostgreSQL", "AWS",
  "Docker", "Kubernetes", "TypeScript", "FastAPI", "Next.js", "Redis",
  "GraphQL", "Vue.js", "Angular", "Django", "Flask", "TensorFlow"
];

/* ============================================
   CONTACT FORM SUBMISSION (Mock)
   This will be replaced with real backend API
   ============================================ */
export const submitContactForm = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted (mock):', formData);
      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      resolve({ success: true, message: 'Thank you! We will get back to you soon.' });
    }, 1500);
  });
};

/* ============================================
   HOW TO UPDATE CONTENT:
   
   1. SERVICES: Scroll to 'services' array above
      - To add: Copy the template at the end
      - To edit: Change the text in existing items
      - To remove: Delete the entire service object
   
   2. PRODUCTS: Scroll to 'products' array above
      - Same process as services
      - Update status: "Live", "Beta", or "Coming Soon"
   
   3. TESTIMONIALS: Scroll to 'testimonials' array
      - Add customer reviews easily
   
   4. COMPANY INFO: Update at the top of this file
   
   5. IMAGES: Replace image URLs with your own
   
   No coding knowledge required for content updates!
   ============================================ */