# Nigeria Loan Manual Review - Vue 2.0版本

这是从React组件转换而来的Vue 2.0版本的尼日利亚贷款人工审核系统。

## 功能特性

- 📱 移动优先的响应式设计
- ⏰ SLA倒计时显示
- 📶 离线状态检测
- 📞 快速拨号和WhatsApp联系
- 🔍 KYC验证状态显示
- 📋 必需的审核检查清单
- 📊 风险评估标签
- 📝 审计日志记录
- 🔧 主管覆盖功能

## 文件结构

```
src/pages/nigeria-loan-review/
├── app/
│   ├── components/
│   │   ├── SectionCard.vue    # 区域卡片组件
│   │   ├── Chip.vue          # 标签芯片组件
│   │   ├── Field.vue         # 字段显示组件
│   │   ├── Tag.vue           # 风险标签组件
│   │   └── Modal.vue         # 模态框组件
│   ├── index.vue             # 主组件
│   └── index.js              # 应用入口
├── index.js                  # 页面入口
├── index.html                # HTML模板
└── README.md                 # 说明文档
```

## 主要组件说明

### 主组件 (index.vue)
- 包含所有业务逻辑和状态管理
- 使用Vue 2.0的Options API
- 包含完整的生命周期管理

### 子组件
- **SectionCard**: 可重用的区域卡片，支持标题和右侧内容
- **Chip**: 带图标的标签组件
- **Field**: 键值对显示组件
- **Tag**: 风险等级标签组件
- **Modal**: 模态框组件

## 数据流

1. **状态管理**: 使用Vue的data()和computed属性
2. **生命周期**: 使用mounted()和beforeDestroy()钩子
3. **事件处理**: 使用Vue的事件系统
4. **组件通信**: 通过props和$emit

## 主要功能

### 审核流程
1. 查看申请人信息
2. 验证KYC状态
3. 检查联系人信息
4. 审查设备和位置数据
5. 查看通信记录
6. 完成必需检查清单
7. 批准或拒绝申请

### 高级功能
- 减少信用额度
- 升级到主管
- 主管覆盖批准

## 样式说明

- 使用Tailwind CSS类名
- 包含自定义CSS确保兼容性
- 响应式设计支持移动和桌面
- 自定义滚动条样式

## 使用方法

1. 确保项目已安装Vue 2.0和Tailwind CSS
2. 将组件文件复制到项目中
3. 在路由中配置页面路径
4. 根据需要调整样式和功能

## 注意事项

- 这是一个原型版本，包含模拟数据
- 需要根据实际API调整数据获取逻辑
- 样式可能需要根据项目主题进行调整
- 确保所有依赖项已正确安装

## 技术栈

- Vue 2.0
- Tailwind CSS
- JavaScript ES6+
- HTML5
- CSS3