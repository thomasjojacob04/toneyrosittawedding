<template>
  <section class="hero-section">
    <div class="background-pattern"></div>
    
    <div class="content-grid">
      <div class="left-panel">
        <div class="image-frame">
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcset="../assets/images/Hero_Section_Mobile.jpg"
            />
            <source 
              media="(min-width: 769px)" 
              srcset="../assets/images/Hero_Section_Desktop.jpg"
            />
            <img 
              src="../assets/images/Hero_Section_Desktop.jpg"
              alt="Wedding" 
              class="hero-image"
            />
          </picture>
          <div class="image-border"></div>
        </div>
      </div>

      <div class="right-panel">
        <div class="hero-content">
          <!-- <div class="decorative-line top"></div> -->
          
          <p class="event-title">WE ARE GETTING MARRIED</p>
          
          <h1 class="couple-names">
            Toney & Rositta
          </h1>
          
          <div class="date-container">
            <div class="date-ornament left"></div>
            <p class="event-date">November 15, 2025</p>
            <div class="date-ornament right"></div>
          </div>

          <button @click="saveToCalendar" class="save-date-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path d="M16 2V6M8 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M12 19C12 19 15.5 17.4118 15.5 14.8333C15.5 13.8208 14.7632 13 13.75 13C12.9211 13 12.3684 13.3529 12 14.0588C11.6316 13.3529 11.0789 13 10.25 13C9.23684 13 8.5 13.8208 8.5 14.8333C8.5 17.4118 12 19 12 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            SAVE THE DATE
          </button>

          <!-- <div class="decorative-line bottom"></div> -->
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="mouse"></div>
    </div>
  </section>
</template>

<script setup>
const saveToCalendar = () => {
  const event = {
    title: 'Toney & Rositta Wedding Ceremony',
    description: 'Wedding ceremony at St. Micheals Church, Thathampally',
    location: 'St. Micheals Church, Thathampally',
    startDate: '2025-11-15T15:00:00',
    endDate: '2025-11-15T22:00:00'
  }

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}`

  // Apple Calendar (ICS file)
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startDate.replace(/[-:]/g, '')}
DTEND:${event.endDate.replace(/[-:]/g, '')}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`

  // Detect device and open appropriate calendar
  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    const blob = new Blob([icsContent], { type: 'text/calendar' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'wedding.ics'
    link.click()
  } else {
    window.open(googleCalendarUrl, '_blank')
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Montserrat:wght@300;400;500&display=swap');

.hero-section {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f5f0 0%, #ffffff 50%, #f5f0eb 100%);
  padding: 60px 0;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, #d4af37 35px, #d4af37 36px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, #d4af37 35px, #d4af37 36px);
}

.content-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  max-width: 1400px;
  width: 100%;
  padding: 0 60px;
  align-items: center;
}

.left-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideInLeft 1s ease-out;
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 550px;
  aspect-ratio: 3/4;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(212, 175, 55, 0.2);
  transition: transform 0.6s ease;
}

.image-frame:hover .hero-image {
  transform: scale(1.02);
}

.image-border {
  position: absolute;
  top: -15px;
  left: -15px;
  right: 15px;
  bottom: 15px;
  border: 2px solid #d4af37;
  pointer-events: none;
  z-index: -1;
}

.right-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: slideInRight 1s ease-out;
}

.hero-content {
  text-align: center;
  max-width: 600px;
  padding: 60px 40px;
}

.decorative-line {
  height: 1px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
  margin: 30px auto;
  width: 200px;
}

.decorative-line.top {
  margin-bottom: 40px;
}

.decorative-line.bottom {
  margin-top: 40px;
}

.event-title {
  font-size: 0.95rem;
  color: #d4af37;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
}

.couple-names {
  font-size: clamp(3rem, 5vw, 4rem);
  font-weight: 600;
  color: #2c2416;
  line-height: 1.3;
  margin-bottom: 35px;
  font-family: 'Playfair Display', serif;
  letter-spacing: 2px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}

.date-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 45px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.7s forwards;
}

.date-ornament {
  width: 40px;
  height: 1px;
  background: #d4af37;
}

.event-date {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  color: #2c2416;
  font-weight: 600;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
}

.save-date-btn {
  background: transparent;
  color: #000000;
  border: 2px solid #d4af37;
  padding: 18px 50px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.9s forwards;
}

.save-date-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #d4af37;
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

.save-date-btn:hover {
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.save-date-btn:hover::before {
  left: 0;
}

.save-date-btn svg {
  transition: transform 0.3s ease;
}

.save-date-btn:hover svg {
  transform: scale(1.1);
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mouse {
  width: 24px;
  height: 38px;
  border: 2px solid #8b7355;
  border-radius: 12px;
  position: relative;
  animation: float 2s ease-in-out infinite;
}

.mouse::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: #d4af37;
  border-radius: 2px;
  animation: scroll 2s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(12px);
  }
}

@media (max-width: 1024px) {
  .content-grid {
    gap: 60px;
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 0 30px;
  }

  .decorative-line.top {
  margin-bottom: 20px;
  margin-top: 0px;
}

.decorative-line.bottom {
  margin-bottom: 20px;
  margin-top: 20px;
}

.date-container {
  margin-bottom: 20px;
}
  .left-panel {
    order: 1;
  }

  .right-panel {
    order: 2;
  }

  .image-frame {
    max-width: 320px;
  }

  .hero-content {
    padding: 40px 20px;
  }

  .couple-names {
    font-size: 3.8rem;
    margin-bottom: 20px;
  }

  .event-title {
    font-size: 0.85rem;
    letter-spacing: 3px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .save-date-btn {
    padding: 16px 40px;
    font-size: 0.85rem;
  }

  .decorative-line {
    width: 150px;
  }
}

@media (max-width: 480px) {
  .hero-content {
    padding: 30px 15px;
  }

  .couple-names {
    font-size: 2.2rem;
  }

  .date-container {
    gap: 15px;
  }

  .date-ornament {
    width: 30px;
  }
}
</style>