$(document).ready(function () {
    let selectScores = 0;
    let score = 0;
    let prevScore = 0;
    let total = 0;

    // クイズの各回答に対して、クリックイベントを設定する
    $('.select').click(function () {
        // 選択された回答の点数を加算する
        selectScores = parseInt($(this).data('point'));
        prevScore = score;
        score += selectScores;

        console.log("選択された点数：" + selectScores);
        console.log("合計点：" + score);
        console.log("1つ前の点数：" + prevScore);
    });

    $('.back').click(function () {
        // 選択された回答の点数を加算する
        score = prevScore;
        console.log("合計点：" + score);
    });

    $('.submit').click(function () {
        // 選択された回答の点数を加算する
        total = score;
        $('.result_txt p').text(total);
        console.log(total)
    });
});
