<template>
  <section class="countdown-section">
    <div class="background-overlay"></div>
    
    <div class="container">
      <div class="countdown-content">
        <h2 class="countdown-title">Every Moment Brings Us Closer</h2>
        <!-- <p class="countdown-subtitle">Every moment brings us closer</p> -->
        
        <div class="countdown-timer">
          <div class="time-unit">
            <div class="time-value">{{ String(timeLeft.days).padStart(2, '0') }}</div>
            <div class="time-label">Days</div>
          </div>
          
          <div class="separator">:</div>
          
          <div class="time-unit">
            <div class="time-value">{{ String(timeLeft.hours).padStart(2, '0') }}</div>
            <div class="time-label">Hours</div>
          </div>
          
          <div class="separator">:</div>
          
          <div class="time-unit">
            <div class="time-value">{{ String(timeLeft.minutes).padStart(2, '0') }}</div>
            <div class="time-label">Minutes</div>
          </div>
          
          <div class="separator">:</div>
          
          <div class="time-unit">
            <div class="time-value">{{ String(timeLeft.seconds).padStart(2, '0') }}</div>
            <div class="time-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let interval = null

const calculateTimeLeft = () => {
  const eventDate = new Date('2025-11-15T15:00:00')
  const now = new Date()
  const difference = eventDate - now

  if (difference > 0) {
    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  } else {
    timeLeft.value = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
}

onMounted(() => {
  calculateTimeLeft()
  interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.countdown-section {
  position: relative;
  padding: 100px 20px;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
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
  /* opacity: 0.1; */
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

.countdown-content {
  text-align: center;
}

.countdown-title {
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: white;
  font-weight: 400;
  margin-bottom: 40px;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.countdown-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.2rem);
  color: rgba(255, 255, 255, 0.95);
  font-style: italic;
  margin-bottom: 60px;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(20px, 5vw, 40px);
  flex-wrap: nowrap;
  /* border-radius: 30px;
  padding: clamp(40px, 8vw, 80px);
  border: 1px solid #ffd700; */
}

.time-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.time-value {
  font-size: clamp(2rem, 10vw, 4rem);
  font-weight: 200;
  color: #ffd700;
  line-height: 1;
  /* font-family: 'Playfair Display', serif; */
  /* text-shadow: 
    0 0 20px rgba(255, 215, 0, 0.6),
    2px 4px 8px rgba(0, 0, 0, 0.4); */
  transition: transform 0.3s ease;
  
}

.time-unit:hover .time-value {
  transform: scale(1.1);
}

.time-label {
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: rgba(255, 255, 255, 0.9);
  /* text-transform: uppercase; */
  letter-spacing: 3px;
  margin-right: 8px;
  margin-left: 8px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.separator {
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: rgba(255, 215, 0, 0.8);
  font-weight: 300;
  /* line-height: 1; */
  margin-top: -40px;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  .countdown-section {
    padding: 40px 15px;
    min-height: 20vh;
  }

  .countdown-subtitle {
    margin-bottom: 40px;
  }

  .countdown-timer {
    gap: clamp(10px, 3vw, 20px);
  }

  .time-unit {
    gap: 8px;
  }

  .separator {
    margin-top: -30px;
    margin-left: 6px;
    margin-right: 6px;
  }

  .countdown-title {
  font-size: clamp(1.2rem, 2vw, 3rem);
  /* color: white; */
  font-weight: 200;
  margin-bottom: 20px;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}
}

@media (max-width: 480px) {
  .countdown-timer {
    gap: 8px;
  }

  .time-label {
    letter-spacing: 1px;
  }
}
</style>