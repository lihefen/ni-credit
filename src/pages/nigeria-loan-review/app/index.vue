<!--
 * @Description: Nigeria Loan Manual Review - Vue 2.0版本
 * @version: 1.0.0
 * @Author: AI Assistant
 * @Date: 2024-01-15
-->
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="sticky top-0 z-30 bg-white border-b border-gray-200">
      <!-- Offline Banner -->
      <div v-if="offline" class="w-full px-3 py-2 text-sm bg-amber-50 text-amber-800 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728M8.5 12H8.5m7 0H15.5m-7 0a3.5 3.5 0 000 7m7-7a3.5 3.5 0 000 7m-7 0V9m7 3v3"></path>
        </svg>
        You are offline. Some actions are disabled.
        <button class="ml-auto inline-flex items-center gap-1 text-amber-900 underline" @click="refreshPage">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Refresh
        </button>
      </div>
      
      <!-- Main Header -->
      <div class="px-3 py-2 flex items-center gap-2">
        <button @click="prev" class="p-2 rounded-xl hover:bg-gray-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div class="text-sm text-gray-500">Queue</div>
        <div class="ml-1 text-sm font-semibold">{{ idx + 1 }} / {{ items.length }}</div>
        <div :class="['ml-auto inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs border',
          slaCritical ? 'bg-red-50 text-red-700 border-red-200' : 'bg-emerald-50 text-emerald-700 border-emerald-200']">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          SLA {{ slaMM }}:{{ slaSS }}
        </div>
        <button @click="menuOpen = !menuOpen" class="p-2 rounded-xl hover:bg-gray-100">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </button>
      </div>
      
      <!-- More Menu -->
      <div v-if="menuOpen" class="absolute right-2 top-12 bg-white border rounded-xl shadow-lg w-56 z-40">
        <div class="p-2 text-xs text-gray-500">Supervisor / Advanced</div>
        <button @click="openReduceModal" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
          Reduce Limit
        </button>
        <button @click="openEscalateModal" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17l9.2-9.2M17 17V7H7"></path>
          </svg>
          Escalate to Supervisor
        </button>
        <button @click="openOverrideModal" class="w-full text-left px-3 py-2 hover:bg-gray-50 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Override Approve (Supervisor)
        </button>
      </div>
    </div>

    <!-- Body -->
    <div class="p-3 pb-28 max-w-xl mx-auto">
      <!-- Applicant Card -->
      <section-card title="Applicant" :right="firstLoanChip">
        <div class="flex items-start gap-3">
          <div class="flex-1">
            <div class="text-lg font-semibold text-gray-900">{{ currentRow.name }}</div>
            <div class="flex flex-wrap gap-2 mt-1">
              <chip icon="phone" :text="currentRow.phone" />
              <chip icon="network" :text="`SIM ${currentRow.simAgeMonths} mo`" />
              <chip icon="globe" :text="`${currentRow.city}, ${currentRow.state}`" />
            </div>
          </div>
          <div :class="['px-2 py-1 rounded-lg text-xs font-medium border',
            riskLevel === 'high' ? 'bg-red-50 text-red-700 border-red-200' : 
            riskLevel === 'med' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
            'bg-emerald-50 text-emerald-700 border-emerald-200']">
            Risk: {{ riskLevel.toUpperCase() }}
          </div>
        </div>
        <div class="grid grid-cols-1 gap-2 mt-3">
          <field label="Application ID" :value="currentRow.id" :mono="true" />
          <field label="Requested" :value="`₦${formatNumber(currentRow.loanApplied)}`" />
          <field label="Suggested Credit" :value="`₦${formatNumber(currentRow.suggestedCredit)}`" />
        </div>
        <div class="mt-3 flex gap-2">
          <a :href="`tel:${currentRow.phone}`" class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gray-900 text-white">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Applicant
          </a>
          <a :href="whatsappLink(currentRow.phone, waTemplates[waTpl])" target="_blank" class="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 text-white">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
        <div class="mt-2 flex items-center gap-2 text-xs">
          <span class="text-gray-500">WA Template:</span>
          <select v-model="waTpl" class="border rounded-lg px-2 py-1 text-xs">
            <option v-for="(template, key) in waTemplates" :key="key" :value="key">{{ key }}</option>
          </select>
          <button class="ml-auto inline-flex items-center gap-1 text-gray-600 hover:text-gray-900" @click="copyToClipboard(currentRow.BVN.replace(/•/g, ''))">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            Copy BVN
          </button>
        </div>
      </section-card>

      <!-- KYC & Identity -->
      <section-card title="KYC & Identity" :right="kycChip">
        <div class="grid grid-cols-1 gap-2">
          <div class="flex items-center justify-between p-3 rounded-xl border">
            <div class="flex items-center gap-2">
              <svg :class="['w-4.5 h-4.5', currentRow.BVNStatus === 'verified' ? 'text-emerald-600' : currentRow.BVNStatus === 'pending' ? 'text-amber-600' : 'text-red-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div>BVN: <span class="font-mono">{{ currentRow.BVN }}</span></div>
            </div>
            <div :class="['text-xs font-medium px-2 py-1 rounded-full border',
              currentRow.BVNStatus === 'verified' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
              currentRow.BVNStatus === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
              'bg-red-50 text-red-700 border-red-200']">
              {{ currentRow.BVNStatus }}
            </div>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl border">
            <div class="flex items-center gap-2">
              <svg :class="['w-4.5 h-4.5', currentRow.NINStatus === 'verified' ? 'text-emerald-600' : currentRow.NINStatus === 'pending' ? 'text-amber-600' : 'text-red-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div>NIN: <span class="font-mono">{{ currentRow.NIN }}</span></div>
            </div>
            <div :class="['text-xs font-medium px-2 py-1 rounded-full border',
              currentRow.NINStatus === 'verified' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
              currentRow.NINStatus === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
              'bg-red-50 text-red-700 border-red-200']">
              {{ currentRow.NINStatus }}
            </div>
          </div>
          <div class="flex items-center justify-between p-3 rounded-xl border">
            <div class="flex items-center gap-2">
              <svg :class="['w-4.5 h-4.5', currentRow.simAgeMonths >= 6 ? 'text-emerald-600' : 'text-amber-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
              <div>SIM / Phone tenure</div>
            </div>
            <div class="text-sm font-medium">{{ currentRow.simAgeMonths }} months</div>
          </div>
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <tag v-for="(risk, i) in currentRow.riskNotes" :key="i" :level="risk.level">{{ risk.text }}</tag>
        </div>
      </section-card>

      <!-- Contacts -->
      <section-card title="Contacts" :right="contactsChip">
        <div class="space-y-2">
          <div v-for="(contact, i) in currentRow.contacts" :key="i" class="flex items-center justify-between p-3 rounded-xl border">
            <div>
              <div class="font-medium text-gray-900">{{ contact.name }} <span class="text-gray-400">({{ contact.relation }})</span></div>
              <div class="text-sm text-gray-600">{{ contact.phone }}</div>
            </div>
            <div class="flex gap-2">
              <a class="px-3 py-1 rounded-lg bg-gray-100" :href="`tel:${contact.phone}`">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>
              <a class="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900" target="_blank" :href="whatsappLink(contact.wa, waTemplates.friendly)">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section-card>

      <!-- Device & Location -->
      <section-card title="Device & Location" :right="deviceChip">
        <div class="grid grid-cols-1 gap-2">
          <field label="OS" :value="currentRow.device.os" />
          <field label="IP" :value="currentRow.device.ip" />
          <field label="LBS" :value="`${currentRow.device.lbs.city}, ${currentRow.device.lbs.state}`" />
          <div class="flex flex-wrap gap-2 mt-1">
            <tag v-if="currentRow.device.sameDeviceMultiAccounts" level="high">Multi-account device</tag>
            <tag v-if="currentRow.device.gpsMismatch" level="med">GPS ≠ Address</tag>
            <tag v-if="!currentRow.device.rooted" level="low">Not Rooted</tag>
          </div>
        </div>
      </section-card>

      <!-- Communication Log -->
      <section-card title="Communication Log" :right="commsChip">
        <ul class="divide-y">
          <li v-for="(comm, i) in currentRow.comms" :key="i" class="py-2 text-sm flex items-start gap-2">
            <svg v-if="comm.ch === 'call'" class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <svg v-else class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <div>
              <div class="text-gray-900">{{ comm.text }}</div>
              <div class="text-gray-500 text-xs">{{ formatDate(comm.at) }}</div>
            </div>
          </li>
        </ul>
      </section-card>

      <!-- Notes & Attachments -->
      <section-card title="Notes & Attachments" :right="attachmentsChip">
        <textarea v-model="reviewerNotes" placeholder="Reviewer notes..." class="w-full h-24 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-gray-200"></textarea>
        <div class="mt-3 flex flex-wrap gap-2">
          <span v-for="(attachment, i) in currentRow.attachments" :key="i" class="inline-flex items-center gap-2 px-3 py-2 rounded-xl border bg-gray-50 text-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            {{ attachment.name }}
          </span>
          <button class="px-3 py-2 rounded-xl border bg-white text-sm">+ Add attachment</button>
        </div>
      </section-card>

      <!-- Checklist -->
      <section-card title="Approval Checklist" :right="checklistChip">
        <label class="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" v-model="chkNameId" />
          Name on ID matches applicant & selfie
        </label>
        <label class="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" v-model="chkReachable" />
          Applicant OR contact reachable by call/WhatsApp
        </label>
        <label class="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" v-model="chkAddress" />
          Address verified (document or LBS)
        </label>
        <label class="flex items-center gap-2 py-1 text-sm">
          <input type="checkbox" v-model="chkKyc" />
          BVN & NIN verified / no mismatch
        </label>
      </section-card>

      <!-- Audit -->
      <section-card title="Audit Log" :right="auditChip">
        <div v-if="audit.length === 0" class="text-sm text-gray-500">No actions yet.</div>
        <ul v-else class="space-y-2">
          <li v-for="(log, i) in audit" :key="i" class="text-sm">
            <span class="text-gray-900">{{ log.text }}</span>
            <span class="text-gray-500 text-xs ml-2">{{ formatDate(log.at) }}</span>
          </li>
        </ul>
      </section-card>
    </div>

    <!-- Sticky Footer -->
    <div class="fixed bottom-0 inset-x-0 bg-white border-t border-gray-200 p-3 z-30">
      <div class="max-w-xl mx-auto grid grid-cols-2 gap-3">
        <button @click="showRejectModal = true" class="px-4 py-3 rounded-2xl bg-red-600 text-white font-semibold flex items-center justify-center gap-2">
          <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          Reject
        </button>
        <button :disabled="!canApprove" @click="onApprove" :class="['px-4 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2',
          canApprove ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed']">
          <svg class="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Approve
        </button>
      </div>
      <div class="max-w-xl mx-auto mt-2 text-center text-xs text-gray-500">Only Reject / Approve in footer. Advanced actions in menu (top-right).</div>
      <div class="max-w-xl mx-auto mt-1 flex items-center justify-between text-xs text-gray-500">
        <button @click="prev" class="px-2 py-1">← Previous</button>
        <button @click="next" class="px-2 py-1">Next →</button>
      </div>
    </div>

    <!-- Modals -->
    <modal v-if="showRejectModal" title="Reject Application" @close="showRejectModal = false">
      <div class="text-sm">
        <div class="mb-2 text-gray-600">Select reason and add note (required by policy).</div>
        <label class="block text-xs text-gray-500 mb-1">Reason</label>
        <select v-model="rejReason" class="w-full border rounded-xl p-2 text-sm">
          <option>KYC mismatch</option>
          <option>Fraud suspicion</option>
          <option>Unable to contact</option>
          <option>Incomplete documents</option>
          <option>Policy threshold exceeded</option>
        </select>
        <label class="block text-xs text-gray-500 mt-3 mb-1">Note</label>
        <textarea v-model="rejNote" placeholder="Add rejection note..." class="w-full h-24 border rounded-xl p-2 text-sm"></textarea>
      </div>
      <template #actions>
        <button @click="showRejectModal = false" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button @click="onReject" class="px-4 py-2 rounded-xl bg-red-600 text-white">Confirm Reject</button>
      </template>
    </modal>

    <modal v-if="showReduceModal" title="Reduce Credit Limit" @close="showReduceModal = false">
      <div class="text-sm">
        <label class="block text-xs text-gray-500 mb-1">New Limit (₦)</label>
        <input type="number" v-model="reduceAmt" class="w-full border rounded-xl p-2" />
        <label class="block text-xs text-gray-500 mt-3 mb-1">Reason</label>
        <textarea v-model="reduceNote" placeholder="Explain why reducing..." class="w-full h-20 border rounded-xl p-2"></textarea>
      </div>
      <template #actions>
        <button @click="showReduceModal = false" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button @click="onReduce" class="px-4 py-2 rounded-xl bg-gray-900 text-white">Submit</button>
      </template>
    </modal>

    <modal v-if="showEscalateModal" title="Escalate to Supervisor" @close="showEscalateModal = false">
      <div class="text-sm">
        <label class="block text-xs text-gray-500 mb-1">Reason / Context</label>
        <textarea v-model="escNote" placeholder="What needs supervisor review?" class="w-full h-24 border rounded-xl p-2"></textarea>
      </div>
      <template #actions>
        <button @click="showEscalateModal = false" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button @click="onEscalate" class="px-4 py-2 rounded-xl bg-gray-900 text-white">Submit</button>
      </template>
    </modal>

    <modal v-if="showOverrideModal" title="Override Approve (Supervisor)" @close="showOverrideModal = false">
      <div class="text-sm">
        <div class="text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-2 flex items-start gap-2">
          <svg class="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
          Approving with missing checklist is logged and requires justification.
        </div>
        <label class="block text-xs text-gray-500 mt-3 mb-1">Supervisor Note</label>
        <textarea v-model="overrideNote" placeholder="Enter reason for override..." class="w-full h-24 border rounded-xl p-2"></textarea>
      </div>
      <template #actions>
        <button @click="showOverrideModal = false" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button @click="onOverride" class="px-4 py-2 rounded-xl bg-emerald-600 text-white">Confirm Override</button>
      </template>
    </modal>
  </div>
</template>

<script>
// 导入子组件
import SectionCard from './components/SectionCard.vue'
import Chip from './components/Chip.vue'
import Field from './components/Field.vue'
import Tag from './components/Tag.vue'
import Modal from './components/Modal.vue'

// 模拟数据
const MOCK_QUEUE = [
  {
    id: "APP-240915-001",
    createdAt: Date.now() - 1000 * 60 * 22,
    name: "John Okoro",
    gender: "Male",
    dob: "1994-05-20",
    phone: "+2348031234567",
    simAgeMonths: 14,
    email: "john.okoro@example.com",
    address: "12 Ajose Adeogun St, Victoria Island",
    city: "Lagos",
    state: "Lagos",
    bankAccount: "0123456789 (GTBank)",
    education: "Bachelor",
    maritalStatus: "Married",
    children: 2,
    firstLoan: true,
    loanApplied: 50000,
    suggestedCredit: 40000,
    BVN: "2234••••5678",
    BVNStatus: "verified",
    NIN: "4456••••8899",
    NINStatus: "verified",
    phoneKYC: "realname_ok",
    contacts: [
      { type: "Family", name: "Mary Okoro", relation: "Wife", phone: "+2348091112222", wa: "+2348091112222" },
      { type: "Other", name: "Peter Okoro", relation: "Brother", phone: "+2347015556666", wa: "+2347015556666" },
    ],
    device: {
      brand: "TECNO",
      os: "Android 13",
      ip: "102.89.12.45",
      lbs: { city: "Lagos", state: "Lagos", lat: 6.4281, lng: 3.4219 },
      sameDeviceMultiAccounts: true,
      rooted: false,
      gpsMismatch: true,
    },
    riskNotes: [
      { level: "high", text: "Same device used by 3 accounts in last 30 days" },
      { level: "med", text: "Address ≠ LBS (Victoria Island vs. Lekki cluster)" },
      { level: "low", text: "BVN verified" },
    ],
    comms: [
      { at: Date.now() - 1000 * 60 * 60 * 2, ch: "call", text: "No answer" },
      { at: Date.now() - 1000 * 60 * 90, ch: "wa", text: "WA template sent — Docs request" },
      { at: Date.now() - 1000 * 60 * 45, ch: "call", text: "Connected; verified address verbally" },
    ],
    attachments: [
      { name: "ID_Front.jpg" },
      { name: "Utility_Bill.pdf" },
    ],
  },
  {
    id: "APP-240915-002",
    createdAt: Date.now() - 1000 * 60 * 10,
    name: "Aisha Bello",
    gender: "Female",
    dob: "1997-11-02",
    phone: "+2347059876543",
    simAgeMonths: 5,
    email: "aisha.bello@example.com",
    address: "3 Adetokunbo Ademola, Wuse",
    city: "Abuja",
    state: "FCT",
    bankAccount: "0987612345 (Access Bank)",
    education: "Diploma",
    maritalStatus: "Single",
    children: 0,
    firstLoan: true,
    loanApplied: 80000,
    suggestedCredit: 30000,
    BVN: "1188••••3344",
    BVNStatus: "pending",
    NIN: "2299••••7711",
    NINStatus: "verified",
    phoneKYC: "no_record",
    contacts: [
      { type: "Family", name: "Bello Musa", relation: "Father", phone: "+2348020003333", wa: "+2348020003333" },
      { type: "Other", name: "Hauwa Ali", relation: "Friend", phone: "+2348037779999", wa: "+2348037779999" },
    ],
    device: {
      brand: "Infinix",
      os: "Android 12",
      ip: "102.88.33.10",
      lbs: { city: "Abuja", state: "FCT", lat: 9.0579, lng: 7.4951 },
      sameDeviceMultiAccounts: false,
      rooted: false,
      gpsMismatch: false,
    },
    riskNotes: [
      { level: "med", text: "SIM age < 6 months" },
      { level: "low", text: "NIN verified" },
    ],
    comms: [
      { at: Date.now() - 1000 * 60 * 25, ch: "wa", text: "PTP discussion ongoing" },
    ],
    attachments: [
      { name: "ID_Selfie.jpg" },
    ],
  },
]

// WhatsApp模板
const WA_TEMPLATES = {
  friendly: `Hello, this is LawOnGo support. We are reviewing your loan application. May we confirm a few details?`,
  docs: `Hello, kindly send a clear photo of your ID (front & back) and a recent utility bill for address verification. Thank you!`,
  ptpConfirm: `Hi, to proceed we can offer a lower amount ₦<<amount>>. Reply 'YES' to confirm.`,
}

export default {
  name: 'NigeriaLoanManualReview',
  components: {
    SectionCard,
    Chip,
    Field,
    Tag,
    Modal
  },
  data() {
    return {
      // 队列数据
      idx: 0,
      items: MOCK_QUEUE,
      
      // SLA和网络状态
      slaSec: 15 * 60, // 15分钟SLA
      offline: !navigator.onLine,
      
      // 必需的检查项
      chkNameId: false,
      chkReachable: false,
      chkAddress: false,
      chkKyc: false,
      
      // 模态框状态
      showRejectModal: false,
      showReduceModal: false,
      showEscalateModal: false,
      showOverrideModal: false,
      
      // 拒绝表单
      rejReason: "KYC mismatch",
      rejNote: "",
      
      // 减少额度表单
      reduceAmt: 0,
      reduceNote: "",
      
      // 升级表单
      escNote: "",
      
      // 覆盖表单
      overrideNote: "",
      
      // WhatsApp模板
      waTpl: "friendly",
      waTemplates: WA_TEMPLATES,
      
      // 审计日志
      audit: [],
      
      // 菜单状态
      menuOpen: false,
      
      // 审查者笔记
      reviewerNotes: "",
      
      // 定时器
      slaTimer: null
    }
  },
  computed: {
    currentRow() {
      return this.items[this.idx] || null
    },
    canApprove() {
      return this.chkNameId && this.chkReachable && this.chkAddress && this.chkKyc
    },
    slaMM() {
      return String(Math.floor(this.slaSec / 60)).padStart(2, "0")
    },
    slaSS() {
      return String(this.slaSec % 60).padStart(2, "0")
    },
    slaCritical() {
      return this.slaSec <= 5 * 60
    },
    riskLevel() {
      if (!this.currentRow) return 'low'
      const hasHigh = this.currentRow.riskNotes.some(r => r.level === 'high')
      const hasMed = this.currentRow.riskNotes.some(r => r.level === 'med')
      return hasHigh ? 'high' : hasMed ? 'med' : 'low'
    },
    firstLoanChip() {
      return {
        icon: 'user',
        text: this.currentRow?.firstLoan ? 'First loan' : 'Repeat'
      }
    },
    kycChip() {
      return {
        icon: 'shield-check',
        text: 'Policy-required'
      }
    },
    contactsChip() {
      return {
        icon: 'users',
        text: `${this.currentRow?.contacts?.length || 0} records`
      }
    },
    deviceChip() {
      return {
        icon: 'smartphone',
        text: this.currentRow?.device?.brand || ''
      }
    },
    commsChip() {
      return {
        icon: 'message-circle',
        text: `${this.currentRow?.comms?.length || 0}`
      }
    },
    attachmentsChip() {
      return {
        icon: 'paperclip',
        text: `${this.currentRow?.attachments?.length || 0}`
      }
    },
    checklistChip() {
      return {
        icon: 'shield-check',
        text: 'Must pass'
      }
    },
    auditChip() {
      return {
        icon: 'file-text',
        text: `${this.audit.length}`
      }
    }
  },
  watch: {
    idx() {
      // 切换案例时重置状态
      this.resetCaseState()
    }
  },
  mounted() {
    this.initializeComponent()
  },
  beforeDestroy() {
    this.cleanup()
  },
  methods: {
    // 初始化组件
    initializeComponent() {
      this.startSlaTimer()
      this.setupNetworkListeners()
      this.resetCaseState()
    },
    
    // 启动SLA计时器
    startSlaTimer() {
      this.slaTimer = setInterval(() => {
        this.slaSec = Math.max(0, this.slaSec - 1)
      }, 1000)
    },
    
    // 设置网络监听器
    setupNetworkListeners() {
      window.addEventListener('online', this.handleOnline)
      window.addEventListener('offline', this.handleOffline)
    },
    
    // 清理资源
    cleanup() {
      if (this.slaTimer) {
        clearInterval(this.slaTimer)
      }
      window.removeEventListener('online', this.handleOnline)
      window.removeEventListener('offline', this.handleOffline)
    },
    
    // 网络状态处理
    handleOnline() {
      this.offline = false
    },
    
    handleOffline() {
      this.offline = true
    },
    
    // 重置案例状态
    resetCaseState() {
      this.chkNameId = false
      this.chkReachable = false
      this.chkAddress = false
      this.chkKyc = false
      this.reduceAmt = this.currentRow?.suggestedCredit || 0
      this.reduceNote = ""
      this.escNote = ""
      this.overrideNote = ""
      this.waTpl = "friendly"
    },
    
    // 工具方法
    formatNumber(n) {
      return new Intl.NumberFormat("en-NG").format(n)
    },
    
    formatDate(timestamp) {
      return new Date(timestamp).toLocaleString()
    },
    
    whatsappLink(phone, text) {
      return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`
    },
    
    // 复制到剪贴板
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text)
        this.addAudit(`Copied: ${text}`)
      } catch (error) {
        console.error('复制失败:', error)
      }
    },
    
    // 添加审计日志
    addAudit(text) {
      this.audit.unshift({
        at: Date.now(),
        text
      })
    },
    
    // 导航方法
    next() {
      this.idx = Math.min(this.items.length - 1, this.idx + 1)
    },
    
    prev() {
      this.idx = Math.max(0, this.idx - 1)
    },
    
    // 刷新页面
    refreshPage() {
      window.location.reload()
    },
    
    // 模态框控制
    openReduceModal() {
      this.showReduceModal = true
      this.menuOpen = false
    },
    
    openEscalateModal() {
      this.showEscalateModal = true
      this.menuOpen = false
    },
    
    openOverrideModal() {
      this.showOverrideModal = true
      this.menuOpen = false
    },
    
    // 主要操作
    onApprove() {
      this.addAudit(`Approved ₦${this.formatNumber(this.currentRow.suggestedCredit)} — by reviewer`)
      alert("Approved! (mock)")
    },
    
    onReject() {
      this.showRejectModal = false
      this.addAudit(`Rejected — ${this.rejReason}. Note: ${this.rejNote || "-"}`)
      alert("Rejected (mock)")
    },
    
    onReduce() {
      this.showReduceModal = false
      this.addAudit(`Reduce to ₦${this.formatNumber(this.reduceAmt)} — ${this.reduceNote || "-"}`)
      alert("Reduce submitted (mock)")
    },
    
    onEscalate() {
      this.showEscalateModal = false
      this.addAudit(`Escalated to Supervisor — ${this.escNote || "-"}`)
      alert("Escalated (mock)")
    },
    
    onOverride() {
      this.showOverrideModal = false
      this.addAudit(`Override Approve — Supervisor reason: ${this.overrideNote || "-"}`)
      alert("Override approve (mock)")
    }
  }
}
</script>

<style scoped>
/* 确保Tailwind CSS类正常工作 */
.min-h-screen {
  min-height: 100vh;
}

.min-h-\[100dvh\] {
  min-height: 100dvh;
}

/* 自定义样式 */
.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-3 > * + * {
  margin-top: 0.75rem;
}

.divide-y > * + * {
  border-top: 1px solid #e5e7eb;
}

/* 响应式设计 */
@media (min-width: 768px) {
  .md\:inset-0 {
    inset: 0;
  }
  
  .md\:flex {
    display: flex;
  }
  
  .md\:items-center {
    align-items: center;
  }
  
  .md\:justify-center {
    justify-content: center;
  }
  
  .md\:rounded-2xl {
    border-radius: 1rem;
  }
  
  .md\:max-w-lg {
    max-width: 32rem;
  }
  
  .md\:shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
}

/* 确保按钮和交互元素有正确的样式 */
button:disabled {
  cursor: not-allowed;
}

/* 确保SVG图标正确显示 */
svg {
  display: inline-block;
  vertical-align: middle;
}

/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>