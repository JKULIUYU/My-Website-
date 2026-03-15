<template>
  <!-- 
    ====== [ 毛玻璃卡片底座强化版 ] ======
    所有卡片都具有基础悬浮反馈（阴影 + 微微上浮），
    hoverable=true 的额外加持内容物放大动画。
    使用 GPU 加速（will-change + translate3d）确保 60fps 流畅渲染。
  -->
  <div 
    class="relative overflow-hidden rounded-4xl backdrop-blur-3xl group cursor-pointer"
    :class="[paddingClass]"
    :style="{
      backgroundColor: 'var(--card-bg)',
      border: '1px solid var(--card-border)',
      boxShadow: 'var(--card-shadow)',
      /* GPU 加速: 提前告知浏览器即将变化的属性，分配独立合成层 */
      willChange: 'transform, box-shadow',
      /* 使用 translate3d 强制开启硬件加速确保 60fps */
      transform: isHover ? 'translate3d(0, -4px, 0) scale(1.015)' : 'translate3d(0, 0, 0) scale(1)',
      transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    }"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- macOS 风格的内表面光反射高光层 -->
    <div 
      class="absolute inset-0 pointer-events-none rounded-4xl"
      :style="{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 60%)',
        opacity: isHover ? 1 : 0,
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    ></div>
    
    <!-- 内容物层：hoverable 时才加内容放大效果 -->
    <div 
      class="relative z-10 w-full h-full flex flex-col"
      :style="{
        willChange: hoverable ? 'transform' : 'auto',
        transform: (isHover && hoverable) ? 'translate3d(0, -2px, 0) scale(1.02)' : 'translate3d(0, 0, 0) scale(1)',
        transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    >
      <slot></slot>
    </div>

    <!-- Hover 时底部柔和的深邃阴影 -->
    <div 
      class="absolute inset-0 pointer-events-none rounded-4xl"
      :style="{
        boxShadow: isHover ? '0 20px 60px -15px rgba(0,0,0,0.15)' : '0 0px 0px 0px rgba(0,0,0,0)',
        transition: 'box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: true
  },
  paddingClass: {
    type: String,
    default: 'p-6 xl:p-8'
  }
})

const isHover = ref(false)
</script>
