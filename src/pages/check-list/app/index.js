import { navigateTo } from '@/utils';
import { Toast,CountDown,Field ,DropdownMenu,DropdownItem} from 'vant';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { WalletCards,TriangleAlert,Clock,Info,Award,Phone,MessageCircle,ArrowRight,Settings2 ,ChevronLeft,ClipboardList,CalendarDays,X,Check,FileText,Languages,Bel,Wifi,History,Search,RefreshCw,Funnel,ChevronRight,Gavel ,Activity,Bell,Star,SquareCheckBig,PencilLine,AlarmClock,EllipsisVertical,User,Network,Globe,Copy,ShieldCheck,CircleAlert,Users,Smartphone,Paperclip,ArrowDown,ArrowUpRight,BadgeCheck,Zap} from 'lucide-vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Zap,
    RefreshCw,
    MessageCircle,
    Phone,
    X,
    DropdownMenu, 
    DropdownItem
  },
  name: 'HomeApp',
  data() {
    return {
        time:99090,
        searchValue:"",
        list:[
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
        ],
        tabIndex:0,
        noteValue:"",
        option1: [
            {text:"Select result…",value:0},
            { text: 'PTP', value: 1 },
            { text: 'Rejected', value: 2 },
            { text: 'No Answer', value: 3 },
            { text: 'Switched Off', value: 4 },
            { text: 'Invalid Number', value: 5 },
        ],
        value1: 0,
        showEnter:false
    };
  },
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    tabHandle(index) {
        this.tabIndex = index;
    }
  }
};