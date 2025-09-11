<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 13:06:55
-->
<template>
    <div class="w-full h-[100svh] bg-slate-50 text-slate-900 flex flex-col">
        <div class="header px-4 pt-4 pb-3 bg-white shadow-sm flex items-center gap-3">
            <div class="font-semibold text-lg">Collection Mobile</div>
            <div class="ml-auto flex items-center gap-2">
                <div class="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">Role: T1</div>
                <div class="flex items-center gap-1"><Languages class="w-4 h-4"></Languages></div>
                <a href="javascript:;" class="px-2 py-1 rounded-lg text-xs flex items-center gap-1 bg-emerald-100 text-emerald-700"><Wifi class="w-4 h-4"></Wifi></a>
                <a href="javascript:;" class="p-2 rounded-lg bg-emerald-100 text-emerald-700"><Bell class="w-4 h-4"></Bell></a>
                <a href="javascript:;" class="px-2 py-1 rounded-lg text-xs bg-slate-100 flex items-center gap-1"><History class="w-4 h-4"></History> Sync(0)</a>
                <a href="javascript:;" class="px-2 py-1 rounded-lg text-xs bg-slate-100 hidden sm:flex items-center gap-1"><Bell class="w-4 h-4"></Bell> DND 21–08</a>
            </div>
        </div>
        <div class="p-3 bg-white border-b border-slate-200 flex items-center gap-2">
            <div class="flex-1 relative searchWarp">
                <Search class="absolute left-2 top-2.5 h-4 w-4 text-slate-400"></Search>
                <div class="searchBox pl-8 pr-3 py-2 rounded-xl bg-slate-100 w-full outline-none">
                    <van-field v-model="searchValue"  placeholder="Search case/name/phone/region" />
                </div>
               
            </div>
            <div class="relative">
                <div class="flex items-center gap-1 px-2 py-2 rounded-xl bg-slate-100 text-xs cursor-pointer" @click="showFilter =!showFilter">
                    <Funnel class="w-4 h-4"></Funnel> Filter
                </div>
                <div class="absolute right-0 mt-2 w-56 p-3 bg-white border rounded-xl shadow text-xs space-y-2 z-10" v-if="showFilter">
                    <div>
                        <div class="text-[11px] mb-1">
                            Risk
                        </div>
                        <div class="w-full bg-slate-100 rounded-lg px-2 py-1 slectBox">
                            <van-dropdown-menu>
                                <van-dropdown-item v-model="slectValue" :options="slectOption" />
                            </van-dropdown-menu>
                        </div>
                    </div>
                    <div>
                        <div class="text-[11px] mb-1">
                            DPD ≥
                        </div>
                        <div class="w-full bg-slate-100 rounded-lg px-2 py-1 dpd">
                            <van-field v-model="dpdValue"  />
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <a href="javascript:;" class="px-2 py-1 bg-slate-100 rounded-lg">Reset</a>
                        <a href="javascript:;" class="px-2 py-1 bg-indigo-600 text-white rounded-lg">Save view</a>
                    </div>
                </div>
              
            </div>
            <a href="javascript:;" class="p-2 rounded-xl bg-slate-100">
                <RefreshCw class="w-4 h-4"></RefreshCw>
            </a>
        </div>
        <template v-if="showMod0">
            <div class="flex-1 overflow-y-auto">
                <div class="p-3 space-y-3">
                    <div class="grid grid-cols-3 gap-3">
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">
                                PTP due today
                            </div>
                            <div class="text-xl font-semibold mt-1">
                                0
                            </div>
                            <div class="text-xs text-slate-400 mt-0.5">
                                Need confirmation
                            </div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">
                                PTP due today
                            </div>
                            <div class="text-xl font-semibold mt-1">
                                0
                            </div>
                            <div class="text-xs text-slate-400 mt-0.5">
                                Need confirmation
                            </div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">
                                PTP due today
                            </div>
                            <div class="text-xl font-semibold mt-1">
                                0
                            </div>
                            <div class="text-xs text-slate-400 mt-0.5">
                                Need confirmation
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 text-sm font-semibold text-slate-700">
                        My queue (top by DPD)
                    </div>
                    <div class="space-y-2" v-for="(item,index) in userList" :key="index +665">
                        <div class="p-2 rounded-2xl bg-white border border-slate-200 text-[13px] leading-tight">
                            <div class="flex items-start gap-2">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <div class="font-semibold truncate">
                                            Demo User 9007
                                        </div>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">DPD  29</span>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">Friendly</span>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Risk H</span>
                                    </div>
                                    <div class="text-xs text-slate-500 mt-0.5">
                                        +234 8022009018 · ₦415,139 · Abuja
                                    </div>
                                    <div class="mt-1 text-xs">
                                        PTP: 
                                    </div>
                                </div>
                                <a href="javascript:;" class="p-2 rounded-xl bg-slate-100 min-w-[48px] min-h-[48px]" @click="sideHandle">
                                    <ChevronRight class="w-4 h-4"></ChevronRight>
                                </a>
                            </div>
                            <div class="flex items-center gap-2 mt-2">
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-emerald-600 text-white flex items-center justify-center min-h-[44px]"><Phone class="w-4 h-4"></Phone> </a>
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center min-h-[44px]"><MessageCircle class="w-4 h-4"></MessageCircle> </a>
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-slate-100 flex items-center justify-center min-h-[44px]"><FileText class="w-4 h-4"></FileText> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        
        <template v-if="showMod1">
            <div class="flex-1 overflow-y-auto">
                <div class="p-3 space-y-2">
                    <div class="flex items-center gap-2 mb-1">
                        <a href="javascript:;" class="px-2 py-1 text-xs rounded bg-slate-100">Select all</a>
                        <a href="javascript:;" class="px-2 py-1 text-xs rounded bg-slate-100">Clear</a>
                        <div class="ml-auto text-xs text-slate-500">
                            Selected:  0
                        </div>
                    </div>
                    <div class="overflow-y-auto  space-y-2" style="height: calc(-220px + 100svh);">
                        <div class="p-2 rounded-2xl bg-white border border-slate-200 text-[13px] leading-tight" v-for="(item,index) in userList" :key="index +65">
                            <div class="flex items-start gap-2">
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <div class="font-semibold truncate">
                                            Demo User 9007
                                        </div>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">DPD 29</span>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">Friendly</span>
                                        <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">Risk H</span>
                                    </div>

                                    <div class="text-xs text-slate-500 mt-0.5">
                                        +234 8022009018 · ₦415,139 · Abuja
                                    </div>
                                    <div class="mt-1 text-xs">
                                        PTP: 
                                    </div>
                                </div>
                                <a @click="sideHandle" href="javascript:;" class="p-2 rounded-xl bg-slate-100 min-w-[48px] min-h-[48px]"><ChevronRight class="w-4 h-4"></ChevronRight></a>
                            </div>
                            <div class="flex items-center gap-2 mt-2">
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-emerald-600 text-white flex items-center justify-center min-h-[44px]"><Phone class="w-4 h-4"></Phone> </a>
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center min-h-[44px]"><MessageCircle class="w-4 h-4"></MessageCircle> </a>
                                <a href="javascript:;" class="flex-1 py-2 rounded-xl bg-slate-100 flex items-center justify-center min-h-[44px]"><FileText class="w-4 h-4"></FileText> </a>
                            </div>
                            <div class="mt-2">
                                <div class="flex gap-2 mt-2">
                                    <a href="javascript:;" class="p-2 rounded-xl bg-slate-100"><ClipboardList class="w-4 h-4"></ClipboardList> </a>
                                    <a href="javascript:;" class="p-2 rounded-xl bg-indigo-600 text-white"><SquareCheckBig class="w-4 h-4"></SquareCheckBig></a>
                                    <a href="javascript:;" class="p-2 rounded-xl bg-amber-600 text-white"><Gavel class="w-4 h-4"></Gavel> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="showMod2">
            <div class="flex-1 overflow-y-auto">
                <div class="p-3 space-y-2">
                    <div class="p-3 rounded-2xl bg-white border" v-for="(item,index) in userList" :key="index +8">
                        <div class="text-sm font-semibold">
                            waiver · AP-1001
                        </div>
                        <div class="text-xs text-slate-500">
                            Case C-230014 · Applicant A-1001 · 2025/9/10 15:50:46
                        </div>
                        <div class="text-sm mt-1">
                            Suggestion: Waive late fee 10%
                        </div>
                        <div class="mt-2 text-[11px] text-slate-500">
                            Trail: 1 step(s)
                        </div>
                        <div class="flex gap-2 mt-2">
                            <a href="javascript:;" class="px-3 py-1 rounded-xl bg-slate-100 text-xs">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="showMod3">
            <div class="flex-1 overflow-y-auto">
                <div class="p-3 space-y-3">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">Total Due</div>
                            <div class="text-xl font-semibold mt-1">₦20,238,162</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">Cases</div>
                            <div class="text-xl font-semibold mt-1">₦20,238,162</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">PTP (pending)</div>
                            <div class="text-xl font-semibold mt-1">1</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">PTP (kept)</div>
                            <div class="text-xl font-semibold mt-1">0</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">DPD ≥ 15</div>
                            <div class="text-xl font-semibold mt-1">50</div>
                        </div>
                        <div class="p-3 rounded-2xl bg-white border border-slate-200">
                            <div class="text-xs text-slate-500">Hit Rate (mock)</div>
                            <div class="text-xl font-semibold mt-1">38%</div>
                            <div class="text-xs text-slate-400 mt-0.5">Connected / Calls</div>
                        </div>
                    </div>
                    <div class="p-3 rounded-2xl bg-white border">
                        <div class="text-sm font-semibold mb-2">Distribution (DPD)</div>
                        <div class="flex items-end gap-2 h-28">
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-indigo-200 rounded-t" style="height: 140px;">

                                </div>
                                <div class="text-[10px] mt-1">
                                    0-4
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-indigo-200 rounded-t" style="height: 116px;">

                                </div>
                                <div class="text-[10px] mt-1">
                                    0-4
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-indigo-200 rounded-t" style="height: 128px;">

                                </div>
                                <div class="text-[10px] mt-1">
                                    0-4
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-indigo-200 rounded-t" style="height: 200px;">

                                </div>
                                <div class="text-[10px] mt-1">
                                    0-4
                                </div>
                            </div>
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-indigo-200 rounded-t" style="height: 416px;">
                                </div>
                                <div class="text-[10px] mt-1">
                                    0-4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="showMod4">
            <div class="flex-1 overflow-y-auto">
                <div class="p-6 text-slate-500 text-sm">
                    QA review page (placeholder) — future: call recording, transcription, scoring.
                </div>
            </div>
        </template>
        <div class="grid grid-cols-5 bg-white border-t border-slate-200" >
            <a @click="navHandle('0')" href="javascript:;" class="flex flex-col items-center py-2 text-xs text-indigo-600" :class=" modTabIndex == 0 ? 'text-indigo-600' : 'text-slate-500'">
                <Clock class="w-5 h-5"></Clock>
                <div class="mt-0.5">
                    Today
                </div>
            </a>
            <a @click="navHandle('1')" href="javascript:;" class="flex flex-col items-center py-2 text-xs" :class=" modTabIndex == 1 ? 'text-indigo-600' : 'text-slate-500'">
                <ClipboardList class="w-5 h-5"></ClipboardList>
                <div class="mt-0.5">
                    Queues
                </div>
            </a>
            <a @click="navHandle('2')" href="javascript:;" class="flex flex-col items-center py-2 text-xs" :class=" modTabIndex == 2 ? 'text-indigo-600' : 'text-slate-500'">
                <Gavel class="w-5 h-5"></Gavel>
                <div class="mt-0.5">
                    Approvals
                </div>
            </a>
            <a @click="navHandle('3')" href="javascript:;" class="flex flex-col items-center py-2 text-xs" :class=" modTabIndex == 3 ? 'text-indigo-600' : 'text-slate-500'">
                <Activity class="w-5 h-5"></Activity>
                <div class="mt-0.5">
                    Reports
                </div>
            </a>
            <a @click="navHandle('4')" href="javascript:;" class="flex flex-col items-center py-2 text-xs" :class=" modTabIndex == 4 ? 'text-indigo-600' : 'text-slate-500'">
                <Star class="w-5 h-5"></Star>
                <div class="mt-0.5">
                    QA
                </div>
            </a>
        </div>

        <!-- 侧边栏弹窗 -->
        <div class="fixed inset-0 bg-black/40 flex" v-if="showSide">
            <div class="ml-auto h-full w-[92%] sm:w-[420px] bg-white rounded-l-3xl shadow-xl flex flex-col">
                <div class="flex items-center gap-2 p-3 border-b">
                    <a href="javascript:;" class="p-2" @click="hideSideHandle">
                        <ChevronLeft class="w-4 h-4"></ChevronLeft>
                    </a>
                    <div class="font-semibold">Demo User 9007 · ₦415,139</div>
                    <div class="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-slate-100">
                        DPD 29
                    </div>
                </div>
                <div class="px-3">
                    <div class="grid grid-cols-5 bg-slate-100 rounded-xl p-1 text-xs sideTab">
                        <a @click="sideTabHandle('0')" href="javascript:;" class="py-1 rounded-lg " :class=" sideTabIndex == 0 ? 'bg-white shadow' : ''">info</a>
                        <a @click="sideTabHandle('1')" href="javascript:;" class="py-1 rounded-lg" :class=" sideTabIndex == 1 ? 'bg-white shadow' : ''">contacts</a>
                        <a  @click="sideTabHandle('2')" href="javascript:;" class="py-1 rounded-lg" :class=" sideTabIndex == 2 ? 'bg-white shadow' : ''">timeline</a>
                        <a  @click="sideTabHandle('3')" href="javascript:;" class="py-1 rounded-lg" :class=" sideTabIndex == 3 ? 'bg-white shadow' : 'text-slate-500'">ptp</a>
                        <a @click="sideTabHandle('4')" href="javascript:;" class="py-1 rounded-lg" :class=" sideTabIndex == 4 ? 'bg-white shadow' : ''">requests</a>
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto p-3 pb-28">
                    <template v-if="showSideMod0">
                        <div class="space-y-3">
                            <div class="p-3 rounded-xl border bg-white">
                                <div class="text-sm font-semibold">
                                    Key Info
                                </div>
                                <div class="text-xs text-slate-600 mt-1">
                                    Phone: +234 8022009018
                                </div>
                                <div class="text-xs text-slate-600">
                                    Amount Due: ₦415,139
                                </div>
                                <div class="text-xs text-slate-600">
                                    Strategy: Friendly
                                </div>
                                <div class="text-xs text-slate-600">
                                    PTP: none
                                </div>
                            </div>
                            <div class="p-3 rounded-xl border bg-white">
                                <div class="text-sm font-semibold mb-2">
                                    Quick Actions
                                </div>
                                <div class="flex gap-2 flex-wrap">
                                    <a href="javascript:;" class="px-3 py-2 rounded-xl bg-indigo-600 text-white text-xs">Set PTP</a>
                                    <a href="javascript:;" class="px-3 py-2 rounded-xl bg-emerald-600 text-white text-xs">Send Pay Link</a>
                                    <a href="javascript:;" class="px-3 py-2 rounded-xl bg-slate-100 text-xs">Upload Receipt</a>
                                    <a href="javascript:;" class="px-3 py-2 rounded-xl text-xs bg-amber-600 text-white">Escalate</a>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-if="showSideMod1">
                        <div class="space-y-2">
                            <div class="p-3 rounded-xl border bg-white flex items-center gap-3">
                                <div class="flex-1 min-w-0">
                                    <div class="text-sm font-medium truncate">
                                        Demo User 9007
                                    </div>
                                    <div class="text-xs text-slate-500">
                                        +2348094699942
                                    </div>
                                </div>
                                <a href="javascript:;" class="p-2 rounded-xl bg-emerald-600 text-white"><Phone class="w-4 h-4"></Phone></a>
                                <a href="javascript:;" class="p-2 rounded-xl bg-emerald-600 text-white"><MessageCircle class="w-4 h-4"></MessageCircle></a>
                            </div>
                        </div>
                    </template>


                    <template v-if="showSideMod2">
                        <div class="space-y-2">
                            <div class="p-3 rounded-xl border bg-white">
                                <div class="text-[11px] text-slate-500">2025/9/10 15:50:46 .<span class="uppercase">note </span>· synced</div>
                                <div class="text-sm mt-1">
                                    Imported (demo)
                                </div>
                            </div>
                        </div>
                    </template>

                    <template v-if="showSideMod3">
                        <div class="space-y-2">
                            <div class="text-sm text-slate-500">
                                No PTP set. Use <b>Set PTP</b> in Quick Actions.
                            </div>
                        </div>
                    </template>

                    <template v-if="showSideMod4">
                        <div class="space-y-2">
                            <div class="p-3 rounded-xl border bg-white flex items-center justify-between text-sm">
                                <div>Waiver (late fee)</div>
                                <a href="javascript:;"class="px-3 py-1 rounded-lg text-xs bg-indigo-600 text-white">Request</a>
                            </div>
                        </div>
                    </template>
                </div>
               
              
                <div class="sticky bottom-0 left-0 right-0 bg-white border-t p-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+12px)]">
                    <div class="grid grid-cols-4 gap-2 text-sm">
                        <a href="javascript:;" class="py-2 rounded-xl bg-emerald-600 text-white flex items-center justify-center min-h-[44px]">
                            <Phone class="w-4 h-4"></Phone>
                        </a>
                        <a href="javascript:;" class="py-2 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center min-h-[44px]">
                            <MessageCircle class="w-4 h-4"></MessageCircle>
                        </a>
                        <a href="javascript:;" class="py-2 rounded-xl bg-slate-100 flex items-center justify-center min-h-[44px]">
                            <ClipboardList class="w-4 h-4"></ClipboardList>
                        </a>
                        <a href="javascript:;" class="py-2 rounded-xl bg-indigo-600 text-white flex items-center justify-center min-h-[44px]">
                            <SquareCheckBig class="w-4 h-4"></SquareCheckBig>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <Popup v-model="showRequestDialog" position="bottom" :close-on-click-overlay="false" class="reduceDialog" @click-overlay="hide">
            <div class="w-full bg-white rounded-t-3xl p-4 space-y-3">
                <div class="flex items-center justify-between">
                    <div class="font-semibold"></div>
                    <a href="javascript:;" class="p-2" @click="hide">
                        <X class="w-5 h-5"></X>
                    </a>
                </div>
                <div>
                    <div class="text-xs mb-1">Percent *</div>
                    <div class="w-full bg-slate-100 rounded-xl px-3 py-2 text-sm flex items-center justify-between">
                        <van-field v-model="percentValue"   />
                    </div>
                    <div class="text-[11px] text-slate-500 mt-1">
                        ≤20% preferred
                    </div>
                </div>
                <a href="javascript:;" class="w-full py-2 rounded-xl bg-indigo-600 text-white text-sm block text-center">
                    Submit
                </a>
            </div>
        </Popup>

    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>