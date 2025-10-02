<template>
  <section class="couple-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Bride & Groom</h2>
        <div class="title-divider"></div>
      </div>

      <div class="couple-cards">
        <!-- Bride Card -->
        <div class="couple-card bride-card" data-aos="fade-up">
          <div class="card-inner">
            <div class="image-container">
              <img 
                src="../assets/images/Bride.jpg" 
                alt="Rositta Varghese" 
                class="couple-image"
              />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="role-badge bride-badge">The Bride</div>
              <h3 class="person-name">Rositta Varghese</h3>
              <p class="family-name">Kallooparampil House</p>
              <div class="divider"></div>
              <div class="parents-info">
                <p class="parents-label">Daughter of</p>
                <p class="parent-name">V. Varghese & Solly Varghese</p>
                <!-- <p class="parent-separator">&</p>
                <p class="parent-name">Solly Varghese</p> -->
              </div>
            </div>
          </div>
        </div>

        <!-- Groom Card -->
        <div class="couple-card groom-card" data-aos="fade-up" data-aos-delay="200">
          <div class="card-inner">
            <div class="image-container">
              <img 
                src="../assets/images/Groom.jpg" 
                alt="Toney Chittadiyil Joseph" 
                class="couple-image"
              />
              <div class="image-overlay"></div>
            </div>
            <div class="card-content">
              <div class="role-badge groom-badge">The Groom</div>
              <h3 class="person-name">Toney Chittadiyil Joseph</h3>
              <p class="family-name">Chittadiyil House</p>
              <div class="divider"></div>
              <div class="parents-info">
                <p class="parents-label">Son of</p>
                <p class="parent-name">Joseph C.A & Late Lissy Joseph</p>
                <!-- <p class="parent-separator">&</p>
                <p class="parent-name">Late Lissy Joseph</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.couple-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #000000;
  font-weight: 700;
  margin-bottom: 20px;
}

.title-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #c9a959, #ffd700);
  margin: 0 auto;
  border-radius: 2px;
}

.couple-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.couple-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.couple-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-inner {
  position: relative;
}

.image-container {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.couple-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.couple-card:hover .couple-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
}

.card-content {
  padding: 40px 30px;
  text-align: center;
}

.role-badge {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 2px;
  font-family: 'Montserrat', sans-serif;
}

.bride-badge {
  /* background: linear-gradient(135deg, #ffd1dc, #ffb6c1); */
  color: #8b0000;
}

.groom-badge {
  /* background: linear-gradient(135deg, #b8d4f1, #7fb3d5); */
  color: #00416a;
}

.person-name {
  font-size: clamp(1.8rem, 4vw, 2rem);
  color: #000000;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
}

.family-name {
  font-size: 1.1rem;
  color: #000000;
  font-style: italic;
  margin-bottom: 25px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.divider {
  width: 60px;
  height: 2px;
  background: #ffd700;
  margin: 25px auto;
}

.parents-info {
  margin-top: 20px;
}

.parents-label {
  font-size: 0.9rem;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
}

.parent-name {
  font-size: 1.3rem;
  color: #000000;
  font-weight: 500;
  margin: 5px 0;
  font-family: 'Montserrat', sans-serif;
}

.parent-separator {
  font-size: 1.2rem;
  color: #c9a959;
  margin: 8px 0;
  font-style: italic;
}

@media (max-width: 768px) {
  .couple-section {
    padding: 60px 15px;
  }

  .couple-cards {
    gap: 30px;
    grid-template-columns: 1fr;
  }

  .image-container {
    height: 350px;
  }

  .card-content {
    padding: 30px 20px;
  }
}
</style>