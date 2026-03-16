<template>
  <div class="min-h-screen py-10 px-4 sm:px-8 xl:px-0 flex justify-center items-center relative overflow-hidden">
    
    <!-- 全屏动态粒子特效 Canvas (z-index: 0 放于最底层) -->
    <canvas ref="particleCanvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <!-- 视图切换容器 -->
    <Transition name="fade" mode="out-in">
      
      <!-- 主页：极简流线型网格主框架: 分为三列 (侧边栏、中枢区、右侧边栏) -->
      <main v-if="currentPage === 'home'" key="home" class="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
      
      <!-- ================= 左侧：导览区域 (Col 1) ================= -->
      <div class="flex flex-col gap-6">
        
        <!-- 用户主控面板 -->
        <BentoCard paddingClass="p-6">
          <div class="flex items-center gap-4 mb-8">
            <!-- 头像使用上传的动漫人物，增加 hover 放大动画 -->
            <div class="w-12 h-12 rounded-full border-2 border-[var(--accent-color)]/30 overflow-hidden shadow-sm shrink-0">
               <img :src="avatarImg" alt="jkuliuyu avatar" class="w-full h-full object-cover transition-transform hover:scale-110" />
            </div>
            <div>
              <div class="font-bold text-lg text-[var(--text-main)]">jkuliuyu</div>
              <div class="text-xs font-semibold text-[var(--accent-color)]">开发中</div>
            </div>
          </div>

          <div class="text-xs font-bold text-[var(--text-muted)] tracking-widest mb-4">GENERAL</div>
          
          <nav class="flex flex-col gap-3 font-medium">
            <a @click.prevent="currentPage = 'home'" href="#" class="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-[var(--text-muted)] hover:bg-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              <span class="transition-all duration-300 group-hover:text-[var(--accent-color)] group-hover:tracking-wide">近期进展</span>
            </a>
            <a @click.prevent="currentPage = 'projects'" href="#" class="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-[var(--text-muted)] hover:bg-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              <span class="transition-all duration-300 group-hover:text-[var(--accent-color)] group-hover:tracking-wide">我的项目</span>
            </a>
            <a @click.prevent="currentPage = 'algorithms'" href="#" class="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-[var(--text-muted)] hover:bg-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span class="transition-all duration-300 group-hover:text-[var(--accent-color)] group-hover:tracking-wide">底层算法</span>
            </a>
            <a @click.prevent="currentPage = 'hardware'" href="#" class="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-[var(--text-muted)] hover:bg-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              <span class="transition-all duration-300 group-hover:text-[var(--accent-color)] group-hover:tracking-wide">硬件仓库</span>
            </a>
            <a @click.prevent="currentPage = 'articles'" href="#" class="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-[var(--text-muted)] hover:bg-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              <span class="transition-all duration-300 group-hover:text-[var(--accent-color)] group-hover:tracking-wide">文章推荐</span>
            </a>
          </nav>
        </BentoCard>

        <!-- 左侧状态小卡片 -->
        <BentoCard class="flex-grow">
          <div class="text-xs text-[var(--text-muted)] mb-3">当前状态</div>
          <div class="flex items-start gap-3">
            <div class="w-10 h-10 rounded-xl bg-[var(--text-main)] text-white flex items-center justify-center font-bold">R</div>
            <div>
              <div class="text-sm font-bold text-[var(--text-main)]">ROS2 节点重构</div>
              <div class="text-xs text-[var(--text-muted)] mt-1">系统调试中</div>
              <div class="text-[10px] text-[var(--text-muted)] mt-2 opacity-60">2026/03/15</div>
            </div>
          </div>
        </BentoCard>

      </div>

      <!-- ================= 中部：核心控制台 (Col 2 & 3) ================= -->
      <div class="lg:col-span-2 flex flex-col gap-6">
        <PageHome :timeGreeting="timeGreeting" />
      </div>

      <!-- ================= 右侧：仪表盘区 (Col 4) ================= -->
      <div class="flex flex-col gap-6">
        
        <!-- 时钟模块 (修正居中问题) -->
        <BentoCard class="h-32" paddingClass="p-0">
          <div class="w-full h-full flex items-center justify-center font-mono text-5xl tracking-widest text-[var(--accent-color)] opacity-80 transition-all text-center m-0" style="font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
            {{ timeString }}
          </div>
        </BentoCard>

        <!-- 极简日历模块 (修正过长问题，去掉 row-span-2) -->
        <BentoCard class="flex flex-col justify-center p-5">
          <div class="text-sm font-medium text-[var(--text-muted)] mb-4">2026/3/15 周日</div>
          <!-- 天数表头 -->
          <div class="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-xs font-semibold mb-2">
            <div class="text-[var(--text-muted)]">一</div>
            <div class="text-[var(--text-muted)]">二</div>
            <div class="text-[var(--text-muted)]">三</div>
            <div class="text-[var(--text-muted)]">四</div>
            <div class="text-[var(--text-muted)]">五</div>
            <div class="text-[var(--text-muted)]">六</div>
            <div class="text-[var(--accent-color)]">日</div>
          </div>
          <!-- 日期占位符号 (示意) -->
          <div class="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-xs text-gray-500 font-medium">
            <div class="opacity-0">23</div><div class="opacity-0">24</div><div class="opacity-0">25</div><div class="opacity-0">26</div><div class="opacity-0">27</div><div class="opacity-0">28</div><div>1</div>
            <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
            <div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div>
            <div class="bg-[var(--accent-color)] text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto shadow-sm shadow-[var(--accent-color)]/50">15</div>
            <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div>
            <div>23</div><div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div>
          </div>
        </BentoCard>

        <!-- 音乐播放器 / 状态 -->
        <BentoCard class="flex items-center justify-between py-4">
           <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--accent-color)] shadow-sm">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"></path></svg>
              </div>
              <div>
                <div class="text-sm font-bold text-[var(--text-main)]">Focus Mode</div>
                <!-- 进度条假象 -->
                <div class="w-20 h-1 bg-[var(--text-muted)]/20 rounded-full mt-1.5 overflow-hidden">
                  <div class="w-1/3 h-full bg-[var(--accent-color)] rounded-full"></div>
                </div>
              </div>
           </div>
           
           <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[var(--accent-color)] cursor-pointer hover:bg-gray-50 transition-colors">
             <svg class="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
           </div>
        </BentoCard>

        <!-- 今日代码短句 -->
        <BentoCard class="flex flex-col gap-2">
          <div class="text-xs font-semibold text-[var(--text-muted)] tracking-widest">CODE QUOTE</div>
          <div class="text-sm font-semibold text-[var(--text-main)] leading-relaxed">
            {{ dailyCodeQuote }}
          </div>
        </BentoCard>

        <!-- 开发状态提示 -->
        <BentoCard class="flex items-center justify-center py-3">
          <div class="flex items-center gap-2 justify-center w-full">
            <span class="w-2 h-2 rounded-full bg-[var(--accent-color)] shadow-sm"></span>
            <div class="text-xs font-semibold text-[var(--accent-color)]/90 tracking-wide text-center">
              网站仍在开发中
            </div>
          </div>
        </BentoCard>
      </div>
      </main>

      <!-- 子页面：独立的阅读/展示视图 -->
      <div v-else key="subpage" class="w-full max-w-4xl mx-auto flex flex-col gap-6 relative z-10 pb-24">
        <!-- 返回键区域 -->
        <div class="flex items-center mb-2">
          <button @click="currentPage = 'home'" class="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-white/60 dark:hover:bg-white/10 text-[var(--accent-color)] transition-all shadow-sm focus:outline-none backdrop-blur-md font-bold group">
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            返回主页
          </button>
        </div>
        
        <!-- 页面内容 -->
        <Transition name="fade" mode="out-in">
          <component :is="currentPageComponent" :key="currentPage" @open="currentPage = $event" @back="handleBack" />
        </Transition>
      </div>

    </Transition>

    <!-- ================= 浮动组件容器：固定在视口四角 ================= -->
    <div class="fixed inset-0 z-50 pointer-events-none">
      <!-- ================= 浮动组件：莫兰迪主题切换器 ================= -->
      <div class="absolute bottom-6 left-6 flex items-center gap-2 bg-[var(--card-bg)] backdrop-blur-3xl p-1.5 rounded-full border border-[var(--card-border)] shadow-lg transition-all duration-300 hover:shadow-xl pointer-events-auto">
        <button 
          @click="applyTheme('auto')"
          class="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold transition-colors duration-300"
          :class="currentTheme === 'auto' ? 'bg-[var(--text-main)] text-[var(--card-bg)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:text-[var(--text-main)]/80 dark:hover:text-white dark:hover:bg-white/10'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="hidden sm:inline">Auto</span>
        </button>
        <button 
          @click="applyTheme('light')"
          class="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold transition-colors duration-300"
          :class="currentTheme === 'light' ? 'bg-[var(--text-main)] text-[var(--card-bg)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:text-[var(--text-main)]/80 dark:hover:text-white dark:hover:bg-white/10'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          <span class="hidden sm:inline">Light</span>
        </button>
        <button 
          @click="applyTheme('dark')"
          class="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold transition-colors duration-300"
          :class="currentTheme === 'dark' ? 'bg-[var(--text-main)] text-[var(--card-bg)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:text-[var(--text-main)]/80 dark:hover:text-white dark:hover:bg-white/10'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <span class="hidden sm:inline">Dark</span>
        </button>
        <!-- ================= 浮动组件：互动点赞按钮 ================= -->
        <div 
          @click="triggerLike"
          class="flex items-center justify-center w-10 h-10 bg-white/80 dark:bg-white/10 backdrop-blur-3xl rounded-full border border-[var(--card-border)] shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 relative pointer-events-auto"
          :class="{
            'text-red-500 cursor-not-allowed': isLiked || likeBusy,
            'text-[var(--text-muted)] cursor-pointer': !isLiked && !likeBusy
          }"
        >
          <span
            class="absolute -top-2 -right-2 min-w-[1.1rem] h-4 px-1 rounded-full bg-[var(--text-main)] text-white text-[10px] leading-4 text-center shadow ring-1 ring-white/10 dark:bg-[var(--accent-color)] dark:text-[var(--text-main)] dark:ring-black/20"
          >
            {{ likeCount ?? '—' }}
          </span>
          <svg class="w-5 h-5 transition-all duration-500" :class="isLiked ? 'scale-110 fill-current' : 'fill-none stroke-current stroke-2'" viewBox="0 0 24 24">
            <path class="transition-all" stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- (End of floating components. Main layout closed earlier) -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch, type Component } from 'vue'
import BentoCard from './components/BentoCard.vue'
import PageHome from './components/PageHome.vue'
import PageProjects from './components/PageProjects.vue'
import PageAlgorithms from './components/PageAlgorithms.vue'
import PageAlgoAI from './components/PageAlgoAI.vue'
import PageAlgoControl from './components/PageAlgoControl.vue'
import PageHardware from './components/PageHardware.vue'
import PageArticles from './components/PageArticles.vue'
import avatarImg from './assets/avatar.png'

// ================= 页面导航状态 =================
type PageName = 'home' | 'projects' | 'algorithms' | 'hardware' | 'articles' | 'algo_ai' | 'algo_control';
const currentPage = ref<PageName>('home');

// 处理子页面返回逻辑
const handleBack = () => {
  if (currentPage.value === 'algo_ai' || currentPage.value === 'algo_control') {
    currentPage.value = 'algorithms';
  } else {
    currentPage.value = 'home';
  }
};

// 页面注册表：映射页面名称到对应的组件
const pageRegistry: Record<PageName, Component> = {
  home: PageHome,
  projects: PageProjects,
  algorithms: PageAlgorithms,
  algo_ai: PageAlgoAI,
  algo_control: PageAlgoControl,
  hardware: PageHardware,
  articles: PageArticles,
};

// 当前应渲染的组件 (由 computed 自动追踪 currentPage 的变化)
const currentPageComponent = computed(() => pageRegistry[currentPage.value]);

// ================= 浏览器历史记录支持 =================
const syncUrlWithPage = (page: PageName) => {
  const base = window.location.origin + window.location.pathname;
  const next = page === 'home' ? base : `${base}#/${page}`;
  window.history.pushState({ page }, '', next);
};

const readPageFromUrl = (): PageName => {
  const hash = window.location.hash.replace('#/', '').trim();
  if (hash === 'projects' || hash === 'algorithms' || hash === 'hardware' || hash === 'articles' || hash === 'algo_ai' || hash === 'algo_control') {
    return hash as PageName;
  }
  return 'home';
};
const isHistoryNavigating = ref(false);
const handlePopstate = () => {
  isHistoryNavigating.value = true;
  currentPage.value = readPageFromUrl();
};

// ================= 主题切换控制 =================
type ThemeMode = 'light' | 'dark' | 'auto';
const currentTheme = ref<ThemeMode>('auto');
const isCurrentlyDark = ref(false); // 供粒子系统读取的响应式状态
let themeAutoInterval: ReturnType<typeof setInterval> | null = null;

const evaluateThemeDOM = (mode: ThemeMode) => {
  let isDark = false;
  if (mode === 'auto') {
    const hour = new Date().getHours();
    // 自动模式：早上6点到晚上18点(不含18点)为亮色，其余为深色
    isDark = hour >= 18 || hour < 6;
  } else {
    isDark = mode === 'dark';
  }
  
  isCurrentlyDark.value = isDark;

  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
};

const applyTheme = (mode: ThemeMode) => {
  currentTheme.value = mode;
  localStorage.setItem('theme-pref', mode);
  
  evaluateThemeDOM(mode);
  
  // 切换主题时，如果有粒子引擎在跑，我们要重置一些颜色
  if (canvasCtx) {
    initParticles();
  }

  if (themeAutoInterval) clearInterval(themeAutoInterval);
  if (mode === 'auto') {
    themeAutoInterval = setInterval(() => {
      evaluateThemeDOM('auto');
    }, 15 * 60 * 1000); 
  }
}

// ================= 点赞功能控制 =================
const isLiked = ref(false);
const likeCount = ref<number | null>(null);
const likeBusy = ref(false);
const likeError = ref('');
const likeDeviceKey = 'like-device-id';

const getDeviceId = () => {
  let id = localStorage.getItem(likeDeviceKey);
  if (!id) {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      id = crypto.randomUUID();
    } else {
      id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    }
    localStorage.setItem(likeDeviceKey, id);
  }
  return id;
};

const fetchLikeStatus = async () => {
  likeError.value = '';
  try {
    const deviceId = getDeviceId();
    const resp = await fetch(`/api/like?deviceId=${encodeURIComponent(deviceId)}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (!resp.ok) throw new Error('like status failed');
    const data = await resp.json();
    likeCount.value = Number.isFinite(data?.count) ? data.count : 0;
    isLiked.value = Boolean(data?.liked);
  } catch (err) {
    likeError.value = 'like status failed';
    likeCount.value = likeCount.value ?? 0;
  }
};

const triggerLike = async () => {
  if (isLiked.value || likeBusy.value) return;
  likeBusy.value = true;
  likeError.value = '';
  try {
    const deviceId = getDeviceId();
    const resp = await fetch('/api/like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ deviceId }),
    });
    if (!resp.ok) throw new Error('like failed');
    const data = await resp.json();
    likeCount.value = Number.isFinite(data?.count) ? data.count : (likeCount.value ?? 0);
    isLiked.value = Boolean(data?.liked);
  } catch (err) {
    likeError.value = 'like failed';
  } finally {
    likeBusy.value = false;
  }
};

// ================= 每日代码短句 =================
const codeQuotes = [
  '编译通过不是结束，是 Bug 的开场。',
  '写完再改，是最稳定的 PR 文化。',
  '我不是在写代码，我是在和未来的自己和解。',
  '这段逻辑很清晰，直到它上线。',
  '代码能跑就行，但它为什么能跑？',
  '把 TODO 写成诗，是工程师的浪漫。',
  '我给函数取名，是为了让它别生气。',
  '调试不是找错，是在考古。',
  '“只改一行”是最危险的承诺。',
  '今天的我写代码，明天的我写注释。',
];

const hashString = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

const dailyCodeQuote = computed(() => {
  const now = new Date();
  const key = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  const index = hashString(key) % codeQuotes.length;
  return codeQuotes[index];
});

// ================= 动态数字时钟与问候语逻辑 =================
const timeString = ref('00:00')

const timeGreeting = computed(() => {
  const hour = parseInt(timeString.value.split(':')[0] || '0');
  if (hour >= 6 && hour < 12) return 'Good Morning';
  if (hour >= 12 && hour < 18) return 'Good Afternoon';
  return 'Good Evening';
})

const updateTime = () => {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  timeString.value = `${hours}:${minutes}`
}

let timer: ReturnType<typeof setInterval>

// ================= 粒子物理背景系统 (Canvas) =================
const particleCanvas = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number;
let canvasCtx: CanvasRenderingContext2D | null = null;
let particles: Particle[] = [];

class Particle {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  scaleX: number;
  scaleXSpeed: number;
  opacity: number;
  colorType: number; // 随机决定瓣尖儿是否带点深粉或全白

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    // 更有层次感的深度：大小不一
    this.baseSize = isCurrentlyDark.value ? Math.random() * 2 + 1 : Math.random() * 6 + 4;
    this.size = this.baseSize;
    
    // 飘落速度：樱花有明显的横风效应，雪花主要是直下
    this.speedX = isCurrentlyDark.value ? (Math.random() - 0.5) * 1 : Math.random() * 2 - 1.5;
    this.speedY = isCurrentlyDark.value ? Math.random() * 1.5 + 0.5 : Math.random() * 1.5 + 0.5;
    
    // 3D 旋转与翻转控制
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 5;
    this.scaleX = Math.random() * 2 - 1; // -1 到 1 之间的三维翻转系数
    this.scaleXSpeed = Math.random() * 0.05 + 0.01;
    
    this.opacity = Math.random() * 0.6 + 0.3; // 提升可视度
    this.colorType = Math.random(); // 用于混色
  }

  update(w: number, h: number) {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // 增加有机的摇摆感 (利用 sin 波)，降低频率使其飘流得更舒缓平滑
    if (!isCurrentlyDark.value) {
        this.x += Math.sin(this.y * 0.02) * 0.6;
    }

    this.rotation += this.rotationSpeed;
    
    // 模拟纸片在 3D 空间里的自转翻滚，翻转速度稍稍放慢使其更具观赏性
    this.scaleX += this.scaleXSpeed;
    if (this.scaleX > 1 || this.scaleX < -1) {
       this.scaleXSpeed = -this.scaleXSpeed;
    }
    
    // 下落越界重生
    if (this.y > h + this.size || this.x > w + this.size || this.x < -this.size) {
      this.x = Math.random() * w;
      this.y = -20;
      this.speedX = isCurrentlyDark.value ? (Math.random() - 0.5) * 1 : Math.random() * 2 - 1.5;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    // 使用 scaleX 实现 3D 翻转的视觉错觉
    ctx.scale(this.scaleX, 1);

    ctx.beginPath();
    if (isCurrentlyDark.value) {
       // 暗色模式：保留圆润的发光小雪花/光点
       ctx.arc(0, 0, this.baseSize, 0, Math.PI * 2);
       ctx.fillStyle = `rgba(200, 230, 255, ${this.opacity})`;
       // 微微的弥散发光
       ctx.shadowBlur = 4;
       ctx.shadowColor = `rgba(200, 230, 255, 0.5)`;
    } else {
       // 浅色模式：绘制椭圆形的樱花花瓣
       // 利用二次贝塞尔曲线画花瓣形状或者简单的椭圆
       ctx.ellipse(0, 0, this.baseSize, this.baseSize * 0.6, 0, 0, Math.PI * 2);
       
       // 提升色彩浓度，使其与背景产生更强的对比区分度
       // 提高基础不透明度底线，混合更深的樱花红、玫红和深粉色
       const petalOpacity = Math.min(1, this.opacity + 0.3); // 整体加深受可视度
       if (this.colorType > 0.7) {
          ctx.fillStyle = `rgba(242, 127, 148, ${petalOpacity})`; // 浓烈的绯红
       } else if (this.colorType > 0.3) {
          ctx.fillStyle = `rgba(247, 161, 180, ${petalOpacity})`; // 中等樱花红
       } else {
          ctx.fillStyle = `rgba(255, 192, 203, ${petalOpacity})`; // 浅一点的粉红作为点缀
       }
       ctx.shadowBlur = 6;
       ctx.shadowColor = `rgba(247, 161, 180, 0.3)`;
    }
    
    ctx.fill();
    ctx.restore();
  }
}

const resizeCanvas = () => {
  if (particleCanvas.value) {
    particleCanvas.value.width = window.innerWidth;
    particleCanvas.value.height = window.innerHeight;
  }
};

const initParticles = () => {
  if (!particleCanvas.value) return;
  particles = [];
  const count = window.innerWidth < 768 ? 40 : 100; // 稍微控制总量防止卡顿
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(particleCanvas.value.width, particleCanvas.value.height));
  }
};

const renderParticles = () => {
  if (!particleCanvas.value || !canvasCtx) return;
  
  canvasCtx.clearRect(0, 0, particleCanvas.value.width, particleCanvas.value.height);
  
  particles.forEach(p => {
    if (particleCanvas.value && canvasCtx) { // Add null check for canvasCtx
      p.update(particleCanvas.value.width, particleCanvas.value.height);
      p.draw(canvasCtx);
    }
  });

  animationFrameId = requestAnimationFrame(renderParticles);
};

// ================= 生命周期钩子 =================
onMounted(() => {
  // 初始化当前页面（支持刷新/直达 hash）
  currentPage.value = readPageFromUrl();

  // 挂载时钟
  updateTime()
  timer = setInterval(updateTime, 1000)

  // 挂载并读取本地持久化主题设置
  const savedTheme = localStorage.getItem('theme-pref') as ThemeMode | null;
  applyTheme(savedTheme || 'auto');

  // 初始化点赞状态
  fetchLikeStatus();

  // 初始化 Canvas
  if (particleCanvas.value) {
    canvasCtx = particleCanvas.value.getContext('2d');
    resizeCanvas();
    initParticles();
    renderParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }

  // 监听浏览器返回/前进
  window.addEventListener('popstate', handlePopstate);
})

onUnmounted(() => {
  clearInterval(timer)
  if (themeAutoInterval) clearInterval(themeAutoInterval);
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('popstate', handlePopstate);
})

watch(currentPage, (next, prev) => {
  if (isHistoryNavigating.value) {
    isHistoryNavigating.value = false;
    return;
  }
  if (next !== prev) syncUrlWithPage(next);
});
</script>
