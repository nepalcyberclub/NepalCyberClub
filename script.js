// Filtering functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const courseCards = document.querySelectorAll('.course-card');
const scrollTopBtn = document.getElementById('scrollTop');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        courseCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Scroll to top button
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add this JavaScript
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.course-card');
        const courseTitle = card.querySelector('h3').textContent;
        const courses = {
            'WordPress Mastery': {
                whyLearn: "Master website creation without coding. Perfect for bloggers, small businesses, and freelancers wanting to create professional websites",
                syllabus: [
                    'Introduction to WordPress',
                    'Understanding Your WordPress Dashboard',
                    'Installing Necessary Plugins',
                    'A Website Structure That Works',
                    'Introduction to Elementor',
                    'Build A Professional Website',
                    'Creating a Portfolio Website',
                    'Build An e-commerce Website',
                    'Hosting Website & Making Your Website Live',
                    'Launching Website',
                    'Bonus Tips',
                    'Getting Clients',
                    'Bonus Resources'
                ]
            },
            'Python Programming': {
                whyLearn: "Start your programming journey with Python. Ideal for beginners, data enthusiasts, and automation specialists",
                syllabus: [
                    'Introduction to Python',
                    'Pretty Basic',
                    'Functions and Modules',
                    'Data Structures Part I',
                    'Data Structures and File Handling',
                    'Advanced Topics in Python I',
                    'Advanced Topics in Python (Part 2)',
                    'Object-Oriented Programming (OOP - Part 1)',
                    'Object-Oriented Programming (OOP - Part 2)',
                    'Object-Oriented Programming (Part 3)',
                    'Object-Oriented Programming (OOP - Part 4)',
                    'Setting the Foundation for Projects',
                    'Final Practice for Core Concepts',
                    'GUI with Tkinter (Part 1)',
                    'GUI with Tkinter (Part 2)',
                    'GUI with Tkinter (Part 3)',
                    'Simple Games with Pygame (Part 1)',
                    'Simple Games with Pygame (Part 2)',
                    'Simple Games with Pygame (Part 3)',
                    'Web Scraping with Requests and BeautifulSoup4 (Part 1)',
                    'Web Scraping with Requests and BeautifulSoup4 (Part 2)',
                    'Web Scraping with Requests and BeautifulSoup4 (Part 3)',
                    'Attendance System (Face Detection - Part 1)',
                    'Attendance System (Face Detection - Part 2)',
                    'Attendance System (Face Detection - Part 3)',
                    'Attendance System (Face Detection - Part 4)',
                    'Further Discussions'
                ]
            },
            'Generative AI Fundamentals': {
                whyLearn: "Master cutting-edge AI content creation. Essential for developers, content creators, and AI researchers looking to build next-generation AI solutions",
                syllabus: [
                    'Introduction to Generative AI',
                    'Basics of Machine Learning and Data Preparation',
                    'Gradient Descent and Backpropagation',
                    'Deep Learning Frameworks',
                    'Training and Validation',
                    'Introduction to Generative Models',
                    'Hands-on: Build a Simple Autoencoder',
                    'NLP Basics and Language Models',
                    'Transformer Models',
                    'GPT Models and Text Generation',
                    'Ethical Considerations in Text Generation',
                    'Image Synthesis Basics',
                    'Advanced GANs',
                    'Diffusion Models and DALL-E',
                    'Discussion and Review',
                    'Introduction to LangChain and Document Handling',
                    'Retrieval-Augmented Generation (RAG)',
                    'Capstone Project with LangChain and RAG',
                    'Deployment of LangChain Applications',
                    'Feedback, Iteration, and Final Presentations',
                    'Wrap-Up and Future Directions'
                ]
            },
            'UI/UX Design': {
                whyLearn: "Create user-friendly interfaces. Perfect for designers and product managers",
                syllabus: [
                    'Design Thinking Process',
                    'User Research Methods',
                    'Wireframing & Prototyping',
                    'Figma Mastery',
                    'Interaction Design',
                    'Accessibility Standards',
                    'Design Systems',
                    'Usability Testing',
                    'Portfolio Development',
                    'Client Presentation Skills',
                    'Case Study Development'
                ]
            },
            'Laravel Framework': {
                whyLearn: "Build robust web applications efficiently. Ideal for backend developers and full-stack engineers wanting to master PHP framework development",
                syllabus: [
                    'Introduction to Laravel',
                    'Environment Setup & Installation',
                    'Routing Fundamentals',
                    'Blade Templating Engine',
                    'Controllers & Middleware',
                    'Request/Response Handling',
                    'Database Migrations',
                    'Eloquent ORM Basics',
                    'Form Validation & Handling',
                    'CRUD Operations Implementation',
                    'Frontend Asset Management',
                    'Eloquent Relationships: One-to-One',
                    'Eloquent Relationships: One-to-Many',
                    'Advanced Query Building',
                    'Model Factories & Seeding',
                    'Authentication System Setup',
                    'File Storage & Uploads',
                    'Blade Components',
                    'Many-to-Many Relationships',
                    'Introduction to Filament PHP',
                    'Admin Panel Development',
                    'API Development Fundamentals',
                    'Postman Documentation',
                    'Project: Build a Full Stack Application'
                ]
            },
            'Python and Data Science': {
                whyLearn: "Unlock insights from data. Designed for analysts, researchers, and AI enthusiasts",
                syllabus: [
                    'Advanced NumPy Operations',
                    'Introduction to Pandas',
                    'Data Cleaning with Pandas',
                    'Aggregation and Grouping in Pandas',
                    'Joining and Merging Data',
                    'Mini Project 1: EDA and Data Cleaning',
                    'Introduction to Data Visualization',
                    'Advanced Visualization with Matplotlib',
                    'Introduction to Seaborn',
                    'EDA Techniques',
                    'Handling Time Series Data',
                    'Real-world EDA Techniques',
                    'Kaggle Competition 1',
                    'Understanding Machine Learning Basics',
                    'Introduction to Linear Regression',
                    'Multiple Linear Regression',
                    'Introduction to Classification with Logistic Regression',
                    'Decision Trees',
                    'Project & Kaggle Competition 2',
                    'Introduction to k-Nearest Neighbors (kNN)',
                    'Introduction to Clustering with K-Means',
                    'Introduction to Ensemble Learning Boosting',
                    'Neural Networks Basics (ANNs)',
                    'Capstone Mini Project - Data Preprocessing and Model Building',
                    'Kaggle Competition 3 - Real-World Application'
                ]
            },
            'web Design': {
                whyLearn: "Create modern responsive websites. Perfect for frontend developers and designers wanting to master cutting-edge web technologies",
                syllabus: [
                    'Introduction to HTML5',
                    'HTML Layouts & Semantic Markup',
                    'HTML Forms & Validation',
                    'CSS Fundamentals',
                    'Advanced CSS Techniques',
                    'Tailwind CSS Framework',
                    'JavaScript Basics',
                    'DOM Manipulation & Event Handling',
                    'Advanced JavaScript Concepts',
                    'Working with Objects & Arrays',
                    'ES6+ Features & Modules',
                    'Web Hosting & cPanel Management',
                    'Final Project: Responsive Portfolio Website'
                ]
            },
            'Flutter Development': {
                whyLearn: "Build cross-platform mobile apps. Ideal for aspiring developers and startup founders wanting to create production-ready applications",
                syllabus: [
                    'Introduction to Dart Programming',
                    'Control Flow & Loops in Dart',
                    'Functions & Modular Programming',
                    'Object-Oriented Programming in Dart',
                    'Advanced Dart Concepts',
                    'Dart 3 Features',
                    'Introduction to Flutter Framework',
                    'Navigation & Routing',
                    'Local Data Storage Solutions',
                    'Working with Third-Party Libraries',
                    'HTTP Requests & API Integration',
                    'State Management with GetX',
                    'Version Control with Git',
                    'Form Validation Techniques',
                    'Animations & Motion Design',
                    'Advanced Flutter Concepts',
                    'Capstone Project: Build a Production App'
                ]
            },
            'Ethical Hacking': {
                whyLearn: "Protect digital assets and master cybersecurity. Essential for IT professionals and security enthusiasts wanting to develop defensive strategies",
                syllabus: [
                    'Footprinting & Reconnaissance',
                    'Network Scanning Techniques',
                    'System Enumeration',
                    'Vulnerability Analysis',
                    'System Hacking Methods',
                    'Malware Analysis & Threats',
                    'Network Sniffing',
                    'Social Engineering Defense',
                    'Denial-of-Service Prevention',
                    'Session Hijacking Protection',
                    'Web Server Hardening',
                    'Web Application Security',
                    'SQL Injection Prevention',
                    'Wireless Network Security',
                    'Mobile Platform Security',
                    'Bonus Resources'
                ]
            },
            'Digital Marketing': {
                whyLearn: "Dominate online platforms. Essential for entrepreneurs, marketing professionals, and social media managers",
                syllabus: [
                    'Digital Marketing Fundamentals',
                    'SEO Mastery',
                    'Social Media Marketing Strategies',
                    'Google Ads Certification',
                    'Facebook/Instagram Ads',
                    'Content Marketing Techniques',
                    'Email Marketing Automation',
                    'Analytics & Conversion Tracking',
                    'E-commerce Marketing',
                    'Marketing Funnel Creation',
                    'Personal Branding',
                    'Client Acquisition Strategies',
                    'Bonus: Freelancing & Agency Setup'
                ]
            }
        };

        document.getElementById('courseTitle').textContent = courseTitle;
        const syllabusContent = document.getElementById('syllabusContent');
        syllabusContent.innerHTML = `
            <h3>Course Syllabus</h3>
            <ul>
                ${courses[courseTitle].syllabus.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        document.getElementById('courseModal').style.display = 'block';
    });
});

// Close modal functionality
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('courseModal').style.display = 'none';
});

window.onclick = (e) => {
    if (e.target == document.getElementById('courseModal')) {
        document.getElementById('courseModal').style.display = 'none';
    }
}

// Handle buy button click
document.querySelector('.buy-btn').addEventListener('click', () => {
    // Add your payment processing logic here
    alert('Redirecting to payment gateway...');
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});
// Payment Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    let selectedMethod = null;

    // Handle payment method selection
    document.querySelectorAll('.method-card').forEach(method => {
        method.addEventListener('click', () => {
            selectedMethod = method.dataset.method;
            document.getElementById('methodSelection').classList.remove('active');
            document.getElementById('qrDisplay').classList.add('active');

            // Show selected QR code
            document.querySelectorAll('.qr-code').forEach(qr => qr.classList.remove('active'));
            document.getElementById(`${selectedMethod}Qr`).classList.add('active');
        });
    });

    // Handle back button
    document.querySelector('.back-btn').addEventListener('click', () => {
        document.getElementById('methodSelection').classList.add('active');
        document.getElementById('qrDisplay').classList.remove('active');
    });

    // Handle file upload preview
    document.getElementById('paymentProof').addEventListener('change', function(e) {
        const file = e.target.files[0];
        const preview = document.querySelector('.preview-container');

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                preview.innerHTML = `<img src="${e.target.result}" alt="Payment Proof">`;
            }
            reader.readAsDataURL(file);
        }
    });

    // Handle payment confirmation
    document.querySelector('.confirm-btn').addEventListener('click', () => {
        const transactionId = document.getElementById('transactionId').value;
        const paymentProof = document.getElementById('paymentProof').files[0];

        if (!selectedMethod) {
            alert('Please select a payment method');
            return;
        }

        if (!transactionId) {
            alert('Please enter transaction ID');
            return;
        }

        if (!paymentProof) {
            alert('Please upload payment proof');
            return;
        }

        // Submit payment details
        const formData = new FormData();
        formData.append('method', selectedMethod);
        formData.append('transaction_id', transactionId);
        formData.append('payment_proof', paymentProof);

        // Here you would typically send formData to your server
        alert('Payment submitted successfully! We will verify your payment shortly.');
        document.getElementById('paymentModal').style.display = 'none';
    });
});

// Update original buy button to show payment modal
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('courseModal').style.display = 'none';
        document.getElementById('paymentModal').style.display = 'block';
    });
});

// Update close button functionality
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        // Close all modals
        document.getElementById('courseModal').style.display = 'none';
        document.getElementById('paymentModal').style.display = 'none';

        // Reset payment steps
        document.getElementById('methodSelection').classList.add('active');
        document.getElementById('qrDisplay').classList.remove('active');
        document.getElementById('confirmationScreen').classList.remove('active');

        // Clear form data
        document.getElementById('transactionId').value = '';
        document.getElementById('paymentProof').value = '';
        document.querySelector('.preview-container').innerHTML = '';

        // Reset countdown if active
        if(typeof countdownInterval !== 'undefined') {
            clearInterval(countdownInterval);
        }

        // Reset course modal
        document.querySelectorAll('.course-card').forEach(card => {
            card.style.display = 'block';
            card.style.opacity = '1';
        });
    });
});
// Modify the confirm button handler
document.querySelector('.confirm-btn').addEventListener('click', () => {
    // ... existing validation code ...

    // Close payment modal
    document.getElementById('paymentModal').style.display = 'none';

    // Show success notification
    const notification = document.getElementById('successNotification');
    notification.classList.add('show');

    // Auto-hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
});

// Close notification manually
document.querySelector('.close-notification').addEventListener('click', () => {
    document.getElementById('successNotification').classList.remove('show');
});

// Update cancel/close handlers to reset notification
document.querySelectorAll('.close, .cancel-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('successNotification').classList.remove('show');
    });
});