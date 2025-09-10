<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 13:06:55
-->
<template>
    <div class="main">
        <!-- 原有的内容 -->
        <div class="kpiMod grid grid-cols-2 md:grid-cols-6 gap-2">
            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><WalletCards class="w-4 h-4 text-e2e8f0"></WalletCards>Queue</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">16</div>
                <div class="text-[11px] text-gray-500">待跟进</div>
            </div>

            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><TriangleAlert class="w-4 h-4 text-e2e8f0"></TriangleAlert>P1</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">6</div>
                <div class="text-[11px] text-gray-500">高优先级</div>
            </div>

            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><Clock class="w-4 h-4 text-e2e8f0"></Clock>SLA ≤60s</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">8</div>
                <div class="text-[11px] text-gray-500">紧急案件</div>
            </div>
            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><Info class="w-4 h-4 text-e2e8f0"></Info>Cooling</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">7</div>
                <div class="text-[11px] text-gray-500">15m 冷却</div>
            </div>
            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><WalletCards class="w-4 h-4 text-e2e8f0"></WalletCards>Queue</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">16</div>
                <div class="text-[11px] text-gray-500">待跟进</div>
            </div>
            <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                <div class="flex items-center justify-between">
                    <div class="text-xs text-gray-500 flex items-center gap-1"><WalletCards class="w-4 h-4 text-e2e8f0"></WalletCards>Queue</div>
                    <div class="text-[10px] text-gray-300">Filter</div>
                </div>
                <div class="mt-1 text-xl font-bold">16</div>
                <div class="text-[11px] text-gray-500">待跟进</div>
            </div>
           
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>