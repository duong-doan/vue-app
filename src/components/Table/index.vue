<template>
  <div class="b-table__wrapped">
    <div class="b-table">
      <b-table
        ref="tableRef"
        :items="items"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #head(id)>
          <!-- <input
            ref="inputTotal"
            type="checkbox"
            @change="handleChangeCheckboxHead"
          /> -->
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
          <div
            :class="[
              'b-table__cell--price',
              {
                'no-discount': data.item.price_discount === 0,
              },
            ]"
          >
            <span>{{ data.item.price }}</span>
          </div>
        </template>

        <template #cell(quantity)="data">
          <div class="b-table__cell--quantity">
            <button
              :disabled="data.item.quantity === 1 || processing"
              class="decrease"
              @click="handleDecrease(data.item.id, data.item.quantity)"
            >
              -
            </button>
            <span>{{ data.item.quantity }}</span>
            <button
              :disabled="processing"
              class="increase"
              @click="handleIncrease(data.item.id, data.item.quantity)"
            >
              +
            </button>
          </div>
        </template>

        <template #cell(price_discount)="data">
          <div class="b-table__cell--price-discount">
            <span>{{
              data.item.price_discount === 0
                ? data.item.price * data.item.quantity
                : data.item.price_discount * data.item.quantity
            }}</span>
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
    </div>
    <div class="custom-b-table-footer">
      <h5>Total:</h5>
      <div>
        <span>${{ this.totalPrice }}</span>
        <button @click="handleClickBuy">BUY NOW</button>
      </div>
    </div>
    <template v-if="this.items.length > perPage">
      <b-pagination
        v-model="currentPage"
        :total-rows="items.length"
        :per-page="perPage"
        aria-controls="my-table"
        size="lg"
        @change="handleClickPage"
      >
      </b-pagination>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    "fields",
    "items",
    "onDelete",
    "onIncrease",
    "onDecrease",
    "perPage",
    "currentPage",
    "onChangePage",
    "totalPrice",
    "onSelectedRow",
    "onSelectedRowHead",
    "processing",
    "onClickBuy",
  ],
  data() {
    return {};
  },
  methods: {
    onRowSelected() {
      // argument: items
      // select a row and return a array contains a row selected
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
      this.onSelectedRowHead(this.items);
    },
    handleChangeCheckboxCell(data) {
      const newItems = this.items.map((product) => {
        if (product.id === data.item.id) {
          product.isActive = !product.isActive;
        }
        return product;
      });
      this.onSelectedRow(newItems);
    },
    handleDeleteRow(id) {
      this.onDelete(id);
    },
    handleIncrease(id, currentQuantity) {
      this.onIncrease(id, currentQuantity);
    },
    handleDecrease(id, currentQuantity) {
      this.onDecrease(id, currentQuantity);
    },
    handleClickPage(pageNunber) {
      this.onChangePage(pageNunber);
    },
    handleClickBuy() {
      this.onClickBuy();
    },
  },
  created() {},
};
</script>

<style lang="scss">
@import "../../assets/sass/abstracts/_variables.scss";
.b-table__wrapped {
  position: relative;
  height: 470px;
  .b-table {
    &__cell--product {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
      }
      h5 {
        font-size: 1.4rem;
      }
    }

    &__cell--price {
      text-decoration: line-through;
    }

    &__cell--price.no-discount {
      text-decoration: none;
    }

    &__cell--quantity {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;

      button,
      span {
        padding: 0 6px;
        border: 1px solid $bg__color--primary;
        background: $white;
      }
      button {
        &:hover {
          background: $gray-400;
        }
      }

      span {
        border-left: none;
        border-right: none;
        padding: 0 8px;
      }
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
      font-size: 1.5rem;
      tr {
        th {
          vertical-align: middle;
          text-align: center;
        }
      }
    }

    tbody {
      tr {
        padding: 8px 0;
        font-size: 1.4rem;
        td {
          vertical-align: middle;
          text-align: center;
        }
      }
    }

    & > :not(caption) > * > * {
      padding: 1.8rem 0.5rem !important;
    }
  }

  .custom-b-table-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: $gray-200;
    padding: 10px 0;
    font-size: 2rem;
    position: absolute;
    bottom: 70px;
    width: 100%;
    h5 {
      margin-left: 20px;
      font-size: inherit;
    }

    div {
      span {
        margin-right: 20px;
      }

      button {
        padding: 4px 16px;
        margin-right: 8px;
        border: none;
        background: $hover__color--primary;
        color: $white;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          color: $text__color--dark;
          background: $white;
        }
      }
    }
  }
  .pagination {
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;

    li {
      span,
      button {
        padding: 8px 14px !important;
      }
    }
  }
}
</style>
