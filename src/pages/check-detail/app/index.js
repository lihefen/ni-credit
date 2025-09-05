import { navigateTo } from '@/utils';
import { Toast,CountDown,Field,Checkbox, CheckboxGroup,Popup} from 'vant';

export default {
  components: {
    Popup
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
        showOverrideDialog:false
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