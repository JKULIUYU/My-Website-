<template>
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="flex items-center justify-between gap-4">
        <div>
          <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">PROJECT CASE</div>
          <h2 class="text-2xl font-black text-[var(--text-main)]">多功能阿克曼转向小车</h2>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed mt-3">
            面向模块化编程与教学的遥控小车平台，兼容遥控驾驶与 UWB 跟随模式，并结合超声波进行安全避障。
            车体采用电机 PWM + 舵机 PWM 输出，遥控端负责采集输入并通过 2.4G 发送控制指令。
          </p>
        </div>
        <div class="hidden md:flex items-center gap-2 flex-wrap justify-end">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">STM32F103</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PY32F003</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">JDY41</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">UWB</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Ultrasonic</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
        </div>
      </div>
    </BentoCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <BentoCard class="lg:col-span-2">
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">SYSTEM ARCHITECTURE</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          系统分为遥控端与车体端两部分。遥控端基于 <span class="font-semibold text-[var(--text-main)]">PY32F003</span>，
          采集摇杆 ADC 与按键输入，经 <span class="font-semibold text-[var(--text-main)]">JDY41 2.4G</span> 模块发送。
          车体端采用 <span class="font-semibold text-[var(--text-main)]">STM32F103</span> 接收控制帧并执行运动控制。
          传感侧引入 <span class="font-semibold text-[var(--text-main)]">UWB 测距/方位</span> 与
          <span class="font-semibold text-[var(--text-main)]">超声波</span>，用于跟随与安全避障策略。
        </p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">遥控端</div>
            摇杆/按键 → PY32F003 采样 → JDY41 发送控制帧
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">车体端</div>
            STM32F103 解析 → 控制策略 → 电机 PWM + 舵机 PWM
          </div>
        </div>
      </BentoCard>

      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">MY ROLE</div>
        <ul class="text-sm text-[var(--text-muted)] leading-relaxed list-disc pl-4">
          <li>控制策略设计与信号处理流程梳理</li>
          <li>遥控/跟随/避障的状态切换策略</li>
          <li>运动安全与限幅逻辑的抽象整理</li>
        </ul>
      </BentoCard>
    </div>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">CONTROL ALGORITHM</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="text-sm text-[var(--text-muted)] leading-relaxed">
          <div class="font-semibold text-[var(--text-main)] mb-2">核心流程</div>
          <ul class="list-disc pl-4">
            <li>输入处理：摇杆死区、滤波/限幅、速度斜坡，减少抖动</li>
            <li>Ackermann 映射：转向输入 → 曲率/半径，转向角限幅 + 速度联动降速</li>
            <li>执行层：电机 PWM 控速 + 舵机脉宽映射转向</li>
            <li>安全层：通信超时降速/停车、超声限距、UWB 跟随优先级切换</li>
          </ul>
        </div>

        <div class="flex items-center justify-center">
          <svg viewBox="0 0 540 280" class="w-full max-w-md">
            <defs>
              <linearGradient id="ack-g" x1="0" x2="1">
                <stop offset="0%" stop-color="#7dc2ff" stop-opacity="0.32" />
                <stop offset="100%" stop-color="#4f6ea3" stop-opacity="0.18" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="520" height="260" rx="20" fill="url(#ack-g)" stroke="rgba(255,255,255,0.15)" />

            <rect x="30" y="40" width="150" height="58" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="105" y="73" fill="#e4eceb" font-size="12" text-anchor="middle">遥控端输入</text>

            <rect x="210" y="40" width="150" height="58" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="285" y="73" fill="#e4eceb" font-size="12" text-anchor="middle">无线指令</text>

            <rect x="390" y="40" width="120" height="58" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="450" y="73" fill="#e4eceb" font-size="12" text-anchor="middle">控制策略</text>

            <rect x="120" y="160" width="140" height="58" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="190" y="193" fill="#e4eceb" font-size="12" text-anchor="middle">电机 PWM</text>

            <rect x="300" y="160" width="140" height="58" rx="14" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.15)" />
            <text x="370" y="193" fill="#e4eceb" font-size="12" text-anchor="middle">舵机 PWM</text>

            <rect x="420" y="150" width="90" height="30" rx="10" fill="rgba(18,20,23,0.35)" stroke="rgba(255,255,255,0.15)" />
            <text x="465" y="170" fill="#e4eceb" font-size="10" text-anchor="middle">UWB/超声</text>

            <path d="M180 69 H210" stroke="#7dc2ff" stroke-width="2" />
            <path d="M360 69 H390" stroke="#7dc2ff" stroke-width="2" />
            <path d="M450 98 V150" stroke="#7dc2ff" stroke-width="2" />
            <path d="M190 160 V98" stroke="#7dc2ff" stroke-width="2" />
            <path d="M260 189 H300" stroke="#7dc2ff" stroke-width="2" />
            <path d="M465 180 V210 H420" stroke="#7dc2ff" stroke-width="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">HARDWARE DESIGN</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        主控板使用 12V 输入，经 DCDC 转 5V，再由 LDO 稳压到 3.3V，为主控与传感模块供电。
        遥控器采用 3.7V 锂电池，经 LDO 降压到 3V，保证摇杆与无线模块的稳定供电。
        供电链路与模块分区明确，便于后续扩展与维护。
      </p>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
          <div class="text-xs font-semibold text-[var(--text-main)] mb-2">主控 PCB（正面 / 反面）</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <img :src="mainTopImg" alt="Main PCB top" class="w-full rounded-xl border border-[var(--card-border)] object-cover" />
            <img :src="mainBottomImg" alt="Main PCB bottom" class="w-full rounded-xl border border-[var(--card-border)] object-cover" />
          </div>
        </div>
        <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
          <div class="text-xs font-semibold text-[var(--text-main)] mb-2">遥控 PCB（正面 / 反面）</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <img :src="remoteTopImg" alt="Remote PCB top" class="w-full rounded-xl border border-[var(--card-border)] object-cover" />
            <img :src="remoteBottomImg" alt="Remote PCB bottom" class="w-full rounded-xl border border-[var(--card-border)] object-cover" />
          </div>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">APPLICATION</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        支持遥控驾驶、自动跟随与安全避障三种模式切换，适用于教学演示、模块化控制课程与小型竞赛场景。
        设计强调可扩展的通信与传感接口，便于后续接入更多模块。
      </p>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import mainTopImg from '../assets/ackermann/ackermann-main-top.png'
import mainBottomImg from '../assets/ackermann/ackermann-main-bottom.png'
import remoteTopImg from '../assets/ackermann/ackermann-remote-top.png'
import remoteBottomImg from '../assets/ackermann/ackermann-remote-bottom.png'
</script>
