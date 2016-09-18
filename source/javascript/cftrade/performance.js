$(function () {
    $('#date_list').diySelect();
  golink_init();

});
function golink_init(){
  $(".ui-content").on('click','.rank-depart-tab ul li',function () {
    var href = $(this).data("json").href;
    var cd = $(this).data("json").cd;
    var htmlObj = $.ajax({url: href + '.html', async: false});
    $(".ui-content").html($(htmlObj.responseText).find(".ui-content").html());
    $(".js-dialog").remove();

    var varScript = document.createElement("script");
    varScript.language = "javascript";
    varScript.type = "text/javascript";
    varScript.src = "/javascript/modules/" + cd + "/" + href + ".js";
    $("script_add").html("");
    $("script_add").append(varScript);
  })
}
