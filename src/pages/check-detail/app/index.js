import { navigateTo } from '@/utils';
import { Toast,CountDown } from 'vant';

export default {
  components: {
  },
  name: 'HomeApp',
  data() {
    return {
        time:99090
    };
  },
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast('页面应用示例');
    }
  }
};