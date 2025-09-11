import { navigateTo } from '@/utils';
import { Toast,CountDown,Checkbox ,Field,Calendar,DropdownMenu, DropdownItem,Popup} from 'vant';
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
    Gavel,
    Popup
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
        showMod0:true,
        showMod1:false,
        showMod2:false,
        showMod3:false,
        showMod4:false,
        showSideMod0:true,
        showSideMod1:false,
        showSideMod2:false,
        showSideMod3:false,
        showSideMod3:false,
        sideTabIndex:0,
        modTabIndex:0,
        showRequestDialog:true,
        percentValue:10
        
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
        this.modTabIndex = index;
        if(index == 0) {
            this.showMod0 = true;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod3 = false;
            this.showMod4 = false;
        } else if(index == 1) {
            this.showMod1 = true;
            this.showMod0 = false;
            this.showMod2 = false;
            this.showMod3 = false;
            this.showMod4 = false;
        } else if(index == 2) {
            this.showMod2 = true;
            this.showMod0 = false;
            this.showMod1 = false;
            this.showMod3 = false;
            this.showMod4 = false;
        } else if(index == 3) {
            this.showMod3 = true;
            this.showMod0 = false;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod4 = false;
        } else if(index == 4) {
            this.showMod4 = true;
            this.showMod0 = false;
            this.showMod1 = false;
            this.showMod2 = false;
            this.showMod3 = false;
        }
    },
    sideTabHandle(index) {
        this.sideTabIndex = index;
        if(index == 0) {
            this.showSideMod0 = true;
            this.showSideMod1 = false;
            this.showSideMod2 = false;
            this.showSideMod3 = false;
            this.showSideMod4 = false; 
        }
        if(index == 1) {    
            this.showSideMod1 = true;
            this.showSideMod0 = false;
            this.showSideMod2 = false;
            this.showSideMod3 = false;
            this.showSideMod4 = false;
        }
        if(index == 2) {
            this.showSideMod2 = true;
            this.showSideMod0 = false;
            this.showSideMod1 = false;
            this.showSideMod3 = false;
            this.showSideMod4 = false;
        }
        if(index == 3) {
            this.showSideMod3 = true;
            this.showSideMod0 = false;
            this.showSideMod1 = false;
            this.showSideMod2 = false;
            this.showSideMod4 = false;
        }
        
        if(index == 4) {
            this.showSideMod4 = true;
            this.showSideMod0 = false;
            this.showSideMod1 = false;
            this.showSideMod2 = false;
            this.showSideMod3 = false;
        }
      
    },
    hide() {

    }
  }
};