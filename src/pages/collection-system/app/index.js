import { navigateTo } from '@/utils';
import { Toast,CountDown,Checkbox ,Field,Calendar,DropdownMenu, DropdownItem} from 'vant';
import { WalletCards,TriangleAlert,Clock,Info,Award,Phone,MessageCircle,ArrowRight,Settings2 ,ChevronLeft,ClipboardList,CalendarDays,X,Check,FileText,Languages,Bel,Wifi,History,Search,RefreshCw,Funnel,ChevronRight,Gavel ,Activity,Bell,Star,SquareCheckBig} from 'lucide-vue';

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
    FileText,
    Languages,
    Bell,
    Wifi,
    History,
    Search,
    RefreshCw,
    Funnel,
    ChevronRight,
    Gavel,
    Activity,
    Star,
    SquareCheckBig,
    DropdownMenu,
    DropdownItem
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
        ],
        showSide:false,
        dpdValue:0,
        slectValue: 0,
        slectOption: [
            { text: 'ALL', value: 0 },
            { text: 'H', value: 1 },
            { text: 'M', value: 2 },
            { text: 'L', value: 3 },
        ],
        showFilter: false,
        
    };
  },
  methods: {
    onConfirmCalendar() {
        //
    },
    leadDetailHandle() {
        this.showLeadDetail = true;
    },
    backHandle() {
        this.showLeadDetail = false;
    },
    sideHandle() {
        this.showSide = true;
    },
    hideSideHandle() {
        this.showSide = false;
    }
  }
};