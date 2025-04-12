<script lang="ts">
	import { page } from '$app/state';
</script>

<h1>Error</h1>
<span>{page.error?.message}</span>
