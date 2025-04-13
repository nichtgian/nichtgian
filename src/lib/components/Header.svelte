<script lang="ts">
    import { page } from '$app/state';
    import { deLocalizeHref, getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
    import {
        Button,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
    } from 'flowbite-svelte';
    import { GlobeOutline } from 'flowbite-svelte-icons';
    import { m } from '$lib/paraglide/messages.js';
    import logo from '$lib/images/nichtgian-logo.svg';

    let activeUrl = $derived.by(() => {
        return deLocalizeHref(page.url.pathname) === '/'
            ? localizeHref('/', { locale: getLocale() })
            : page.url.pathname;
    });
</script>

<Navbar class="bg-primary-100 dark:bg-primary-700">
    <NavBrand href={localizeHref('/')}>
        <img src={logo} class="me-3 h-6 sm:h-9" alt="Nichtgian Logo" />
    </NavBrand>

    <div class="flex md:order-2">
        <Button outline color="secondary" class="cursor-pointer">
            {m['i18n.short']()} <GlobeOutline class="ms-2 inline h-6 w-6" />
        </Button>
        <Dropdown simple>
            <DropdownItem href={localizeHref(page.url.pathname, { locale: getLocale() })} style="color: grey">
                {m['i18n.long'](getLocale())} ({getLocale()})
            </DropdownItem>
            <DropdownDivider />
            {#each locales as locale}
                {#if locale !== getLocale()}
                    <DropdownItem data-sveltekit-reload href={localizeHref(page.url.pathname, { locale })}>
                        {m['i18n.long']({}, { locale: locale })} ({locale})
                    </DropdownItem>
                {/if}
            {/each}
        </Dropdown>

        <NavHamburger />
    </div>

    <NavUl {activeUrl}>
        <NavLi href={localizeHref('/')}>
            {m['nav.home']()}
        </NavLi>
        <NavLi href={localizeHref('/resume')}>
            {m['nav.resume']()}
        </NavLi>
    </NavUl>
</Navbar>
