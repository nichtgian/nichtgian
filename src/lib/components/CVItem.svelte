<script>
    import { Badge, TableBodyCell, TableBodyRow } from 'flowbite-svelte';
    let { from, to = '', current = false, occupation, description, location, skills = [] } = $props();
</script>

<TableBodyRow>
    <TableBodyCell class="text-right text-secondary-600 dark:text-secondary-200">
        {#if current}
            <p class="underline">NOW</p>
        {:else}
            <p>{to}</p>
        {/if}
        <p>-</p>
        <p>{from}</p>
    </TableBodyCell>
    <TableBodyCell>
        <h4 class="text-2xl tracking-tight font-extrabold text-primary-600 dark:text-primary-200">{occupation}</h4>
        {#each skills as skill}
            <Badge border rounded class="mr-2 my-1" color="gray">{skill}</Badge>
        {/each}
        <p class="indent-4">{description}</p>
        <p class="indent-4 text-primary-600 dark:text-primary-200">{location}</p>
    </TableBodyCell>
</TableBodyRow>
