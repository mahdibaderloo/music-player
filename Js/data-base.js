const media = [
  {
    id: 1,
    musicName: "Be Donya Nemidamesh",
    singer: "Shervin",
    src: "https://dl.musicdel.ir/tag/music/1401/03/25/Shervin%20Hajiaghapour%20-%20Be%20Donya%20Nemidamesh%20(320).mp3",
    cover:
      "https://www.ganja2music.com/Image/Post/2.2024/450/shervin-hajipour-8211-be-donya-nemidamesh_450.jpg",
    like: false,
  },
  {
    id: 2,
    musicName: "Open Arms",
    singer: "Travis Scott & SZA",
    src: "https://dl.tiktokmusics.ir/music/Open%20Arms%20By%20SZA.mp3",
    cover: "https://i1.sndcdn.com/artworks-i2xw21dgeS6t-0-t500x500.jpg",
    like: false,
  },
  {
    id: 3,
    musicName: "Tuborg (Acoustic Version)",
    singer: "Mehyad & Lenna",
    src: "https://dl.solahangs.com/Album/1402/12/Mehyad%20%26%20Lenna/128/05.Mehyad%20%26%20Lenna%20-%20Tuborg%20%28Acoustic%20Version%29%20%28128%29.mp3",
    cover:
      "https://i1.sndcdn.com/artworks-XXlQzMozz5HrqFMi-ZzywGA-t1080x1080.jpg",
    like: false,
  },
  {
    id: 4,
    musicName: "Faghat Bash",
    singer: "Mahyar",
    src: "https://dl.musictaj.com/song403/bhr/Mahyar%20-%20Faghat%20Bash.mp3",
    cover:
      "https://www.ganja2music.com/Image/Post/11.2024/Mahyar%20-%20Faghat%20Bash.jpg",
    like: false,
  },
  {
    id: 5,
    musicName: "Dark Days",
    singer: "21 Savage",
    src: "https://dl.tiktokmusics.ir/music/Dark%20Days%20By%2021Savage.mp3",
    cover: "https://i1.sndcdn.com/artworks-0e2cvZrtJ8vK-0-t500x500.jpg",
    like: false,
  },
  {
    id: 6,
    musicName: "Kenaram",
    singer: "Rez",
    src: "https://dl2.limusic.org/Music/2024/11/29/Rez%20-%20Kenaram.mp3",
    cover: "https://i1.sndcdn.com/artworks-000247983740-30gidf-t500x500.jpg",
    like: false,
  },
  {
    id: 7,
    musicName: "Farda Ke Chi (Ft. Qazal)",
    singer: "The Don",
    src: "https://dl.musicgraaphy.com/Music/1400/06/The%20Don/The-Don-Farda-Ke-Chi-Ft-Qazal%28128%29.mp3",
    cover:
      "https://musicgraaphy.com/wp-content/uploads/2021/09/IMG_20210908_211540_336-3.jpg",
    like: false,
  },
  {
    id: 8,
    musicName: "Cheshmami (Ft. Hoomaan)",
    singer: "Shayea",
    src: "https://www.limusic.org/wp-content/uploads/2023/04/hs-13-Cheshmami-FT.-Hoomaan.mp3",
    cover:
      "https://www.limusic.org/wp-content/uploads/2023/04/hs-Shayea-Intro-Amadebash.jpg.pagespeed.ce.IqTfUR1HFl.jpg",
    like: false,
  },
  {
    id: 9,
    musicName: "Hich Ki Be Joz To II",
    singer: "Poori",
    src: "https://dl.solahangs.com/Album/1402/10/Poori/128/19.Poori%20-%20Hichki%20Be%20Joz%20To%202%20%28128%29.mp3",
    cover:
      "https://musicgraaphy.com/wp-content/uploads/2024/01/poori_hichki_be%20joz%20to%202.jpg",
    like: false,
  },
  {
    id: 10,
    musicName: "Divooneh",
    singer: "Mohsen Chavoshi",
    src: "https://dl.musicdel.ir/Music/1400/04/mohsen_chavoshi_divoone.mp3",
    cover: "https://www.mybia2music.com/assets/thumbs/113838056_500.jpg",
    like: false,
  },
  {
    id: 11,
    musicName: "Medad Rangi",
    singer: "Ebi",
    src: "https://dl.shabamusic.com/Music/1402/09/18/Ebi%20-%20Madad%20Rangi%20(128).mp3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9YeeV8Mh8wvgFY39_Sp8lqlT8vUW3Kz-RA&s",
    like: false,
  },
  {
    id: 12,
    musicName: "Drug",
    singer: "Daniyal & Fedi",
    src: "https://dl.godpoori.com/03/11/Daniyal%20-%20Drug%20[128].mp3",
    cover:
      "https://i1.sndcdn.com/artworks-Sb557wUBFiJsfBpR-QdfIEg-t500x500.png",
    like: false,
  },
  {
    id: 13,
    musicName: "DMT",
    singer: "Hiphopologist",
    src: "https://dl.musichi.ir/1402/04/23/Hiphopologist%20-%20DMT.mp3",
    cover:
      "https://i1.sndcdn.com/artworks-oykQ7nbGBqhvDSkj-BxDEIA-t240x240.jpg",
    like: false,
  },
  {
    id: 14,
    musicName: "Ba To 2",
    singer: "Amir Tataloo",
    src: "https://dl.javanmelody.ir/dl/1402/03/Amir-Tataloo-Ba-To-2-abanmusics.com-128.mp3",
    cover:
      "https://javanmelody.ir/wp-content/uploads/2023/06/Amir20Tataloo20-20Ba20To202.jpg",
    like: false,
  },
  {
    id: 15,
    musicName: "Woah",
    singer: "Catchy & Poobon & Leito",
    src: "https://dl.popimusic.ir/music/Behzad%20Leito%20-%20Woah%20128.mp3",
    cover:
      "https://dl.musicdrum.ir/uploads/2023/11/Catchy-Beatz-Behzad-Leito-Poobon-Woah.jpg",
    like: false,
  },
  {
    id: 16,
    musicName: "Cheghad Khobe Ke Injaei",
    singer: "Naaji",
    src: "https://dl2.limusic.org/Music/2024/12/15/Naaji%20-%20Cheghad%20Khobe%20Ke%20Injaei.mp3",
    cover:
      "https://www.limusic.org/wp-content/uploads/2024/12/Naaji,P20-,P20Cheghad,P20Khobe,P20Ke,P20Injaei.jpg.pagespeed.ce.ssrvLNarft.jpg",
    like: false,
  },
  {
    id: 17,
    musicName: "Hayahoo",
    singer: "Koorosh (ft. Tamara)",
    src: "https://dl.musichi.ir/1402/04/16/Koorosh%20&%20Amiri%20&%20Tamara%20-%20Hayahoo.mp3",
    cover:
      "https://cdn-images.dzcdn.net/images/cover/335d9ff81ac61ed6d100e3a8fe88162f/0x1900-000000-80-0-0.jpg",
    like: false,
  },
  {
    id: 18,
    musicName: "Pare Parvaz",
    singer: "Khalvat & Darab",
    src: "https://dl2.limusic.org/Music/2025/01/08/Amir%20Khalvat%20&%20Darab%20-%20Pare%20Parvaz.mp3",
    cover:
      "https://www.limusic.org/wp-content/uploads/2025/01/Amir,P20Khalvat,P20,a,P20Darab,P20-,P20Pare,P20Parvaz.jpg.pagespeed.ce.q7C39nd8FK.jpg",
    like: false,
  },
  {
    id: 19,
    musicName: "Luther",
    singer: "Kendrick Lamar",
    src: "https://dl.behmelody.in/1403/09/04/Kendrick%20Lamar%20-%20luther%20(with%20sza).mp3",
    cover:
      "https://behmelody.in/wp-content/uploads/2024/11/Kendrick-Lamar-luther-(with-sza).jpg",
  },
  {
    id: 20,
    musicName: "Saghi",
    singer: "Canis & Khalse & Sijal",
    src: "https://dl.solahangs.com/Music/1403/10/S/128/Sijal%20%26%20Sepehr%20Khalse%20%26%20Canis%20-%20Saghi%20%28128%29.mp3",
    cover:
      "https://solahangs.com/wp-content/uploads/2025/01/Sijal-Sepehr-Khalse-Canis-Saghi-img.jpg.webp",
  },
  {
    id: 21,
    musicName: "To Mano Dari",
    singer: "Hoomaan",
    src: "https://dlmuweb.musicmellnet.com/musics/01/11/Hoomaan%20%20-%20To%20Mano%20Dari%20-%20320%20-%20musicsweb.ir.mp3",
    cover:
      "https://popimusic.ir/wp-content/uploads/2020/11/Hoomaan%20-%20To%20Mano%20Dari.jpg",
  },
  {
    id: 22,
    musicName: "Divoonegi",
    singer: "Sirvan Khosravi",
    src: "https://irsv.upmusics.com/99/Sirvan%20Khosravi%20-%20Divoonegi%20(320).mp3",
    cover:
      "https://www.ganja2music.com/Image/Post/7.2021/Sirvan%20Khosravi%20-%20Divoonegi.jpg",
  },
  {
    id: 23,
    musicName: "Setareh",
    singer: "Shadmehr",
    src: "https://cdn.golsarmusic.ir/GolsarMusic-Root-DL3/98/10%20Dey/18/shadmehr/Shadmehr-Aghili-Setareh-256.mp3?_=1",
    cover: "https://i.scdn.co/image/ab67616d0000b273437b1429fbb29808a62f7d9d",
  },
  {
    id: 24,
    musicName: "Engar",
    singer: "Sina SaE",
    src: "https://cloud.musicsmelon.com/Music/Sina%20Sae%20-%20Engar%20[128].mp3",
    cover:
      "https://systemmusic.ir/wp-content/uploads/2022/09/sina-sae-engar.jpg",
  },
  {
    id: 25,
    musicName: "Par Mizane",
    singer: "Majid Razavi",
    src: "https://dl.rozmusic.com/Music/1401/11/12/Majid%20Razavi%20-%20Par%20Mizane%20%28128%29.mp3",
    cover:
      "https://rozmusic.com/wp-content/uploads/2023/01/Majid-Razavi-Par-Mizane-1.jpg",
  },
  {
    id: 26,
    musicName: "Mage Mishe",
    singer: "Mehraad Jam",
    src: "https://dl.rozmusic.com/Music/1403/07/23/Mehraad%20Jam%20-%20Mage%20Mishe%20%28128%29.mp3",
    cover:
      "https://rozmusic.com/wp-content/uploads/2024/10/Mehraad-Jam-Mage-Mishe.jpg",
  },
  {
    id: 27,
    musicName: "Vaghti Az Hame Khastam",
    singer: "Maslak",
    src: "https://irsv.upmusics.com/AliBZ/Maslak%20%E2%80%93%20Vaghti%20Az%20Hame%20Khastam%20(320).mp3",
    cover:
      "https://www.limusic.org/wp-content/uploads/2024/10/Maslak-Darab-Vaghti-Az-Hame-Khastam.jpg",
  },
  {
    id: 28,
    musicName: "Sia Sefid",
    singer: "Haamim",
    src: "https://dl.sultanmusic.ir/music/1400/3/1/Haamim%20-%20Sia%20Sefid.mp3",
    cover: "https://www.mybia2music.com/assets/thumbs/114623489_500.jpg",
  },
  {
    id: 29,
    musicName: "Hiss",
    singer: "Asef Aria",
    src: "https://dl.rozmusic.com/Music/1400/07/01/Asef%20Aria%20-%20Hiss%20%28128%29.mp3",
    cover: "https://rozmusic.com/wp-content/uploads/2021/09/Asef-Aria-Hiss.jpg",
  },
  {
    id: 30,
    musicName: "Arezoo",
    singer: "Siavash Ghomayshi",
    src: "https://dl.aftabmusic.com/1403/3/album/SarGozasht%20Siavash%20Ghomayshi/01%20Arezou.mp3",
    cover: "https://i1.sndcdn.com/artworks-000257615417-85t3v7-t500x500.jpg",
  },
  {
    id: 31,
    musicName: "Ta Key",
    singer: "Shervin",
    src: "https://dl.sevilmusics.com/cdn/music/srvrg/Shervin%20Hajipour%20-%20Ta%20Key%20[SevilMusic].mp3",
    cover:
      "https://www.ganja2music.com/Image/Post/2.2025/Shervin%20Hajipour%20-%20Ta%20Key.jpg",
  },
  {
    id: 32,
    musicName: "Marize Ham",
    singer: "Hiphopologist & Sogand",
    src: "https://dl.musictaj.com/song403/zmstn/Hiphopologist%20x%20Sogand%20-%20Marize%20Ham.mp3",
    cover:
      "https://i1.sndcdn.com/artworks-yWNnySLNmj0xG33P-3erWdg-t500x500.jpg",
  },
  {
    id: 33,
    musicName: "Khone Naria",
    singer: "Mahyar & Shayea",
    src: "https://dl.musictaj.com/song402/se/Mahyar%20va%20Shayea%20-%20Khoone%20Naria.mp3",
    cover:
      "https://i1.sndcdn.com/artworks-9CCR6WFgKTtLTPyL-7kzgmw-t1080x1080.png",
  },
  {
    id: 34,
    musicName: "You're Special",
    singer: "NF",
    src: "https://files.ceenaija.com/wp-content/uploads/music/2022/04/NF_-_Youre_Special_CeeNaija.com_.mp3",
    cover:
      "https://sw2music.ir/wp-content/uploads/2022/08/4776-NF-You're-Special.jpg",
  },
  {
    id: 35,
    musicName: "Ba To",
    singer: "Amir Tataloo",
    src: "https://cdn1.viliostreams.com/Music/1395/02/Amir%20Tataloo%20-%20Ba%20To.mp3",
    cover:
      "https://systemmusic.ir/wp-content/uploads/2022/07/amir-tataloo-ba-to.jpg",
  },
  {
    id: 36,
    musicName: "Ghalbe Mani",
    singer: "Haamim",
    src: "https://dls.musics-fa.com/song/alibz/dlswm/Haamim%20-%20Ghalbe%20Mani%20Piano%20(320).mp3?_=2",
    cover:
      "https://www.ganja2music.com/Image/Post/2.2024/450/haamim-8211-ghalbe-mani_450.jpg",
  },
  {
    id: 37,
    musicName: "Kafe Tehroon",
    singer: "Moein Z",
    src: "https://dl.sevilmusics.com/cdn/music/srvrg/Moein%20Z%20-%20Kafe%20Tehroon%20[SevilMusic].mp3",
    cover: "https://i1.sndcdn.com/artworks-HS8N4j8wwJ15-0-t500x500.jpg",
  },
  {
    id: 38,
    musicName: "Haram",
    singer: "Viguen",
    src: "https://dlrrooz.top/2024/music/7/New/Viguen%20Haram.mp3",
    cover:
      "https://aftabmusic.com/wp-content/uploads/2024/09/%D8%AC%D8%AF%DB%8C%D8%AF.webp",
  },
  {
    id: 39,
    musicName: "Abado Yek Rooz",
    singer: "Masin",
    src: "https://dl.solahangs.com/Music/1402/09/M/128/Masin%20-%20Abado%20Yek%20Rooz%20%28128%29.mp3",
    cover:
      "https://www.limusic.org/wp-content/uploads/2023/12/hs-Masin-Abado-Yek-Rooz.jpg.pagespeed.ce.wduAipiBjf.jpg",
  },
  {
    id: 40,
    musicName: "Beyt",
    singer: "Ehsan Daryadel",
    src: "https://irsv.upmusics.com/AliBZ/Ehsan%20Daryadel%20%7C%20Beat%20(320).mp3",
    cover:
      "https://musicdel.ir/wp-content/uploads/2023/12/%D8%A8%DB%8C%D8%AA.jpg",
  },
  {
    id: 41,
    musicName: "Afsaneh",
    singer: "The Don & Sijal",
    src: "https://cloud.musicsmelon.com/Music/Sijal%20-%20Afsaneh%20(128).mp3",
    cover:
      "https://solahangs.com/wp-content/uploads/2023/05/Sijal-The-Don-Afsaneh-img.jpg",
  },
  {
    id: 42,
    musicName: "Khoob Shod",
    singer: "Homayoun Shajarian",
    src: "https://dl.rozmusic.com/Music/1396/07/05/Homayoun%20Shajarian%20-%20Khoob%20Shod%20(128).mp3",
    cover:
      "https://i1.sndcdn.com/artworks-0nMQrQhaylFOHIvB-QGQIfA-t500x500.jpg",
  },
  {
    id: 43,
    musicName: "Mage Chand Bar Zendam",
    singer: "Ali Yasini",
    src: "https://irsv.upmusics.com/AliBZ/Ali%20Yasini%20-%20Mage%20Chand%20Bar%20Zendam%20(320).mp3",
    cover:
      "https://tabamusic.com/wp-content/uploads/2024/03/Ali-Yasini-Mage-Chand-Bar-Zendam.jpg",
  },
  {
    id: 44,
    musicName: "Haz Kardam",
    singer: "Shahrokh",
    src: "https://jenabmusic.musitraf.com/93/farvardin/Shahrokh%20-%20Haz%20Kardam.mp3",
    cover:
      "https://www.jenabmusic.com/wp-content/uploads/2014/04/Shahrokh-300x300.jpg",
  },
  {
    id: 45,
    musicName: "Vase Ye Lahze",
    singer: "Hoomaan & Chvrsi",
    src: "https://musictaj.musicmelllnet.com/song403/bhr/Hoomaan%20-%20Vase%20Ye%20Lahze.mp3",
    cover:
      "https://musichi.ir/wp-content/uploads/2024/10/Hoomaan-&-Chvrsi-Vase-Ye-Lahze-2024-10-16-21-23.jpg",
  },
  {
    id: 46,
    musicName: "Begoo Binam",
    singer: "Armin 2AFM",
    src: "https://dl.rozmusic.com/Music/1401/11/17/Armin%20Zarei%20-%20Begoo%20Binam%20%28128%29.mp3",
    cover:
      "https://rozmusic.com/wp-content/uploads/2023/02/Armin-Zarei-Begoo-Binam.jpg",
  },
  {
    id: 47,
    musicName: "Callifornia",
    singer: "Young Sudden & Sepehr Khalse",
    src: "https://ts18.tarafdari.com/contents/user860318/content-sound/young_sudden_x_sepehr_khalse_-_california.mp3",
    cover:
      "https://kelmusic.ir/wp-content/uploads/2024/09/Young-Sudden-x-Sepehr-Khalse-California.webp",
  },
  {
    id: 48,
    musicName: "Sare To",
    singer: "Shayan Yo",
    src: "https://ts14.tarafdari.com/contents/user764868/content-sound/shayan_yo_-_sare_to.mp3",
    cover:
      "https://sultanmusic.ir/wp-content/uploads/2023/06/Shayan-Yo-Sare-to.jpg",
  },
  {
    id: 49,
    musicName: "Kerm",
    singer: "Shayea",
    src: "https://www.tarafdari.com/sites/default/files/contents/user739775/content-sound/shayea_-_kerm-_400656973395138658.mp3",
    cover:
      "https://www.tarafdari.com/sites/default/files/contents/user739775/content-sound/album_1738165474774.png",
  },
  {
    id: 50,
    musicName: "Negarane Mani",
    singer: "Morteza Pashaei",
    src: "https://irsv.upmusics.com/Downloads/Musics/Morteza%20Pashaei%20-%20Negarane%20Mani%20(320).mp3",
    cover:
      "https://upmusics.com/wp-content/uploads/2018/01/Morteza-Pashaei-Negarane-Mani.jpg",
  },
];

export { media };
