// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Show success message
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (in production, this would send to a server)
        setTimeout(() => {
            alert(`Thank you, ${formData.name}! Your message has been received.\n\nIn a production site, this would be sent to your email.`);
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1000);
    });
}

// Photos Gallery
const photosGrid = document.getElementById('photosGrid');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close-modal');

// Photos from images folder
const photos = [
    { id: 1, url: 'image/photo1.jpg', caption: 'Photo 1' },
    { id: 2, url: 'image/photo2.jpg', caption: 'Photo 2' },
    { id: 3, url: 'image/photo3.jpg', caption: 'Photo 3' }
];

// Function to load photos
function loadPhotos() {
    if (!photosGrid) return;

    photosGrid.innerHTML = '';
    
    photos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.style.animationDelay = `${index * 0.1}s`;
        photoItem.innerHTML = `
            <img src="${photo.url}" alt="${photo.caption}" loading="lazy">
        `;
        
        photoItem.addEventListener('click', () => {
            openModal(photo.url, photo.caption);
        });
        
        photosGrid.appendChild(photoItem);
    });
}

// Function to open modal
function openModal(imageSrc, caption) {
    if (!imageModal || !modalImage || !modalCaption) return;
    
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close modal
function closeModalFunc() {
    if (!imageModal) return;
    
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Event listeners for modal
if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

if (imageModal) {
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeModalFunc();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal && imageModal.classList.contains('active')) {
        closeModalFunc();
    }
});

// Load photos when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (photosGrid) {
        loadPhotos();
    }
});

// Also try loading immediately in case DOMContentLoaded already fired
if (photosGrid && photosGrid.children.length === 0) {
    loadPhotos();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .tech-item, .contact-item, .photo-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    }
    
    lastScroll = currentScroll;
});
