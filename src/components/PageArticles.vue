<template>
  <!-- 文章推荐：好文书签墙 -->
  <div class="flex flex-col gap-6">
    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-6">ARTICLES</div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">好文推荐</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">平时读过的高质量技术博客、论文解读与学习资源。分门别类，持续收录中。</p>
    </BentoCard>

    <!-- 文章列表 -->
    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">深度学习</div>
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="min-w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs shrink-0">DL</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">占位文章标题: Transformer 注意力机制可视化详解</div>
            <div class="text-xs text-[var(--text-muted)] mt-1">从缩放点积注意力到多头注意力，配合直观的矩阵运算图示。</div>
            <div class="text-[10px] text-[var(--text-muted)] mt-1.5 opacity-60">来源: 待填充 · 占位链接</div>
          </div>
        </div>
        <div class="h-px bg-[var(--text-muted)]/10"></div>
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="min-w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold text-xs shrink-0">DL</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">占位文章标题: GRU 与 LSTM 对比实验</div>
            <div class="text-xs text-[var(--text-muted)] mt-1">时序数据建模中两种门控 RNN 的性能比较与适用场景分析。</div>
            <div class="text-[10px] text-[var(--text-muted)] mt-1.5 opacity-60">来源: 待填充 · 占位链接</div>
          </div>
        </div>
      </div>
    </BentoCard>

    <BentoCard>
      <div class="text-xs text-[var(--text-muted)] tracking-widest font-bold mb-4">嵌入式开发</div>
      <div class="flex flex-col gap-4">
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="min-w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs shrink-0">HW</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">占位文章标题: FreeRTOS 任务调度机制深度剖析</div>
            <div class="text-xs text-[var(--text-muted)] mt-1">从任务控制块到优先级翻转，理解实时操作系统的核心调度策略。</div>
            <div class="text-[10px] text-[var(--text-muted)] mt-1.5 opacity-60">来源: 待填充 · 占位链接</div>
          </div>
        </div>
        <div class="h-px bg-[var(--text-muted)]/10"></div>
        <div class="flex items-start gap-4 group cursor-pointer">
          <div class="min-w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs shrink-0">HW</div>
          <div>
            <div class="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">占位文章标题: STM32 定时器高级应用笔记</div>
            <div class="text-xs text-[var(--text-muted)] mt-1">PWM 互补输出、输入捕获与编码器模式的工程实践。</div>
            <div class="text-[10px] text-[var(--text-muted)] mt-1.5 opacity-60">来源: 待填充 · 占位链接</div>
          </div>
        </div>
      </div>
    </BentoCard>

    <div class="text-center text-xs text-[var(--text-muted)] opacity-50 py-2">更多文章持续收录中...</div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
</script>
