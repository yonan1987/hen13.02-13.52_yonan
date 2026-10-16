import heroConsole from "@/assets/hero-console.jpg";
import techInstall from "@/assets/tech-install.jpg";
import deliveryRider from "@/assets/delivery.jpg";

export const images = {
  hero: heroConsole,
  install: techInstall,
  delivery: deliveryRider,
};

export const brand = {
  name: "Mikayla_games",
  short: "Mikayla",
  tagline: "Jasa isi game PS3 · PS4 · PS5",
  phoneDisplay: "+62 851-6306-1987",
  phoneRaw: "+6285163061987",
  whatsapp: "6285163061987",
  email: "halo@mikaylagames.id",
  address: "Jl. Tekno Raya No. 21, Jakarta Selatan",
  hours: "Setiap hari · 08.00 – 23.00 WIB",
  serviceArea: "Jabodetabek · Bandung · Semarang · Surabaya · Se-Indonesia",
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;

export type IconName =
  | "house"
  | "bolt"
  | "shield"
  | "tag"
  | "headset"
  | "wallet"
  | "clock"
  | "sparkles"
  | "controller"
  | "truck"
  | "gift"
  | "update";

export const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Konsol", href: "#konsol" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Harga", href: "#harga" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: 12400, suffix: "+", label: "Pesanan selesai", hint: "Sejak 2019" },
  { value: 15, suffix: " mnt", label: "Rata-rata proses", hint: "Panggilan ke rumah" },
  { value: 4.9, suffix: "/5", label: "Rating pelanggan", hint: "1.280 ulasan" },
  { value: 98, suffix: "%", label: "Rekomendasi", hint: "Kembali lagi" },
];

export const marqueeItems = [
  "Elden Ring",
  "Spider-Man 2",
  "God of War Ragnarök",
  "GTA V",
  "Horizon Forbidden West",
  "The Last of Us Part II",
  "Tekken 8",
  "Gran Turismo 7",
  "Resident Evil 4",
  "Ghost of Tsushima",
  "Red Dead Redemption 2",
  "Naruto Storm 4",
  "Shadow of Mordor",
  "Dead Space",
  "Baldur's Gate 3",
  "PES 2021",
];

export const features: {
  icon: IconName;
  title: string;
  desc: string;
  tag?: string;
}[] = [
  {
    icon: "house",
    title: "Panggilan ke rumah",
    desc: "Sebutkan alamat, teknisi kami datang membawa game siap install. Tidak perlu keluar rumah, tidak perlu antre di toko.",
    tag: "Favorit",
  },
  {
    icon: "update",
    title: "Update versi terbaru",
    desc: "Semua game dipasang pada patch & DLC paling baru, jadi progress dan fitur newest langsung terbuka.",
  },
  {
    icon: "shield",
    title: "Aman & anti-ban",
    desc: "Pemasangan memakai jalur aman, tidak menyentuh ban online. Data profil, trophies, dan progress Anda tetap terjaga.",
  },
  {
    icon: "tag",
    title: "Harga transparan",
    desc: "Harga final kami informasikan di awal, tanpa biaya siluman. Bisa bayar COD setelah job selesai.",
  },
  {
    icon: "headset",
    title: "Support 24/7",
    desc: "Tim kami standby WhatsApp. Ada kendala setelah game terpasang? Kami bantu sampai tuntas.",
  },
  {
    icon: "wallet",
    title: "Pembayaran fleksibel",
    desc: "Transfer bank, QRIS, e-wallet, atau COD. Cicilan 3x tanpa bunga untuk paket di atas Rp300.000.",
  },
  {
    icon: "truck",
    title: "Kurir instan & Same-day",
    desc: "Kota di luar Jabodetabek tetap dilayani — game dikirim kurir instan dan diinstalasi di rumah Anda.",
  },
  {
    icon: "gift",
    title: "Bundling hemat",
    desc: "Ambil beberapa game sekaligus untuk harga yang lebih masuk akal. Tuvo juga dapat request judul baru.",
  },
];

export type ConsoleKey = "ps3" | "ps4" | "ps5";

export type GameItem = {
  title: string;
  genre: string;
  colors: [string, string];
  badge?: "UPDATE" | "BARU" | "POPULER";
};

export const consoles: {
  key: ConsoleKey;
  name: string;
  sub: string;
  headline: string;
  desc: string;
  from: number;
  eta: string;
  specs: { label: string; value: string }[];
  games: GameItem[];
  image: string;
  accent: string;
}[] = [
  {
    key: "ps3",
    name: "PlayStation 3",
    sub: "Super Slim & Original",
    headline: "Nostalgia PS3, tetap bisa dimainkan",
    desc: "Cocok untuk koleksi game klasik favorit masa kecil Anda. Cocok juga untuk PS3 yang sudah FAT dan perlu di-install ulang",
    from: 20000,
    eta: "20 menit",
    specs: [
      { label: "Format", value: "Blu-ray & DVD" },
      { label: "Haptic", value: "Didukung" },
      { label: "Instalasi", value: "Internal HDD" },
      { label: "Jaminan", value: "30 hari" },
    ],
    games: [
      { title: "GTA V", genre: "Action", colors: ["#f59e0b", "#b45309"] },
      { title: "Naruto Storm 4", genre: "Fighting", colors: ["#f97316", "#7c2d12"] },
      { title: "Tekken 6", genre: "Fighting", colors: ["#6366f1", "#1e1b4b"] },
      { title: "PES 2021", genre: "Sports", colors: ["#22c55e", "#14532d"], badge: "POPULER" },
      { title: "God of War III", genre: "Action", colors: ["#0ea5e9", "#0c4a6e"] },
      { title: "The Last of Us", genre: "Adventure", colors: ["#ef4444", "#450a0a"] },
      { title: "Infamous 2", genre: "Action", colors: ["#eab308", "#713f12"] },
      { title: "Devil May Cry 4", genre: "Action", colors: ["#a855f7", "#3b0764"] },
    ],
    image: "ps3",
    accent: "from-amber-400/70 to-rose-500/60",
  },
  {
    key: "ps4",
    name: "PlayStation 4",
    sub: "Pro & Slim",
    headline: "Paling dicari gamer Indonesia",
    desc: "Koleksi game paling laris sepanjang masa, plus aksesori & warranty resmi yang kami tangani langsung.",
    from: 25000,
    eta: "15 menit",
    specs: [
      { label: "Resolusi", value: "1080p / 4K" },
      { label: "Haptic", value: "Didukung" },
      { label: "Mode", value: "Photo & TV" },
      { label: "Jaminan", value: "30 hari" },
    ],
    games: [
      { title: "Spider-Man", genre: "Action", colors: ["#ef4444", "#7f1d1d"], badge: "POPULER" },
      { title: "God of War", genre: "Action", colors: ["#38bdf8", "#0c4a6e"] },
      { title: "Horizon Zero Dawn", genre: "RPG", colors: ["#f97316", "#7c2d12"] },
      { title: "Ghost of Tsushima", genre: "Action", colors: ["#fbbf24", "#78350f"], badge: "BARU" },
      { title: "Red Dead 2", genre: "Open World", colors: ["#dc2626", "#450a0a"] },
      { title: "Shadow of Mordor", genre: "Action", colors: ["#22d3ee", "#164e63"] },
      { title: "Warframe", genre: "Shooter", colors: ["#10b981", "#022c22"] },
      { title: "The Last of Us II", genre: "Adventure", colors: ["#8b5cf6", "#2e1065"] },
    ],
    image: "ps4",
    accent: "from-sky-400/70 to-blue-600/60",
  },
  {
    key: "ps5",
    name: "PlayStation 5",
    sub: "Digital & Disc Edition",
    headline: "Generasi terbaru, performa maksimal",
    desc: "Installasi cepat dengan transfer data berkecepatan penuh, mendukung game PS4 & PS3 pada PS5.",
    from: 35000,
    eta: "12 menit",
    specs: [
      { label: "Resolusi", value: "4K / 120fps" },
      { label: "Transfer", value: "Super Speed" },
      { label: "Backward", value: "PS4 & PS3" },
      { label: "Jaminan", value: "30 hari" },
    ],
    games: [
      { title: "Elden Ring", genre: "Souls", colors: ["#a16207", "#1c1917"], badge: "POPULER" },
      { title: "Spider-Man 2", genre: "Action", colors: ["#dc2626", "#450a0a"], badge: "BARU" },
      { title: "God of War Ragnarök", genre: "Action", colors: ["#0ea5e9", "#1e1b4b"] },
      { title: "Forbidden West", genre: "RPG", colors: ["#14b8a6", "#134e4a"] },
      { title: "Gran Turismo 7", genre: "Racing", colors: ["#e11d48", "#4c0519"] },
      { title: "Tekken 8", genre: "Fighting", colors: ["#ef4444", "#1c1917"] },
      { title: "Resident Evil 4", genre: "Horror", colors: ["#f59e0b", "#451a03"] },
      { title: "Baldur's Gate 3", genre: "RPG", colors: ["#8b5cf6", "#1e1b4b"], badge: "UPDATE" },
    ],
    image: "ps5",
    accent: "from-violet-400/70 to-cyan-400/60",
  },
];

export const benefits = [
  {
    eyebrow: "Tanpa ribet",
    title: "Tidak perlu download semalaman",
    desc: "Ukuran file PS4 bisa sampai 100 GB. Tidak ada alasan Anda harus begadang, koneksi melambat, atau kehabisan kuota. Kami datang dengan file siap install.",
    points: [
      "File sudah teruji & terverifikasi",
      "Tanpa batas kuota internet rumah",
      "Bisa request judul yang tidak ada di daftar",
    ],
    visual: "install",
    stat: { value: "0", label: "GB unduhan di rumah Anda" },
    reverse: false,
  },
  {
    eyebrow: "Tinggal main",
    title: "Nyalakan konsol, langsung masuk game",
    desc: "Kami pasang, konfigurasi, dan cek sampai benar-benar bisa dimainkan. Anda tidak perlu menyalakan satu pun settingan.",
    points: [
      "Progress game langsung tersimpan",
      "Multiplayer & online login dites",
      "Pandangan singkat cara pakai",
    ],
    visual: "chat",
    stat: { value: "12 mnt", label: "Rata-rata selesai di lokasi" },
    reverse: true,
  },
  {
    eyebrow: "Di mana saja",
    title: "Tetap di rumah, Maldives游戏 datang ke Anda",
    desc: "Rumah, kos, apartemen, atau kantor — tim kami datang ke lokasi Anda di seluruh Indonesia via kurir instan.",
    points: [
      "Kurir same-day untuk Jabodetabek",
      "Jadwalkan jam yang Anda tentukan",
      "Garansi re-install gratis 30 hari",
    ],
    visual: "delivery",
    stat: { value: "98%", label: "Pesanan selesai sesuai janji" },
    reverse: false,
  },
];

export const testimonials = [
  {
    name: "Raka Pratama",
    role: "Gamer PS4",
    city: "Jakarta Selatan",
    initials: "RP",
    rating: 5,
    text: "Tiap payday gajian, langsung WhatsApp Mikayla. Sampai rumah, 15 menit game sudah bisa dimain bareng anak-anak. Termurah dari yang pernah saya coba.",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    name: "Siti Nurhaliza",
    role: "Ibu rumah tangga",
    city: "Bandung",
    initials: "SN",
    rating: 5,
    text: "Awalnya kami ragu pesan layanan datang ke rumah, ternyata tekniknya sopan dan sabar explaining everything in Indonesian sampai saya paham.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Bagas Wicaksono",
    role: "Gamer PS5",
    city: "Surabaya",
    initials: "BW",
    rating: 5,
    text: "Elden Ring update terbaru, patch sudah kepasang. Literally plug and play. Packing your 4K monitor is not worth the hassle, trust me.",
    gradient: "from-fuchsia-500 to-violet-700",
  },
  {
    name: "Andi Saputra",
    role: "Gamer PS3",
    city: "Semarang",
    initials: "AS",
    rating: 5,
    text: "Masih suka main PS3 paling has.-installasi rapi, konsol tetap aman, dan ada garansi 30 hari kalau ada kendala.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Nadia Kusuma",
    role: "Content Creator",
    city: "Bekasi",
    initials: "NK",
    rating: 5,
    text: "Order jam 9 pagi, sebelum makan siang teknisi sudah datang dengan game siap install. Cepat banget buat ukuran proses install game.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Dimas Anggara",
    role: "Gamer PS4",
    city: "Depok",
    initials: "DA",
    rating: 5,
    text: "Palingvant: harga jelas di depan, tidak ada biaya tambahan dadakan. Support WhatsApp-nya responsif banget.",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export type PricingTier = {
  name: string;
  tagline: string;
  price: number;
  unit: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Single Game",
    tagline: "Butuh satu judul tertentu?",
    price: 25000,
    unit: "/ game",
    features: [
      "1 judul game pilihan Anda",
      "Update & DLC terbaru",
      "Install di lokasi / kirim via kurir",
      "Garansi 30 hari",
    ],
    cta: "Pesan 1 Game",
  },
  {
    name: "Paket Hemat 5",
    tagline: "Paling laris untuk keluarga",
    price: 99000,
    unit: "/ 5 game",
    featured: true,
    badge: "Paling Laris",
    features: [
      "5 judul game bebas pilih",
      "Update & DLC terbaru",
      "Gratis ongkir Jabodetabek",
      "Prioritas antrean teknisi",
      "Garansi 30 hari + reinstall gratis",
    ],
    cta: "Ambil Paket Hemat",
  },
  {
    name: "Sultan Access",
    tagline: "Untuk yang serius main",
    price: 249000,
    unit: "/ 12 game",
    features: [
      "12 judul game premium",
      "Gratis ongkir se-Indonesia",
      "Konsultasi judul game 1-on-1",
      "Support prioritas 24/7",
      "Bonus 2 game huddle & controller skin",
    ],
    cta: "Pilih Sultan Access",
  },
];

export const faqs = [
  {
    q: "Apakah game yang dipasang legal dan aman?",
    a: "Semua judul yang kami pasang sudah berlisensi resmi dan di-update ke versi terbaru. Instalasi dilakukan dengan metode aman yang tidak merusak rekening PSN Anda, dan kami bergaransi penuh selama 30 hari.",
  },
  {
    q: "Berapa lama proses pemanggilan ke rumah?",
    a: "Untuk area Jabodetabek, rata-rata 12–20 menit sejak teknisi diterima. Untuk kota lain di luar Jabodetabek, kami kirim game via kurir instan dan proses instalasi cukup 10 menit di rumah Anda.",
  },
  {
    q: "Apakah konsol saya perlu dibawa ke toko?",
    a: "Tidak. Layanan calling service kami memang dirancang agar Anda tidak perlu keluar rumah. Teknisi datang ke lokasi, memasang game, menguji satu sesi, lalu melapor hasil akhirnya ke Anda lewat WhatsApp.",
  },
  {
    q: "Bisa request game yang tidak ada di daftar?",
    a: "Bisa. Hampir semua judul request kami kerjakan, selama judul tersebut tersedia secara resmi. Kirim saja judul atau cover game ke WhatsApp kami, tim akan mengonfirmasi ketersediaan dalam 5 menit.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Transfer bank, QRIS, e-wallet (GoPay, OVO, DANA, ShopeePay), atau COD setelah instalasi selesai. Untuk paket di atas Rp300.000 tersedia cicilan 3x tanpa bunga.",
  },
  {
    q: "Kalau ada kendala setelah game terpasang?",
    a: "Hubungi WhatsApp kami kapan saja, support standby 24/7. Dalam masa garansi 30 hari, reinstall dilakukan gratis di lokasi Anda tanpa biaya tambahan apa pun.",
  },
  {
    q: "Apakah bisa upgrade PS3 ke PS4 atau PS5?",
    a: "Bisa. Tim kami membantu proses trade-in dan instalasi di konsol baru Anda, termasuk pemindahan save game serta setting awal supaya Anda tinggal mencetak tombol.",
  },
  {
    q: "Apakah melayani area di luar kota?",
    a: "Ya. Untuk Jabodetabek, Bandung, Semarang, dan Surabaya kami melayani panggilan ke rumah langsung. Untuk kota lain, game dikirim via kurir instan dan diinstalasi di rumah Anda.",
  },
];

export const coverageAreas = [
  "Jakarta Selatan",
  "Jakarta Selatan",
  "Tangerang",
  "Depok",
  "Bekasi",
  "Bogor",
  "Bandung",
  "Semarang",
  "Surabaya",
  "Yogyakarta",
  "Medan",
  "Makassar",
];
