let isOddTurn = true;

$(function (){
    // マス目にイベントを設定する
    $(".square").click(clickSquareEvent);
});

function clickSquareEvent(){
    // クリックされたマス目のオブジェクトを取得する
    let square = $(this);

    // マス目にピースを置く
    putPiece(square, getTurnString());

    // ターンを変更
    changeTurn();
}

function putPiece(taegetSquare, owner) {
    taegetSquare.text("●").attr("data-owner", owner).addClass("selected");
}

function getTurnString(){
    if(isOddTurn){
        return "black";
    }
    return "white";
}

function changeTurn(){
    isOddTurn = !isOddTurn;
}