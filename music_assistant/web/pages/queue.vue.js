var Queue = Vue.component('Queue', {
  template: `
  <section>
        <v-list two-line>
        <listviewItem 
            v-for="(item, index) in items" 
            v-bind:item="item"
            :key="item.db_id"
            :hideavatar="isMobile()"
            :hidetracknum="true"
            :hideproviders="isMobile()"
            :hidelibrary="isMobile()">
        </listviewItem>
      </v-list>
      </section>`,
  props: ['player_id'],
  data() {
    return {
      selected: [0],
      info: {},
      items: [],
      offset: 0,
    }
  },
  created() {
    this.$globals.windowtitle = this.$t('queue')
    this.getQueueTracks();
    this.scroll(this.Queue);
  },
  methods: {
    getInfo () {
      const api_url = '/api/players/' + this.media_id
      axios
      .get(api_url, { params: { provider: this.provider }})
        .then(result => {
          data = result.data;
          this.info = data;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    getQueueTracks () {
      this.$globals.loading = true
      const api_url = '/api/players/' + this.player_id + '/queue'
      axios
        .get(api_url, { params: { offset: this.offset, limit: 50}})
        .then(result => {
          data = result.data;
          this.items.push(...data);
          this.offset += 25;
          this.$globals.loading = false;
        })
        .catch(error => {
          console.log("error", error);
        });
        
    },
    scroll (Browse) {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.getQueueTracks();
        }
      };
    }
  }
})
