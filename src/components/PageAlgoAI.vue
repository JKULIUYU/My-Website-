<template>
  <div class="flex flex-col gap-8">
    <!-- Header -->
    <BentoCard>
      <div class="flex items-center gap-3 mb-6">
        <button @click="$emit('back')" class="text-[var(--text-muted)] hover:text-[var(--accent-color)] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div class="text-xs text-[var(--accent-color)] tracking-widest font-bold">ALGORITHMS / AI & ML</div>
      </div>
      <h2 class="text-2xl font-black text-[var(--text-main)] mb-2">AI 模型与机器学习</h2>
      <p class="text-sm text-[var(--text-muted)] leading-relaxed">
        涵盖深度学习与机器学习领域的核心模型与前沿架构，收录通俗易懂的高质量中文技术博客与原理解析。
      </p>
    </BentoCard>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      <!-- CNN -->
      <a href="https://cloud.tencent.com/developer/article/2126296" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">COMPUTER VISION</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">一文搞懂卷积神经网络 (CNN) 的原理</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">详细阐述 CNN 作为深度学习处理图像的核心技术，通过卷积层提取特征，池化层降维，以及局部连接和权值共享的优势。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">CNN</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">图像识别</span>
          </div>
        </BentoCard>
      </a>

      <!-- LSTM & GRU -->
      <a href="https://blog.csdn.net/qq_43962530/article/details/119934752" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">SEQUENCE MODELING</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">LSTM 与 GRU 的区别与原理解析</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">深入对比长短期记忆网络 (LSTM) 与门控循环单元 (GRU)。解析遗忘门、更新门等机制如何解决传统 RNN 的梯度消失与长期依赖问题。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">LSTM</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">GRU</span>
          </div>
        </BentoCard>
      </a>

      <!-- Transformer & Attention -->
      <a href="https://www.cnblogs.com/robert-dlut/p/8638283.html" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">NLP / ARCHITECTURE</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">Attention 机制与 Transformer 详解</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">全面解析自注意力机制 (Self-Attention) 和多头注意力 (Multi-Head)。抛弃传统 RNN 结构，通过全局感受野精准捕捉长距离序列依赖。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Transformer</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Attention</span>
          </div>
        </BentoCard>
      </a>

      <!-- PINNs -->
      <a href="https://blog.csdn.net/weixin_44633882/article/details/129759495" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">PHYSICS-INFORMED</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">PINN 物理信息神经网络入门与实践</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">将微分方程 (PDE) 嵌入到神经网络损失函数中。不仅从数据中学习，更服从物理定律，适用于流体力学及缺乏数据的复杂科学计算。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PINN</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PDE拟合</span>
          </div>
        </BentoCard>
      </a>

      <!-- PSO -->
      <a href="https://cloud.tencent.com/developer/article/1815170" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">OPTIMIZATION ALGORITHM</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">粒子群优化算法 (PSO) 原理及实现</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">模拟鸟群觅食的群体智能优化算法。通过个体认知与社会经验双重驱动，实现多维解空间中的全局最优搜索，参数少且收敛快。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">PSO</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">群体智能</span>
          </div>
        </BentoCard>
      </a>
      
      <!-- XGBoost & Random Forest -->
      <a href="https://blog.csdn.net/v_JULY_v/article/details/81410574" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">ENSEMBLE LEARNING</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">XGBoost 与 Random Forest 树模型解析</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">集成学习的两大基石：基于 Bagging 的随机森林与基于 Boosting 的极限梯度提升树 (XGBoost)。在结构化数据预测与各类数据科学竞赛中的大杀器。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">XGBoost</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Random Forest</span>
          </div>
        </BentoCard>
      </a>

      <!-- Decision Tree -->
      <a href="https://blog.csdn.net/qq_41931764/article/details/103181792" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">CLASSIC ML</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">决策树算法原理详解</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">从 ID3、C4.5 到 CART，系统梳理决策树的划分策略、信息增益与剪枝思路。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Decision Tree</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">CART</span>
          </div>
        </BentoCard>
      </a>

      <!-- Markov Random Field -->
      <a href="https://blog.csdn.net/aptx704610875/article/details/106173714" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">PROBABILISTIC MODEL</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">马尔可夫链 / 随机过程入门</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">从状态转移与马尔可夫性出发，建立随机过程建模的基础概念。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Markov</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">随机过程</span>
          </div>
        </BentoCard>
      </a>

      <!-- Simulated Annealing -->
      <a href="https://blog.csdn.net/qq_41194196/article/details/126111335" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">OPTIMIZATION</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">模拟退火算法介绍与实例</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">从物理退火到组合优化，解释温度、状态与 Metropolis 接受准则的核心思想。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">SA</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Optimization</span>
          </div>
        </BentoCard>
      </a>

      <!-- TOPSIS -->
      <a href="https://blog.csdn.net/m0_55903362/article/details/132917440" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">MODELING</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">TOPSIS 综合评价方法</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">从数据正向化到评分构建，完整介绍 TOPSIS 的评价流程与权重处理方法。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">TOPSIS</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">Modeling</span>
          </div>
        </BentoCard>
      </a>

      <!-- Li Mu DL Course -->
      <a href="https://www.bilibili.com/video/BV15UREYsEN8/" target="_blank" class="block outline-none">
        <BentoCard class="h-full hover:-translate-y-1 transition-transform duration-300">
          <div class="text-[10px] text-[var(--accent-color)] font-bold tracking-wider mb-2">DEEP LEARNING</div>
          <div class="font-bold text-sm text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">李沐：动手学深度学习</div>
          <p class="text-xs text-[var(--text-muted)] leading-relaxed mb-3">系统覆盖感知机、MLP、CNN、RNN、Attention 与 Transformer 的经典课程。</p>
          <div class="flex flex-wrap gap-1.5 mt-auto">
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">视频</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-muted)]">课程</span>
          </div>
        </BentoCard>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'

defineEmits(['back'])
</script>
