import { navigateTo } from '@/utils';
import { Toast,CountDown,Checkbox ,Field,Calendar} from 'vant';
import { WalletCards,TriangleAlert,Clock,Info,Award,Phone,MessageCircle,ArrowRight,Settings2 ,ChevronLeft,ClipboardList,CalendarDays,X,Check,FileText } from 'lucide-vue';

export default {
  components: {
    WalletCards,
    TriangleAlert,
    Clock,
    Info,
    Award,
    Phone,
    MessageCircle,
    ArrowRight,
    Settings2,
    ChevronLeft,
    ClipboardList,
    CalendarDays,
    X,
    Check,
    FileText
  },
  name: 'HomeApp',
  data() {
    return {
        showSetPop: false,
        showLeadDetail: false,
        textareaValue: '',
        showCalendar:false,
        calendarValue:'',
        checkedAll:false,
        check1:false,
        userList:[
            {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
        ]
        
    };
  },
  methods: {
    onConfirmCalendar() {
    },
    leadDetailHandle() {
        this.showLeadDetail = true;
    },
    backHandle() {
        this.showLeadDetail = false;
    }
  }
};