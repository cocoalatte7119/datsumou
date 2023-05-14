$(function () {

    $('.select').on('click', function () {
        let parent = $(this).parents(".question_contents");
        console.log(parent);
        let nextParent = parent.next();
        console.log(nextParent);
        parent.removeClass("is-active");
        nextParent.addClass("is-active");
    })

    $('.back').on('click', function () {
        let parent = $(this).parents(".question_contents");
        console.log(parent);
        let prevParent = parent.prev();
        console.log(prevParent);
        parent.removeClass("is-active");
        prevParent.addClass("is-active");
    })

})