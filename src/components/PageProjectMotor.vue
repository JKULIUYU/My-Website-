<template>
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">PROJECT CASE</div>
          <h2 class="text-2xl font-black text-[var(--text-main)]">教育机器人电机控制（EV3 风格驱动）</h2>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed mt-3">
            面向儿童与青少年的模块化编程电机驱动，目标是“像乐高 EV3 一样可视化控制”。
            我负责电机闭环控制模块（速度/位置 PID）、多圈位置精度保障与稳定性策略。
          </p>
        </div>
        <div class="hidden md:flex items-center gap-2">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PID</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ENCODER</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
        </div>
      </div>
    </BentoCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <BentoCard class="lg:col-span-2">
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">BACKGROUND</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          项目定位是低门槛、可扩展的教育电机驱动模块，配合上位机图形化编程与 I2C 指令协议。
          为了控制成本选用低价磁编码器电机，带来了精度与一致性波动的问题。
          因此控制目标不仅是“能转”，而是“多圈仍可控且稳定”。
        </p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">硬件约束</div>
            低成本磁编码器、分辨率不稳定、噪声与漂移。
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">应用目标</div>
            面向孩子的模块化编程，指令简单、响应稳定。
          </div>
        </div>
      </BentoCard>

      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">MY ROLE</div>
        <ul class="text-sm text-[var(--text-muted)] leading-relaxed list-disc pl-4">
          <li>速度/位置 PID 设计与参数整定</li>
          <li>多圈位置精度保障策略</li>
          <li>积分/输出限幅与异常脉冲抑制</li>
        </ul>
      </BentoCard>
    </div>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">CONTROL STRATEGY</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="text-sm text-[var(--text-muted)] leading-relaxed">
          <div class="font-semibold text-[var(--text-main)] mb-2">核心思路（抽象策略）</div>
          <ul class="list-disc pl-4">
            <li>多圈脉冲累计，避免单圈绝对角误差累积</li>
            <li>速度/圈数动态补偿，修正低成本编码器偏差</li>
            <li>必要时基准点校准（软/硬限位思路）</li>
            <li>速度环 + 位置环的双环控制</li>
            <li>轻量滤波与异常脉冲剔除</li>
            <li>积分/输出限幅，提升可控性</li>
          </ul>
        </div>

        <div class="flex items-center justify-center">
          <svg viewBox="0 0 520 260" class="w-full max-w-md">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stop-color="#6ed6c7" stop-opacity="0.35" />
                <stop offset="100%" stop-color="#4b9b91" stop-opacity="0.15" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="500" height="240" rx="20" fill="url(#g)" stroke="rgba(255,255,255,0.15)" />

            <rect x="30" y="40" width="140" height="56" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="100" y="72" fill="#e4eceb" font-size="12" text-anchor="middle">目标指令</text>

            <rect x="210" y="40" width="140" height="56" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="280" y="72" fill="#e4eceb" font-size="12" text-anchor="middle">补偿/校准</text>

            <rect x="390" y="40" width="100" height="56" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="440" y="72" fill="#e4eceb" font-size="12" text-anchor="middle">PID</text>

            <rect x="120" y="150" width="140" height="56" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="190" y="182" fill="#e4eceb" font-size="12" text-anchor="middle">驱动/电机</text>

            <rect x="320" y="150" width="170" height="56" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="405" y="182" fill="#e4eceb" font-size="12" text-anchor="middle">编码器反馈</text>

            <path d="M170 68 H210" stroke="#6ed6c7" stroke-width="2" />
            <path d="M350 68 H390" stroke="#6ed6c7" stroke-width="2" />
            <path d="M440 96 V150" stroke="#6ed6c7" stroke-width="2" />
            <path d="M190 150 V96" stroke="#6ed6c7" stroke-width="2" />
            <path d="M260 178 H320" stroke="#6ed6c7" stroke-width="2" />
            <path d="M405 206 V230 H80 V68 H30" stroke="#6ed6c7" stroke-width="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">APPLICATION</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        目标是让学生在图形化编程中“拖一拖就能转”，同时保持多圈定位稳定。
        这类电机通常用于小型机械臂、结构件旋转与模块化教学装置。
      </p>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
</script>
