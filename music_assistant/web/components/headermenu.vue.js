Vue.component("headermenu", {
  template: `<div>
    <v-navigation-drawer dark app clipped temporary v-model="menu">
        <v-list >
            <v-list-tile
               v-for="item in items" :key="item.title" @click="$router.push(item.path)">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    

    <v-toolbar app flat dense dark v-if="$globals.windowtitle" > 
        <v-layout align-center>
            <v-btn icon v-on:click="menu=!menu">
              <v-icon>menu</v-icon>
            </v-btn>
            <v-btn @click="$router.go(-1)" icon>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-card-title class="title justify-center">
                      {{ $globals.windowtitle }}
                  </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon v-on:click="$globals.showsearchbox = true">
                <v-icon>search</v-icon>
              </v-btn>
        </v-layout>
    </v-toolbar>
    <v-toolbar flat fixed dense dark scroll-off-screen color="transparent" v-if="!$globals.windowtitle" > 
        <v-layout align-center>
            <v-btn icon v-on:click="menu=!menu">
              <v-icon>menu</v-icon>
            </v-btn>
            <v-btn @click="$router.go(-1)" icon>
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn icon v-on:click="$globals.showsearchbox = true">
                <v-icon>search</v-icon>
              </v-btn>
        </v-layout>
    </v-toolbar>
</div>`,
  props: [],
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      menu: false,
      items: [
        { title: this.$t('home'), icon: "home", path: "/" },
        { title: this.$t('artists'), icon: "person", path: "/artists" },
        { title: this.$t('albums'), icon: "album", path: "/albums" },
        { title: this.$t('tracks'), icon: "audiotrack", path: "/tracks" },
        { title: this.$t('playlists'), icon: "playlist_play", path: "/playlists" },
        { title: this.$t('search'), icon: "search", path: "/search" },
        { title: this.$t('settings'), icon: "settings", path: "/config" }
      ]
    }
  },
  mounted() { },
  methods: { }
})
