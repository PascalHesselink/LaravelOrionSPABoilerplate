import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

export default {
    install(Vue, options) {
        Vue.component('FormInput', FormInput);
        Vue.component('FormButton', FormButton);
    }
}
