<template>
  <!-- 我的项目：四大硬核项目展示 -->
  <div class="flex flex-col gap-6">
      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-6">MY PROJECTS</div>
        <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">项目档案馆</h2>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">从 PID 控制到深度学习模型，从 PCB 绘制到 ROS2 节点架构。这里收录了我在嵌入式、算法与硬件方向的核心实战项目。</p>
      </BentoCard>

    <!-- 项目卡片网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 项目1: 教育机器人 -->
      <button
        type="button"
        @click="openMotor"
        @keydown.enter.prevent="openMotor"
        class="block outline-none text-left"
      >
        <BentoCard :pulse="activePulse === 'motor'">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold text-sm">P1</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)]">教育机器人电机控制</div>
            <div class="text-[10px] text-[var(--text-muted)]">2025 寒假</div>
          </div>
        </div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
          公司项目（未开源）。我主要负责速度/位置 PID 控制模块与参数整定，并针对低成本磁编码器的精度波动做了多圈位置精度保障：
          多圈脉冲累计、速度/圈数动态补偿、必要时的基准点校准思路、双环控制与轻量滤波/异常脉冲剔除、积分与输出限幅。
        </p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PID</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PY32F002</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">编码器电机</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
        </div>
        </BentoCard>
      </button>

      <!-- 项目2: 阿克曼小车 -->
      <button
        type="button"
        @click="openAckermann"
        @keydown.enter.prevent="openAckermann"
        class="block outline-none text-left"
      >
        <BentoCard :pulse="activePulse === 'ackermann'">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center font-bold text-sm">P2</div>
            <div>
              <div class="font-bold text-sm text-[var(--text-main)]">阿克曼转向遥控小车</div>
              <div class="text-[10px] text-[var(--text-muted)]">2025 暑假</div>
            </div>
          </div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
            公司项目（未开源）。多功能阿克曼转向小车，模块化遥控 + UWB 跟随 + 超声避障。
            遥控端采集摇杆与按键输入，经 2.4G 发送；车体端解析控制并输出电机 PWM 与舵机 PWM。
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">STM32F103</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PY32F003</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">JDY41</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">UWB</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Ultrasonic</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
          </div>
        </BentoCard>
      </button>

      <!-- 项目3: 少儿编程板 -->
      <button
        type="button"
        @click="openDevBoard"
        @keydown.enter.prevent="openDevBoard"
        class="block outline-none text-left"
      >
        <BentoCard :pulse="activePulse === 'devboard'">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold text-sm">P3</div>
            <div>
              <div class="font-bold text-sm text-[var(--text-main)]">少儿编程开发板</div>
              <div class="text-[10px] text-[var(--text-muted)]">2026 寒假</div>
            </div>
          </div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">
            教学向 USB-C 开发板，集成自动下载与多种传感/交互模块。主要负责 PCB 设计与 Layout。
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">USB-C</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">CH340K</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PCB Layout</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-[var(--text-muted)] font-medium">Private</span>
          </div>
        </BentoCard>
      </button>

      <!-- 项目4: 肌电灵巧手 (重点) -->
      <BentoCard>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-600 flex items-center justify-center font-bold text-sm">P4</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)]">八通道肌电灵巧手控制</div>
            <div class="text-[10px] text-[var(--text-muted)]">2026 至今 · 进行中</div>
          </div>
        </div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">通过肌电手环采集八通道手势信号，利用 Moe_Mba_GRU 混合模型识别手势并输出 6 个关节运动角度。控制端采用 ROS2 全流程节点架构，结合自适应卡尔曼滤波与施密特触发器控制灵巧手。</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Moe_Mba_GRU</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ROS2</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">卡尔曼滤波</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ONNX</span>
        </div>
      </BentoCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import BentoCard from './BentoCard.vue'

const emit = defineEmits<{
  (e: 'open', page: string): void
}>()

type ProjectPulse = 'motor' | 'ackermann' | 'devboard' | null
const activePulse = ref<ProjectPulse>(null)
let openTimer: ReturnType<typeof setTimeout> | null = null
const CARD_OPEN_DELAY = 280

const openWithPulse = (pulse: Exclude<ProjectPulse, null>, page: string) => {
  if (openTimer) {
    clearTimeout(openTimer)
  }
  activePulse.value = pulse
  openTimer = setTimeout(() => {
    activePulse.value = null
    emit('open', page)
    openTimer = null
  }, CARD_OPEN_DELAY)
}

const openMotor = () => {
  openWithPulse('motor', 'project_motor')
}

const openAckermann = () => {
  openWithPulse('ackermann', 'project_ackermann')
}

const openDevBoard = () => {
  openWithPulse('devboard', 'project_devboard')
}

onUnmounted(() => {
  if (openTimer) {
    clearTimeout(openTimer)
    openTimer = null
  }
})
</script>
