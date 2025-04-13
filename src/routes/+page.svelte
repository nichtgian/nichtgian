<script>
    import Skill from '$lib/components/Skill.svelte';
    import portraitCasual from '$lib/images/portrait-casual.png';
    import portraitBusiness from '$lib/images/portrait-business.jpg';
</script>

<svelte:head>
    <title>Gian Ott</title>
    <meta name="description" content="About me" />
</svelte:head>

<section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Hello, I'm Gian Ott
            </h2>
            <h3 class="mb-3 text-3xl tracking-tight font-extrabold">
                <span class="text-primary-600 dark:text-primary-200">A Software Developer</span>
                <span class="text-secondary-600">based in Switzerland.</span>
            </h3>
            <p class="mb-4">
                Computer science means never having finished learning. When knowledge is tested, deficits, new methods
                or even new interests in specific subject areas appear. Education is like an odyssey, with the
                divergence of endless knowledge acquisition.
            </p>
            <p class="mb-4">
                Challenges motivate me every day to give my best. I continuously improve my professional and
                methodological competence. I build on past (mis)successes, learn and apply. A profession that requires a
                passion for technology* and innovation.
            </p>
            <p>
                *Passion does not include printers and PHP
            </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img
                class="w-full"
                src={portraitBusiness}
                alt="office content 1"
            >
            <img
                class="mt-4 w-full lg:mt-10"
                src={portraitCasual}
                alt="office content 2"
            >
        </div>
    </div>
</section>

<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md mb-8 lg:mb-16">
            <h3 class="mb-3 text-3xl tracking-tight font-extrabold text-primary-600 dark:text-primary-200">
                Skills & Experience
            </h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                I'm passoniate about web development and work on many projects in my spare time. I continuously try to
                improve my skills and learn new technologies.
            </p>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            <Skill
                title="Angular"
                description="Angular since 2017 including reactive programming or run-time typesafety (schema validation) using Zod. Other frontend frameworks I'm familiar with include Vue.js, Svelte and Ionic. Internationalization libraries include ParaglideJS and Transloco and components libraries Angular Material and Flowbite."
                imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
            />
            <Skill
                title="TypeScript"
                description="TypeScript since 2017. I'm familiar with TypeORM, testing frameworks like Jasmine, web application frameworks like Express.js or Socket.IO. I furthermore developed many browser games using the HTML5 Canvas."
                imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            />
            <Skill
                title="C#"
                description="C# and other .NET technologies since 2016. I'm familiar with WPF, ASP.NET Core, .NET Maui and libraries including NInject, NUnit or the OR-mapper Entity Framework."
                imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
            />
            <Skill
                title="Java"
                description="Java since 2022. I've worked with JUnit, Micronaut, gRPC, messaging brokers like RabbitMQ. Relational database technologies including MySQL and noSQL including MongoDB."
                imageSrc="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            />
        </div>
    </div>
</section>
