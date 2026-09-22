$(function () {

    /* =========================================================
       UCCHANK'S LANDSCAPE - SCRIPT.JS
    ========================================================= */

    const nomorWhatsApp = "6283862555466";


    /* =========================================================
       HOME
    ========================================================= */

    if ($(".hero-text").length) {
        $(".hero-text").hide().fadeIn(1200);
    }

    $(".photo")
        .on("mouseenter", function () {
            $(this).stop(true, true).animate({
                opacity: 0.88
            }, 200);
        })
        .on("mouseleave", function () {
            $(this).stop(true, true).animate({
                opacity: 1
            }, 200);
        });

    $(".service-item")
        .on("mouseenter", function () {
            $(this).stop(true, true).animate({
                paddingLeft: "45px"
            }, 200);
        })
        .on("mouseleave", function () {
            $(this).stop(true, true).animate({
                paddingLeft: "38px"
            }, 200);
        });

    $(".process-item")
        .on("mouseenter", function () {
            $(this).stop(true, true).animate({
                opacity: 0.75
            }, 200);
        })
        .on("mouseleave", function () {
            $(this).stop(true, true).animate({
                opacity: 1
            }, 200);
        });

    $(window).on("scroll", function () {

        $(".header").css(
            "box-shadow",
            $(window).scrollTop() > 50
                ? "0 4px 18px rgba(0,0,0,0.08)"
                : "none"
        );

    });

    $(".video-card video").on("play", function () {

        $(".video-card video")
            .not(this)
            .each(function () {

                this.pause();

            });

    });


    /* =========================================================
       JASA KAMI
    ========================================================= */

    if ($("#konsultasi").length) {

        $(".detail-btn").on("click", function () {

            const service =
                $(this).data("service") || "-";


            $("#serviceField")
                .val(service);


            $("#selectedService")
                .text(service);


            const $consult =
                $("#konsultasi");


            if (!$consult.hasClass("show")) {

                $consult
                    .hide()
                    .addClass("show")
                    .slideDown(400);

            } else {

                $consult
                    .stop(true, true)
                    .slideDown(300);

            }


            $("html, body")
                .stop(true, true)
                .animate(
                    {
                        scrollTop:
                            $consult.offset().top - 110
                    },
                    500
                );

        });


        /* -----------------------------------------------------
           HITUNG LUAS
        ----------------------------------------------------- */

        function hitungLuas() {

            const panjang =
                parseFloat(
                    $("#lengthField").val()
                ) || 0;


            const lebar =
                parseFloat(
                    $("#widthField").val()
                ) || 0;


            const luas =
                panjang * lebar;


            $("#areaResult").text(
                Number.isInteger(luas)
                    ? luas
                    : luas.toFixed(2)
            );

        }


        $("#lengthField, #widthField")
            .on(
                "input",
                hitungLuas
            );


        /* -----------------------------------------------------
           KONSULTASI VIA WHATSAPP
        ----------------------------------------------------- */

        $("#waBtn").on("click", function () {

            const service =
                $("#serviceField").val() || "-";


            const work =
                $("#workField").val() || "-";


            const name =
                $("#nameField")
                    .val()
                    .trim();


            const phone =
                $("#phoneField")
                    .val()
                    .trim();


            const panjang =
                $("#lengthField").val();


            const lebar =
                $("#widthField").val();


            const luas =
                $("#areaResult").text() || "0";


            const location =
                $("#locationField")
                    .val()
                    .trim();


            const note =
                $("#noteField")
                    .val()
                    .trim();


            if (name === "") {

                alert(
                    "Silakan isi nama terlebih dahulu."
                );

                $("#nameField").focus();

                return;

            }


            if (phone === "") {

                alert(
                    "Silakan isi nomor WhatsApp terlebih dahulu."
                );

                $("#phoneField").focus();

                return;

            }


            if (panjang === "") {

                alert(
                    "Silakan isi panjang area terlebih dahulu."
                );

                $("#lengthField").focus();

                return;

            }


            if (lebar === "") {

                alert(
                    "Silakan isi lebar area terlebih dahulu."
                );

                $("#widthField").focus();

                return;

            }


            if (location === "") {

                alert(
                    "Silakan isi lokasi terlebih dahulu."
                );

                $("#locationField").focus();

                return;

            }


            const message =
`Halo UCCHANK'S LANDSCAPE,

Saya ingin berkonsultasi mengenai jasa.

Jasa yang dipilih: ${service}
Jenis pengerjaan: ${work}

Nama: ${name}
WhatsApp: ${phone}

Panjang area: ${panjang} m
Lebar area: ${lebar} m
Luas area: ${luas} m²

Lokasi: ${location}

Catatan kebutuhan:
${note || "-"}`;


            const waURL =
                "https://wa.me/" +
                nomorWhatsApp +
                "?text=" +
                encodeURIComponent(message);


            window.open(
                waURL,
                "_blank"
            );

        });

    }


    /* =========================================================
       PRODUK KAMI
    ========================================================= */

    if ($("#productGrid").length) {


        /* -----------------------------------------------------
           DATA PRODUK
        ----------------------------------------------------- */

        const products = [

            /* =================================================
               20 TANAMAN & BUNGA
            ================================================= */

            {
                id: 1,
                category: "tanaman-bunga",
                name: "Bonsai Beringin",
                image: "images/tanaman1.jpg",
                price: "Rp750.000 – Rp4.000.000",
                unit: "pohon",
                description:
                    "Tanaman dengan bentuk khas untuk memperindah area."
            },

            {
                id: 2,
                category: "tanaman-bunga",
                name: "Tape Buya",
                image: "images/tanaman2.jpg",
                price: "Rp75.000 – Rp100.000",
                unit: "pohon",
                description:
                    "Tanaman dekoratif untuk melengkapi area hijau."
            },

            {
                id: 3,
                category: "tanaman-bunga",
                name: "Ekor Tupai",
                image: "images/tanaman3.jpg",
                price: "Rp75.000 – Rp1.000.000",
                unit: "pohon",
                description:
                    "Tanaman dengan bentuk unik sebagai elemen dekoratif."
            },

            {
                id: 4,
                category: "tanaman-bunga",
                name: "Palem Merah",
                image: "images/tanaman4.jpg",
                price: "Rp300.000 – Rp2.500.000",
                unit: "pohon",
                description:
                    "Tanaman dengan warna khas untuk memberi karakter."
            },

            {
                id: 5,
                category: "tanaman-bunga",
                name: "Kamboja",
                image: "images/tanaman5.jpg",
                price: "Rp75.000 – Rp150.000",
                unit: "pohon",
                description:
                    "Tanaman berbunga sebagai aksen pada area."
            },

            {
                id: 6,
                category: "tanaman-bunga",
                name: "Asoka Singapur",
                image: "images/tanaman6.jpg",
                price: "Rp10.000 – Rp25.000",
                unit: "pohon",
                description:
                    "Tanaman berbunga untuk menambah warna."
            },

            {
                id: 7,
                category: "tanaman-bunga",
                name: "Karambusa",
                image: "images/tanaman7.jpg",
                price: "Rp7.500 – Rp15.000",
                unit: "pohon",
                description:
                    "Tanaman untuk melengkapi susunan area hijau."
            },

            {
                id: 8,
                category: "tanaman-bunga",
                name: "Laudia",
                image: "images/tanaman8.jpg",
                price: "Rp5.000 – Rp25.000",
                unit: "pohon",
                description:
                    "Tanaman dekoratif untuk melengkapi penghijauan."
            },

            {
                id: 9,
                category: "tanaman-bunga",
                name: "Sikas",
                image: "images/tanaman9.jpg",
                price: "Rp500.000 – Rp2.000.000",
                unit: "pohon",
                description:
                    "Tanaman dengan bentuk khas dan tampilan tropis."
            },

            {
                id: 10,
                category: "tanaman-bunga",
                name: "Pucuk Merah",
                image: "images/tanaman10.jpg",
                price: "Rp25.000 – Rp75.000",
                unit: "pohon",
                description:
                    "Tanaman dengan warna daun sebagai aksen."
            },

            {
                id: 11,
                category: "tanaman-bunga",
                name: "Bunga Jam 9",
                image: "images/tanaman11.jpg",
                price: "Rp5.000",
                unit: "pohon",
                description:
                    "Bunga berwarna cerah untuk memperindah area."
            },

            {
                id: 12,
                category: "tanaman-bunga",
                name: "Jelita Ungu",
                image: "images/tanaman12.jpg",
                price: "Rp5.000 – Rp7.500",
                unit: "pohon",
                description:
                    "Tanaman berbunga untuk memberikan variasi warna."
            },

            {
                id: 13,
                category: "tanaman-bunga",
                name: "Bromelia",
                image: "images/tanaman13.jpg",
                price: "Rp50.000 – Rp100.000",
                unit: "pohon",
                description:
                    "Tanaman dekoratif dengan bentuk yang khas."
            },

            {
                id: 14,
                category: "tanaman-bunga",
                name: "Pandang Mas",
                image: "images/tanaman14.jpg",
                price: "Rp25.000 – Rp32.000",
                unit: "pohon",
                description:
                    "Tanaman untuk melengkapi susunan area hijau."
            },

            {
                id: 15,
                category: "tanaman-bunga",
                name: "Pandang Bali",
                image: "images/tanaman15.jpg",
                price: "Rp100.000 – Rp250.000",
                unit: "pohon",
                description:
                    "Tanaman dekoratif sebagai elemen area hijau."
            },

            {
                id: 16,
                category: "tanaman-bunga",
                name: "Sukung India",
                image: "images/tanaman16.jpg",
                price: "Rp7.500 – Rp15.000",
                unit: "pohon",
                description:
                    "Tanaman untuk melengkapi kebutuhan penghijauan."
            },

            {
                id: 17,
                category: "tanaman-bunga",
                name: "Kacang-Kacangan",
                image: "images/tanaman17.jpg",
                price: "Rp5.000 – Rp7.500",
                unit: "pohon",
                description:
                    "Tanaman untuk melengkapi susunan area hijau."
            },

            {
                id: 18,
                category: "tanaman-bunga",
                name: "Bakung Lele",
                image: "images/tanaman18.jpg",
                price: "Rp10.000 – Rp20.000",
                unit: "pohon",
                description:
                    "Tanaman berbunga dengan tampilan menarik."
            },

            {
                id: 19,
                category: "tanaman-bunga",
                name: "Bakung Air Mancur",
                image: "images/tanaman19.jpg",
                price: "Rp10.000 – Rp20.000",
                unit: "pohon",
                description:
                    "Tanaman dekoratif untuk melengkapi area."
            },

            {
                id: 20,
                category: "tanaman-bunga",
                name: "Sambang Darah",
                image: "images/tanaman20.jpg",
                price: "Rp7.500 – Rp20.000",
                unit: "pohon",
                description:
                    "Tanaman dengan warna daun sebagai aksen."
            },


            /* =================================================
               3 RUMPUT
            ================================================= */

            {
                id: 21,
                category: "rumput",
                name: "Rumput Jepang",
                image: "images/rumput1.jpg",
                price: "Rp25.000",
                unit: "m²",
                description:
                    "Rumput dengan tekstur halus untuk area yang rapi."
            },

            {
                id: 22,
                category: "rumput",
                name: "Rumput Gajah Mini",
                image: "images/rumput2.jpg",
                price: "Rp25.000",
                unit: "m²",
                description:
                    "Rumput pendek yang cocok untuk area hijau."
            },

            {
                id: 23,
                category: "rumput",
                name: "Rumput Swiss",
                image: "images/rumput3.jpg",
                price: "Rp25.000",
                unit: "m²",
                description:
                    "Rumput untuk memberikan tampilan hijau yang rapi."
            }

        ];


        /* -----------------------------------------------------
           LABEL KATEGORI
        ----------------------------------------------------- */

        const categoryLabel = {

            "tanaman-bunga":
                "Tanaman & Bunga",

            "rumput":
                "Rumput"

        };


        /* -----------------------------------------------------
           KATEGORI DARI URL
        ----------------------------------------------------- */

        const params =
            new URLSearchParams(
                window.location.search
            );


        let currentCategory =
            params.get("category");


        if (
            currentCategory !== "tanaman-bunga" &&
            currentCategory !== "rumput"
        ) {

            currentCategory =
                "tanaman-bunga";

        }


        /* -----------------------------------------------------
           MEMBUAT CARD PRODUK
        ----------------------------------------------------- */

        function createProductCard(product) {

            const isGrass =
                product.category === "rumput";


            /*
             * SEMUA PRODUK MULAI DARI 0
             */
            const defaultQty = 0;


            let soilHTML = "";


            /* TANAH KHUSUS RUMPUT */

            if (isGrass) {

                soilHTML = `

                    <div class="product-option grass-soil">

                        <label>
                            Tanah
                        </label>

                        <div class="soil-input">

                            <input
                                type="number"
                                class="soil-qty"
                                data-id="${product.id}"
                                min="0"
                                value="0"
                                placeholder="0"
                            >

                            <select
                                class="soil-unit"
                                data-id="${product.id}"
                            >

                                <option value="Karung">
                                    Karung
                                </option>

                                <option value="Pickup">
                                    Pickup
                                </option>

                                <option value="Truk">
                                    Truk
                                </option>

                            </select>

                        </div>

                    </div>

                `;

            }


            return `

                <article
                    class="product-card"
                    data-id="${product.id}"
                    data-category="${product.category}"
                >

                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                    </div>


                    <div class="product-card-body">


                        <span class="product-category">

                            ${categoryLabel[
                                product.category
                            ]}

                        </span>


                        <h2 class="product-name">

                            ${product.name}

                        </h2>


                        <p class="product-description">

                            ${product.description}

                        </p>


                        <div class="product-price-box">

                            <span class="product-price-label">

                                Harga / ${product.unit}

                            </span>

                            <strong class="product-price">

                                ${product.price}

                            </strong>

                        </div>


                        <div class="product-option">

                            <span>
                                Jumlah
                            </span>


                            <div class="quantity-control">

                                <button
                                    type="button"
                                    class="qty-minus"
                                    data-id="${product.id}"
                                >
                                    −
                                </button>


                                <input
                                    type="number"
                                    class="qty-input"
                                    data-id="${product.id}"
                                    value="${defaultQty}"
                                    min="0"
                                >


                                <button
                                    type="button"
                                    class="qty-plus"
                                    data-id="${product.id}"
                                >
                                    +
                                </button>

                            </div>


                            <span class="product-unit">

                                ${product.unit}

                            </span>

                        </div>


                        ${soilHTML}


                        <div class="product-option">

                            <label>
                                Instalasi
                            </label>


                            <select
                                class="install-select"
                                data-id="${product.id}"
                            >

                                <option value="Tidak">
                                    Tidak
                                </option>

                                <option value="Ya">
                                    Ya
                                </option>

                            </select>

                        </div>


                        <button
                            type="button"
                            class="product-wa-btn"
                            data-id="${product.id}"
                        >

                            Pesan via WhatsApp

                        </button>


                    </div>

                </article>

            `;

        }


        /* -----------------------------------------------------
           RENDER PRODUK
        ----------------------------------------------------- */

        function renderProducts() {

            const query =
                $.trim(
                    $("#searchInput").val() || ""
                ).toLowerCase();


            const filtered =
                products.filter(
                    function (product) {

                        const categoryMatch =
                            product.category ===
                            currentCategory;


                        const searchMatch =
                            product.name
                                .toLowerCase()
                                .includes(query) ||

                            product.description
                                .toLowerCase()
                                .includes(query);


                        return (
                            categoryMatch &&
                            searchMatch
                        );

                    }
                );


            $("#productGrid")
                .empty()
                .removeClass(
                    "rumput-grid"
                );


            if (
                currentCategory === "rumput"
            ) {

                $("#productGrid")
                    .addClass(
                        "rumput-grid"
                    );

            }


            $.each(
                filtered,
                function (
                    index,
                    product
                ) {

                    $("#productGrid")
                        .append(
                            createProductCard(
                                product
                            )
                        );

                }
            );


            if (
                $("#categoryTitle").length
            ) {

                $("#categoryTitle")
                    .text(
                        categoryLabel[
                            currentCategory
                        ]
                    );

            }


            if (
                $("#resultCount").length
            ) {

                $("#resultCount")
                    .text(
                        filtered.length +
                        " produk"
                    );

            }


            if (
                $("#productResult").length
            ) {

                $("#productResult")
                    .text(
                        filtered.length +
                        " produk ditemukan"
                    );

            }


            if (
                filtered.length === 0
            ) {

                $("#noResult").show();

            } else {

                $("#noResult").hide();

            }

        }


        /* -----------------------------------------------------
           PENCARIAN PRODUK
        ----------------------------------------------------- */

        $("#searchInput")
            .on(
                "input",
                function () {

                    renderProducts();

                }
            );


        /* -----------------------------------------------------
           TOMBOL MINUS
        ----------------------------------------------------- */

        $(document).on(
            "click",
            ".qty-minus",
            function () {

                const $card =
                    $(this)
                        .closest(
                            ".product-card"
                        );


                const $input =
                    $card.find(
                        ".qty-input"
                    );


                let qty =
                    parseInt(
                        $input.val(),
                        10
                    );


                if (isNaN(qty)) {

                    qty = 0;

                }


                qty =
                    Math.max(
                        0,
                        qty - 1
                    );


                $input.val(
                    qty
                );

            }
        );


        /* -----------------------------------------------------
           TOMBOL PLUS
        ----------------------------------------------------- */

        $(document).on(
            "click",
            ".qty-plus",
            function () {

                const $card =
                    $(this)
                        .closest(
                            ".product-card"
                        );


                const $input =
                    $card.find(
                        ".qty-input"
                    );


                let qty =
                    parseInt(
                        $input.val(),
                        10
                    );


                if (isNaN(qty)) {

                    qty = 0;

                }


                qty++;


                $input.val(
                    qty
                );

            }
        );


        /* -----------------------------------------------------
           INPUT JUMLAH
        ----------------------------------------------------- */

        $(document).on(
            "input",
            ".qty-input",
            function () {

                let qty =
                    parseInt(
                        $(this).val(),
                        10
                    );


                if (
                    isNaN(qty) ||
                    qty < 0
                ) {

                    $(this).val(
                        0
                    );

                }

            }
        );


        /* -----------------------------------------------------
           PESAN PRODUK VIA WHATSAPP
        ----------------------------------------------------- */

        $(document).on(
            "click",
            ".product-wa-btn",
            function () {

                const productId =
                    parseInt(
                        $(this).data("id"),
                        10
                    );


                const product =
                    products.find(
                        function (item) {

                            return (
                                item.id ===
                                productId
                            );

                        }
                    );


                if (!product) {

                    return;

                }


                const $card =
                    $(this)
                        .closest(
                            ".product-card"
                        );


                const quantity =
                    parseInt(
                        $card
                            .find(
                                ".qty-input"
                            )
                            .val(),
                        10
                    ) || 0;


                if (
                    quantity <= 0
                ) {

                    alert(
                        "Silakan tentukan jumlah produk terlebih dahulu."
                    );

                    $card
                        .find(
                            ".qty-input"
                        )
                        .focus();

                    return;

                }


                const install =
                    $card
                        .find(
                            ".install-select"
                        )
                        .val() ||
                    "Tidak";


                let message =
`Halo UCCHANK'S LANDSCAPE,

Saya ingin memesan produk.

Produk: ${product.name}
Kategori: ${categoryLabel[product.category]}
Jumlah: ${quantity} ${product.unit}
Harga: ${product.price} / ${product.unit}
Instalasi: ${install}`;


                /* TANAH UNTUK RUMPUT */

                if (
                    product.category === "rumput"
                ) {

                    const soilQty =
                        parseInt(
                            $card
                                .find(
                                    ".soil-qty"
                                )
                                .val(),
                            10
                        ) || 0;


                    const soilUnit =
                        $card
                            .find(
                                ".soil-unit"
                            )
                            .val() ||
                        "Karung";


                    message +=
` 
Tanah tambahan: ${soilQty} ${soilUnit}`;

                }


                message +=
`

Mohon informasi ketersediaan dan total biaya.`;



                const waURL =
                    "https://wa.me/" +
                    nomorWhatsApp +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                window.open(
                    waURL,
                    "_blank"
                );

            }
        );


        /* -----------------------------------------------------
           TAMPILKAN PRODUK PERTAMA KALI
        ----------------------------------------------------- */

        renderProducts();

    }


    /* =========================================================
       KONTAK
    ========================================================= */

    if ($("#contactSubmit").length) {


        $("#contactSubmit").on(
            "click",
            function () {

                const name =
                    $("#contactName")
                        .val()
                        .trim();


                const phone =
                    $("#contactPhone")
                        .val()
                        .trim();


                const need =
                    $("#contactNeed")
                        .val();


                const messageText =
                    $("#contactMessage")
                        .val()
                        .trim();


                /* VALIDASI NAMA */

                if (
                    name === ""
                ) {

                    alert(
                        "Silakan isi nama terlebih dahulu."
                    );

                    $("#contactName")
                        .focus();

                    return;

                }


                /* VALIDASI NOMOR */

                if (
                    phone === ""
                ) {

                    alert(
                        "Silakan isi nomor WhatsApp terlebih dahulu."
                    );

                    $("#contactPhone")
                        .focus();

                    return;

                }


                /* VALIDASI KEBUTUHAN */

                if (
                    need === ""
                ) {

                    alert(
                        "Silakan pilih kebutuhan terlebih dahulu."
                    );

                    $("#contactNeed")
                        .focus();

                    return;

                }


                /* VALIDASI PESAN */

                if (
                    messageText === ""
                ) {

                    alert(
                        "Silakan isi pesan terlebih dahulu."
                    );

                    $("#contactMessage")
                        .focus();

                    return;

                }


                /* PESAN */

                const message =
`Halo UCCHANK'S LANDSCAPE,

Saya ingin berkonsultasi.

Nama: ${name}
WhatsApp: ${phone}
Kebutuhan: ${need}

Pesan:
${messageText}`;


                /* LINK WHATSAPP */

                const url =
                    "https://wa.me/" +
                    nomorWhatsApp +
                    "?text=" +
                    encodeURIComponent(
                        message
                    );


                window.open(
                    url,
                    "_blank"
                );

            }
        );

    }

});