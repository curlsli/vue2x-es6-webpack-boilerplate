import NotFoundComponent from '../components/notfound/notfound';
import DemoDatetimePickerComponent from '../components/Demo/DatetimePicker/demo-datetimePicker.vue';

const routes = [
  {
    path: '/datetime-picker',
    component: DemoDatetimePickerComponent
  },
  {
    path: '*',
    component: NotFoundComponent 
  }
]
export default routes;