<template>
  <div class="product-detail__info">
    <div class="row">
      <div class="col-6">
        <div class="product-detail__info__image">
          <img src="../../../assets/images/products/product-05.png" alt="" />
        </div>
      </div>
      <div class="col-6">
        <div class="product-detail__info__content">
          <h1>Black Metal Watch</h1>
          <div class="product-detail__info__content--price">
            <span>$20.00</span>
            <span>$18.00</span>
          </div>
          <p>This is a simple, virtual product.</p>
          <div class="product-detail__info__content--quantity">
            <input type="text" value="1" placeholder="abc" readonly />
            <div>
              <i class="fas fa-sort-up"></i>
              <i class="fas fa-sort-down"></i>
            </div>
            <button>ADD TO CART</button>
          </div>
          <ul>
            <li>
              <h6>SKU</h6>
              <span>Woo-beanie-logo</span>
            </li>
            <li>
              <h6>Category</h6>
              <span>Rings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
