<template>
  <section class="bible-quote-section">
    <div class="background-overlay"></div>
    
    <div class="container">
      <div class="quote-content">
        <div class="book-icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffd700" fill="none">
          <circle cx="8.5" cy="16.5" r="5.5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
          <circle cx="15.5" cy="16.5" r="5.5" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
          <path d="M12 9C12 9 16 7.14706 16 4.13889C16 2.95761 15.1579 2 14 2C13.0526 2 12.4211 2.41176 12 3.23529C11.5789 2.41176 10.9474 2 10 2C8.84211 2 8 2.95761 8 4.13889C8 7.14706 12 9 12 9Z" stroke="#ffd700" stroke-width="1.5" stroke-linejoin="round"></path>
          </svg>
        </div>

        <div class="quote-marks opening-quote">"</div>
        
        <blockquote class="bible-verse">
          We love because he first loved us.
        </blockquote>
        
        <div class="quote-marks closing-quote">"</div>
        
        <p class="bible-reference">1 John 4:19</p>
        
        <!-- <div class="decorative-divider">
          <svg xmlns="http://www.w3.org/2000/svg" class="heart-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// No reactive data needed for static quote
</script>

<style scoped>
.bible-quote-section {
  position: relative;
  padding: 100px 20px;
  background: url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600') center/cover;
  overflow: hidden;
  min-height: 50vh;
  display: flex;
  align-items: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
  z-index: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
}

.quote-content {
  text-align: center;
  /* background: rgba(255, 255, 255, 0.1); */
  border-radius: 30px;
  padding: clamp(40px, 8vw, 40px);
  /* box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.2),
    0 0 100px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%); */
  border: 1px solid #ffd700;
  position: relative;
}

.book-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(60px, 12vw, 80px);
  height: clamp(60px, 12vw, 80px);
  /* background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); */
  border-radius: 50%;
  margin-bottom: 10px;
  /* box-shadow: 0 10px 30px rgba(245, 87, 108, 0.4); */
}

.book-icon {
  /* width: clamp(30px, 6vw, 40px);
  height: clamp(30px, 6vw, 40px); */
  color: #ffd700;
}

.quote-marks {
  font-size: clamp(4rem, 12vw, 8rem);
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: rgba(245, 87, 108, 0.2);
  line-height: 0.5;
  user-select: none;
}

.opening-quote {
  display: block;
  text-align: left;
  margin-bottom: -30px;
}

.closing-quote {
  display: block;
  text-align: right;
  margin-top: -30px;
  margin-bottom: 20px;
}

.bible-verse {
  font-size: clamp(1.3rem, 3.5vw, 2.2rem);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #ffffff;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 900px;
  font-weight: 400;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.bible-reference {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: #ffffff;
  font-weight: 600;
  margin-top: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}

.decorative-divider {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart-icon {
  width: clamp(30px, 6vw, 40px);
  height: clamp(30px, 6vw, 40px);
  color: #f5576c;
  opacity: 0.6;
  animation: heartbeat 2s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@media (max-width: 768px) {
  .bible-quote-section {
    padding: 40px 15px;
    min-height: 20vh;
  }

  .quote-content {
    padding: clamp(20px, 6vw, 60px);
    border-radius: 20px;
  }

  .book-icon-wrapper {
    margin-bottom: 20px;
  }

  .opening-quote,
  .closing-quote {
    margin-bottom: -20px;
    margin-top: -20px;
  }

  .bible-reference {
    margin-top: 20px;
  }

  .decorative-divider {
    margin-top: 30px;
  }
}

@media (max-width: 480px) {
  .bible-verse {
    line-height: 1.6;
  }

  .quote-marks {
    opacity: 0.15;
  }
}
</style>