<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 21:14:27
-->
<template>
    <div class="main min-h-[100dvh] bg-gray-50">
        <div class="sticky top-0 z-30 bg-white border-b border-gray-200">
           <div class="px-3 py-2 flex items-center gap-2">
                <a href="javascript:;" class="p-2 rounded-xl hover:bg-gray-100"><ChevronLeft class="w-5 h-5" /></a>
                <div class="text-sm text-gray-500">
                    Queue
                </div>
                <div class="ml-1 text-sm font-semibold">
                    1 / 2
                </div>
                <div class="ml-auto inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs border bg-red-50 text-red-700 border-red-200">
                    <AlarmClock class="w-4 h-4" />SLA 00:00
                </div>
                <a href="javascript:;" class="p-2 rounded-xl hover:bg-gray-100" @click="showPop = !showPop"><EllipsisVertical class="w-5 h-5" /></a>
           </div>
        </div>

        <div class="p-3 pb-28 max-w-xl mx-auto">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">
                        Applicant
                    </div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                       <User class="w-4 h-4" /> First loan
                    </span>
                </div>
                <div class="flex items-start gap-3">
                    <div class="flex-1">
                        <div class="text-lg font-semibold text-gray-900">John Okoro</div>
                        <div class="flex flex-wrap gap-2 mt-1">
                            <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><Phone class="w-4 h-4" />+2348031234567</span>
                            <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><Network class="w-4 h-4" />SIM 14 mo</span>
                            <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><Globe class="w-4 h-4" />Lagos, Lagos</span>
                        </div>
                    </div>
                    <div class="px-2 py-1 rounded-lg text-xs font-medium border bg-red-50 text-red-700 border-red-200">
                        Risk: HIGH
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-2 mt-3">
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">Application ID</div>
                        <div class="text-gray-900 font-medium font-mono">APP-240915-001</div>
                    </div>
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">Requested</div>
                        <div class="text-gray-900 font-medium">
                            ₦50,000
                        </div>
                    </div>
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">Suggested Credit</div>
                        <div class="text-gray-900 font-medium">₦40,000</div>
                    </div>
                </div>
                <div class="mt-3 flex gap-2">
                    <a href="javascript:;" class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gray-900 text-white">
                        <Phone class="w-4 h-4" />Call Applicant
                    </a>
                    <a href="javascript:;" class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 text-white">
                        <MessageCircle class="w-4 h-4" />WhatsApp
                    </a>
                </div>
                <div class="mt-2 flex items-center gap-2 text-xs">
                    <span class="text-gray-500">WA Template:</span>
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="optionValue" :options="options" />
                    </van-dropdown-menu>
                    <a href="javascript:;" class="ml-auto inline-flex items-center gap-1 text-gray-600 hover:text-gray-900"><Copy class="w-4 h-4" /> Copy BVN</a>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">KYC & Identity</div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><ShieldCheck class="w-4 h-4" /> Policy-required</span>
                </div>
                <div class="grid grid-cols-1 gap-2">
                    <div class="flex items-center justify-between p-3 rounded-xl border">
                        <div class="flex items-center gap-2">
                            <ShieldCheck class="w-4 h-4 text-emerald-600" /> 
                            <div>BVN: <span>2234••••5678</span></div>
                        </div>
                        <div class="text-xs font-medium px-2 py-1 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                            verified
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-xl border">
                        <div class="flex items-center gap-2">
                            <ShieldCheck class="w-4 h-4 text-emerald-600" /> 
                            <div>NIN:  <span>4456••••8899</span></div>
                        </div>
                        <div class="text-xs font-medium px-2 py-1 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                            verified
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-xl border">
                        <div class="flex items-center gap-2">
                            <Network class="w-4 h-4 text-emerald-600" /> 
                            <div>NIN:  <span>4456••••8899</span></div>
                        </div>
                        <div class="text-xs font-medium px-2 py-1 rounded-full border bg-emerald-50 text-emerald-700 border-emerald-200">
                            verified
                        </div>
                    </div>
                </div>
                <div class="mt-3 flex flex-wrap gap-2">
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-red-50 text-red-700 border-red-200">
                        <TriangleAlert class="w-4 h-4" /> Same device used by 3 accounts in last 30 days
                    </span>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-amber-50 text-amber-700 border-amber-200">
                        <CircleAlert class="w-4 h-4" /> Address ≠ LBS (Victoria Island vs. Lekki cluster)
                    </span>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-emerald-50 text-emerald-700 border-emerald-200">
                        <ShieldCheck class="w-4 h-4" /> BVN verified
                    </span>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">Contacts</div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"> <Users class="w-4 h-4" /> 2 records</span>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-between p-3 rounded-xl border">
                        <div>
                            <div class="font-medium text-gray-900">Mary Okoro<span class="text-gray-400">(Wife)</span></div>
                            <div class="text-sm text-gray-600">+2348091112222</div>
                        </div>
                        <div class="flex gap-2">
                            <a href="javascript:;" class="px-3 py-1 rounded-lg bg-gray-100"><Phone class="w-4 h-4" /></a>
                            <a href="javascript:;" class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900"><MessageCircle class="w-4 h-4" /></a>
                        </div>
                    </div>

                    <div class="flex items-center justify-between p-3 rounded-xl border">
                        <div>
                            <div class="font-medium text-gray-900">Peter Okoro<span class="text-gray-400">(Brother)</span></div>
                            <div class="text-sm text-gray-600">+2347015556666</div>
                        </div>
                        <div class="flex gap-2">
                            <a href="javascript:;" class="px-3 py-1 rounded-lg bg-gray-100"><Phone class="w-4 h-4" /></a>
                            <a href="javascript:;" class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900"><MessageCircle class="w-4 h-4" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">
                        Device & Location
                    </div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><Smartphone class="w-4 h-4" /> TECNO</span>
                </div>
                <div class="grid grid-cols-1 gap-2">
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">
                            OS
                        </div>
                        <div class="text-gray-900 font-medium">
                            Android 13
                        </div>
                    </div>
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">
                            IP
                        </div>
                        <div class="text-gray-900 font-medium">
                            102.89.12.45
                        </div>
                    </div>
                    <div class="flex justify-between text-sm py-1">
                        <div class="text-gray-500">
                            LBS
                        </div>
                        <div class="text-gray-900 font-medium">
                            Lagos, Lagos
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-2 mt-1">
                        <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-red-50 text-red-700 border-red-200"><TriangleAlert class="w-4 h-4" /> Multi-account device</span>
                        <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-amber-50 text-amber-700 border-amber-200"><CircleAlert class="w-4 h-4" /> GPS ≠ Address</span>
                        <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border bg-emerald-50 text-emerald-700 border-emerald-200"><ShieldCheck class="w-4 h-4" /> Not Rooted</span>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">Communication Log</div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><MessageCircle class="w-4 h-4" /> 3</span>
                </div>
                <ul class="divide-y">
                    <li class="py-2 text-sm flex items-start gap-2">
                        <Phone class="w-4 h-4" />
                        <div>
                            <div class="text-gray-900">No answer</div>
                            <div class="text-gray-500 text-xs">
                                2025/9/12 13:13:16
                            </div>
                        </div>
                    </li>
                    <li class="py-2 text-sm flex items-start gap-2">
                        <MessageCircle class="w-4 h-4" />
                        <div>
                            <div class="text-gray-900">WA template sent — Docs request</div>
                            <div class="text-gray-500 text-xs">
                                2025/9/12 13:43:16
                            </div>
                        </div>
                    </li>
                    <li class="py-2 text-sm flex items-start gap-2">
                        <Phone class="w-4 h-4" />
                        <div>
                            <div class="text-gray-900">Connected; verified address verbally</div>
                            <div class="text-gray-500 text-xs">
                                2025/9/12 14:28:16
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">Notes & Attachments</div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                        <Paperclip class="w-4 h-4" /> 2
                    </span>
                </div>
                <div class="w-full h-24 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-gray-200 text-sm text-gray-500">
                    <van-field
                        v-model="noteTextArea"
                        rows="1"
                        autosize
                        type="textarea"
                        placeholder="Reviewer notes..."
                    />
                </div>
                <div class="mt-3 flex flex-wrap gap-2">
                        <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-gray-50 text-sm"><FileText class="w-4 h-4" />ID_Front.jpg</span>
                        <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-gray-50 text-sm"><FileText class="w-4 h-4" />Utility_Bill.pdf</span>
                        <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-gray-50 text-sm"><FileText class="w-4 h-4" />+ Add attachment</span>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">
                        Approval Checklist
                    </div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
                       <ShieldCheck class="w-4 h-4" /> Must pass
                    </span>
                </div>
                <div class="checkboxGroup">
                    <div class="flex items-center gap-2 py-1 text-sm">
                        <van-checkbox shape="square" name="a">Name on ID matches applicant & selfie</van-checkbox>
                    </div>
                    <div class="flex items-center gap-2 py-1 text-sm">
                        <van-checkbox shape="square" name="a">Applicant OR contact reachable by call/WhatsApp</van-checkbox>
                    </div>
                    <div class="flex items-center gap-2 py-1 text-sm">
                        <van-checkbox shape="square" name="a">Address verified (document or LBS)</van-checkbox>
                    </div>
                    <div class="flex items-center gap-2 py-1 text-sm">
                        <van-checkbox shape="square" name="a">BVN & NIN verified / no mismatch</van-checkbox>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-3">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-sm font-semibold text-gray-700">Audit Log</div>
                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"><FileText class="w-4 h-4" /> 0</span>
                </div>
                <div class="text-sm text-gray-500">No actions yet.</div>
            </div>
        </div>

        <div class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-3 z-30">
            <div class="max-w-xl mx-auto grid grid-cols-2 gap-3">
                <a href="javascript:;" class="px-4 py-3 rounded-2xl bg-red-600 text-white font-semibold flex items-center justify-center gap-2"><X class="w-5 h-5" />Reject</a>
                <a href="javascript:;" class="px-4 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 bg-gray-200 text-gray-500 cursor-not-allowed"><Check class="w-5 h-5" /> Approve</a>
            </div>
            <div class="max-w-xl mx-auto mt-2 text-center text-xs text-gray-500">
                Only Reject / Approve in footer. Advanced actions in menu (top-right).
            </div>
            <div class="max-w-xl mx-auto mt-1 flex items-center justify-between text-xs text-gray-500">
                <a href="javascript:;" class="px-2 py-1">← Previous</a>
                <a href="javascript:;" class="px-2 py-1"> Next →</a>
            </div>
        </div>

        <div class="absolute right-2 top-12 bg-white border rounded-xl shadow-lg w-56 z-40" v-if="showPop">
            <div class="p-2 text-xs text-gray-500">
                Supervisor / Advanced
            </div>
            <a href="javascript:;" @click="reduceHandle" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
                <ArrowDown class="w-4 h-4" /> Reduce Limit
            </a>
            <a href="javascript:;"  @click="escalateHandle" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
                <ArrowUpRight class="w-4 h-4" />  Escalate to Supervisor
            </a>
            <a href="javascript:;" @click="overrideHandle" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
                <BadgeCheck class="w-4 h-4" />  Override Approve (Supervisor)
            </a>
        </div>

        <Popup v-model="showReduceDialog" position="bottom" :close-on-click-overlay="false" class="reduceDialog" @click-overlay="hide">
            <div class="bg-white md:rounded-2xl  w-full p-4 md:shadow-xl">
                <div class="flex items-center justify-between mb-3">
                    <div class="text-base font-semibold">
                        Reduce Credit Limit
                    </div>
                    <a href="javascript:;" class="p-1 rounded-lg hover:bg-gray-100" @click="hide"><X class="w-4 h-4" /></a>
                </div>

                <div class="space-y-3 mb-4">
                    <div class="text-sm">
                        <div class="block text-xs text-gray-500 mb-1">New Limit (₦)</div>
                        <div class="w-full border rounded-xl p-2">
                            <van-field v-model="limitValue"  />
                        </div>
                        <div class="block text-xs text-gray-500 mt-3 mb-1">
                            Reason
                        </div>
                        <div class="w-full h-20 border rounded-xl p-2">
                            <van-field
                                v-model="reasonArea"
                                rows="1"
                                autosize
                                type="textarea"
                                placeholder="Reviewer notes..."
                            />
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 justify-end">
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl border">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl bg-gray-900 text-white">Submit</a>
                </div>
            </div>
        </Popup>

        <Popup v-model="showEscalateDialog" position="bottom" :close-on-click-overlay="false" class="escalateDialog" @click-overlay="hide">
            <div class="bg-white md:rounded-2xl  w-full p-4 md:shadow-xl">
                <div class="flex items-center justify-between mb-3">
                    <div class="text-base font-semibold">
                        Escalate to Supervisor
                    </div>
                    <a href="javascript:;" class="p-1 rounded-lg hover:bg-gray-100" @click="hide"><X class="w-4 h-4" /></a>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="text-sm">
                        <div class="block text-xs text-gray-500 mb-1">Reason / Context</div>
                        <div class="w-full h-24 border rounded-xl p-2">
                            <van-field
                                v-model="reasonArea"
                                rows="1"
                                autosize
                                type="textarea"
                                placeholder="What needs supervisor review?"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 justify-end">
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl border">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl bg-gray-900 text-white">Submit</a>
                </div>
            </div>
        </Popup>

        <Popup v-model="showOverrideDialog" position="bottom" :close-on-click-overlay="false" class="overrideDialog" @click-overlay="hide">
            <div class="bg-white md:rounded-2xl  w-full p-4 md:shadow-xl">
                <div class="flex items-center justify-between mb-3">
                    <div class="text-base font-semibold">
                        Override Approve (Supervisor)
                    </div>
                    <a href="javascript:;" class="p-1 rounded-lg hover:bg-gray-100" @click="hide"><X class="w-4 h-4" /></a>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="text-sm">
                        <div class="text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-2 flex items-start gap-2">
                            <TriangleAlert class="w-4 h-4" />
                            Approving with missing checklist is logged and requires justification.
                        </div>
                        <div class="block text-xs text-gray-500 mt-3 mb-1">
                            Supervisor Note
                        </div>
                        <div class="w-full h-24 border rounded-xl p-2">
                            <van-field
                                v-model="reasonArea"
                                rows="1"
                                autosize
                                type="textarea"
                                placeholder="Enter reason for override..."
                            />
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 justify-end">
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl border">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl bg-emerald-600 text-white">Confirm Override</a>
                </div>
            </div>
        </Popup>

        <Popup v-model="showRejectDialog" position="bottom" :close-on-click-overlay="false" class="overrideDialog" @click-overlay="hide">
            <div class="bg-white md:rounded-2xl  w-full p-4 md:shadow-xl">
                <div class="flex items-center justify-between mb-3">
                    <div class="text-base font-semibold">
                        Reject Application
                    </div>
                    <a href="javascript:;" class="p-1 rounded-lg hover:bg-gray-100" @click="hide"><X class="w-4 h-4" /></a>
                </div>
                <div class="space-y-3 mb-4">
                    <div class="text-sm">
                        <div class="mb-2 text-gray-600">
                            Select reason and add note (required by policy).
                        </div>
                        <div class="block text-xs text-gray-500 mt-3 mb-1">
                            Reason
                        </div>
                        <div class="w-full h-24 border rounded-xl p-2">
                            <van-field
                                v-model="rejectNote"
                                rows="1"
                                autosize
                                type="textarea"
                                placeholder="Enter reason for override..."
                            />
                        </div>
                    </div>
                </div>
                <div class="flex gap-2 justify-end">
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl border">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="px-4 py-2 rounded-xl bg-red-600 text-white">Confirm Override</a>
                </div>
            </div>
        </Popup>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>