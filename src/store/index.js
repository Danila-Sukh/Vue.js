import { createStore } from 'vuex';
import ProjectDetailsModule from './modules/ProjectDetailsModule';
import BlogModule from './modules/BlogModule';

export default createStore({
  modules: {
    ProjectDetailsModule,
    BlogModule
  }
})
