<template>
  <!-- 硬件仓库：嵌入式硬件与 PCB 资料 -->
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-6">HARDWARE</div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">硬件仓库</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">单片机选型笔记、PCB 设计经验、模拟/数字电路基础，以及各类传感器与执行器的驱动实践。</p>
    </BentoCard>

    <LearningPathTimeline
      title="嵌入式学习路径"
      subtitle="以嵌入式系统主线推进，按时间顺序构建工程能力。"
      badge="Embedded Track"
      :items="embeddedTimeline"
    />

    <LearningPathTimeline
      title="硬件设计学习路径"
      subtitle="聚焦电路与 PCB 设计，补齐电源与布局细节。"
      badge="Hardware Track"
      :items="hardwareDesignTimeline"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BentoCard>
        <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">MCU</div>
        <div class="font-bold text-sm text-[var(--text-main)] mb-2">STM32 / PY32 开发笔记</div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed">从 GPIO 到 TIM、ADC、UART 等外设配置，Keil5 开发环境搭建，以及 HAL 库与寄存器操作对比。</p>
        <div class="text-[10px] text-[var(--text-muted)] mt-3 opacity-60">待填充 · 占位内容</div>
      </BentoCard>

      <BentoCard>
        <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">PCB</div>
        <div class="font-bold text-sm text-[var(--text-main)] mb-2">PCB 绘制与 Layout 经验</div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed">从原理图到 PCB 布局布线的完整低速板设计流程，包含电源完整性、接地策略、以及元器件封装选型。</p>
        <div class="text-[10px] text-[var(--text-muted)] mt-3 opacity-60">待填充 · 占位内容</div>
      </BentoCard>

      <BentoCard>
        <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">MOTOR</div>
        <div class="font-bold text-sm text-[var(--text-main)] mb-2">电机驱动与控制</div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed">有刷电机、无刷电机、舵机的驱动原理与 PWM 控制实践。编码器反馈的闭环速度/位置控制架构。</p>
        <div class="text-[10px] text-[var(--text-muted)] mt-3 opacity-60">待填充 · 占位内容</div>
      </BentoCard>

      <BentoCard>
        <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">COMM</div>
        <div class="font-bold text-sm text-[var(--text-main)] mb-2">通信协议与无线模块</div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed">2.4G 自定义协议设计、蓝牙模块配置、UWB 测距原理，以及 UART/SPI/I2C 总线通信实践。</p>
        <div class="text-[10px] text-[var(--text-muted)] mt-3 opacity-60">待填充 · 占位内容</div>
      </BentoCard>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a href="https://www.bilibili.com/video/BV1w7421f7ZJ/" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">MCU / HAL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2">STM32 HAL 库系统教程</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">从外设初始化到中断/DMA，覆盖 GPIO、TIM、ADC、UART 等核心模块，适合作为 STM32 入门主线。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">STM32</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">HAL</span>
          </div>
        </BentoCard>
      </a>

      <a href="https://www.bilibili.com/video/BV1vUpje9Ej2/" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">RTOS</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2">FreeRTOS 入门与实战</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">任务调度、队列与信号量的系统讲解，配合工程实践，快速掌握 RTOS 思维。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">FreeRTOS</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">嵌入式</span>
          </div>
        </BentoCard>
      </a>

      <a href="https://space.bilibili.com/346179450" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">PCB DESIGN</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2">Expert 电子实验室：PCB 入门与大师篇</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">系统讲解 PCB 设计流程、布局布线与电源规则，适合打基础与进阶。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PCB</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Layout</span>
          </div>
        </BentoCard>
      </a>

      <a href="https://www.bilibili.com/video/BV1fFAfeZEBE/" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">POWER</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2">PCB 进阶与电源设计实战</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">覆盖电源分区、DCDC/LDO 设计与高速走线规则，强调工程细节与可靠性。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">DCDC</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">LDO</span>
          </div>
        </BentoCard>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import LearningPathTimeline from './LearningPathTimeline.vue'

const embeddedTimeline = [
  {
    period: '2024.12',
    title: 'STM32 外设与基础通信',
    points: ['GPIO / TIM / ADC / UART 等外设', 'I2C / SPI / PWM 基础协议'],
    tags: ['STM32', 'Peripherals'],
  },
  {
    period: '2024.12',
    title: 'FreeRTOS 入门',
    points: ['任务调度与通信', '队列 / 信号量 / 时间管理'],
    tags: ['FreeRTOS'],
  },
  {
    period: '2025.3',
    title: 'Arduino / ESP32 / PY32',
    points: ['多平台 MCU 实践', '快速原型与模块化开发'],
    tags: ['ESP32', 'PY32'],
  },
  {
    period: '2025.12–今',
    title: 'ROS2 + RK3588',
    points: ['系统集成与节点架构', '嵌入式与机器人平台结合'],
    tags: ['ROS2', 'RK3588'],
  },
]

const hardwareDesignTimeline = [
  {
    period: '2025.1',
    title: '电路设计与 PCB Layout',
    points: ['模拟/数字电路基础', 'DCDC/LDO、电源与晶振布线', '嘉立创 + AD 工具链'],
    tags: ['PCB', 'Power'],
  },
]
</script>
