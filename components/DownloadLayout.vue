<template>
  <div class="Download">
    <div class="container">
      <Content />
    </div>
  </div>
</template>

<style scoped>
.Download {
  position: relative;
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 64px) 24px 64px;
}

@media (min-width: 640px) {
  .Download {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px
      64px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}
</style>
