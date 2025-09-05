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
        hide() {
        this.showReduceDialog = false;
        this.showEscalateDialog = false;
        this.showOverrideDialog = false;
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