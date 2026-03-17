<template>
  <!-- 
    ====== [ 毛玻璃卡片底座强化版 ] ======
    所有卡片都具有基础悬浮反馈（阴影 + 微微上浮），
    hoverable=true 的额外加持内容物放大动画。
    使用 GPU 加速（will-change + translate3d）确保 60fps 流畅渲染。
  -->
  <div 
    class="relative overflow-hidden rounded-4xl backdrop-blur-3xl group cursor-pointer bento-card"
    :class="[
      paddingClass,
      (isHover || props.forceHover) ? 'bento-bounce' : '',
      props.pulse ? 'bento-pulse' : ''
    ]"
    :style="{
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      boxShadow: 'var(--card-shadow)',
      /* 只在活跃阶段启用 will-change，减少合成层常驻开销 */
      willChange: isActiveAnim ? 'transform' : 'auto',
      /* 使用 translate3d 强制开启硬件加速确保 60fps */
      transform: (isHover || props.forceHover) ? 'translate3d(0, -4px, 0) scale(1.015)' : 'translate3d(0, 0, 0) scale(1)',
      transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
    }"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <!-- macOS 风格的内表面光反射高光层 -->
    <div 
      class="absolute inset-0 pointer-events-none rounded-4xl"
      :style="{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
        opacity: (isHover || props.forceHover) ? 1 : 0,
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    ></div>
    
    <!-- 内容物层：hoverable 时才加内容放大效果 -->
    <div 
      class="relative z-10 w-full h-full flex flex-col"
      :style="{
        willChange: isActiveAnim && hoverable ? 'transform' : 'auto',
        transform: ((isHover || props.forceHover) && hoverable) ? 'translate3d(0, -2px, 0) scale(1.02)' : 'translate3d(0, 0, 0) scale(1)',
        transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    >
      <slot></slot>
    </div>

    <!-- Hover 时底部柔和的深邃阴影 -->
    <div 
      class="absolute inset-0 pointer-events-none rounded-4xl"
      :style="{
        boxShadow: (isHover || props.forceHover) ? '0 20px 60px -15px rgba(0,0,0,0.15)' : '0 0px 0px 0px rgba(0,0,0,0)',
        transition: 'box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: true
  },
  paddingClass: {
    type: String,
    default: 'p-6 xl:p-8'
  },
  forceHover: {
    type: Boolean,
    default: false
  },
  pulse: {
    type: Boolean,
    default: false
  }
})

const isHover = ref(false)
const isActiveAnim = computed(() => isHover.value || props.forceHover || props.pulse)
let hoverRaf = 0

const setHover = (value: boolean) => {
  if (hoverRaf) cancelAnimationFrame(hoverRaf)
  hoverRaf = requestAnimationFrame(() => {
    isHover.value = value
    hoverRaf = 0
  })
}

onUnmounted(() => {
  if (hoverRaf) cancelAnimationFrame(hoverRaf)
})
</script>

<style scoped>
@keyframes bento-bounce {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  55% {
    transform: translate3d(0, -4px, 0) scale(1.01);
  }
  100% {
    transform: translate3d(0, -2px, 0) scale(1.008);
  }
}

.bento-bounce {
  animation: bento-bounce 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes bento-pulse {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  42% {
    transform: translate3d(0, -6px, 0) scale(1.016);
  }
  74% {
    transform: translate3d(0, -3px, 0) scale(1.0115);
  }
  100% {
    transform: translate3d(0, -4px, 0) scale(1.015);
  }
}

.bento-pulse {
  animation: bento-pulse 0.48s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card {
  contain: paint;
}
</style>
