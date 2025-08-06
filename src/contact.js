import '../src/style.css'

// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('#mobile-menu-button')
const mobileMenu = document.querySelector('#mobile-menu')

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a')
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}

// Contact form functionality
const contactForm = document.querySelector('#contact-form')
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)
    
    // Basic validation (HTML5 handles most of it)
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message || !data.privacy) {
      alert('Please fill in all required fields and accept the privacy policy.')
      return
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    
    // Show loading state
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true
    submitButton.classList.add('opacity-75', 'cursor-not-allowed')
    
    // Simulate API call
    setTimeout(() => {
      // Success state
      submitButton.textContent = 'Message Sent! ✓'
      submitButton.classList.remove('bg-blue-600', 'hover:bg-blue-700')
      submitButton.classList.add('bg-green-600', 'hover:bg-green-700')
      
      // Show success message
      const successMessage = document.createElement('div')
      successMessage.className = 'bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mt-4'
      successMessage.innerHTML = `
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Thank you for your message! We'll get back to you within 24 hours.</span>
        </div>
      `
      
      contactForm.insertAdjacentElement('afterend', successMessage)
      
      // Reset form
      contactForm.reset()
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitButton.textContent = originalText
        submitButton.disabled = false
        submitButton.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-green-600', 'hover:bg-green-700')
        submitButton.classList.add('bg-blue-600', 'hover:bg-blue-700')
        
        // Remove success message
        if (successMessage.parentNode) {
          successMessage.remove()
        }
      }, 3000)
      
    }, 1500) // Simulate 1.5 second API call
  })
}

// Form field enhancements
const phoneInput = document.querySelector('#phone')
if (phoneInput) {
  phoneInput.addEventListener('input', (e) => {
    // Simple phone number formatting (US format)
    let value = e.target.value.replace(/\D/g, '')
    if (value.length >= 6) {
      value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
    } else if (value.length >= 3) {
      value = value.replace(/(\d{3})(\d{3})/, '($1) $2')
    }
    e.target.value = value
  })
}
