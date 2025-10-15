<script>
  import Blockquote from "@/lib/components/custom/Blockquote.svelte";
  import { title, menuSidebar } from "@/lib/stores";
  title.update((value) => "Merchandise");
  menuSidebar.set(false);
  let data = [
  {
    "id": "278",
    "category_id": "1",
    "catalogue_id": "SFOM00068",
    "title": "Synchronize Fest x Susah Waras - Walkmoon",
    "photo": "126.jpg",
    "photo1": null,
    "photo2": null,
    "photo3": null,
    "photo4": null,
    "photo5": null,
    "price": "252252",
    "pricenormal": "252252",
    "stock": "25",
    "weight": "100",
    "availablesize": "OSFA",
    "description": "a collaboration with one of Bandung's creative collectives, Susah Waras",
    "dir": "assets/img/product/photo/",
    "filesize": "500",
    "created": null,
    "modified": null,
    "discount": null,
    "tiketid_jfp": null,
    "pass_type": null,
    "sortno": null
  },
  {
    "id": "276",
    "category_id": "2",
    "catalogue_id": "SF202508",
    "title": "T-Shirt SF 2025 Full Line Up Black",
    "photo": "Line_Up_Front_Black.png",
    "photo1": "2025Line_Up_Back_Black.png",
    "photo2": "size-chart-2025.jpg",
    "photo3": null,
    "photo4": null,
    "photo5": null,
    "price": "229000",
    "pricenormal": "229000",
    "stock": "100",
    "weight": "100",
    "availablesize": "S,M,L,XL,XXL,XXXL",
    "description": "Khusus merchandise Line Up 2025 akan dikirim dalam kurun waktu 7 hari",
    "dir": "assets/img/product/photo/",
    "filesize": "106",
    "created": null,
    "modified": null,
    "discount": null,
    "tiketid_jfp": null,
    "pass_type": null,
    "sortno": null
  }
]
</script>
<svelte:head>
    <title>Merchandise</title>
    <meta name="description" content="Synchronize Festival 2025 - Merchandise" />
    <meta property="og:title" content="Merchandise" />
    <meta property="og:description" content="Synchronize Festival 2025 - Merchandise" />
</svelte:head>

<div class="p-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {#each data as item}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={`https://synchronizefestival.com/${item.dir}${item.photo}`} alt={item.title} class="w-full h-48 object-cover" />
                <div class="p-4">
                    <h3 class="text-lg font-semibold">{item.title}</h3>
                    <p class="text-gray-600">{item.description}</p>
                    <p class="text-lg font-semibold">Rp {parseInt(item.price).toLocaleString()}</p>
                </div>
            </div>
        {/each}
    </div>
</div>
