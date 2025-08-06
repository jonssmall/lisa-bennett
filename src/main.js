import './style.css'

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

// Demo button functionality
const demoButton = document.querySelector('#demo-button')
if (demoButton) {
  demoButton.addEventListener('click', () => {
    // Smooth scroll to demo section
    const demoSection = document.querySelector('#counter').closest('section')
    if (demoSection) {
      demoSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    
    // Optional: Show a confirmation message
    const originalText = demoButton.textContent
    demoButton.textContent = 'Demo Requested! ✓'
    demoButton.classList.remove('hover:bg-yellow-300')
    demoButton.classList.add('bg-green-500', 'hover:bg-green-600')
    
    setTimeout(() => {
      demoButton.textContent = originalText
      demoButton.classList.remove('bg-green-500', 'hover:bg-green-600')
      demoButton.classList.add('hover:bg-yellow-300')
    }, 2000)
  })
}

// Counter functionality
const counterButton = document.querySelector('#counter')
if (counterButton) {
  let counter = 0
  counterButton.addEventListener('click', () => {
    counter++
    counterButton.textContent = `Count is ${counter}`
  })
}
