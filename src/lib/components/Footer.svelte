<script>
    import { DarkMode, Footer, FooterCopyright, FooterIcon } from 'flowbite-svelte';
    import { GithubSolid, InstagramSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<Footer class="rounded-none">
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
        <FooterIcon href="https://www.linkedin.com/in/nichtgian/">
            <LinkedinSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://github.com/nichtgian">
            <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="https://www.instagram.com/gian.ott/">
            <InstagramSolid
                class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
            />
        </FooterIcon>
    </div>

    <FooterCopyright href="/" year={2025} />

    <DarkMode class="sm cursor-pointer" />
</Footer>
