<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-22 11:00:33
 * @LastEditors: hean
 * @LastEditTime: 2025-09-04 21:14:27
-->
<template>
    <div class="main">
        <div class="header">
            <div class="left">
                <a href="javascript:;" class="backIcon"></a>
                <span>1/2</span>
            </div>
           
            <div class="right">
                <div class="status"></div>
                <a href="javascript:;" class="editIcon" @click="showPop = !showPop">
                    <span></span>
                </a>
            </div>

        </div>
        <div class="pop" v-if="showPop">
            <div class="text">Supervisor / Advanced</div>
            <div class="item">
                <a href="javascript:;" class="btn1"><span></span>Reduce Limit</a>
                <a href="javascript:;" class="btn2"><span></span>Escalate to Supervisor</a>
                <a href="javascript:;" class="btn3"><span></span>Override Approve (Supervisor)</a>
            </div>
        </div>

        <Popup v-model="showReduceDialog" position="bottom" :close-on-click-overlay="false" class="reduceDialog" @click-overlay="hide">
            <div class="content">
                <a href="javascript:;" class="closeIcon" @click="hide"></a>
                <div class="title">Reduce Credit Limit</div>
                <div class="item inputItem">
                    <div class="text">New Limit (₦)</div>
                    <van-field v-model="limitValue"  />
                </div>

                <div class="item areaItem">
                    <div class="text">Reason</div>
                    <van-field
                        v-model="reasonArea"
                        rows="1"
                        autosize
                        type="textarea"
                        placeholder="Reviewer notes..."
                    />
                </div>
                <div class="btnGroup">
                    <a href="javascript:;"  @click="hide" class="cancelBtn">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="submitBtn">Submit</a>
                </div>
            </div>
        </Popup>

        <Popup v-model="showEscalateDialog" position="bottom" :close-on-click-overlay="false" class="escalateDialog" @click-overlay="hide">
            <div class="content">
                <a href="javascript:;" class="closeIcon" @click="hide"></a>
                <div class="title">Escalate to Supervisor</div>
                <div class="item areaItem">
                    <div class="text">Reason / Context</div>
                    <van-field
                        v-model="reasonArea"
                        rows="1"
                        autosize
                        type="textarea"
                        placeholder="What needs supervisor review?"
                    />
                </div>
                <div class="btnGroup">
                    <a href="javascript:;"  @click="hide" class="cancelBtn">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="submitBtn">Submit</a>
                </div>
            </div>
        </Popup>

        <Popup v-model="showOverrideDialog" position="bottom" :close-on-click-overlay="false" class="overrideDialog" @click-overlay="hide">
            <div class="content">
                <a href="javascript:;" class="closeIcon" @click="hide"></a>
               
                <div class="title">Override Approve (Supervisor)</div>
                <div class="tips">
                    <div class="tipsIcon"></div>
                    <div>Approving with missing checklist is logged and requires justification.</div>
                </div>
                <div class="item areaItem">
                    <div class="text">Reason / Context</div>
                    <van-field
                        v-model="reasonArea"
                        rows="1"
                        autosize
                        type="textarea"
                        placeholder="Enter reason for override..."
                    />
                </div>
                <div class="btnGroup">
                    <a href="javascript:;"  @click="hide" class="cancelBtn">Cancel</a>
                    <a href="javascript:;"  @click="hide" class="submitBtn">Submit</a>
                </div>
            </div>
        </Popup>

        
        <div class="card">
            <div class="applicantItem">
                <div>Applicant</div>
                <div class="tag">First loan</div>
            </div>
            <div class="nameItem">
                <div class="name">John Okoro</div>
                <div class="tag">Risk: HIGH</div>
            </div>
            <div class="phoneItem">
                <div class="phoneGroup">
                    <div class="phone">+2348031234567</div>
                    <div class="sim">SIM 14 mo</div>
                </div>
                <div class="address">Lagos, Lagos</div>
            </div>
            <div class="idItem">
                <div>Application ID</div>
                <div>APP-240915-001</div>
            </div>

            <div class="requestedItem">
                <div>Requested</div>
                <div>₦50,000</div>
            </div>
            <div class="suggestedItem">
                <div>Suggested Credit</div>
                <div>₦40,000</div>
            </div>
            <div class="btnGroup">
               <a class="btn1 btn" href="javascript:;">Call Applicant</a>
               <a class="btn2 btn" href="javascript:;">WhatsApp</a>
            </div>
        </div>

        <div class="card">
            <div class="identityItem">
                <div>KYC & Identity</div>
                <div class="tag">Policy-required</div>
            </div>
            <div class="verifiedItem">
                <div>BVN: 2234••••5678</div>
                <div class="tag">verified</div>
            </div>
            <div class="verifiedItem">
                <div>NIN: 4456••••8899</div>
                <div class="tag">verified</div>
            </div>
            <div class="verifiedItem">
                <div>SIM / Phone tenure</div>
                <div class="year">14 months</div>
            </div>
            <div class="warningItem">
                <div class="tag1">Same device used by 3 accounts in last 30 days</div>
                <div class="tagGroup">
                    <div class="tag2">Address ≠ LBS (Victoria Island vs. Lekki cluster)</div>
                    <div class="tag3">BVN verified</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="contactsItem">
                <div>Contacts</div>
                <div class="tag"><span class="contactsIcon"></span>2 records</div>
            </div>
            <div class="personItem">
                <div class="personInfo">
                    <div class="name">Mary Okoro <span>(Wife)</span></div>
                    <div class="phone">+2348091112222</div>
                </div>
                <div class="iconGroup">
                    <a href="javascript:;" class="phoneIcon"><span></span></a>
                    <a href="javascript:;" class="chatIcon"><span></span></a>
                </div>
            </div>

            <div class="personItem">
                <div class="personInfo">
                    <div class="name">Peter Okoro  <span>(Brother)</span></div>
                    <div class="phone">+2347015556666</div>
                </div>
                <div class="iconGroup">
                    <a href="javascript:;" class="phoneIcon"><span></span></a>
                    <a href="javascript:;" class="chatIcon"><span></span></a>
                </div>
            </div>
        </div>

        <div class="card locationCard">
            <div class="locationItem">
                <div>Device & Location</div>
                <div class="tag"><span class="tecnoIcon"></span>TECNO</div>
            </div>
            <div class="item">
                <div>OS</div>
                <div>Android 13</div>
            </div>
            <div class="item">
                <div>IP</div>
                <div>102.89.12.45</div>
            </div>
            <div class="item">
                <div>LBS</div>
                <div>Lagos, Lagos</div>
            </div>
            <div class="tagGroup">
                <div class="tag1">
                    <span class="triangleAlertIcon"></span>
                    Multi-account device
                </div>
                <div class="tag2">
                    <span class="circleAlertIcon"></span>
                    GPS ≠ Address
                </div>
                <div class="tag3">
                    <span class="shieldCheckIcon"></span>
                    Not Rooted
                </div>
            </div>
        </div>

        <div class="card communicationCard">
            <div class="communicationItem">
                <div>Communication Log</div>
                <div class="tag"><span class="chatIcon"></span>3</div>
            </div>
            <dl>
                <dt class="phoneIcon"></dt>
                <dd>
                    <div>No answer</div>
                    <div>2025/9/4 20:23:53</div>
                </dd>
            </dl>
            <dl>
                <dt class="chatIcon"></dt>
                <dd>
                    <div>WA template sent — Docs request</div>
                    <div>2025/9/4 20:23:53</div>
                </dd>
            </dl>
            <dl>
                <dt class="phoneIcon"></dt>
                <dd>
                    <div>Connected; verified address verbally</div>
                    <div>2025/9/4 21:38:53</div>
                </dd>
            </dl>
        </div>

        <div class="card notesCard">
            <div class="notesItem">
                <div>Notes & Attachments</div>
                <div class="tag"><span ></span>Must pass</div>
            </div>
            <div class="field noteTextArea">
                <van-field
                    v-model="noteTextArea"
                    rows="1"
                    autosize
                    type="textarea"
                    placeholder="Reviewer notes..."
                />
            </div>
            <div class="fileGroup">
                <div class="fileItem"><span></span>ID_Front.jpg</div>
                <div class="fileItem">ID_Back.jpg</div>
                <div class="fileItem">ID_Front.jpg</div>
            </div>
        </div>


        <div class="card approvalCard"> 
            <div class="approvalItem">
                <div>Approval Checklist</div>
                <div class="tag"><span ></span>Must pass</div>
            </div>
            <div class="checkboxGroup">
                <van-checkbox-group v-model="checkSlect">
                    <van-checkbox shape="square" name="a">Name on ID matches applicant & selfie</van-checkbox>
                    <van-checkbox shape="square" name="b">Applicant OR contact reachable by call/WhatsApp</van-checkbox>
                    <van-checkbox shape="square" name="b">Address verified (document or LBS)</van-checkbox>
                    <van-checkbox shape="square" name="d">BVN & NIN verified / no mismatch</van-checkbox>
                </van-checkbox-group>

            </div>
        </div>

        <div class="card  logCard">
            <div class="logItem">
                <div>Audit Logt</div>
                <div class="tag"><span ></span>0</div>
            </div>
            <div class="text">No actions yet.</div>
        </div>

    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>