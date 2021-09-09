import { createRouter, createWebHistory } from 'vue-router'

function getRoutes() {
  let routes =[];  
  routes.push({ path: '/', component: () => import('@/tasks/Dashboard.vue')});
  routes.push({ path: '/login', component: () => import('@/tasks/Login.vue')});

  //let vueIndexFiles = require.context('@/tasks/',true,/\/Index\.vue$/);
  let vueIndexFiles = require.context('@/tasks/',true,/\/Index\.vue$/).keys();
  for(let i=0;i<vueIndexFiles.length;i++) {
    let indexFile=vueIndexFiles[i];
    let path=indexFile.substr(1,indexFile.length-11);  
    let children=[];
    try{      
      let data=require(`@/tasks${path}/ChildrenList.js`);      
      children=data.default;
    }
    catch (error) {  
      //console.log(error);    
    }
    routes.push({ path: path, component: () => import('@/tasks'+path+'/Index.vue'), children: children});          
  }
  routes.push({ path: '/:catchAll()', component: () => import('@/components/busy-states/404.vue')});
  return routes;
}
let routes =getRoutes();

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
