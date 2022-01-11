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

      <template #cell(price)="data">
        <div class="b-table__cell--price">
          <span>{{ data.item.price }}</span>
        </div>
      </template>

      <template #cell(quantity)="data">
        <div class="b-table__cell--quantity">
          <button @click="handleDecrease(data.item.id, data.item.quantity)">
            -
          </button>
          <span>{{ data.item.quantity }}</span>
          <button @click="handleIncrease(data.item.id, data.item.quantity)">
            +
          </button>
        </div>
      </template>

      <template #cell(price_discount)="data">
        <div class="b-table__cell--price-discount">
          <span>{{ data.item.price_discount }}</span>
        </div>
      </template>

      <template #cell(delete)="data">
        <div class="b-table__cell--delete">
          <i
            class="fas fa-trash-alt"
            @click="handleDeleteRow(data.item.id)"
          ></i>
        </div>
      </template>
    </b-table>

    <template> </template>
  </div>
</template>

<script>
export default {
  props: ["fields", "items", "onDelete"],
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
      this.items.forEach((cell) => {
        if (data.item.id === cell.id) {
          cell.isActive === !cell.isActive;
        }
      });
    },
    handleDeleteRow(id) {
      this.onDelete(id);
    },
    handleIncrease(id, currentQuantity) {
      console.log("in", id, currentQuantity);
    },
    handleDecrease(id, currentQuantity) {
      console.log("de", id, currentQuantity);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/sass/abstracts/_variables.scss";

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

  &__cell--price {
    text-decoration: line-through;
  }

  &__cell--quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__cell--price-discount {
    color: $hover__color--primary;
  }

  &__cell--delete {
    i {
      cursor: pointer;
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
