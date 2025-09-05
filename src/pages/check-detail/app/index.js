import { navigateTo } from '@/utils';
import { Toast,CountDown,Field,Checkbox, CheckboxGroup,Popup,DropdownMenu, DropdownItem } from 'vant';

export default {
  components: {
    Popup,
    DropdownMenu, DropdownItem 
  },
  name: 'HomeApp',
  data() {
    return {
        time:99090,
        noteTextArea:'',
        checkSlect: [],
        showPop: false,
        showReduceDialog:false,
        limitValue:'40000',
        reasonArea:'',
        showEscalateDialog:false,
        showOverrideDialog:false,
        options:[
           {
            text:'friendly',
            value:0,
           },
           {
            text:'docs',
            value:1,
           },
           {
            text:'ptpConfirm',
            value:2,
           }

        ],
        optionValue:0
    };
  },
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast('页面应用示例');
    },
    hide() {
      this.showReduceDialog = false;
      this.showEscalateDialog = false;
      this.showOverrideDialog = false;
    }
  }
};