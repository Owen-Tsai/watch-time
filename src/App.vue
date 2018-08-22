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
        <v-list-tile v-for="item in items" :key="item.title" @click.stop="item.clickevent">
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
      dark
      clipped-left
    >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>

    <v-footer app dark>
      <span>&nbsp;&nbsp;&nbsp;
        Created With <v-icon color="red">favorite</v-icon> By Owen Tsai | 蔡仲晨
      </span>
    </v-footer>
  </v-app>
</template>

<script>
  import HelloWorld from './components/HelloWorld'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data () {
      return {
        drawer: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: '看时 - WatchTime',
        items: [
          {
            icon: 'all_inbox',
            title: '收集箱',
            clickevent: this.openInbox
          },
          {
            icon: 'query_builder',
            title: '番茄时钟'
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
        ]
      }
    },
    methods :{
      openInbox: function () {
        alert(123);
      }
    }
  }
</script>
