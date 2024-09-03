<template>
  <div class="profile-page">
    <div class="header-image">
      <!-- 背景图像 -->
      <img src="@/assets/images/background.png" alt="Background Image" />
    </div>
    <div class="profile-info">
      <div class="profile-image">
        <!-- 个人图像 -->
        <img src="@/assets/images/avatar.jpg" alt="Profile Image" />
      </div>
      <h1>{{ name }}</h1>
      <p>{{ $t('main.description') }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { useI18n } from 'vue-i18n'
const name: string = 'Tusk'
// const { t } = useI18n()
</script>

<style>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.header-image img {
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 10px;
}

.profile-info {
  background-color: #ffffff;
  margin-top: -50px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
}

.profile-image img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid white;
  margin-top: -70px;
  background-color: white;
}

h1 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  margin: 10px 0;
}

p {
  font-family: 'Courier New', Courier, monospace;
  color: #666;
}
</style>
