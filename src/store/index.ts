import { createStore } from 'vuex';
import authModule from './modules/auth/index';
import adviceModule from './modules/advices';

const store = createStore({
    modules: {
        auth: authModule,
        advices: adviceModule,
    }
});

export default store;
