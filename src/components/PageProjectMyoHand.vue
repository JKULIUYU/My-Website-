<template>
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-2">PROJECT CASE</div>
          <h2 class="text-2xl font-black text-[var(--text-main)]">八通道肌电灵巧手控制系统</h2>
          <p class="text-sm text-[var(--text-muted)] leading-relaxed mt-3">
            基于唯理手环实时 8 通道 sEMG 的灵巧手在线控制项目。系统覆盖 Windows 上位机采集与训练、
            ROS2 在线滤波和推理、手势安全过滤、姿态模板映射，并驱动 Gazebo 中的六维关节灵巧手执行动作。
          </p>
        </div>
        <div class="flex items-center gap-2 flex-wrap lg:justify-end">
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">8CH sEMG</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">ROS2 Humble</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Gazebo</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Tauri</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-bg)] text-[var(--accent-color)] font-medium">Private Repo</span>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">DEMO VIDEO</div>
      <div class="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-black/30">
        <video
          class="w-full aspect-video object-contain bg-black"
          controls
          playsinline
          preload="metadata"
          :src="demoVideoSrc"
        >
          当前浏览器不支持视频播放。
        </video>
      </div>
    </BentoCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <BentoCard class="lg:col-span-2">
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">SYSTEM PIPELINE</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          在线链路从手环串口原始帧开始：上位机连接串口、显示 8 通道波形、负责采集标注和模型训练；
          只有在 Gazebo、分类节点、在线控制同时开启时，才把实时手环数据通过 UDP 转发到 WSL。
          ROS2 端接收连续流后完成因果滤波、活动门控、窗口化特征生成、模型推理和控制消息发布。
        </p>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-xs text-[var(--text-muted)]">
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">采集</div>
            唯理手环 8 通道 int24 原始样本，经上位机串口接入。
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">预处理</div>
            基线去直流、尖峰压制、带通/带阻、200 点滑窗。
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">推理</div>
            RBF-SVM、LightGRU、LightTF-CNN 三类模型可选。
          </div>
          <div class="p-3 rounded-2xl bg-white/5 border border-[var(--card-border)]">
            <div class="font-semibold text-[var(--text-main)] mb-1">控制</div>
            HandGestureCmd → 六维关节姿态 → FollowJointTrajectory。
          </div>
        </div>
      </BentoCard>

      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">REPOSITORIES</div>
        <div class="flex flex-col gap-3 text-sm">
          <a href="https://github.com/JKULIUYU/sEMG_MyoHand-Stack" target="_blank" rel="noopener noreferrer" class="rounded-2xl border border-[var(--card-border)] bg-white/5 px-3 py-2 text-[var(--text-main)] hover:bg-white/10 transition-colors">
            sEMG_MyoHand-Stack
          </a>
          <a href="https://github.com/JKULIUYU/sEMG-up--computer" target="_blank" rel="noopener noreferrer" class="rounded-2xl border border-[var(--card-border)] bg-white/5 px-3 py-2 text-[var(--text-main)] hover:bg-white/10 transition-colors">
            sEMG-up--computer
          </a>
        </div>
      </BentoCard>
    </div>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">SIGNAL PROCESSING</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="text-sm text-[var(--text-muted)] leading-relaxed">
          <div class="font-semibold text-[var(--text-main)] mb-2">在线活动门控</div>
          <ul class="list-disc pl-4">
            <li>启动后约 1 秒静息样本建立逐通道基线。</li>
            <li>局部中值 + MAD 阈值替换孤立接触毛刺。</li>
            <li>4 阶 30-180Hz 因果带通，并抑制公共噪声频段。</li>
            <li>200 点窗口、50 点步长，按约 520Hz 实时采样口径维护。</li>
            <li>用 TKEO + RMS 活动分数和 Schmitt 双阈值判断 rest / active。</li>
          </ul>
        </div>
        <div class="flex items-center justify-center">
          <svg viewBox="0 0 560 260" class="w-full max-w-md">
            <defs>
              <linearGradient id="myo-signal-g" x1="0" x2="1">
                <stop offset="0%" stop-color="#b58cff" stop-opacity="0.34" />
                <stop offset="100%" stop-color="#59d0c7" stop-opacity="0.20" />
              </linearGradient>
            </defs>
            <rect x="10" y="10" width="540" height="240" rx="20" fill="url(#myo-signal-g)" stroke="rgba(255,255,255,0.15)" />
            <path d="M42 148 C70 120 82 178 110 148 S150 120 178 148 222 176 250 146 292 118 320 146 364 176 392 146 434 120 462 148 500 176 526 148" fill="none" stroke="#e9dcff" stroke-width="3" />
            <rect x="44" y="42" width="120" height="46" rx="13" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.16)" />
            <text x="104" y="70" fill="#e4eceb" font-size="12" text-anchor="middle">8CH 原始流</text>
            <rect x="220" y="42" width="120" height="46" rx="13" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.16)" />
            <text x="280" y="70" fill="#e4eceb" font-size="12" text-anchor="middle">因果滤波</text>
            <rect x="396" y="42" width="120" height="46" rx="13" fill="rgba(18,20,23,0.45)" stroke="rgba(255,255,255,0.16)" />
            <text x="456" y="70" fill="#e4eceb" font-size="12" text-anchor="middle">活动门控</text>
            <rect x="140" y="192" width="120" height="36" rx="12" fill="rgba(18,20,23,0.38)" stroke="rgba(255,255,255,0.14)" />
            <text x="200" y="215" fill="#e4eceb" font-size="11" text-anchor="middle">429 维特征</text>
            <rect x="306" y="192" width="120" height="36" rx="12" fill="rgba(18,20,23,0.38)" stroke="rgba(255,255,255,0.14)" />
            <text x="366" y="215" fill="#e4eceb" font-size="11" text-anchor="middle">8 x 200 窗口</text>
          </svg>
        </div>
      </div>
    </BentoCard>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">RBF-SVM</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          默认兜底模型，使用 429 维窗口特征、特征筛选和标准化，推理端由 C++ 节点加载，适合快速训练和稳定演示。
        </p>
      </BentoCard>
      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">LightGRU</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          轻量时序模型，把最近 11 个窗口组成短序列，利用动作边界前后的上下文提升连续流识别稳定性。
        </p>
      </BentoCard>
      <BentoCard>
        <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">LightTF-CNN</div>
        <p class="text-sm text-[var(--text-muted)] leading-relaxed">
          时域-频域双分支轻量 CNN，直接读取 8 x 200 滤波窗口，并将 rFFT 频域图作为第二路输入。
        </p>
      </BentoCard>
    </div>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">UPPER COMPUTER</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-muted)] leading-relaxed">
        <div>
          <div class="font-semibold text-[var(--text-main)] mb-2">采集与训练</div>
          React + Tauri 桌面端负责连接 COM 口、实时绘制 8 通道波形、按动作流程写入 `.mat` 数据，
          并调用内置 AI Runtime 训练 RBF-SVM、LightGRU 或 LightTF-CNN。
        </div>
        <div>
          <div class="font-semibold text-[var(--text-main)] mb-2">联调与部署</div>
          上位机可以选择默认模型、最新训练模型或手动模型目录，一键启动 WSL 中的 Gazebo 和分类节点，
          并只在在线控制开启时转发实时手环帧。
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">CONTROL SAFETY</div>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        控制端不会盲目执行每一次分类输出：静息状态不触发动作，低置信度输出保持静息，未绑定姿态模板的标签不执行。
        有效手势会被映射到 6 个目标关节角，并经过关节限幅、姿态变化阈值和保活发送策略后，再进入
        Gazebo 的 FollowJointTrajectory 控制链路。
      </p>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'

const demoVideoSrc = '/videos/myohand-demo.mp4'
</script>
