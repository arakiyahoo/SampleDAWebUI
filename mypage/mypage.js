
function showMessage(message) {
    $("#message").text(message);
}

function showMessageBottom(message) {
    $("#messageBottom").text(message);
}


function refreashInvokeButton() {
    if(!$("#inputtext1").val() || !$("#inputtext2").val() || !$('input[name="radio1"]:checked').val()){
        $('#invoke_btn').prop( 'disabled', true );
        return;
    }
    if($('input[name="checkbox1"]:checked').length == 0){
        $('#invoke_btn').prop( 'disabled', true );
        return;
    }
    
    $('#invoke_btn').prop( 'disabled', false );



}

$(document).ready( function () {


    $('#primary_btn').click( function() {
        $('#primary_btn').prop( 'disabled', true );
        showMessage("プライマリボタンが押されました。");
    });

    $('#primary_btn_enable').click( function() {
        $('#primary_btn').prop( 'disabled', false );
        showMessage("");
    });

    $('#secondary_btn').click( function() {
        $('#secondary_btn').prop( 'disabled', true );
        showMessage("セカンダリボタンが押されました。");
    });

    $('#secondary_btn_enable').click( function() {
        $('#secondary_btn').prop( 'disabled', false );
        showMessage("");
    });

    $('#tertiary_btn').click( function() {
        $('#tertiary_btn').prop( 'disabled', true );
        showMessage("ターシャリボタンが押されました。");
    });

    $('#tertiary_btn_enable').click( function() {
        $('#tertiary_btn').prop( 'disabled', false );
        showMessage("");
    });





    $("#inputtext1").keyup(function(){
        refreashInvokeButton();
    });
    $("#inputtext2").keyup(function(){
        refreashInvokeButton();
    });
    $('input[name="radio1"]').change(function(){
        refreashInvokeButton();
    });
    $('input[name="checkbox1"]').change(function(){
        refreashInvokeButton();
    });

    $("#invoke_btn").click(function () {
        var label1=$("#inputtext1").val();
        var label2=$("#inputtext2").val();
        var label3=$("#inputtext3").val();
        var select1=$("#select1").val();
        var radio1=$('input[name="radio1"]:checked').val();
        var checkbox1 = [];
        $('input[name="checkbox1"]:checked').each(function() {
            checkbox1.push($(this).val());
        });
        showMessageBottom(
            "セレクタ1:"+select1
            +", テキスト1: "+label1
            +", テキスト2: "+label2
            +", テキスト3: "+label3
            +", ラジオ1: "+radio1
            +", チェックボックス1: "+checkbox1
        );
    });




});