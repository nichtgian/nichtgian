<script lang="ts">
    import CvItem from '$lib/components/CVItem.svelte';
    import { m } from '$lib/paraglide/messages.js';
    import {
        Button,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from 'flowbite-svelte';
    import { DownloadSolid } from 'flowbite-svelte-icons';
</script>

<svelte:head>
    <title>Gian Ott - {m['nav.resume']()}</title>
    <meta name="description" content="Resume" />
</svelte:head>

<section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Resume (CV)
            </h2>

            <div class="mt-4">
                <Button color="secondary">
                    <DownloadSolid class="me-2 h-5 w-5" />
                    Downlaod
                </Button>
            </div>
        </div>

        <div class="max-w-3xl mx-auto text-center mt-18">
            <h3 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Jobs
            </h3>
        </div>
        <Table>
            <CvItem
                from="Feb. 2024"
                current={true}
                occupation="Application Support Engineer"
                location="Komax AG, 6036 Dierikon"
                description=""
                skills={['Angular']}
            />
            <CvItem
                from="Okt. 2020"
                to="Sep. 2021"
                occupation="Application Support Engineer"
                location="Komax AG, 6036 Dierikon"
                description=""
                skills={['SAP CPI', 'Stibo Step MDM', 'Salesforce', 'Groovy']}
            />
            <CvItem
                from="Sep. 2019"
                to="Okt. 2019"
                occupation="Praktikum in Shanghai, China"
                location="Route2China & Kanton Luzern"
                description=""
                skills={['Vue.js', 'Java', 'kulturelle Einblicke']}
            />
            <CvItem
                from="Aug. 2016"
                to="Jul. 2020"
                occupation="Informatiker EFZ - Fachrichtung Applikationsentwicklung"
                location="Komax AG, 6036 Dierikon"
                description=""
                skills={['C#', 'Angular', '.NET', 'TypeScript']}
            />
        </Table>

        <div class="max-w-3xl mx-auto text-center mt-18">
            <h3 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                Education
            </h3>
        </div>
        <Table>
            <CvItem
                from="2022"
                current={true}
                occupation="BSc in Computer Science"
                location="Lucerne University of Applied Sciences & Arts (HSLU)"
                description="Bachelor (BSc) in Computer Science mit Major in «Software Engineering & DevOps»"
                skills={['Java', 'Angular', 'DevOps (CI/CD)', 'Testing (JUnit)', 'Micronaut', 'SonarQube']}
            />
            <CvItem
                from="2021"
                to="2022"
                occupation="Berufsmaturität"
                location="Berufsmaturitätsschule Zürich (BMZ)"
                description="Berufsmaturität - Ausrichtung «Technik, Architektur & Life Sciences». Abschlussnote 5.2 (BM)"
            />
            <CvItem
                from="2020"
                current={true}
                occupation="Rekrutenschule (RS) als Infanteriebesatzer"
                location="INF RS 11 2 20 | GEB S BAT 6"
                description="Radschützenpanzerfahrer - 4/6 WKs absolviert"
            />
            <CvItem
                from="2016"
                to="2020"
                occupation="Berufslehre Informatiker EFZ"
                location="Berufsschule Informatik Sursee (BBZW)"
                description="Abschlussnote 5.2 (EFZ)"
            />
            <CvItem
                from="2013"
                to="2016"
                occupation="Sekundarschule"
                location="Sekundarschule Mettmenstetten"
                description=""
            />
            <CvItem
                from="2007"
                to="2013"
                occupation="Primarschule"
                location="Primarschule Mettmenstetten"
                description=""
            />
        </Table>
    </div>
</section>
