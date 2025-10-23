<template>
  <footer class="footer-section">
    <div class="container">
      <!-- Prayer Section -->
      <div class="prayer-content">
        <div class="prayer-header">
          <!-- <div class="icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffd700" fill="none">
              <path d="M10 22L9.87868 21.8787C7.54154 19.5415 6.37297 18.3729 5.68149 16.906C5 15.4532 5 13.7976 5 10.4865V8.56632C5 5.21703 5 3.54239 5.96005 2.52793C6.12319 2.35131 6.30158 2.19163 6.49382 2.05118C7.6347 1.20465 9.20818 1.43332 12.3551 1.89066C13.3725 2.03382 13.8813 2.1054 14.3588 2.30192C14.6291 2.41823 14.887 2.56154 15.1288 2.73004C15.5611 3.03662 15.9268 3.4422 16.6583 4.25337L18.5 6.30005M14 22L14.1213 21.8787C16.4585 19.5415 17.627 18.3729 18.3185 16.906C19 15.4532 19 13.7976 19 10.4865V8.56632C19 5.21703 19 3.54239 18.0399 2.52793C17.8768 2.35131 17.6984 2.19163 17.5062 2.05118C16.3653 1.20465 14.7918 1.43332 11.6449 1.89066C10.6275 2.03382 10.1187 2.1054 9.64118 2.30192C9.37088 2.41823 9.11296 2.56154 8.87116 2.73004C8.43892 3.03662 8.07318 3.4422 7.34171 4.25337L5.5 6.30005" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 15H9.25M15.5 15H14.75M14.75 15V10M14.75 15H9.25M9.25 15L9.25 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div> -->
          <h2 class="prayer-title">Join Us in Prayer</h2>
          <p class="prayer-subtitle">We humbly ask for your prayers and the intercession of Our Blessed Mother Mary</p>
        </div>

        <div class="prayer-text">
          <p class="hail-mary">
            Hail Mary, full of grace, the Lord is with thee.<br>
            Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.<br>
            Holy Mary, Mother of God, pray for us sinners,<br>
            now and at the hour of our death. Amen.
          </p>
        </div>

        <button @click="handleIntercession" class="intercession-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          I Have Interceded
        </button>

        <p class="intercession-count" v-if="showCount">
          <span class="count-number">{{ intercessionCount }}</span> prayer{{ intercessionCount !== 1 ? 's' : '' }} offered
        </p>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <div class="divider"></div>
        <p>&copy; {{ currentYear }} Toney & Rositta. All rights reserved.</p>
        <p class="love-note">Made with love for our special day</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'

const intercessionCount = ref(0)
const showCount = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const handleIntercession = () => {
  intercessionCount.value++
  showCount.value = true
  
  // Optional: Add a subtle animation or feedback
  const button = event.target.closest('.intercession-btn')
  button.classList.add('clicked')
  setTimeout(() => {
    button.classList.remove('clicked')
  }, 600)
}
</script>

<style scoped>
.footer-section {
  background: #ffffff;
  color: #000000;
  padding: 80px 20px 40px;
  position: relative;
  overflow: hidden;
}

.footer-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  /* background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), transparent); */
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.prayer-content {
  text-align: center;
  margin-bottom: 60px;
}

.prayer-header {
  margin-bottom: 40px;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 20px;
  color: #d4af37;
}

.prayer-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 15px;
  background: #d4af37;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.prayer-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.prayer-text {
  background: rgba(0, 0, 0, 0);
  border: 2px solid #d4af37;
  border-radius: 20px;
  padding: 40px 30px;
  margin: 40px auto;
  max-width: 700px;
  backdrop-filter: blur(10px);
}

.hail-mary {
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 2;
  color: rgba(0, 0, 0, 0.95);
  font-family: 'Playfair Display', serif;
  font-style: italic;
}

.intercession-btn {
  background: #d4af37;
  color: #ffffff;
  border: none;
  padding: 18px 50px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  border-radius: 50px;
  /* box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3); */
  margin-top: 10px;
}

.intercession-btn:hover {
  transform: translateY(-3px);
  /* box-shadow: 0 15px 40px rgba(255, 215, 0, 0.5); */
  /* background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); */
}

.intercession-btn.clicked {
  animation: heartbeat 0.6s ease;
}

.intercession-btn svg {
  width: 24px;
  height: 24px;
}

.intercession-count {
  margin-top: 20px;
  font-size: 1rem;
  color: rgb(0, 0, 0);
  animation: fadeIn 0.5s ease;
}

.count-number {
  font-weight: 700;
  font-size: 1.3rem;
  color: #d4af37;
  margin-right: 4px;
}

.copyright {
  text-align: center;
  /* padding-top: 40px; */
}

.divider {
  width: 300px;
  height: 0.5px;
  background: #d4af37;
  margin: 0 auto 20px;
}

.copyright p {
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.6);
  margin: 8px 0;
  font-family: 'Montserrat', sans-serif;
}

.love-note {
  font-size: 0.9rem;
  color: rgba(255, 215, 0, 0.7);
  font-style: italic;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .footer-section {
    padding: 60px 20px 30px;
  }

  .prayer-text {
    padding: 30px 20px;
    margin: 30px auto;
  }

  .hail-mary {
    font-size: 1rem;
    line-height: 1.8;
  }

  .intercession-btn {
    padding: 16px 40px;
    font-size: 1rem;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .icon-wrapper svg {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .prayer-text {
    border-radius: 15px;
  }

  .intercession-btn {
    padding: 14px 35px;
    font-size: 0.95rem;
  }
}
</style>