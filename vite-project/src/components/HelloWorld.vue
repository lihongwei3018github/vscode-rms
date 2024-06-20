<script setup lang="ts">
    import { testStore } from '@/store/indes'
    const store = testStore()
    const addBtn = () => {
        store.count++
    }
</script>

<template>
    <h1>HelloWorld</h1>
    <div class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
    </div>
    <div style="font-size: 20px">
        <!-- 由于SVG图标默认不携带任何属性 -->
        <!-- 你需要直接提供它们 -->
        <Edit style="width: 1em; height: 1em; margin-right: 8px" />
        <Share style="width: 1em; height: 1em; margin-right: 8px" />
        <Delete style="width: 1em; height: 1em; margin-right: 8px" />
        <Search style="width: 1em; height: 1em; margin-right: 8px" />
    </div>
    <hr>
    <h1>{{ store.count }}</h1>
    <el-button type="primary" @click="addBtn">点击我进行累加</el-button>
</template>

<style scoped></style>
