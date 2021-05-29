$(document).ready(function () {
    //creating index col and index row  
    for (let i = 1; i <= 100; i++) {
        let ans = "";
        let n=i;
        while (n > 0) {
            let rem = n % 26;
            if (rem == 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            }
            else {
                ans = String.fromCharCode(64 + rem) + ans;
                n = Math.floor(n / 26);
            }
        }
        let colname=$(`<div class="col-name colcode-${ans}" id="colid-${i}">${ans}</div>`);
        $(".col-name-container").append(colname);
        let rowname=$(`<div class="row-name " id="rowid-${i}">${i}</div>`);
        $(".row-name-container").append(rowname);
    }

    //Creating Input-cell 
    for(let i=1;i<=100;i++){
        $(".input-cell-container").append($(`<div class="input-cell-row" id="input-cell-rowid-${i}"></div>`));
        for(let j=1;j<=100;j++){
            let getcol=$(`#colid-${j}`).attr("class").split(" ");
            cellcolcode=getcol[1].split("-")[1];
            // console.log(cellcolcode);
            $(`#input-cell-rowid-${i}`).append($(`<div class="input-cell input-cel-colcode-${cellcolcode}" id="row-${i}-col-${j}" contenteditable="true"></div>`));
        }
    }

    //toolbar selection
    $(".align-item").click(function(){
        $(".align-item.selected").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".style-icon").click(function(){
        $(this).toggleClass("selected");
    });
});