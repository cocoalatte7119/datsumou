$(document).ready(function () {
    let selectScores = 0;
    let score = 0;
    let prevScore = 0;
    let total = 0;

    function loadJSON(callback) {
        $.getJSON('src/json/dataBase.json', function (data) {
            callback(data);
        });
    }

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
        total = score;
        // $('.result_txt p').text(total);
        // console.log(total);
        // 選択された回答の点数を加算する
        function searchDataAndDisplay(number) {
            loadJSON(function (data) {
                // 番号が一致するデータを検索
                let searchNumber = parseInt(number, 10);
                let matchingData = data.find(function (item) {
                    return item.id === searchNumber;
                });

                if (matchingData && matchingData.店名 !== "") {
                    // 該当するデータをHTMLに表示
                    $('.result_txt_ttl').html(matchingData.店名);
                    $('.result_txt_point-1').html(matchingData.概要1);
                    $('.result_txt_point-2').html(matchingData.概要2);
                    $('.result_txt_point-3').html(matchingData.概要3);
                    $('.result_img').html(matchingData.アフィリエイトURL);
                }
                else {
                    // 該当するデータが見つからなかった場合の処理
                    window.location.href = 'error.html';
                }
            });
        }
        searchDataAndDisplay(total);
    });
});
