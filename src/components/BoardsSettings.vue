<template>
  <v-dialog
    v-model="dialog"
    persistent
    scrollable
    width="500"
    :fullscreen="$vuetify.breakpoint.mdAndDown ? true : false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon color="#333" v-bind="attrs" v-on="on">
        <v-icon>$settings</v-icon>
      </v-btn>
    </template>

    <v-card tile>
      <v-card-title class="pa-0">
        <v-toolbar dark color="primary" flat>
          <v-btn icon dark @click="dialog = false">
            <v-icon>$close</v-icon>
          </v-btn>
          <v-toolbar-title>Add Board</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-card-title>
      <v-card-text>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Molestias,
          non. Ad voluptate hic, atque perferendis quos tempore, consequatur
          temporibus ipsa harum nisi nostrum quaerat numquam mollitia explicabo,
          esse quae, quas!
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="save"> Save </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "BoardsSettings",
  data: () => ({
    board: {
      name: "OK Test",
      items: [
        {
          status: "done",
        },
      ],
    },
    dialog: false,
  }),
  methods: {
    save() {
      this.$kanban().addBoard(this.board);
      this.dialog = false;
    },
  },
};
</script>
