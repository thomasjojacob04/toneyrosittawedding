<template>
  <section class="couple-section">
    <!-- <div class="background-ornament left"></div> -->
    <!-- <div class="background-ornament right"></div> -->
    
    <div class="container">
      <div class="section-header">
        <!-- <div class="decorative-line"></div> -->
        <h2 class="section-title">Groom & Bride</h2>
        <p class="section-subtitle">Two souls, one heart</p>
        <!-- <div class="decorative-line"></div> -->
      </div>

      <div class="couple-cards">
        <!-- Groom Card -->
        <div class="couple-card groom-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-inner">
            <div class="image-wrapper">
              <div class="image-frame">
                <img 
                  src="../assets/images/Groom.jpg" 
                  alt="Toney Chittadiyil Joseph" 
                  class="couple-image"
                />
              </div>
              <div class="corner-accent top-left"></div>
              <div class="corner-accent top-right"></div>
              <div class="corner-accent bottom-left"></div>
              <div class="corner-accent bottom-right"></div>
            </div>
            
            <div class="card-content">
              <div class="role-badge groom-badge">The Groom</div>
              <h3 class="person-name">Toney Chittadiyil Joseph</h3>
              <p class="family-name">Chittadiyil House</p>
              
              <div class="ornamental-divider">
                <span class="divider-dot"></span>
                <span class="divider-line"></span>
                <span class="divider-dot"></span>
              </div>
              
              <div class="parents-info">
                <p class="parents-label">Son of</p>
                <p class="parent-name">Joseph C.A & Late Lissy Joseph</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bride Card -->
        <div class="couple-card bride-card" data-aos="fade-up">
          <div class="card-inner">
            <div class="image-wrapper">
              <div class="image-frame">
                <img 
                  src="../assets/images/Bride.jpg" 
                  alt="Rositta Varghese" 
                  class="couple-image"
                />
              </div>
              <div class="corner-accent top-left"></div>
              <div class="corner-accent top-right"></div>
              <div class="corner-accent bottom-left"></div>
              <div class="corner-accent bottom-right"></div>
            </div>
            
            <div class="card-content">
              <div class="role-badge bride-badge">The Bride</div>
              <h3 class="person-name">Rositta Varghese</h3>
              <p class="family-name">Kallooparampil House</p>
              
              <div class="ornamental-divider">
                <span class="divider-dot"></span>
                <span class="divider-line"></span>
                <span class="divider-dot"></span>
              </div>
              
              <div class="parents-info">
                <p class="parents-label">Daughter of</p>
                <p class="parent-name">V. Varghese & Solly Varghese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');

.couple-section {
  position: relative;
  padding: 40px 20px;
  background: linear-gradient(135deg, #faf8f5 0%, #ffffff 50%, #f8f5f0 100%);
  overflow: hidden;
}

.background-ornament {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(212, 175, 55, 0.1);
  border-radius: 50%;
  pointer-events: none;
}

.background-ornament.left {
  top: -100px;
  left: -100px;
}

.background-ornament.right {
  bottom: -100px;
  right: -100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.decorative-line {
  width: 80px;
  height: 1px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
  margin: 0 auto 20px;
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #000000;
  font-weight: 600;
  margin-bottom: 0px;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #d4af37;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  font-style: italic;
}

.couple-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -20px;
}

.couple-card {
  background: #ffffff;
  border-radius: 0;
  overflow: visible;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(212, 175, 55, 0.2);
  transition: all 0.5s ease;
  position: relative;
}

/* .couple-card::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: 10px;
  bottom: 10px;
  border: 1px solid #d4af37;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.couple-card:hover::before {
  opacity: 1;
}

.couple-card:hover {
  transform: translateY(-5px);
} */

.card-inner {
  position: relative;
}

.image-wrapper {
  position: relative;
  padding: 20px;
  background: #ffffff;
}

.image-frame {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
}

.couple-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(10%);
  transition: all 0.6s ease;
}

.couple-card:hover .couple-image {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.corner-accent {
  position: absolute;
  width: 30px;
  height: 30px;
  border-style: solid;
  border-color: #d4af37;
  pointer-events: none;
}

.corner-accent.top-left {
  top: 10px;
  left: 10px;
  border-width: 2px 0 0 2px;
}

.corner-accent.top-right {
  top: 10px;
  right: 10px;
  border-width: 2px 2px 0 0;
}

.corner-accent.bottom-left {
  bottom: 10px;
  left: 10px;
  border-width: 0 0 2px 2px;
}

.corner-accent.bottom-right {
  bottom: 10px;
  right: 10px;
  border-width: 0 2px 2px 0;
}

.card-content {
  padding: 50px 35px;
  text-align: center;
  background: #ffffff;
}

.role-badge {
  display: inline-block;
  padding: 6px 24px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  border: 1px solid;
  background: transparent;
}

.bride-badge {
  color: #d4af37;
  border-color: #d4af37;
}

.groom-badge {
  color: #d4af37;
  border-color: #d4af37;
}

.person-name {
  font-size: clamp(1.8rem, 3vw, 2rem);
  color: #000000;
  font-weight: 800;
  margin-bottom: 12px;
  line-height: 1.3;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
}

.family-name {
  font-size: 1rem;
  color: #000000;
  font-style: italic;
  margin-bottom: 20px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
}

.ornamental-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
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

.parents-info {
  margin-top: 25px;
}

.parents-label {
  font-size: 0.85rem;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 12px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

.parent-name {
  font-size: 1.15rem;
  color: #000000;
  font-weight: 500;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 968px) {
  .couple-cards {
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .couple-section {
    padding: 40px 15px;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .couple-cards {
    grid-template-columns: 1fr;
    gap: 60px;
    max-width: 450px;
  }

  .image-frame {
    height: 400px;
  }

  .card-content {
    padding: 40px 25px;
  }

  .background-ornament {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .couple-section {
    padding: 40px 15px;
  }

  .image-wrapper {
    padding: 15px;
  }

  .image-frame {
    height: 350px;
  }

  .card-content {
    padding: 35px 20px;
  }

  .person-name {
    font-size: 1.6rem;
  }
}
</style>