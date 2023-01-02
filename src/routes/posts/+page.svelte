<script lang="ts">
    import type { PageData } from "./$types"

    export let data: PageData
</script>

<h1>Posts Page</h1>

{JSON.stringify(data)}

<p>You can <a href="/posts/create">+create</a> or edit your posts here.</p>