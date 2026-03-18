<template>
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          :src="avatarImg"
          alt="jkuliuyu avatar"
          class="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-[var(--accent-color)]/30 shadow-xl object-cover"
        />
        <div class="text-center md:text-left">
          <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">ABOUT ME</div>
          <h2 class="text-3xl md:text-4xl font-black text-[var(--text-main)]">jkuliuyu</h2>
          <p class="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
            你好，我目前是一名大二学生，也是一个在电机、板子和算法之间反复横跳的不务正业的物理学学生。
            白天调参数，晚上修 Bug，再晚一点给未来的自己写注释（然后未来的我依然看不懂）。
          </p>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">TECH STACK</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-muted)]">
        <div class="p-4 rounded-2xl border border-[var(--card-border)] bg-white/5">
          <div class="font-bold text-[var(--text-main)] mb-2">嵌入式 & 控制</div>
          STM32 / PY32 / Arduino / ESP32 / FreeRTOS / PID / 滤波 / 状态机
        </div>
        <div class="p-4 rounded-2xl border border-[var(--card-border)] bg-white/5">
          <div class="font-bold text-[var(--text-main)] mb-2">机器人 & 系统</div>
          ROS2 / RK3588 / 电机驱动 / UWB 跟随 / 超声避障 / 节点架构
        </div>
        <div class="p-4 rounded-2xl border border-[var(--card-border)] bg-white/5">
          <div class="font-bold text-[var(--text-main)] mb-2">硬件设计</div>
          原理图设计 / PCB Layout / 电源链路 (DCDC + LDO) / 调试与验证
        </div>
        <div class="p-4 rounded-2xl border border-[var(--card-border)] bg-white/5">
          <div class="font-bold text-[var(--text-main)] mb-2">算法 & AI</div>
          Python / C++ / 数理建模 / 卡尔曼滤波 / 深度学习落地（能跑、能解释、能维护）
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-3">ONE-LINER</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        我的工程哲学：能跑就行，能用更好。
      </p>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-3">SPECIAL THANKS</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        这个网站的建立，要特别感谢一直以来照顾我的 GPT5.3 大人、Gemini3.1pro 大人和 Claude4.6opus 大人。AI大人们的恩情还不完啊!✋😭✋
      </p>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import avatarImg from '../assets/avatar.png'
</script>
