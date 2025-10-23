<template>
  <section class="gallery-section">
    <div class="container">
      <div class="gallery-content">
        <div class="section-header">
          <h2 class="section-title">Our Moments</h2>
          <p class="section-subtitle">Cherished memories we'd love to share</p>
          <!-- <div class="title-divider"></div> -->
        </div>

        <div class="gallery-carousel">
          <div 
            class="carousel-container"
            :class="{ 'is-dragging': isDragging }"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="endDrag"
            @mouseleave="endDrag"
            @touchstart="startDrag"
            @touchmove="onDrag"
            @touchend="endDrag"
          >
            <button 
              class="carousel-btn prev-btn" 
              @click.stop="prevSlide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" color="#b3b3b3" fill="none">
                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>

            <div 
              class="carousel-track"
              ref="carouselTrack"
              :style="trackStyle"
            >
              <div 
                v-for="(image, index) in displayImages" 
                :key="`img-${index}`"
                class="carousel-slide"
              >
                <div class="image-wrapper">
                  <img :src="image.url" :alt="image.alt" class="gallery-image" draggable="false" />
                </div>
              </div>
            </div>

            <button 
              class="carousel-btn next-btn" 
              @click.stop="nextSlide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" color="#b3b3b3" fill="none">
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
          </div>

          <div class="carousel-indicators">
            <button
              v-for="(image, index) in images"
              :key="index"
              class="indicator"
              :class="{ active: getActualIndex() === index }"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Import images from a folder using Vite's import.meta.glob
// Place your images in: src/assets/gallery/
const imageModules = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,webp}', { eager: true })

// Process the imported images
const images = Object.entries(imageModules)
  .map(([path, module], index) => {
    const fileName = path.split('/').pop()
    return {
      url: module.default,
      alt: `Gallery Image ${index + 1}`,
      fileName: fileName
    }
  })
  .sort((a, b) => a.fileName.localeCompare(b.fileName))

const currentIndex = ref(1)
const isDragging = ref(false)
const startPos = ref(0)
const startY = ref(0)
const currentTranslate = ref(0)
const prevTranslate = ref(0)
const isTransitioning = ref(true)
const carouselTrack = ref(null)
const autoPlayInterval = ref(null)
const dragDirection = ref(null) // 'horizontal' or 'vertical'

const displayImages = computed(() => {
  if (images.length === 0) return []
  const lastImage = images[images.length - 1]
  const firstImage = images[0]
  return [lastImage, ...images, firstImage]
})

const trackStyle = computed(() => {
  if (isDragging.value && dragDirection.value === 'horizontal') {
    return {
      transform: `translateX(${currentTranslate.value}px)`,
      transition: 'none'
    }
  }
  return {
    transform: `translateX(-${currentIndex.value * 100}%)`,
    transition: isTransitioning.value ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
  }
})

const getActualIndex = () => {
  if (currentIndex.value === 0) return images.length - 1
  if (currentIndex.value === displayImages.value.length - 1) return 0
  return currentIndex.value - 1
}

const nextSlide = () => {
  if (isDragging.value) return
  
  isTransitioning.value = true
  currentIndex.value++
  
  if (currentIndex.value === displayImages.value.length - 1) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = 1
    }, 500)
  }
}

const prevSlide = () => {
  if (isDragging.value) return
  
  isTransitioning.value = true
  currentIndex.value--
  
  if (currentIndex.value === 0) {
    setTimeout(() => {
      isTransitioning.value = false
      currentIndex.value = displayImages.value.length - 2
    }, 500)
  }
}

const getPositionX = (event) => {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

const getPositionY = (event) => {
  return event.type.includes('mouse') ? event.pageY : event.touches[0].clientY
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(() => {
    nextSlide()
  }, 1500)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

const startDrag = (event) => {
  startPos.value = getPositionX(event)
  startY.value = getPositionY(event)
  dragDirection.value = null
  stopAutoPlay()
  
  if (carouselTrack.value) {
    const slideWidth = carouselTrack.value.parentElement.offsetWidth
    prevTranslate.value = currentIndex.value * -slideWidth
    currentTranslate.value = prevTranslate.value
  }
}

const onDrag = (event) => {
  if (!startPos.value) return
  
  const currentX = getPositionX(event)
  const currentY = getPositionY(event)
  const diffX = Math.abs(currentX - startPos.value)
  const diffY = Math.abs(currentY - startY.value)
  
  // Determine drag direction on first significant movement
  if (dragDirection.value === null && (diffX > 5 || diffY > 5)) {
    if (diffX > diffY) {
      dragDirection.value = 'horizontal'
      isDragging.value = true
      isTransitioning.value = false
    } else {
      dragDirection.value = 'vertical'
      // Allow vertical scrolling, don't interfere
      return
    }
  }
  
  // Only handle horizontal dragging
  if (isDragging.value && dragDirection.value === 'horizontal') {
    event.preventDefault()
    const diff = currentX - startPos.value
    currentTranslate.value = prevTranslate.value + diff
  }
}

const endDrag = (event) => {
  if (isDragging.value && dragDirection.value === 'horizontal') {
    isDragging.value = false
    isTransitioning.value = true
    
    const movedBy = currentTranslate.value - prevTranslate.value
    const slideWidth = carouselTrack.value.parentElement.offsetWidth
    
    // Swipe threshold: 25% of slide width
    if (movedBy < -slideWidth / 4) {
      nextSlide()
    } else if (movedBy > slideWidth / 4) {
      prevSlide()
    }
    
    startAutoPlay()
  } else {
    // Reset if it was a vertical scroll
    startAutoPlay()
  }
  
  // Reset drag state
  startPos.value = 0
  startY.value = 0
  dragDirection.value = null
}

const goToSlide = (index) => {
  isTransitioning.value = true
  currentIndex.value = index + 1
  stopAutoPlay()
  startAutoPlay()
}

onMounted(() => {
  isTransitioning.value = false
  setTimeout(() => {
    isTransitioning.value = true
    startAutoPlay()
  }, 50)
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.gallery-section {
  padding: 100px 20px;
  background: linear-gradient(135deg, #faf8f5 0%, #ffffff 50%, #f8f5f0 100%);
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.gallery-content {
  display: flex;
  align-items: center;
  gap: 80px;
}

.section-header {
  flex: 1;
  text-align: left;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #000000;
  font-weight: 600;
  margin-bottom: 15px;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1px;
}

.section-subtitle {
  font-size: 1.5rem;
  color: #d4af37;
  font-style: italic;
  margin-bottom: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: 0px;
}

.title-divider {
  width: 100px;
  height: 4px;
  background: #d4af37;
  margin: 0;
  border-radius: 2px;
}

.gallery-carousel {
  flex: 1;
  max-width: 500px;
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 0;
  box-shadow: 
    0 10px 15px rgba(0, 0, 0, 0.459);
  cursor: grab;
  user-select: none;
  touch-action: pan-y; /* Allow vertical scrolling */
}

.carousel-container.is-dragging {
  cursor: grabbing;
  touch-action: none; /* Prevent scrolling during horizontal drag */
}

.carousel-track {
  display: flex;
  will-change: transform;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 150%; /* 2:3 aspect ratio (portrait) */
  overflow: hidden;
  background: #f0f0f0;
}

.gallery-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  pointer-events: none;
}

.carousel-slide:hover .gallery-image {
  transform: scale(1.02);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.prev-btn {
  left: 15px;
}

.next-btn {
  right: 15px;
}

.carousel-btn svg {
  width: 32px;
  height: 32px;
  color: #bbbbbb;
  stroke-width: 2.5;
  transition: color 0.3s ease;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  padding: 10px;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.3);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.indicator:hover {
  background: #d4af37;
  transform: scale(1.3);
}

.indicator.active {
  width: 24px;
  border-radius: 4px;
  background: #d4af37;
}

@media (max-width: 768px) {
  .gallery-section {
    padding: 60px 15px;
  }

  .gallery-content {
    flex-direction: column;
    gap: 40px;
  }

  .section-header {
    text-align: center;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0px;
  }

  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 0px;
  }

  .title-divider {
    margin: 0 auto;
  }

  .gallery-carousel {
    width: 100%;
    max-width: 350px;
  }

  .carousel-btn {
    width: 80px;
    height: 80px;
  }

  .carousel-btn svg {
    width: 32px;
    height: 32px;
  }

  .prev-btn {
    left: 20px;
  }

  .next-btn {
    right: 10px;
  }

  .carousel-indicators {
    gap: 6px;
    margin-top: 15px;
  }

  .indicator {
    width: 6px;
    height: 6px;
  }

  .indicator.active {
    width: 18px;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    border-radius: 0;
  }

  .carousel-btn {
    width: 50px;
    height: 50px;
  }

  .carousel-btn svg {
    width: 32px;
    height: 32px;
  }

  .prev-btn {
    left: 8px;
  }

  .next-btn {
    right: 8px;
  }
}
</style>