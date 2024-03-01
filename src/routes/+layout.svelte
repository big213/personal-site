<script>
  import "../global.css";
  const lastUpdated = new Date("2023-12-11").toDateString();
</script>

<div style="max-width: 500px; margin: 0 auto; padding: 0px 10px 10px 10px">
  <nav>
    <a href="/">Home</a> | <a href="/canned">Canned Food</a> |
    <a href="apartment">Apartment</a> |
    <a href="contact">Contact</a> |
    <a href="https://github.com/big213/personal-site"
      >Source (Github)</a
    >
    <hr />
  </nav>
  <slot />
  <small>Last updated: { lastUpdated }</small>
  <div style="height: 300px">&nbsp;</div>
</div>
