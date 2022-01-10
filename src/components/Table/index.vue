<template>
  <div class="b-table">
    <b-table ref="tableRef" :items="customItems" :fields="fields">
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
          style="cursor: pointer"
        />
      </template>

      <template #cell(product)="data">
        <div class="b-table__cell--product">
          <img :src="data.item.image" alt="" />
          <h5>{{ data.item.name }}</h5>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["fields", "items"],
  computed: {
    customItems() {
      const newitems = this.items.map((x) => ({
        ...x,
        isActive: false,
      }));
      return newitems;
    },
  },
  methods: {
    onRowSelected(items) {
      // select a row and return a array contains a row selected
      console.log(items);
    },
    handleChangeCheckboxHead(e) {
      if (!e.target.checked) {
        this.$refs.tableRef.clearSelected();
        this.customItems.forEach((cell) => {
          cell.isActive = false;
        });
        return;
      }
      this.$refs.tableRef.selectAllRows();
      this.customItems.forEach((cell) => {
        cell.isActive = true;
      });
    },
    handleChangeCheckboxCell(data) {
      console.log("data", data);
      this.items.forEach((cell) => {
        if (data.item.id === cell.id) {
          cell.isActive === !cell.isActive;
        }
      });
    },
    showProduct(data) {
      console.log(data);
      return `<img src="${data.item.image}" />`;
    },
  },
};
</script>

<style lang="scss">
.b-table {
  &__cell--product {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    h5 {
      font-size: 10px;
    }
  }

  thead {
    tr {
      th {
        vertical-align: middle;
        text-align: center;
      }
    }
  }

  tbody {
    tr {
      td {
        vertical-align: middle;
        text-align: center;
      }
    }
  }
}
</style>
