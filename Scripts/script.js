$(function () {
    //preload
    setTimeout(function () {
        $(".preload").fadeToggle();
    }, 1500);

    //toggler responsive
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler .dash-list").toggleClass("toggler-active");

        setTimeout(function () {
            if ($(".navbar-toggler .dash-list").hasClass("toggler-active"))
                $("#navbarSupportedContent").addClass("show");
            else
                $("#navbarSupportedContent").removeClass("show");
        },500);
    });

    //click item menu
    var itemMenu = [
        {
            name: "Menu",
            id: "#menu"
        },
        {
            name: "Trang Chủ",
            id: "#home"
        },
        {
            name: "Giới Thiệu",
            id: "#about"
        },
        {
            name: "Lý Lịch",
            id: "#resume"
        },
        {
            name: "Sản Phẩm",
            id: "#product"
        },
        {
            name: "Liên Hệ",
            id: "#contact"
        }
    ];

    loadPageIndex();

    $(".nav-item .nav-link").click(function () {
        $(".mask-transition").toggleClass("mask-transition--toggler");
        var itemClicked = $(this);

        setTimeout(function () {
            //show back top
            $(".back-top").removeClass("d-none");
            // set active item
            //$(".nav-item .nav-link").removeClass("active");
            //itemClicked.addClass("active");
            //
            var htmlItemClicked = itemClicked.html();
            for (let item of itemMenu) {
                if (item.name == htmlItemClicked) {
                    $(item.id).removeClass("d-none");
                } else {
                    $(item.id).addClass("d-none");
                }
            }
        }, 700);
    });

    // back top
    $(".back-top").click(function () {
        $(".mask-transition").toggleClass("mask-transition--toggler");
        setTimeout(function () {
            loadPageIndex();
        }, 700);

        //close menu
        $("#navbarSupportedContent").removeClass("show");

        $(".navbar-toggler .dash-list").removeClass("toggler-active");
    });

    //load page
    function loadPageIndex() {
        $(".back-top").addClass("d-none");
        for (let item of itemMenu) {
            if (item.id == "#home" || item.id == "#menu") {
                $(item.id).removeClass("d-none");
            } else {
                $(item.id).addClass("d-none");
            }
        }
    }

});

