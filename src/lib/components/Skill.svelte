<script>
    let { title, description, imageSrc } = $props();
</script>

<div>
    <div
        class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
    >
        <img height="28" width="28" src={imageSrc}>
    </div>
    <h3 class="mb-2 text-xl font-bold dark:text-white">{title}</h3>
    <p class="text-gray-500 dark:text-gray-400">
        {description}
    </p>
</div>
