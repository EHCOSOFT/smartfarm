
$(document).ready(function () {

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
        // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
        // window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    // 버튼 클릭 시 active 클래스 토글
    $('.btn-gray.primary').click(function () {
        $(this).toggleClass('active');
    });

    $('.btn-gray.red').click(function () {
        $(this).toggleClass('active');
    });

    $('.btn-gray.gray').click(function () {
        $(this).toggleClass('active');
    });
}
);