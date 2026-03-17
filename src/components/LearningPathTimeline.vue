<template>
  <BentoCard>
    <div class="flex items-start justify-between gap-4 mb-6">
      <div>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">{{ eyebrow }}</div>
        <h3 class="text-xl font-black text-[var(--text-main)] mb-2">{{ title }}</h3>
        <p v-if="subtitle" class="text-sm text-[var(--text-muted)] leading-relaxed">{{ subtitle }}</p>
      </div>
      <div v-if="badge" class="text-[10px] px-2 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-semibold">
        {{ badge }}
      </div>
    </div>

    <div class="timeline-body">
      <div
        v-for="(item, index) in items"
        :key="`${item.period}-${index}`"
        :ref="(el) => setItemRef(el as HTMLElement | null, index)"
        class="timeline-item"
        :class="{ 'is-visible': visibleIndices.has(index) }"
      >
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-card">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-semibold text-[var(--accent-color)]">{{ item.period }}</span>
            <span v-if="item.track" class="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-[var(--text-muted)] font-medium">
              {{ item.track }}
            </span>
          </div>
          <div class="text-sm font-semibold text-[var(--text-main)] mb-2">{{ item.title }}</div>
          <ul class="text-xs text-[var(--text-muted)] leading-relaxed list-disc pl-4">
            <li v-for="(point, pIndex) in item.points" :key="`${index}-${pIndex}`">{{ point }}</li>
          </ul>
          <div v-if="item.tags?.length" class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="(tag, tIndex) in item.tags"
              :key="`${index}-${tIndex}`"
              class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </BentoCard>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import BentoCard from './BentoCard.vue'

type TimelineItem = {
  period: string
  title: string
  points: string[]
  tags?: string[]
  track?: string
}

withDefaults(defineProps<{
  title: string
  eyebrow?: string
  subtitle?: string
  badge?: string
  items: TimelineItem[]
}>(), {
  eyebrow: 'LEARNING PATH'
})

const itemRefs = ref<HTMLElement[]>([])
const visibleIndices = ref(new Set<number>())
let observer: IntersectionObserver | null = null

const setItemRef = (el: HTMLElement | null, index: number) => {
  if (!el) return
  itemRefs.value[index] = el
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = itemRefs.value.indexOf(entry.target as HTMLElement)
        if (index >= 0 && entry.isIntersecting) {
          visibleIndices.value.add(index)
        }
      })
    },
    { threshold: 0.2 }
  )

  itemRefs.value.forEach((el) => observer?.observe(el))
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})
</script>

<style scoped>
.timeline-body {
  position: relative;
  padding-left: 28px;
}

.timeline-body::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 4px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.02));
  opacity: 0.9;
}

.timeline-body::after {
  content: '';
  position: absolute;
  left: 9px;
  top: 0;
  width: 4px;
  height: 40%;
  background: linear-gradient(180deg, rgba(110, 214, 199, 0.5), rgba(110, 214, 199, 0));
  filter: blur(6px);
  animation: timeline-glow 6s ease-in-out infinite;
}

.timeline-item {
  position: relative;
  margin-bottom: 18px;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-dot {
  position: absolute;
  left: -2px;
  top: 18px;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: rgba(110, 214, 199, 0.9);
  box-shadow: 0 0 12px rgba(110, 214, 199, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.timeline-card {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(18px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  animation: float-card 6s ease-in-out infinite;
}

.timeline-item:nth-child(2n) .timeline-card {
  animation-delay: 0.8s;
}

.timeline-item:nth-child(3n) .timeline-card {
  animation-delay: 1.4s;
}

@keyframes float-card {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes timeline-glow {
  0% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(120%);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .timeline-card,
  .timeline-body::after {
    animation: none;
  }
  .timeline-item {
    transition: none;
  }
}
</style>
