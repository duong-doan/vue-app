<template>
  <div class="product-detail__comments">
    <ul>
      <li>DESCRIPTION</li>
      <li>REVIEWS</li>
    </ul>
    <div class="product-detail__comments__content">
      <div class="product-detail__comments__content--description">
        <h6>Description</h6>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </div>
      <div class="product-detail__comments__content--reviews">
        <form action="">
          <h6>Reviews</h6>
          <p>YOUR RATING *</p>
          <span>*****</span>

          <p>YOUR REVIEW *</p>
          <textarea />

          <p>NAME *</p>
          <input type="text" placeholder="name" />

          <p>EMAIL *</p>
          <input type="text" placeholder="email" /><br />

          <input type="checkbox" checked />
          <span
            >SAVE MY NAME, EMAIL, AND WEBSITE IN THIS BROWSER FOR THE NEXT TIME
            I COMMENT.</span
          >
          <br />

          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
