<template>
  <!-- 硬件仓库：嵌入式硬件与 PCB 资料 -->
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-6">HARDWARE</div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">硬件仓库</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">单片机选型笔记、PCB 设计经验、模拟/数字电路基础，以及各类传感器与执行器的驱动实践。</p>
    </BentoCard>

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
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
</script>
