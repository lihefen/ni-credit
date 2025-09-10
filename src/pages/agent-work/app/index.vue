<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 13:06:55
-->
<template>
    <div class="main min-h-screen bg-gray-100 p-4 space-y-4">
        <template v-if="!showLeadDetail">
            <div>
                <div class="relative">
                    <a @click="showSetPop = !showSetPop" href="javascript:;" class="setBtn absolute -top-2 right-0 text-xs px-2 py-1 bg-white rounded-xl shadow flex items-center gap-1"><Settings2 class="w-4 h-4 text-e2e8f0"></Settings2>KPI</a>
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
                                <div class="text-xs text-gray-500 flex items-center gap-1"><Award class="w-4 h-4 text-e2e8f0"></Award>Applied</div>
                                <div class="text-[10px] text-gray-300">Filter</div>
                            </div>
                            <div class="mt-1 text-xl font-bold">4</div>
                            <div class="text-[11px] text-gray-500">申请数</div>
                        </div>
                        <div class="box bg-white rounded-2xl p-3 shadow hover:shadow-md text-left">
                            <div class="flex items-center justify-between">
                                <div class="text-xs text-gray-500 flex items-center gap-1"><Award class="w-4 h-4 text-e2e8f0"></Award>Expected Comm.</div>
                                <div class="text-[10px] text-gray-300">Filter</div>
                            </div>
                            <div class="mt-1 text-xl font-bold">₦16,800</div>
                            <div class="text-[11px] text-gray-500">≈3%</div>
                        </div>
                    
                    </div>

                    <div class="setPop absolute right-0 mt-2 bg-white rounded-xl shadow p-3 text-xs grid grid-cols-2 gap-2 z-10" v-if="showSetPop">
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                        <van-checkbox name="a"  shape="square">复选框 a</van-checkbox>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow p-2 flex gap-2 text-sm overflow-x-auto items-center">
                    <a href="javascript:;" class="px-3 py-1.5 rounded-xl whitespace-nowrap bg-black text-white">All</a>
                    <a href="javascript:;" class="px-3 py-1.5 rounded-xl whitespace-nowrap bg-gray-100">P1</a>
                    <a href="javascript:;" class="px-3 py-1.5 rounded-xl whitespace-nowrap bg-gray-100">COOLING</a>
                    <a href="javascript:;" class="px-3 py-1.5 rounded-xl whitespace-nowrap bg-gray-100">APPLIED</a>
                    <van-checkbox v-model="checkedAll"  shape="square">全选当前筛选</van-checkbox>
                </div>
                <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-2 text-xs flex items-center gap-2">
                    <span class="font-medium">已选 4 条</span>
                    <a href="javascript:;" class="px-2 py-1 rounded bg-white border">回访 +2h</a>
                    <a href="javascript:;" class="px-2 py-1 rounded bg-white border">冷却 24h</a>
                    <a href="javascript:;" class="px-2 py-1 rounded bg-white border">批量：No Answer</a>
                    <a href="javascript:;" class="px-2 py-1 rounded bg-white border">批量：Refused:Rate</a>
                    <a href="javascript:;" class="ml-auto px-2 py-1 rounded bg-white border">清空选择</a>
                </div>
                <div class="userMod space-y-3" v-for="(item,index) in userList" :key="index + 78">
                    <div class="bg-white rounded-2xl p-3 shadow hover:shadow-md transition ring-1 ring-rose-300 mt-3">
                        <div class="flex justify-between">
                            <div class="flex items-start gap-2">
                                <div  class="w-4 h-4 checkBox"><van-checkbox  v-model="check1"  shape="square"></van-checkbox></div>
                             
                                <div>
                                    <div class="font-semibold">Ada Obi · +2348•••10</div>
                                    <div class="text-xs text-gray-500">NG-APP-1000 · new</div>
                                </div>
                            </div>
                            <div class="flex gap-1 text-xs items-center">
                                <span class="px-2 py-0.5 rounded bg-rose-100 text-rose-700">P1</span>
                                <span class="px-2 py-0.5 rounded bg-gray-100">Risk 0</span>
                                <span class="px-2 py-0.5 rounded bg-rose-200 text-rose-700">SLA 00:45</span>
                            </div>
                        </div>
                        <div class="mt-1 text-lg font-bold">
                            ₦100,000
                        </div>
                        <div class="flex gap-2 mt-2 text-sm">
                            <a href="javascript:;" class="flex-1 border rounded py-1 flex items-center justify-center gap-1"><Phone class="w-4 h-4 text-e2e8f0"></Phone>Call</a>
                            <a href="javascript:;" class="flex-1 bg-emerald-600 text-white rounded py-1 flex items-center justify-center gap-1"><MessageCircle class="w-4 h-4 text-e2e8f0"></MessageCircle>WA</a>
                            <a href="javascript:;" class="flex-1 bg-black text-white rounded py-1 flex items-center justify-center gap-1">Enter <ArrowRight class="w-4 h-4 text-e2e8f0"></ArrowRight></a>
                        </div>
                        <div class="mt-2 grid grid-cols-3 gap-2 text-xs">
                            <a href="javascript:;" class="px-2 py-1 rounded bg-gray-100" @click="leadDetailHandle">No Answer</a>
                            <a href="javascript:;" class="px-2 py-1 rounded bg-gray-100" @click="leadDetailHandle">Invalid</a>
                            <a href="javascript:;" class="px-2 py-1 rounded bg-gray-100" @click="leadDetailHandle">Refused: Rate</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="showLeadDetail">
            <div class="relative space-y-4">
                <div class="header flex items-center gap-2">
                    <a href="javascript:;" @click="backHandle" class="p-2 rounded-xl bg-white shadow"><ChevronLeft class="w-4 h-4 text-e2e8f0"></ChevronLeft></a>
                    <h1 class="font-bold">Lead Detail</h1>
                </div>
            
                <div class="bg-white rounded-2xl shadow p-4 space-y-2">
                    <div class="font-semibold text-lg">Ibrahim Bello · +2348•••12</div>
                    <div class="text-xs text-gray-500">>NG-APP-1002 · applied</div>
                    <div class="flex gap-2 text-xs">
                        <span class="px-2 py-0.5 rounded bg-gray-100">P2</span>
                        <span class="px-2 py-0.5 rounded bg-gray-100">Risk 2</span>
                        <span class="px-2 py-0.5 rounded bg-rose-200 text-rose-700">SLA 00:45</span>                
                    </div>
                    <div class="text-lg font-bold">
                        ₦110,000
                    </div>
                    <div class="flex gap-2 mt-2 text-sm">
                        <a href="javascript:;"class="flex-1 border rounded py-2 flex items-center justify-center gap-1"><Phone class="w-4 h-4 text-e2e8f0"></Phone>Call</a>
                        <a href="javascript:;"class="flex-1 bg-emerald-600 text-white rounded py-2 flex items-center justify-center gap-1"><MessageCircle class="w-4 h-4 text-e2e8f0"></MessageCircle>WA</a>
                    </div>
                </div>

                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <div class="flex items-center gap-2 text-sm text-yellow-800 font-medium">
                        <TriangleAlert class="w-4 h-4 "></TriangleAlert> Compliance Reminder
                    </div>
                    <ul class="list-disc ml-5 text-xs text-gray-700 mt-1 space-y-1">
                        <li>自报身份 + 平台介绍 (CBN要求)</li>
                        <li>避免使用威胁/骚扰性语言</li>
                        <li>严禁泄露客户信息 (NDPR)</li>
                    </ul>
                </div>

                <div class="bg-white rounded-2xl shadow p-4 space-y-3">
                    <h2 class="font-semibold flex items-center gap-2">
                        <ClipboardList class="w-4 h-4 text-e2e8f0"></ClipboardList>  Post-Interaction Result
                    </h2>
                    <div class="grid grid-cols-3 gap-2 text-sm">
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Applied</a>
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Interested</a>
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Refused</a>
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Invalid</a>
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Call back</a>
                        <a href="javascript:;"class="px-2 py-1 rounded bg-gray-100">Awaiting reply</a>
                    </div>
                    <div class="space-y-2">
                        <div class="text-xs text-gray-600">Select Reason / Sub-tag</div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <a href="javascript:;" class="px-2 py-1 rounded text-xs bg-emerald-600 text-white">No answer</a>
                        <a href="javascript:;" class="px-2 py-1 rounded text-xs bg-gray-100">No answer</a>
                        <a href="javascript:;" class="px-2 py-1 rounded text-xs bg-gray-100">No answer</a>
                    </div>
                    <div class="text-[11px] text-gray-600">
                        >建议冷却：120 分钟<a href="javascript:;" class="underline">一键使用</a>
                    </div>
                    <div class="w-full border rounded p-2 text-sm">
                        <van-field   v-model="textareaValue"  type="textarea" placeholder="Add note (optional)" />
                    </div>
                    <div class="space-y-1">
                        <div class="flex gap-2 text-xs items-center">
                            <CalendarDays class="w-4 h-4 text-e2e8f0"></CalendarDays>  Next Follow-up (必填)
                            <div class="icon-calendar"></div>
                        </div>
                        <div class="w-full border rounded p-2 text-sm">
                            <van-field v-model="calendarValue"/>
                        </div>
                        <div class="flex gap-2 mt-2 text-xs">
                            <a href="javascript:;" class="px-2 py-1 rounded bg-gray-100">+2h</a>
                            <a href="javascript:;" class="px-2 py-1 rounded bg-gray-100">Tomorrow 10:00</a>
                        </div>
                    </div>
                    <div class="flex gap-2 mt-2">
                        <a href="javascript:;" class="flex-1 border rounded py-2 flex items-center justify-center gap-1"><X class="w-4 h-4 text-e2e8f0"></X>Clear</a>
                        <a href="javascript:;" class="flex-1 rounded py-2 flex items-center justify-center gap-1 bg-emerald-600 text-white"><Check class="w-4 h-4 text-e2e8f0"></Check>Clear</a>
                    </div>
                </div>
                <div class="bg-white rounded-2xl shadow p-4">
                    <h2 class="font-semibold flex items-center gap-2"><FileText class="w-4 h-4 text-e2e8f0"></FileText>   Communication History</h2>
                    <ul class="space-y-2 mt-2 text-sm">
                        <li class="flex justify-between">
                            Today 10:20 CALL
                        </li>
                        <li class="flex justify-between">
                            No Answer
                        </li>
                    </ul>
                </div>
            </div>
        </template>
      
        <van-calendar v-model="showCalendar" @confirm="onConfirmCalendar" />
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>