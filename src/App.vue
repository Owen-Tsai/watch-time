<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      dark
    >
      <v-list class="pa-1">
        <v-list-tile v-if="miniVariant" @click.stop="miniVariant = !miniVariant">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Owen Tsai</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

      </v-list>

      <v-list class="pt-0">
        <v-divider light></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      color="yellow"
      clipped-left
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app dark>
      <span>&nbsp;&nbsp;&nbsp;
        Created With <v-icon color="red">favorite</v-icon> By Owen Tsai | 蔡仲晨
      </span>
    </v-footer>
  </v-app>
</template>

<script>
  import WelcomePage from "./components/Inbox";
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: 'App',
    components: {
      HelloWorld,
      WelcomePage,
    },
    data () {
      return {
        drawer: true,
        helloPage: false,
        miniVariant: true,
        title: '看时 - WatchTime',
        items: [
          {
            icon: 'all_inbox',
            title: '收集箱',
            link: '/'
          },
          {
            icon: 'query_builder',
            title: '番茄时钟',
            link: '/test'
          },
          {
            icon: 'account_circle',
            title: '个人中心'
          },
          {
            icon: 'forum',
            title: '好友动态'
          },
          {
            icon: 'group',
            title: '群组'
          },
          {
            icon: 'public',
            title: '发现'
          },
          {
            icon: 'local_grocery_store',
            title: '时间市场'
          }
        ]
      }
    },
    methods :{

    }
  }
</script>
