import { navigateTo } from '@/utils';
import { Toast,CountDown,Field,Checkbox, CheckboxGroup,Popup,DropdownMenu, DropdownItem } from 'vant';
import { WalletCards,TriangleAlert,Clock,Info,Award,Phone,MessageCircle,ArrowRight,Settings2 ,ChevronLeft,ClipboardList,CalendarDays,X,Check,FileText,Languages,Bel,Wifi,History,Search,RefreshCw,Funnel,ChevronRight,Gavel ,Activity,Bell,Star,SquareCheckBig,PencilLine,AlarmClock,EllipsisVertical,User,Network,Globe,Copy,ShieldCheck,CircleAlert,Users,Smartphone,Paperclip,ArrowDown,ArrowUpRight,BadgeCheck} from 'lucide-vue';
export default {
  components: {
    Popup,
    DropdownMenu, 
    DropdownItem,
    ChevronLeft,
    AlarmClock,
    EllipsisVertical,
    User,
    Phone,
    Network,
    Globe,
    MessageCircle,
    Copy,
    ShieldCheck,
    TriangleAlert,
    CircleAlert,
    Users,
    Smartphone,
    Paperclip,
    FileText,
    ArrowDown,
    ArrowUpRight,
    BadgeCheck,
    X,
    Check
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
        optionValue:0,
        showRejectDialog:false,
        rejectNote:""
    };
  },
  methods: {
        hide() {
            this.showReduceDialog = false;
            this.showEscalateDialog = false;
            this.showOverrideDialog = false;
            this.showRejectDialog = false;
        },
        reduceHandle() {
            this.showReduceDialog = true;
            this.showPop = false;
        },
        escalateHandle() {
            this.showEscalateDialog = true;
            this.showPop = false;
        },
        overrideHandle() {
            this.showOverrideDialog = true;
            this.showPop = false;
        }
    }
}