<!-- 帶 title slot 的共用區塊元件 -->
<template>
    <div class="card shadow">
        <div class="card-header">
            <!-- 具名插槽，供外部客製化標題結構 -->
             <slot name="title">預設區塊標題</slot>
        </div>
        <div class="card-body">
            <!-- 預設插槽，放置主要內容 -->
             <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #fff;
}
.card-header {
  padding: 12px 20px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f8f9fa;
  font-weight: bold;
}
.card-body {
  padding: 20px;
}
.shadow {
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
</style>