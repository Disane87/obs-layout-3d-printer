<!-- src/components/video-player/video-player.vue -->
<template>
  <div class="video-player">
    <video autoplay :src="videoSrc">Your browser does not support the video tag.</video>
  </div>
</template>

<script lang="ts" src="./video-player"></script>

<style scoped>
.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
video {
  max-width: 100%;
  height: auto;
}
</style>
