<template>
  <div class="">
    <b-table
      ref="tableRef"
      hover
      selectable
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
      @row-clicked="handleSelectedRow"
    >
      <template #head(id)>
        <input
          ref="inputTotal"
          type="checkbox"
          @change="handleChangeCheckboxHead"
        />
      </template>

      <template #cell(id)="data">
        <input
          ref="inputItem"
          type="checkbox"
          :id="data.value"
          class="input-item"
          :checked="data.item.isActive"
          @change="handleChangeCheckboxCell(data)"
        />
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "",
        },
        "product",
        "discount",
        "quantity",
        "price",
        "delete",
      ],
      items: [
        {
          id: 1,
          isActive: false,
          product: "Dickerson",
          last_name: "Macdonald",
          discount: 12,
          quantity: 1,
          price: 10,
          delete: false,
        },
        {
          id: 2,
          isActive: false,
          product: "Larsen",
          last_name: "Shaw",
          discount: 12,
          quantity: 1,
          price: 10,
          delete: false,
        },
        {
          id: 3,
          isActive: false,
          product: "Geneva",
          last_name: "Wilson",
          discount: 12,
          quantity: 1,
          price: 10,
          delete: false,
        },
      ],
    };
  },
  methods: {
    onRowSelected(items) {
      // select a row and return a array contains a row selected
      console.log(items);
    },
    handleChangeCheckboxHead(e) {
      if (!e.target.checked) {
        this.$refs.tableRef.clearSelected();
        this.items.forEach((cell) => {
          cell.isActive = false;
        });
        return;
      }
      this.$refs.tableRef.selectAllRows();
      this.items.forEach((cell) => {
        cell.isActive = true;
      });
    },
    handleChangeCheckboxCell(data) {
      console.log(data.item.id);
      this.items.forEach((cell) => {
        console.log(cell.id);
        if (data.item.id === cell.id) {
          cell.isActive === !cell.isActive;
        }
      });
      console.log(this.items);
    },
    handleSelectedRow(item) {
      this.items.forEach((cell) => {
        if (cell.id === item.id) {
          cell.isActive = !cell.isActive;
        }
      });
    },
  },
};
</script>
