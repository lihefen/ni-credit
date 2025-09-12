<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 13:06:55
-->
<template>
    <div class="main min-h-screen bg-slate-50 pb-28">
        <div class="sticky top-0 bg-white border-b p-3 flex items-center gap-2">
            <Zap class="w-5 h-5" />
            <h1 class="font-semibold flex-1">TelSales NG</h1>
            <a href="javascript:;" class="h-8 w-8 border rounded flex items-center justify-center"><RefreshCw class="w-5 h-5" /></a>
        </div>
        <div class="bg-white border-b flex text-sm">
            <a @click="tabHandle(0)" href="javascript:;" class="flex items-center justify-center flex-1 py-2 border-b-2 font-semibold" :class="{'border-b-2 border-emerald-600':tabIndex === 0}">Queue</a>
            <a @click="tabHandle(1)" href="javascript:;" class="flex items-center justify-center flex-1 py-2" :class="{'border-b-2 border-emerald-600':tabIndex === 1}">KPI</a>
        </div>
        <template v-if="showEnter">
            <div class="p-4 space-y-3">
                <div class="flex justify-between items-start">
                    <div>
                        <div class="font-medium">Ngozi · 2348•••00</div>
                        <div class="text-xs text-slate-500">
                            CASE-0020 · DPD 20 · ₦86,500
                        </div>
                    </div>
                    <a @click="showEnter = false" href="javascript:;" class="h-8 w-8 rounded border flex items-center justify-center"><X class="w-5 h-5" /></a>
                </div>
                <div class="grid grid-cols-2 gap-2 text-sm">
                    <a href="javascript:;" class="h-10 border rounded flex items-center justify-center gap-1"><Phone class="w-4 h-4" /></a>
                    <a href="javascript:;" class="h-10 rounded bg-emerald-600 text-white flex items-center justify-center gap-1"><MessageCircle class="w-4 h-4" /></a>
                </div>
                <div class="space-y-3">
                    <div class="text-sm font-medium">
                        Call Result
                    </div>
                    <div class="w-full h-10 border rounded px-2 text-sm">
                        <van-dropdown-menu>
                            <van-dropdown-item v-model="value1" :options="option1" />
                        </van-dropdown-menu>

                    </div>
                    <div class="w-full border rounded p-2 text-sm">
                        <van-field v-model="noteValue" type="textarea" placeholder="Notes…" />
                    </div>
                    <a href="javascript:;" class="flex items-center justify-center h-10 w-full rounded text-white bg-slate-300">Save & Next</a>
                </div>
            </div>
        </template>
        <template v-if="tabIndex === 0 && !showEnter">
            <div>
                <div class="bg-white border-b p-3 flex items-center gap-2">
                    <div class="bg-slate-100 rounded-lg p-1 text-xs flex items-center gap-1">
                        <a href="javascript:;" class="px-2 h-8 rounded bg-white border flex items-center justify-center">ALL</a>
                        <a href="javascript:;" class="px-2 h-8 rounded flex items-center justify-center">P1</a>
                        <a href="javascript:;" class="px-2 h-8 rounded flex items-center justify-center">P2</a>
                        <a href="javascript:;"class="px-2 h-8 rounded flex items-center justify-center">P3</a>
                    </div>
                    <div class="flex-1 h-9 px-2 border rounded text-sm searchBox">
                        <van-field v-model="searchValue"  placeholder="Search name/ID/phone…" />
                    </div>
                </div>
                <div class="p-3 space-y-3">
                    <div class="bg-white rounded-xl p-3 border shadow-sm space-y-2" v-for="(item,index) in list" :key="index + 90">
                        <div class="flex justify-between items-start">
                            <div>
                                <div class="font-medium text-[15px]">Ngozi · 2348•••23</div>
                                <div class="text-xs text-slate-400">CASE-0020</div>
                            </div>
                            <div class="flex flex-col items-end gap-1 text-xs">
                                <span class="px-2 py-0.5 rounded bg-slate-100">DPD  20</span>
                                <span class="px-2 py-0.5 rounded bg-slate-100">₦86,500</span>
                                <span class="px-2 py-0.5 rounded bg-slate-50 text-slate-500">No Answer</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-xs">
                            <a href="javascript:;" class="h-9 border rounded flex items-center justify-center gap-1 "><Phone class="w-4 h-4" /> Call</a>
                            <a href="javascript:;" class="h-9 rounded bg-emerald-600 text-white flex items-center justify-center gap-1"><MessageCircle class="w-4 h-4" />  WA</a>
                            <a href="javascript:;"class="h-9 rounded bg-slate-900 text-white flex items-center justify-center" @click="showEnter = true"> Enter</a>
                        </div>
                    </div>
                </div>
                    
            </div>
        </template>
        <template v-if="tabIndex === 1">
            <div class="p-4 space-y-3 text-sm">
                <div class="bg-white rounded-xl p-3 border shadow-sm">
                    <div class="font-medium mb-2">
                        My KPI Today
                    </div>
                    <div class="flex justify-around">
                        <div>
                            Calls: <span class="font-semibold">0</span>
                        </div>
                        <div>
                            PTP:  <span class="font-semibold">0</span>
                        </div>
                        <div>
                            Rejected:  <span class="font-semibold">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>