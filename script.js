$(document).ready(function () {
    let isEqualBtnPressed = false;
    function remove() {
        $(".display").text("");
    }
    $(".key").on("click", function () {
        if (isEqualBtnPressed) {
            remove();
        }
        $(".display").text($(".display").text() + this.value);
        isEqualBtnPressed = false;
    });
    $(".btn-equal").on("click", function () {
        $(".display").text(eval($(".display").text()));
        isEqualBtnPressed = true;
    });
    $(".btn-remove-all").on("click", remove);
});
