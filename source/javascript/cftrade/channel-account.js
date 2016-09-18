$(function () {
    $('#staff_list').diySelect();
    $('#model_list').diySelect();
    check();
    selectAll();
    deleteData();
});
function check(){
    $('.main-table .attr-panl a').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass('current');
        }else {
            $(this).addClass('current');
        }
    });
}
function selectAll(){
    $('.footer-select .attr-panl a').click(function(){
        if($(this).hasClass('current')){
            $(this).removeClass('current');
            $('.main-table .attr-panl a').removeClass('current');
        }else {
            $(this).addClass('current');
            $('.main-table .attr-panl a').addClass('current');
        }
    })
}
function deleteData() {
    $(".delete-btn").click(function () {
        var length = $(".main-table").find(".attr-panl").find(".current").length;
        $(".js-dialog").remove();
        if (length == 0) {
            var contentHtml = ['<div class="form form-add">',
                '<div class="form-group">',
                '请选择其中一条数据进行操作',
                '</div>'].join('');
            var dialog = new Dialog(null, {
                title: '提示',
                content: contentHtml,
                hasBtn: true,
                width: 260,
                confirm: function (dialog) {
                    dialog.hide();
                },
                afterShow: function () {
                    $('.btn-wrap').find('.btn-cancel').hide();
                }
            })
            dialog.show();
        } else {
            var contentHtml1 = ['<div class="form form-add">',
                '<div class="form-group">',
                '是否确认删除？',
                '</div>'].join('');
            var dialog = new Dialog(null, {
                title: '提示',
                content: contentHtml1,
                hasBtn: true,
                width: 240,
                confirm: function (dialog) {
                    $("td .attr-panl a").each(function () {
                        if (!$(this).hasClass("check-disabled") && $(this).hasClass("current")) {
                            $(this).parents("tr").remove();
                        }
                    })
                    $(".attr-panl a").find(".span-num").each(function () {
                        $(this).text($(this).parents("tr").index() + 1);
                    });
                    dialog.hide();
                },
                afterShow: function () {
                }
            });
            dialog.show();
        }
    })
}