<script lang="ts">
    import { page } from '$app/state';
    import { localizeHref } from '$lib/paraglide/runtime';
    import { Button } from 'flowbite-svelte';
    import { Page500, Section } from 'flowbite-svelte-blocks';
    import { ArrowLeftOutline } from 'flowbite-svelte-icons';
</script>

<section class="min-h-full bg-white dark:bg-gray-900 antialiased">
    <Section name="page500">
        <Page500>
            <svelte:fragment slot="h1">{page.status}</svelte:fragment>
            <svelte:fragment slot="paragraph">
                <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                    {page.error?.message}
                </p>
                {#if page.status === 404}
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        Sorry, we can't find that page. Something's missing.
                    </p>
                    <Button href={localizeHref('/')} size="lg" color="secondary">
                        <ArrowLeftOutline size="md" class="mr-2 -ml-1" />
                        Back to Home
                    </Button>
                {:else}
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        We are already working to solve the problem.
                    </p>
                {/if}
            </svelte:fragment>
        </Page500>
    </Section>
</section>
