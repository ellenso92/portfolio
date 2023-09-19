import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/Harut',
    name: 'Harut',
    component: () => import(/* webpackChunkName: "404" */ '../pages/Project/Harut.vue'),
  },
  {
    path: '/TonPay',
    name: 'TonPay',
    component: () => import(/* webpackChunkName: "404" */ '../pages/Project/TonPay.vue'),
  },
  {
    path: '/NuovoSeoul',
    name: 'NuovoSeoul',
    component: () => import(/* webpackChunkName: "404" */ '../pages/Project/NuovoSeoul.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 맨 위로
  scrollBehavior (to, from, savedPosition) {
    // 기존 위치 존재하면 그 위치 반환
    if(savedPosition){
      return savedPosition;
    }
    // 쿼리만 다를 때는 스크롤 업 안함
    if(to.matched[0]?.path===from.matched[0]?.path && to.path!=='/') {
      return;
    }
    if(to.path===from.path || to.path==='/'){
      window.scrollTo({top : 0, behavior : 'smooth'});
      return;
    }

    window.scrollTo({top : 0})
  }
})

// 페이지 변경시 로딩 시작
router.beforeEach(() => {
  store.commit('loading/startDelayLoading'); 
  store.commit('header/close'); // 다른 페이지로 넘어갈 때 헤더 닫기(뒤로가기 때문)
})
// 페이지 변경 완료시 로딩 끝냄
router.afterEach(() => {
  store.commit('loading/finishLoading');
})

export default router
