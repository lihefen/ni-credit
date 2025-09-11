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
    DropdownItem,
    Gavel
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
        searchValue:"",
        slectValue: 0,
        slectOption: [
            { text: 'ALL', value: 0 },
            { text: 'H', value: 1 },
            { text: 'M', value: 2 },
            { text: 'L', value: 3 },
        ],
        showFilter: false,
        showMod1:true,
        showMod2:false,
        showMod3:false,
        showMod4:false,
        showMod5:false
        
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
    },
    navHandle(index) {  
        if(index == 1) {
            this.showMod1 = true;
            this.showMod2 = false;
            this.showMod3 = false;
            this.showMod4 = false;
            this.showMod5 = false;
        } else if(index == 2) {
            this.showMod2 = true;
            this.showMod1 = false;
            this.showMod3 = false;
            this.showMod4 = false;
            this.showMod5 = false;
        } else if(index == 3) {
            this.showMod3 = true;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod4 = false;
            this.showMod5 = false;
        } else if(index == 4) {
            this.showMod4 = true;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod3 = false;
            this.showMod5 = false;
        } else if(index == 5) {
            this.showMod5 = true;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod3 = false;
            this.showMod4 = false;
        }
    }
  }
};