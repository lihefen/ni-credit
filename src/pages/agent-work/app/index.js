import { navigateTo } from '@/utils';
import { Toast,CountDown } from 'vant';
import { WalletCards,TriangleAlert,Clock,Info } from 'lucide-vue';

export default {
  components: {
    WalletCards,
    TriangleAlert,
    Clock,
    Info
  },
  name: 'HomeApp',
  data() {
    return {
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