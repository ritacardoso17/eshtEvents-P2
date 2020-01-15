<template>
  <div class="eventos">
    <hr id="line1" />
    <h2 id="subtitle">Os Teus Eventos</h2>
    <hr id="line2" />

    <b-tabs align="center" id="profileTabs">
      <b-tab title="Eventos" id="profileEvents">
        <div class="yourEvents" id="yourEvents">
          <b-table striped hover :items="this.objects" :fields="this.fields"></b-table>
        </div>
      </b-tab>
      <b-tab title="Espaços" id="profileRooms">
        <div class="yourRooms" id="yourRooms">
          <b-table striped hover :items="this.objects" :fields="this.fields">
            <template v-slot:cell(change)="row">
              <b-button class="btnRemove" size="sm" @click="editRoom()">Alterar</b-button>
            </template>
            <template v-slot:cell(rate)="row">
              <img src="/assets/star.svg" id="star1" @click="editStars()" alt />
              <img src="/assets/star.svg" id="star2" @click="editStars()" alt />
              <img src="/assets/star.svg" id="star3" @click="editStars()" alt />
              <img src="/assets/star.svg" id="star4" @click="editStars()" alt />
              <img src="/assets/star.svg" id="star5" @click="editStars()" alt />
            </template>
          </b-table>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: [],
      fields: [
        { key: "type", lable: "type", sortable: true },
        { key: "day", lable: "day", sortable: true },
        { key: "state", lable: "state", sortable: true },
        { key: "change" },
        { key: "rate" }
      ]
    };
  },
  methods: {}
};
</script>