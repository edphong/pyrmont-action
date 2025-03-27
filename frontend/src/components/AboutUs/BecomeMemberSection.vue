<template>
  <section class="become-member-section">
    <div class="member-info">
      <h2 class="member-title">BECOME A MEMBER</h2>
      <p class="meeting-times">PLACEHOLDER TEXT FOR MEETING TIMES</p>
    </div>
    <div class="join-button-container">
      <button class="join-button">JOIN US</button>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.become-member-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 7%;
  background-color: #F5FBFF;
  font-family: 'Inter', sans-serif;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.member-title {
  font-size: 64px;
  font-weight: 700;
  color: #3498DB;
  margin: 0;
}

.meeting-times {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.join-button-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.join-button {
  background-color: #3498DB;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(52, 152, 219, 0.3);
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.join-button:hover {
  background-color: #2D86C9;
  box-shadow: 0 6px 15px rgba(52, 152, 219, 0.4);
}

@media (max-width: 600px) {
  .become-member-section {
    flex-direction: column;
    gap: 1rem;
  }

  .join-button-container {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
