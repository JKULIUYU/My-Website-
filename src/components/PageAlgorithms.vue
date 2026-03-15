<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-6">ALGORITHMS</div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">底层算法仓库</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        收录领域内高质量的经典算法、顶会论文与知名技术博客。分为“深度学习与机器学习”及“系统控制与状态估计”两大核心阵列，作为理论学习与工程实践的知识库。
      </p>
    </BentoCard>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- AI / ML Folder -->
      <a href="#" @click.prevent="$emit('open', 'algo_ai')" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-2xl bg-[var(--text-main)]/5 text-[var(--accent-color)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
            </div>
            <svg class="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-color)] transition-colors opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
          
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">FOLDER / COLLECTION</div>
          <div class="font-bold text-lg text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">AI 模型与机器学习</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
             包含 CNN, LSTM, GRU, Transformer (Attention), PINN, PSO, XGBoost 与随机森林等精选技术博客与原理解析。
          </p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">6 Articles</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Deep Learning</span>
          </div>
        </BentoCard>
      </a>

      <!-- Control / Estimation Folder -->
      <a href="#" @click.prevent="$emit('open', 'algo_control')" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300 group cursor-pointer">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-2xl bg-[var(--text-main)]/5 text-[var(--accent-color)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent-color)] group-hover:text-white transition-colors duration-300">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
            <svg class="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-color)] transition-colors opacity-50 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
          
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">FOLDER / COLLECTION</div>
          <div class="font-bold text-lg text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">系统控制与信号估计</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
             专注于状态估计与系统平稳调节，包含 Kalman Filter, PID, MPC, LQR, EKF 与 MRAC 等核心控制器原理解析。
          </p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">6 Articles</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Control Theory</span>
          </div>
        </BentoCard>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'

defineEmits(['open'])
</script>
