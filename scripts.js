const audio = document.getElementById("audio");
    const title = document.getElementById("title");
    const cover = document.getElementById("cover");
    const progress = document.getElementById("progress");
    const trackList = document.getElementById("trackList");

    const lyricsBox = document.getElementById("lyricsBox");
    const lyricsContent = document.getElementById("lyricsContent");
    
    const tracks = [
      {
        title: "حاجات كتير بتتغير جوايا",
        file: "songs/7agat_kter_bettgaer_gwaya.mp3",
        cover: "img/image (1).jpg",
        lyrics: `حاجات كتير بتتغير جوايا
    حاسس إني مش أنا 
    مشاعري تايهة معايا 
    والدنيا بقيت كأنها ساحة قتال`
      },
      {
        title: "الوحدة في عيون الليل",
        file: "songs/الوحده في عيون الليل.mp3",
        cover: "img/solo.png",
        lyrics: `الوحدة بتضحكلي في عيون الليل
    كلامي بيرن فـ صمت طويل
    أنا والسراب أصحاب قريبين
    بس مش لايق طريق طويل`
      },
      {
        title: "Moga",
        file: "songs/moga.mp3",
        cover: "img/Mo7med 3mr.jpg",
        lyrics: `كلو عارف اني راكب الموجا
اندر ايدج مين يا مستجد 
باراتي يسطا بارد
احط في طيزك 
زي لوح التلج 
سموزي ايس يسطا فخ 
خاف علي سريره يسطا شخ
صالح مين يا عم 
باراتك منتهيه 
motherfuck فاكر نفسه حاجه
جاي ينكش 
فاكر نفسو توباك
و هو ريتاج  
بطل تلقيح نسوان
يسطا سهله مين يا عم
روح اتناك بس
معاك شهاده معمله اطفال
و جي يتنطط علي الكبار
حلو البار
بس انت حمار
ركب فراري مين يا عم
شكل حد مفهمك ان الخرده دي 
فراري 
و انا راكب موجا 
يسطا ليه 
بتتناك زي ريتاج ليه ؟ 
اتاري مين يا عم بلعب بي البي سي 
و انا ركبك فيه
بتدس مين يا عم
متشوفش نفسك ويجز
الحمدلله عامل كاريري يا مستجد
شخ يسطا بعيد و بطل تعريص
مين الي قالك انك رابر روح اتناك
انا معمر يسطا بقالي 4 سنين
و لو مش عاجبك روح اتناك بعيد
مفيش وقت للهزار 
لو شوفتك في الشارع ها نيكك ياض 
عملك قلق في دماغك
يسطا يلا بيعيد مفيش مستوي 
موجا ده منيوك من كل الناس
و ام جي الي حارقك لدرجه انك تدسو
ده ها ينيكك فوري 
يسطا غور
يسطا سونه مين انت اخرك بيبي
كلامك محتاج اعاده تدوير
اسمك مكتوب في الديث نوت
علشان انت عويل 
لو صدقت اني اعتزلت فروح نام بعيد
`
      },
      {
        title: "Oblisk",
        file: "songs/Oblisk (1).mp3",
        cover: "img/oblisk.jpg",
        lyrics: `[intro]
ياه
لوحدي بتساب 
لوحدي بتساب
معشتش موته بس كلو بحساب
Jo Beats

[verse 1]
وحدي بتساب
معشتش موته بس كلو بحساب

جرا اي يبنل المتناك
متفكرش نفسك  sigma man
متفكرش نفسك cool يا man
متفكرش كلامك هياثر فياا
خد بالك معدتش بامن 
اي ابن عرص بديه و انا ساكت 
قولي ازاي اطير و اوصلك و اعافر
ها ادمرك بتضحيتين زي اوبليسك
انا كارف
كارف ليهم انا كارف
للي يكدرني انا جاهز للحرب
ياما كسبت و خسرت
يا ريتني كنت وفرت
انا وقعت علي الارض
fuck  up
new version iam got
killed old version ياه
when u see me u run

[verse 2]
معدش معايا مسكنات
بطلتها من زمان

ام جي اسف اني بدلتك من زمان
اصل الدنيا دي غداره
عايزه شخصيه قويه
اه
متثقش في حد كلهم خاينين و لاد متناكه
الدنيا ها تذلك علشان وحده حبتها و هتكسرك
معدتش بامن
جناحي مكسور قوليلي ازاي اطير و اوصلك و اعافر
grrrrr
[chourse]
وحدي بتساب
معشتش موته بس كلو بحساب

جرا اي يبنل المتناك
متفكرش نفسك  sigma man
متفكرش نفسك cool يا man
grrrrrrrr
[outro]
ها ادمرك بتضحيتين زي اوبليسك
زي اوبلييسك 
زي اوبليسك
معشتش موته بس كلو بحساب
معدتش بامن`
      }
    ];
    

    let current = 0;
    let repeat = false;

    // Load all tracks into the grid
    function loadTracks() {
      tracks.forEach((track, index) => {
        const trackDiv = document.createElement("div");
        trackDiv.classList.add("track");
        trackDiv.innerHTML = `
          <img src="${track.cover}" alt="${track.title}">
          <div class="content">${track.title}</div>
        `;
        trackDiv.onclick = () => loadTrack(index);
        trackList.appendChild(trackDiv);
      });
    }

    // Load the selected track into the player
    function loadTrack(index) {
        audio.src = tracks[index].file;
        title.textContent = tracks[index].title;
        cover.src = tracks[index].cover;
        lyricsContent.textContent = tracks[index].lyrics || "كلمات الأغنية غير متوفرة.";
        lyricsBox.classList.add("show");
        current = index;
        audio.load();
      }
      

    // تحديث شريط التقدم مع كل ثانية
    audio.ontimeupdate = function() {
      const progressValue = (audio.currentTime / audio.duration) * 100;
      progress.value = progressValue;
    };

    // التعامل مع تغييرات المستخدم على شريط التقدم
    progress.oninput = function() {
      const seekTime = (progress.value / 100) * audio.duration;
      audio.currentTime = seekTime;
    };

    function togglePlay() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    function prev() {
      current = (current - 1 + tracks.length) % tracks.length;
      loadTrack(current);
    }

    function next() {
      current = (current + 1) % tracks.length;
      loadTrack(current);
    }

    function toggleRepeat() {
      repeat = !repeat;
      audio.loop = repeat;
    }

    // Initial loading of tracks
    loadTracks();
    loadTrack(current);