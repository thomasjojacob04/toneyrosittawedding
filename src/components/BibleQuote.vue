<template>
  <section class="bible-quote-section">
    <div class="background-overlay"></div>
    <div class="pattern-overlay"></div>
    
    <div class="container">
      <div class="quote-content">
        <div class="decorative-element top">
          <!-- <div class="flourish left"></div> -->
          <div class="center-ornament">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none">
              <circle cx="8.5" cy="16.5" r="5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
              <circle cx="15.5" cy="16.5" r="5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle>
              <path d="M12 9C12 9 16 7.14706 16 4.13889C16 2.95761 15.1579 2 14 2C13.0526 2 12.4211 2.41176 12 3.23529C11.5789 2.41176 10.9474 2 10 2C8.84211 2 8 2.95761 8 4.13889C8 7.14706 12 9 12 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
            </svg>
          </div>
          <!-- <div class="flourish right"></div> -->
        </div>

        <blockquote class="bible-verse">
          The Lord has done great things for us; we are glad.
        </blockquote>
        
        <!-- <div class="verse-divider">
          <span class="divider-dot"></span>
          <span class="divider-line"></span>
          <span class="divider-dot"></span>
        </div> -->
        
        <p class="bible-reference">Psalms 126:3</p>
        
        <div class="decorative-element bottom"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No reactive data needed for static quote
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap');

.bible-quote-section {
  position: relative;
  padding: 120px 20px;
  background: url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600') center/cover fixed;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(44, 36, 22, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%);
  z-index: 1;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.03;
  background-image: 
    repeating-linear-gradient(45deg, transparent, transparent 35px, #d4af37 35px, #d4af37 36px),
    repeating-linear-gradient(-45deg, transparent, transparent 35px, #d4af37 35px, #d4af37 36px);
  z-index: 2;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
}

.quote-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 70px 60px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.quote-content::before,
.quote-content::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-color: #d4af37;
}

.quote-content::before {
  top: -1px;
  left: -1px;
  border-width: 2px 0 0 2px;
}

.quote-content::after {
  top: -1px;
  right: -1px;
  border-width: 2px 2px 0 0;
}

.decorative-element {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.decorative-element.top {
  margin-bottom: 20px;
}

.decorative-element.bottom {
  margin-top: 50px;
  margin-bottom: 0;
}

.decorative-element.bottom::before,
.decorative-element.bottom::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-color: #d4af37;
}

.decorative-element.bottom::before {
  bottom: -1px;
  left: -1px;
  border-width: 0 0 2px 2px;
}

.decorative-element.bottom::after {
  bottom: -1px;
  right: -1px;
  border-width: 0 2px 2px 0;
}

.flourish {
  width: 80px;
  height: 1px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
}

.flourish.left {
  background: linear-gradient(to right, transparent, #d4af37);
}

.flourish.right {
  background: linear-gradient(to left, transparent, #d4af37);
}

.center-ornament {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
}

.bible-verse {
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: #ffffff;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 850px;
  font-weight: 500;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.verse-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 40px 0 30px;
}

.divider-dot {
  width: 4px;
  height: 4px;
  background: #d4af37;
  border-radius: 50%;
}

.divider-line {
  width: 60px;
  height: 1px;
  background: #d4af37;
}

.bible-reference {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: #d4af37;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  .bible-quote-section {
    padding: 80px 20px;
    min-height: 40vh;
  }

  .quote-content {
    padding: 50px 35px;
  }

  .decorative-element.top {
    margin-bottom: 20px;
  }

  .decorative-element.bottom {
    margin-top: 35px;
  }

  .flourish {
    width: 50px;
  }

  .verse-divider {
    margin: 30px 0 25px;
  }

  .bible-verse {
    font-size: clamp(1.2rem, 3.5vw, 2rem);
  }
}

@media (max-width: 480px) {
  .bible-quote-section {
    padding: 60px 15px;
  }

  .quote-content {
    padding: 40px 25px;
  }

  .bible-verse {
    line-height: 1.7;
  }

  .decorative-element {
    gap: 15px;
  }

  .flourish {
    width: 40px;
  }

  .center-ornament svg {
    width: 42px;
    height: 42px;
  }

  .verse-divider {
    gap: 12px;
  }

  .divider-line {
    width: 50px;
  }
}
</style>