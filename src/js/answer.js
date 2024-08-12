$(function () {

    $('.select').on('click', function () {
        let parent = $(this).parents(".question_contents");
        let nextParent = parent.next();
        parent.removeClass("is-active").fadeOut();
        nextParent.addClass("is-active").fadeIn();
    })

    $('.back').on('click', function () {
        let parent = $(this).parents(".question_contents");
        let prevParent = parent.prev();
        parent.removeClass("is-active");
        prevParent.addClass("is-active");
    })

})