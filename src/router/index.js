import { createRouter, createWebHistory } from 'vue-router'

function getRoutes() {
  let routes =[];  
  routes.push({ path: '/', component: () => import('@/tasks/Dashboard.vue')});
  routes.push({ path: '/login', component: () => import('@/tasks/Login.vue')});

  //let vueIndexFiles = require.context('@/tasks/',true,/\/Index\.vue$/);
  let vue_index_files = require.context('@/tasks/',true,/\/Index\.vue$/).keys();
  for(let i=0;i<vue_index_files.length;i++) {
    let index_file=vue_index_files[i];
    let path=index_file.substr(1,index_file.length-11);  
    let children=[];
    try{      
      let data=require(`@/tasks${path}/routes.children.js`);      
      children=data.default;
    }
    catch (error) {  
      //console.log(error);    
    }
    routes.push({ path: path, component: () => import('@/tasks'+path+'/Index.vue'), children: children});          
  }
  // routes.push({ path: '/:catchAll(.*)', component: () => import('@/components/busy-states/404.vue')});
  routes.push({ path: '/:pathMatch(.*)', component: () => import('@/tasks/Dashboard.vue')});
  return routes;
}
let routes =getRoutes();

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
