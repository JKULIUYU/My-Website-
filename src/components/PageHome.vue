<template>
  <!-- 近期进展：默认首页视图 -->
  <div class="flex flex-col gap-6">
    <!-- 图像/多媒体横幅容器 -->
    <BentoCard :hoverable="false" paddingClass="p-0" class="h-40 xl:h-48">
      <div class="w-full h-full bg-linear-to-r from-[#dcedc1] via-[#a8e6cf] to-[#ffd3b6] opacity-40 relative"></div>
      <div class="absolute inset-0 flex items-center justify-center text-[#3d5454] font-mono text-xl xl:text-3xl tracking-widest font-bold overflow-hidden p-6 text-center leading-relaxed opacity-80 backdrop-blur-sm">
        std::cout &lt;&lt; "Control is Power" &lt;&lt; std::endl;
      </div>
    </BentoCard>

    <!-- 个人名片与核心问候 -->
    <BentoCard class="flex flex-col items-center justify-center py-10 xl:py-16 text-center shadow-sm">
      <div class="mb-8 relative z-10">
         <div class="relative inline-block group/avatar cursor-pointer">
           <img :src="avatarImg" alt="Avatar" class="w-20 h-20 rounded-full border-2 border-[var(--text-main)]/10 shadow-md transition-transform duration-500 group-hover/avatar:scale-110 group-hover/avatar:rotate-3" />
           <div class="absolute -top-3 -right-6 bg-[var(--text-main)] px-3 py-1 rounded-full opacity-0 transform translate-y-2 transition-all duration-300 group-hover/avatar:opacity-100 group-hover/avatar:translate-y-0 group-hover/avatar:-rotate-6 shadow-lg">
             <span class="text-[var(--bg-gradient-start)] text-xs font-bold tracking-widest">Hi! Maker</span>
           </div>
         </div>
      </div>
      <h2 class="text-xl xl:text-2xl font-medium text-[var(--text-main)] mb-2">{{ timeGreeting }}</h2>
      <h1 class="text-3xl xl:text-4xl font-black text-[var(--text-main)] tracking-tight">
        I'm <span class="text-[var(--accent-color)]">jkuliuyu</span> , Nice to meet you!
      </h1>
    </BentoCard>

    <!-- 外部社交/代码传送门行 -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="col-span-1 rounded-2xl bg-[var(--accent-color)] text-white p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-[var(--accent-hover)] transition-colors shadow-sm font-medium">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
        开发日志
      </div>
      <a href="https://github.com/jkuliuyu" target="_blank" class="col-span-1 rounded-2xl bg-[#24292e] text-white p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-black transition-colors shadow-sm font-medium no-underline">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
        Github
      </a>
      <div class="col-span-1 rounded-2xl bg-[#fb7299] text-white p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#e4668a] transition-colors shadow-sm font-medium">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.48c.053-.071.116-.142.186-.213l2.84-2.827c.267-.249.573-.373.92-.373.347 0 .653.124.92.373l.027.027c.249.249.373.551.373.907 0 .356-.124.658-.373.907l-1.387 1.2Z" opacity=".8"></path></svg>
        Bilibili
      </div>
      <div class="col-span-1 rounded-2xl bg-white/60 text-[var(--accent-color)] border border-white/80 p-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-white transition-colors shadow-sm font-medium">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        Contact
      </div>
    </div>

    <!-- 随机推荐 -->
    <BentoCard class="mt-auto">
      <div class="text-xs text-[var(--text-muted)] mb-2 tracking-wide font-semibold">随机推荐 (Daily Picks)</div>
      <div class="flex items-center gap-4 group cursor-pointer">
        <div class="min-w-12 h-12 rounded-xl border border-[var(--accent-color)]/20 bg-[var(--text-main)]/5 flex flex-col items-center justify-center transition-colors group-hover:bg-[var(--accent-color)] group-hover:text-white">
          <span class="text-[10px] font-mono text-[var(--text-muted)] group-hover:text-white/80">ALGO</span>
          <span class="text-xs font-bold text-[var(--accent-color)] group-hover:text-white">#04</span>
        </div>
        <div>
          <div class="font-bold text-sm text-[var(--text-main)] group-hover:text-[var(--accent-color)] transition-colors">解析 PINN: 物理信息神经网络在控制中的应用</div>
          <div class="text-xs text-[var(--text-muted)] mt-1">深度学习与传统力学建模架构的碰撞，附代码实现。</div>
          <div class="text-[10px] text-[var(--text-muted)] mt-2">底层算法 / 数理建模 · 2 Mins Read</div>
        </div>
      </div>
    </BentoCard>
  </div>
</template>

<script setup lang="ts">
import BentoCard from './BentoCard.vue'
import avatarImg from '../assets/avatar.png'

defineProps<{
  timeGreeting: string
}>()
</script>
