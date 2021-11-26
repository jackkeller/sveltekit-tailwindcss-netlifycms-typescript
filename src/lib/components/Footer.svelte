<script>
  import { vars } from '@lib/vars'
</script>

<footer>
  <div class="container">
    &copy; {new Date().getFullYear()}
    {vars.title} &trade;
  </div>
</footer>

<style>
  footer {
    @apply p-8 bg-black text-sm;
    height: var(--footer-height);
  }
</style>
