# GenYuga Portfolio - Content Management Guide

## 📝 Easy Content Updates

This guide shows you how to easily update your website content without any coding knowledge!

---

## 🎯 Where to Update Content

**All content is managed in one file:** `/app/frontend/src/mock.js`

---

## 📋 Content Sections You Can Update

### 1. Company Information
**Location:** Top of `mock.js`

```javascript
export const companyInfo = {
  name: "GenYuga Software Private Limited",
  tagline: "Your tagline here",
  description: "Your description",
  email: "your-email@company.com",
  phone: "+91 98765 43210",
  address: "Your address",
  
  social: {
    linkedin: "your-linkedin-url",
    twitter: "your-twitter-url",
    // ... more social links
  }
};
```

**What you can change:**
- Company name
- Tagline  
- Contact email
- Phone number
- Address
- Social media links

---

### 2. Homepage Hero Section
**Location:** `heroContent` object

```javascript
export const heroContent = {
  title: "Your Main Headline",
  subtitle: "Your subtitle description",
  primaryCTA: "Button Text",
  primaryCTALink: "/contact",
  heroImage: "image-url",
  showStats: true,
  stats: [
    { number: "50+", label: "Projects" },
    // Add or modify stats
  ]
};
```

**What you can change:**
- Main headline
- Subtitle
- Button text and links
- Hero image
- Statistics (show/hide and values)

---

### 3. Services

**Location:** `services` array

**To ADD a new service:**
1. Copy this template at the end of the services array:

```javascript
,
{
  id: 5, // Next available number
  title: "Your Service Name",
  description: "Detailed description of the service",
  icon: "Cloud", // Lucide icon name
  image: "https://your-image-url.jpg",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ]
}
```

2. Available icon names: `GraduationCap`, `Code2`, `Server`, `Cloud`, `Zap`, `Users`, etc.

**To EDIT an existing service:**
- Find the service by its title
- Change any text, image, or features

**To REMOVE a service:**
- Delete the entire service object (including the commas)

---

### 4. Products

**Location:** `products` array

**To ADD a new product:**

```javascript
,
{
  id: 4, // Next number
  name: "Product Name",
  tagline: "Short catchy tagline",
  description: "Full product description",
  category: "SaaS", // or "EdTech"
  status: "Live", // Options: "Live", "Beta", "Coming Soon"
  image: "https://your-image-url.jpg",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4"
  ],
  demoLink: "#", // Optional
  price: "Starting at $99/month" // Optional
}
```

**Status Badge Colors:**
- `"Live"` → Green (with glow effect)
- `"Beta"` → Blue
- `"Coming Soon"` → Purple

**To EDIT/REMOVE:** Same as services

---

### 5. Testimonials

**Location:** `testimonials` array

**To ADD a new testimonial:**

```javascript
,
{
  id: 4,
  name: "Customer Name",
  role: "Job Title",
  company: "Company Name",
  content: "The testimonial text goes here",
  rating: 5, // 1-5 stars
  avatar: "image-url" // Optional
}
```

**What displays:**
- Customer name and company
- Star rating (animated)
- Review text
- Optional customer photo

---

### 6. About Page Content

**Location:** `aboutContent` object

**What you can update:**
- Mission statement
- Vision statement
- Company values (add/remove/edit)
- Statistics
- About image

**To add a new core value:**
```javascript
,
{
  title: "Value Name",
  description: "Description of this value",
  icon: "Award" // Lucide icon name
}
```

---

### 7. Team Members (Optional)

**Location:** `teamMembers` array (currently commented out)

To activate team section:
1. Uncomment the array
2. Add team members:

```javascript
export const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Short bio",
    image: "profile-image-url",
    social: {
      linkedin: "url",
      twitter: "url"
    }
  }
];
```

---

### 8. Blog Posts (Optional)

**Location:** `blogPosts` array (currently commented out)

To add blog functionality:
1. Uncomment the array
2. Add posts:

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Short description",
    content: "Full article content",
    author: "Author Name",
    date: "2024-12-25",
    category: "Technology",
    image: "featured-image-url",
    slug: "blog-post-url"
  }
];
```

---

### 9. FAQs

**Location:** `faqs` array

**To add a new FAQ:**

```javascript
,
{
  question: "Your question here?",
  answer: "Detailed answer here."
}
```

---

### 10. Technology Stack

**Location:** `techStack` array

Simply add or remove technology names:

```javascript
export const techStack = [
  "React", "Node.js", "Python", "MongoDB",
  "Your New Tech" // Add here
];
```

---

## 🖼️ How to Update Images

### Option 1: Use Existing Images
- Keep the current Pexels image URLs
- They're professional and free to use

### Option 2: Add Your Own Images
1. Upload images to:
   - Your website hosting
   - Image hosting service (Imgur, Cloudinary)
   - Your own server
2. Get the direct image URL
3. Replace the URL in mock.js

**Image recommendations:**
- Hero images: 1920x1080px
- Product images: 800x600px  
- Service images: 800x600px
- Keep file sizes under 500KB for fast loading

---

## ✅ After Making Changes

### 1. Save the file
Your browser will automatically refresh and show the changes!

### 2. Check the website
Open http://localhost:3000 to see your updates

### 3. Common issues:
- **Missing comma:** Make sure there's a comma between items
- **Extra comma:** Don't add a comma after the last item
- **Quotes:** Always use double quotes "like this"

---

## 🎨 3D Animations & Effects

Your website includes these automatic animations:

### Hero Section:
- Floating gradient backgrounds
- Mouse-following parallax effects  
- Pulsing glow on badges
- Animated statistics

### Service Cards:
- 3D tilt on hover
- Icon rotation and scaling
- Gradient background transitions
- Smooth lift effects

### Product Cards:
- Image zoom with rotation
- Glowing status badges
- Content slide animations
- Hover gradient overlays

### Testimonials:
- Glass morphism effect
- Animated star ratings
- Card scaling on hover
- Floating background shapes

### Buttons:
- Magnetic hover effect
- Scale transformations
- Arrow slide animations
- Shadow depth changes

**All animations are:**
- Smooth and professional
- Optimized for performance
- Mobile-responsive
- Automatically applied

---

## 📱 Mobile Responsiveness

The website automatically adjusts for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (< 768px)

**Mobile features:**
- Hamburger menu
- Single column layouts
- Touch-optimized buttons
- Reduced animations for performance

---

## 🚀 Quick Tips

### ✅ DO:
- Update content regularly
- Use high-quality images
- Keep descriptions concise
- Test on mobile devices
- Maintain consistent tone

### ❌ DON'T:
- Delete structural elements (like `id`, `key`)
- Remove important commas
- Use very large images (compress them first)
- Forget to save after changes
- Mix single and double quotes

---

## 🆘 Need Help?

### Common Errors:

**"Unexpected token" error:**
- Check for missing/extra commas
- Make sure all quotes are closed

**Image not showing:**
- Verify the image URL is correct
- Check if the URL is publicly accessible
- Try a different image URL

**Content not updating:**
- Make sure you saved the file
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Check browser console for errors

---

## 📊 Content Planning Template

Use this template to plan your content updates:

### Services to Add/Update:
1. [ ] Service Name 1 - Description
2. [ ] Service Name 2 - Description

### Products to Add/Update:
1. [ ] Product Name 1 - Status
2. [ ] Product Name 2 - Status

### Testimonials to Add:
1. [ ] Customer Name - Company
2. [ ] Customer Name - Company

### Images to Replace:
1. [ ] Hero image - Find/Upload
2. [ ] Product images - Find/Upload
3. [ ] Service images - Find/Upload

---

## 🎯 Content Update Checklist

Before publishing updates:

- [ ] All text is proofread
- [ ] Images are optimized (< 500KB)
- [ ] Links are working
- [ ] Mobile view looks good
- [ ] Contact information is correct
- [ ] Testimonials are real
- [ ] Product status is accurate
- [ ] Service descriptions are clear

---

## 💡 Pro Tips

1. **Regular Updates**: Keep content fresh by updating monthly
2. **Real Testimonials**: Use actual client feedback
3. **Professional Images**: Invest in good photography
4. **Clear CTAs**: Make it easy for visitors to contact you
5. **SEO-Friendly**: Use descriptive, keyword-rich content

---

**Questions?** Contact your development team for technical assistance.

**Last Updated:** December 2024