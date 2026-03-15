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
      <BentoCard>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center font-bold text-sm">P1</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)]">教育机器人电机控制</div>
            <div class="text-[10px] text-[var(--text-muted)]">2025 寒假</div>
          </div>
        </div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">基于 PY32F002 主控与有刷磁编码器电机，实现完整的 PID 闭环控制算法，精确控制电机速度与转动角度。通过创客网站的可视化编程接口驱动。</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PID</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PY32F002</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">编码器电机</span>
        </div>
      </BentoCard>

      <!-- 项目2: 阿克曼小车 -->
      <BentoCard>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center font-bold text-sm">P2</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)]">阿克曼转向遥控小车</div>
            <div class="text-[10px] text-[var(--text-muted)]">2025 暑假</div>
          </div>
        </div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">采用 STM32F1 主控，集成 2.4G 通信、UWB 测距模块（测距+方位角）实现自动跟随与超声波避障。整车运行 FreeRTOS 实时操作系统，自定义通信协议。</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">STM32</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">FreeRTOS</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">UWB</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PCB</span>
        </div>
      </BentoCard>

      <!-- 项目3: 少儿编程板 -->
      <BentoCard>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center font-bold text-sm">P3</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)]">少儿编程开发板</div>
            <div class="text-[10px] text-[var(--text-muted)]">2026 寒假</div>
          </div>
        </div>
        <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">基于 AIR001 (PY32F002) 的教育开发板。集成 RGB 灯阵、触碰感应（PCB 铜皮外露 + ADC 电压变化检测）、光敏传感器与蜂鸣器。负责 PCB 绘制与驱动代码。</p>
        <div class="flex flex-wrap gap-1.5">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">AIR001</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">PCB Layout</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ADC</span>
        </div>
      </BentoCard>

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
import BentoCard from './BentoCard.vue'
</script>
