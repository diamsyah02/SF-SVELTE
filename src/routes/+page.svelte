<script>
    import Banner from "@/lib/components/custom/home/Banner.svelte";
    import Blockquote from "@/lib/components/custom/Blockquote.svelte";
    import { title } from "@/lib/stores";
    title.update((value) => "Home");
</script>
<svelte:head>
    <title>Home</title>
    <meta name="description" content="Synchronize Festival 2025 - Home" />
    <meta property="og:title" content="Home" />
    <meta property="og:description" content="Synchronize Festival 2025 - Home" />
</svelte:head>
<Banner />
<div class="p-10">
    <Blockquote className="text-center">
        DI TAHUN INI 2025 BUKAN HANYA MENJADI PERAYAAN EDISI KE-10 #SYNCHRONIZEFEST, TAPI JUGA TURUN MERAYAKAN ULANG TAHUN LABEL MUSIK @DEMAJORSRECS DAN KOLEKTIF SENI RUPA @RUANGRUPA YANG KE-25 <br/><br/>
        PERAYAAN SYNCHRONIZE FEST MENGUSUNG TEMA #SILANGSALING, YANG MENCERMINKAN BAGAIMANA MUSIK, SENI, DAN BUDAYA SALING TERHUBUNG SERTA MENCIPTAKAN HARMONI DALAM EKOSISTEM FESTIVAL MUSIK INDONESIA. TEMA BESAR INI SEJALAN DENGAN KOLABORASI LINTAS KREASI ANTARA MUSIK DAN SENI #BER25AMA @DEMAJORSRECS DAN @RUANGRUPA.   
    </Blockquote>
    <div class="mt-4 md:mt-10 lg:mt-10">
        <Blockquote>
            synchronize festival merupakan festival musik multi-genre tahunan berskala nasional yang mengundang puluhan ribu audience untuk merayakan keberagaman jenis musik hidup di enam panggung selama tiga hari, tiga malam, menikmati suguhan 100-an pertunjukan terkurasi dari artis-artis terfavorit dan terbaik tanah air yang datang dari dekade `60-an` `70-an` `80-an` `90-an` hinggan 2000-an. Seluruh genre musik populer bakal ditampilkan di <strong>Synchronize Festival</strong>
        </Blockquote>
    </div>
</div>
