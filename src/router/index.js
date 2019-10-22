import Vue from 'vue'
import Router from 'vue-router'
import SiteTemplate from '@/templates/SiteTemplate'
import Formulario from '@/paginas/formulario/Formulario'
import Dados from '@/paginas/dados/Dados'
import Detalhes from '@/paginas/detalhes/Detalhes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SiteTemplate',
      component: SiteTemplate,
      children: [
        {
          path: '/',
          name: 'Formulario',
          component: Formulario,
        },
        {
          path: '/dados',
          name: 'Dados',
          component: Dados,
        },
        {
          path: '/detalhes/:cadastroId',
          name: 'Detalhes',
          component: Detalhes,
        }
      ]
    }
  ]
})
