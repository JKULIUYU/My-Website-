<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <BentoCard>
      <div class="flex items-center gap-3 mb-6">
        <button @click="$emit('back')" class="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div class="text-xs text-[var(--accent-color)] tracking-widest font-bold">ALGORITHMS / CONTROL & ESTIMATION</div>
      </div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">系统控制与信号估计</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        专注于状态估计、系统预估以及稳态平稳调节的底层控制算法，包含广泛运用于机器人技术与工业控制的核心控制器解析。
      </p>
    </BentoCard>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- Kalman Filter -->
      <a href="https://blog.csdn.net/O_MMMM_O/article/details/106268393" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">STATE ESTIMATION</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">卡尔曼滤波 (Kalman Filter) 详解与推导</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">详细介绍如何通过先验估计（预测状态）与后验观测（测量更新）相结合，利用多维高斯分布有效降低噪声干扰，获得系统状态的最优估计值。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Kalman Filter</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">状态估计</span>
          </div>
        </BentoCard>
      </a>

      <!-- PID Control -->
      <a href="https://zhuanlan.zhihu.com/p/39573490" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">CLASSIC CONTROL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">PID 控制算法通俗易懂全解析</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">工业界最广泛的闭环控制框架。图文并茂地解析比例 (Proportional)、积分 (Integral)、微分 (Derivative) 三项对稳态误差和平稳调节的各自贡献。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PID调参</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">闭环调节</span>
          </div>
        </BentoCard>
      </a>

      <!-- PID Article (CSDN) -->
      <a href="https://blog.csdn.net/qq_58114029/article/details/136780577" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">CLASSIC CONTROL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">PID 算法学习笔记</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">结合速度环与位置环的讲解，适合入门与快速上手。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PID</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">CSDN</span>
          </div>
        </BentoCard>
      </a>

      <!-- Model Predictive Control -->
      <a href="https://zhuanlan.zhihu.com/p/99307739" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">OPTIMAL CONTROL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">模型预测控制 (MPC) 原理与应用</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">一种前瞻性的控制策略。在每一步利用系统方程预测未来动态，并在满足状态和输入约束的前提下，在线滚动求解最优控制序列。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">MPC</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">滚动优化</span>
          </div>
        </BentoCard>
      </a>

      <!-- LQR -->
      <a href="https://zhuanlan.zhihu.com/p/138920945" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">OPTIMAL CONTROL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">LQR 线性二次型调节器快速入门</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">现代控制理论的基石之一。深入探讨状态成本 (Q矩阵) 和控制成本 (R矩阵) 的权衡艺术，从而通过求解代数黎卡提方程获得最优反馈增益。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">LQR</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">状态空间</span>
          </div>
        </BentoCard>
      </a>

      <!-- Extented Kalman Filter -->
      <a href="https://blog.csdn.net/weixin_44633882/article/details/115454645" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">NONLINEAR SYSTEM</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">扩展卡尔曼滤波 (EKF) 与泰勒展开</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">当真实世界系统处于非线性时，如何使用雅可比矩阵对高度非线性的动态系统和观测模型进行一阶线性化，进而执行卡尔曼滤波器更新步。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">EKF</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">非线性估计</span>
          </div>
        </BentoCard>
      </a>

      <!-- Adaptive Control -->
      <a href="https://zhuanlan.zhihu.com/p/354512967" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">ADAPTIVE CONTROL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">模型参考自适应控制 (MRAC) 原理</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">系统参数不确定或随环境剧烈变化时，通过在线调整控制器参数，强迫实际系统的输出收敛并跟踪一个理想的参考模型输出。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">自适应控制</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">MRAC</span>
          </div>
        </BentoCard>
      </a>

      <!-- Adaptive Kalman Filter -->
      <a href="https://blog.csdn.net/weixin_41197108/article/details/116224563" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">ADVANCED ESTIMATION</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">自适应卡尔曼滤波入门</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">结合噪声统计的在线估计，改进传统 KF 在模型失配与噪声变化场景下的鲁棒性。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Adaptive KF</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Noise</span>
          </div>
        </BentoCard>
      </a>

      <!-- Schmitt Trigger -->
      <a href="https://blog.csdn.net/Quarx/article/details/103811089" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">ENGINEERING TRICKS</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">施密特触发器的抗抖与迟滞原理</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">讲清迟滞比较器的结构与阈值设计，常用于传感器噪声抑制与边沿整形。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Schmitt</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Filter</span>
          </div>
        </BentoCard>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'

defineEmits(['back'])
</script>
