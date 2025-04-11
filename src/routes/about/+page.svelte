<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h1>{m.hello_world({ name: 'User' })}</h1>