const SLIDES_DATA = [{
        Title: "دع القلق وابدأ الحياة",
        Writer: "ل ديل كارنيجي",
        Summary: `كتاب من تأليف الكاتب الأمريكي ديل كارنيجي، وهو من أكثر الكتب مبيعاً في العالم فقد بيع منه أكثر من 16 مليون نسخة حول العالم وترجم إلى العديد من اللغات، وأطروحة الكتاب الرئيسية هي كيفية اكتساب الأصدقاء في ضوء النظريات الحديثة في علم النفس. `
    },
    {
        Title: " عبقرية عمر ",
        Writer: "ل عباس محمود العقاد",
        Summary: "كتاب من تأليف عباس محمود العقاد و , يركز على القدرات العقلية والمنطقية للخليفة والصحابي عمر بن الخطاب ، ويستشهد  مجموعة من المواقف والأحداث والقرارات التي تجلت فيه عبقريته "
    },
    {
        Title: "كيف تتعامل مع الناس",
        Writer: "ل ديل كارنيجي",
        Summary: "هو الكتاب الأشهر بين مجموعة الكتب التي تتكلم عن فن التعامل بين الناس، فهذا الأمر ليس بالأمر اليسير، فالتعامل مع الناس هو فن يحتاج إلى الكثير من الخبرة حتى يستطيع الفرد أن يتكيف مع غيره من الأفراد الذين يختلفون في الطبائع وفي السمات الشخصية."
    },

    {
        Title: "فن الخطابة",
        Writer: "ل ديل كارنيجي",
        Summary: `كتاب قيم لأشهر علماء السلوك الإنساني في العالم " ديل كارينجي" يحتوي على فوائد عظيمة لمن يتصدى المجالس والمحافل والاجتماعات كمتحدث وملقي للخطب والكلمات .        `
    },
    {
        Title: "مميز بالاصفر",
        Writer: "ل روتشيل بنينجتون",
        Summary: `يحتوي كتاب "مميّز بالأصفر" على العديد من القصص والاقتباسات عن مواضيع الحياة العامة، والقصص التي تتحدث عن أسس الحياة الجيّدة، كالكرم، الإحسان، وأهمية التصرف بلطف مع الآخرين،`
    },
    {
        Title: "أربعون",
        Writer: "ل أحمد الشقيري",
        Summary: "أربعون خاطرة من تأملات و خواطر و تجارب أحمد الشقيري، وضعها في هذا الكتاب حين اعتزل الناس و التكنولوجيا لمدة أربعين يومًا في جزيرة نائية من جزر المحيط الهادي. مقالات هذا الكتاب هي ملخص لرحلته في الحياة عبر أربعين عامًا من الصراع و السعي المستمر بحثًا عن السلام الداخلي"
    },
    {
        Title: "عبقرية خالد",
        Writer: "ل عباس محمود العقاد",
        Summary: "يقدم العقاد في هذا الكتاب عبقرية «خالد بن الوليد» أو سيف الله المسلول؛ القائد العسكري الفذ الذي تجلَّت قدراته الاستراتيجية في حروب الرِّدة وفتح العراق والشام بعد أن كسر جيوش دول عظمى للفرس والروم "
    },
    {
        Title: "كيف تكسب الاصدقاء",
        Writer: "ل ديل كارنيجي",
        Summary: `كتاب كيف تكسب الاصدقاء بيع منه ما يقارب 50 مليون نسخة ، بمختلف اللغات العالمية أطروحة الكتاب الرئيسية هي .. كيف تكسب الاصدقاء        `
    },
    {
        Title: "عبقرية الصديق",
        Writer: "ل عباس محمود العقاد",
        Summary: "في هذا الكتاب يتحدث عباس محمود العقاد عن الخليفة الأول أبو بكر الصديق ويرد فيه على اتهامات بعض المؤرخين للصديق بالمنهج العلمي وبدون أسلوب انفعالي وخصوصاً مسالة خلافته للدولة الإسلامية"
    },
    {
        Title: "عبقرية علي",
        Writer: "ل عباس محمود العقاد",
        Summary: `يدور على صفحات هذا الكتاب حديث عن الإمام علي بن أبي طالب، هذا الحديث له صلة بالنفس الإنسانية في كل مناصيها، وفي سيرته ملتقى بالعواطف الجياشة، والأحاسيس المتطلعة إلى الرحمة والإكبار، وملتقى بالفكر، فهو صاحب آراء لم تسبق في التصرف والشريعة والأخلاق`
    },
    {
        Title: "عبقرية عثمان",
        Writer: "ل عباس محمود العقاد",
        Summary: "يتحدث في هذا الكتاب عن الخليفة الثالث عثمان بن عفان وعن اريحيته وليس عبقريته. و يقارن بين ما كان عليه العرب قبل الإسلام من ظلم الحكام إلى ما وصلوا اليه من محاسبة الحاكم وهي إحدى أهم ركائز الديموقراطية ويتحدث عن حادث مبايعته كخليفة وكيف تم اختياره من بين صحابيين جليلين"
    },
    {
        Title: "عبقرية محمد",
        Writer: "ل عباس محمود العقاد",
        Summary: `يوضح  العقاد أن  الغرض من كتابه "عبقرية محمد" ليس تقديم سرد للسيرة النبوية  أو شرح للإسلام بل هو(تقدير لعبقرية محمد)، الأمر الذي يراه  المسلم وغير المسلم - شاملا- لأن (إيتاء العظمة حقها لازم في كل آونة وبين كل قبيل) `
    },
    {
        Title: "كوني صحابية ",
        Writer: "ل حنان لاشين",
        Summary: `كتاب يضم مجموعة مقالات موجه تحديدا للفتيات للفئة العمرية تحت العشرين وربما أكبر قليلا "فترة المراهقة"    `
    },
    {
        Title: "تنهيدة",
        Writer: "ل يوسف الدموكي",
        Summary: "يتحدث الكتاب عن المشاعر والعواطف التي يشعر بها الشخص وربما قد لا يكون لديه القدرة على الحديث عنها أو البوح بها."
    }
]
const Sync = () => {
    let current = $(".slick-current").attr("data-id")
    let titleDom = document.querySelector(".Title")
    let writerDom = document.querySelector(".writer")
    let imageDom = document.querySelector(".imageBook")
    let summaryDom = document.querySelector(".summary")
    titleDom.innerHTML = SLIDES_DATA[current - 1].Title
    writerDom.innerHTML = SLIDES_DATA[current - 1].Writer
    summaryDom.innerHTML = SLIDES_DATA[current - 1].Summary
    imageDom.setAttribute("src", `/imgs/Books/${current}.jpg`)
    document.querySelector(".BookDetails").classList.add('animated', 'fadeIn')
}

$('.autoplay').on('init', function (event, slick) {
    Sync()
});

$('.autoplay').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    centerMode: true,
    variableWidth: true
});

$('.autoplay').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    document.querySelector(".BookDetails").classList.remove('animated', 'fadeIn')


});
$('.autoplay').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    Sync()

});

$('.autoplay').on('swipe', function (event, slick, direction) {
    Sync()

});


document.querySelector(".order").addEventListener("click", () => {
    let current = $(".slick-current").attr("data-id") - 1
    $("#ex1").modal({
        fadeDuration: 100
    });
    document.querySelector(".imageModal img").setAttribute("src", `/imgs/Books/${current}.jpg`)
    document.querySelector(".bookName").value = SLIDES_DATA[current - 1].Title
})



document.querySelector(".infos").addEventListener("submit", e => {
    e.preventDefault();
    let form = $('.infos').serialize()
    fetch("http://algerianreporters.com/karraz/karraz.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: form
        })
        .then((res) => {
            if (res.status !== 200) {
                $.notify("حدث خطأ يرجى الاعادة مرة اخرى", "error");

            } else {
                $.notify("تم بنجاح سيتم الاتصال بك لاحقا", "success");

            }
            return res.text()
        })

})


document.querySelector(".contact").addEventListener("submit", e => {
    e.preventDefault();
    let form = $('.contact').serialize()
    fetch("http://algerianreporters.com/karraz/formHandler.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: form
        })
        .then((res) => {
            if (res.status !== 200) {
                $.notify("حدث خطأ يرجى الاعادة مرة اخرى", "error");

            } else {
                $.notify("تم بنجاح سيتم الاتصال بك لاحقا", "success");

            }
            return res.text()
        })

})

document.querySelector(".iconMenu").addEventListener("click", () => {
    document.querySelector(".navmobile").style.width = '100%'
    document.querySelector(".navmobile").style.opacity = 1
    document.querySelector(".navmobile").style.left = 0


})
const closeNav = () => {
    document.querySelector(".navmobile").style.width = 0
    document.querySelector(".navmobile").style.opacity = 0
    document.querySelector(".navmobile").style.left = '-20px'

}

document.querySelector(".closebtn").addEventListener("click", () => {
    closeNav()

})




document.querySelector(".base a").addEventListener("click", () => {
    moveDown(".main");
})
document.querySelectorAll(".pR").forEach(el => {
    el.addEventListener("click", () => {
        moveTo(".main", 2);
        closeNav()
    })
})
document.querySelectorAll(".aS").forEach(el => {
    el.addEventListener("click", () => {
        moveTo(".main", 3);
        closeNav()
    })
})
document.querySelectorAll(".cN").forEach(el => {
    el.addEventListener("click", () => {
        moveTo(".main", 4);
        closeNav()
    })
})

document.querySelector(".lH").addEventListener("click", () => {
    moveTo(".main", 1);
})