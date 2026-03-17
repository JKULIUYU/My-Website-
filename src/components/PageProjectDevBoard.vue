<template>
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">PROJECT CASE</div>
          <h2 class="text-2xl font-black text-[var(--text-main)]">少儿编程开发板（USB-C 供电）</h2>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed mt-3">
            面向少儿编程与创客教学的轻量开发板。我负责 PCB 设计与 Layout，围绕“稳定供电 +
            便捷下载 + 传感/交互”搭建完整硬件方案，强调易用性与可扩展性。
          </p>
        </div>
        <div class="hidden md:flex items-center gap-2 flex-wrap justify-end">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">USB-C</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">CH340K</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ADC</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">I2C RGB</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
        </div>
      </div>
    </BentoCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <BentoCard class="lg:col-span-2">
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">HARDWARE OVERVIEW</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          主板通过 USB-C 供电，集成 CH340K 自动下载电路，降低课堂上位机连接与烧录门槛。
          传感侧包含光敏二极管的 ADC 采集、触摸电压检测电路、按键输入与蜂鸣器驱动；
          灯光部分使用 I2C 驱动的 RGB 灯阵模块，便于做互动式编程效果展示。
        </p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">供电与下载</div>
            USB-C 供电 + CH340K 自动下载，强调稳定与易用。
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">感知与交互</div>
            光敏/触摸 ADC、按键、蜂鸣器、I2C RGB 灯阵。
          </div>
        </div>
      </BentoCard>

      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">MY ROLE</div>
        <ul class="text-sm text-[var(--text-muted)] leading-relaxed list-disc pl-4">
          <li>原理图与 PCB 结构设计</li>
          <li>供电/下载/传感/灯阵模块布局规划</li>
          <li>可制造性与可维护性优化</li>
        </ul>
      </BentoCard>
    </div>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">DESIGN HIGHLIGHTS</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-muted)] leading-relaxed">
        <div>
          <div class="font-semibold text-[var(--text-main)] mb-2">电源与可靠性</div>
          USB-C 供电路径清晰，模块电源分区明确，保证 ADC 采样与灯阵驱动稳定。
        </div>
        <div>
          <div class="font-semibold text-[var(--text-main)] mb-2">教学友好</div>
          自动下载减少连线复杂度，外设接口统一，便于课堂快速上手与扩展实验。
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">PCB RENDERS</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img :src="pcbFront" alt="Dev board PCB 1" width="1226" height="948" loading="lazy" decoding="async" fetchpriority="low" class="w-full rounded-2xl border border-[var(--card-border)] object-cover" />
        <img :src="pcbBack" alt="Dev board PCB 2" width="1062" height="971" loading="lazy" decoding="async" fetchpriority="low" class="w-full rounded-2xl border border-[var(--card-border)] object-cover" />
      </div>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import pcbFront from '../assets/devboard/devboard-pcb1.png'
import pcbBack from '../assets/devboard/devboard-pcb2.jpg'
</script>
