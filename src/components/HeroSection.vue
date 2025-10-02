<template>
  <section class="hero-section">
    <div class="hero-image-container">
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
          alt="Engagement" 
          class="hero-image"
        />
      </picture>
      <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
      <div class="hero-text">
        <!-- <div class="event-info"> -->
          <p class="event-title">WE ARE GETTING ENGAGED</p>
        <!-- </div> -->
        <h1 class="couple-names">
          Rositta & Toney
          <!-- <span class="ampersand">&</span>
          Toney Chittadiyil Joseph -->
        </h1>
        <div class="event-info">
          <p class="event-date">October 27, 2025</p>
        </div>
        <button @click="saveToCalendar" class="save-date-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M16 2V6M8 2V6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M3 10H21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12 19C12 19 15.5 17.4118 15.5 14.8333C15.5 13.8208 14.7632 13 13.75 13C12.9211 13 12.3684 13.3529 12 14.0588C11.6316 13.3529 11.0789 13 10.25 13C9.23684 13 8.5 13.8208 8.5 14.8333C8.5 17.4118 12 19 12 19Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          SAVE THE DATE
        </button>
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
    title: 'Rositta & Toney Engagement Ceremony',
    description: 'Engagement ceremony at St. George Forane Church, Edathua',
    location: 'St. George Forane Church, Edathua',
    startDate: '2025-10-27T12:00:00',
    endDate: '2025-10-27T15:00:00'
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
    link.download = 'engagement.ics'
    link.click()
  } else {
    window.open(googleCalendarUrl, '_blank')
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
  width: 100%;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.couple-names {
  font-size: clamp(2rem, 6vw, 5rem);
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 4px;
}

.ampersand {
  display: block;
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-style: italic;
  margin: 0.5rem 0;
  color: #ffd700;
}

.event-info {
  margin-bottom: 2.5rem;
}

.event-title {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: white;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-family: 'Montserrat', sans-serif;
}

.event-date {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: white;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
}

.save-date-btn {
  /* background: linear-gradient(135deg, #c9a959 0%, #ffd700 100%); */
  color: #ffffff;
  border: 1px solid #ffd700;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 400;
  /* border-radius: 50px; */
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  /* box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3); */
}

.save-date-btn:hover {
  transform: translateY(-3px);
  /* box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5); */
  /* background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); */
}

.btn-icon {
  width: 24px;
  height: 24px;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.mouse {
  width: 25px;
  height: 40px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;
  animation: float 2s ease-in-out infinite;
}

.mouse::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  animation: scroll 2s ease-in-out infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
    transform: translateX(-50%) translateY(15px);
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 0 15px;
  }

  .save-date-btn {
    padding: 14px 30px;
    font-size: 1rem;
  }

  .couple-names {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 2px;
 }

 .event-title {
  font-size: 1rem;
  color: white;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
  
}
</style>