<template>
  <section class="schedule-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Event Schedule</h2>
        <p class="section-subtitle">Timeline for the special day</p>
        <div class="title-divider"></div>
      </div>

      <div class="timeline">
        <div 
          v-for="(event, index) in events" 
          :key="index"
          class="timeline-item"
          :class="{ 'active': activeIndex === index }"
          @mouseenter="activeIndex = index"
          @mouseleave="activeIndex = null"
        >
          <div class="timeline-marker">
            <div class="marker-outer">
              <div class="marker-inner">
                <component :is="event.icon" class="event-icon" />
              </div>
            </div>
          </div>
          
          <div class="timeline-content">
            <div class="time-badge">{{ event.time }}</div>
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-description">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const ChurchIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  `
}

const DinnerIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  `
}

const events = [
  {
    time: '12:00 PM',
    title: 'Engagement Mass',
    description: 'Holy Mass and engagement ceremony at St. George Forane Church',
    icon: ChurchIcon
  },
  {
    time: '1:00 PM',
    title: 'Reception',
    description: 'Join us for refreshments and celebration at the Church Auditorium',
    icon: DinnerIcon
  }
]
</script>

<style scoped>
.schedule-section {
  padding: 100px 20px;
  background: white;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  font-style: italic;
  margin-bottom: 25px;
}

.title-divider {
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #c9a959, #ffd700);
  margin: 0 auto;
  border-radius: 2px;
}

.timeline {
  position: relative;
  padding: 20px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(
    to bottom,
    #c9a959,
    #ffd700,
    #c9a959
  );
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:nth-child(odd) .timeline-content {
  grid-column: 1;
  grid-row: 1;
  text-align: right;
}

.timeline-item:nth-child(odd) .timeline-marker {
  grid-column: 2;
  grid-row: 1;
}

.timeline-item:nth-child(even) .timeline-content {
  grid-column: 3;
  grid-row: 1;
  text-align: left;
}

.timeline-item:nth-child(even) .timeline-marker {
  grid-column: 2;
  grid-row: 1;
}

.timeline-marker {
  position: relative;
  z-index: 10;
}

.marker-outer {
  width: 90px;
  height: 90px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
}

.timeline-item:hover .marker-outer,
.timeline-item.active .marker-outer {
  transform: scale(1.1);
  box-shadow: 0 15px 50px rgba(201, 169, 89, 0.3);
}

.marker-inner {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #c9a959, #ffd700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.event-icon {
  width: 35px;
  height: 35px;
  color: white;
  stroke-width: 2;
}

.timeline-content {
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  border: 2px solid transparent;
}

.timeline-item:hover .timeline-content,
.timeline-item.active .timeline-content {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: #ffd700;
}

.time-badge {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #c9a959, #ffd700);
  color: white;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.event-title {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
}

.event-description {
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .schedule-section {
    padding: 60px 15px;
  }

  .section-header {
    margin-bottom: 50px;
  }

  .timeline::before {
    left: 45px;
  }

  .timeline-item {
    grid-template-columns: auto 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    grid-column: 2;
    grid-row: 1;
    text-align: left;
  }

  .timeline-item:nth-child(odd) .timeline-marker,
  .timeline-item:nth-child(even) .timeline-marker {
    grid-column: 1;
    grid-row: 1;
  }

  .marker-outer {
    width: 70px;
    height: 70px;
  }

  .marker-inner {
    width: 55px;
    height: 55px;
  }

  .event-icon {
    width: 28px;
    height: 28px;
  }

  .timeline-content {
    padding: 20px;
  }

  .event-title {
    font-size: 1.3rem;
  }
}
</style>