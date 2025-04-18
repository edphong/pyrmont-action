<script setup>
// No additional script needed unless you want dynamic links, etc.
</script>

<template>
  <section class="follow-section">
    <!-- Social Icons only -->
    <div class="social-icons">
      <!-- Facebook -->
      <a href="https://www.facebook.com" target="_blank" rel="noopener">
        <img src="../../../assets/svg_icons/facebook_icon.svg" alt="Facebook" />
      </a>

      <!-- Instagram -->
      <a href="https://www.instagram.com" target="_blank" rel="noopener">
        <img src="../../../assets/svg_icons/instagram_icon.svg" alt="Instagram" />
      </a>

      <!-- WhatsApp -->
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener">
        <img src="../../../assets/svg_icons/whatsApp_icon.svg" alt="WhatsApp" />
      </a>

      <!-- YouTube -->
      <a href="https://www.youtube.com" target="_blank" rel="noopener">
        <img src="../../../assets/svg_icons/youtube_icon.svg" alt="YouTube" />
      </a>

      <!-- X (formerly Twitter) -->
      <a href="https://twitter.com" target="_blank" rel="noopener">
        <img src="../../../assets/svg_icons/x_icon.svg" alt="X (Twitter)" />
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Import League Spartan from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');

.follow-section {
  font-family: 'League Spartan', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;  /* Center the icons horizontally */
  width: 100%;
  padding: 1rem 3rem;

  background: linear-gradient(135deg, #0066cc 0%, #33ccff 100%);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Removed the .follow-text class since it's not needed anymore */

.social-icons {
  display: flex;
  gap: 1.5rem;
}

/* Center the icons within each link */
.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Make icons white by inverting black icons */
.social-icons img {
  width: 36px;
  height: 36px;
  filter: brightness(0) invert(1);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

/* Subtle hover effect */
.social-icons a:hover img {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
