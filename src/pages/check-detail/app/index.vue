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
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>