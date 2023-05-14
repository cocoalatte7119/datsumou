$(document).ready(function () {
    let total = 0;

    // クイズの各回答に対して、クリックイベントを設定する
    $('.select').click(function () {
        // 選択された回答の点数を加算する
        total += parseInt($(this).data('points'));
    });

    // 提出ボタンにクリックイベントを設定する
    $('#submit').click(function () {
        // 結果を取得し、表示する
        $.getJSON('result.json', function (data) {
            let resultText = '';

            $.each(data.results, function (i, result) {
                if (total >= result.minPoints) {
                    resultText = result.text;
                }
            });

            $('#result-text').text(resultText);
        });
    });
});
