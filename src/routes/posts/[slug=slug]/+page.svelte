<script lang="ts">
    import { page } from "$app/stores"

    $: title = $page.params.slug
</script>
<h1>{title}</h1>