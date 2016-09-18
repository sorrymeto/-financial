$(function () {
    $('#staff_list').diySelect();
    $('#model_list').diySelect();
    $(".begin-time").datepicker({
        onClose: function (selectedDate) {
            $(".end-time").datepicker("option", "minDate", selectedDate);
        }
    })
    $(".end-time").datepicker({
        onClose: function (selectDate) {
            $(".begin-time").datepicker("option", "maxDate", selectDate);
        }
    })
    deleteData();
    showAddcontent();
    checkMessage();
    check();
    selectAll();
});
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
function showAddcontent() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">客户姓名</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户手机</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户身份证号</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">备注</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">跟进记录</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">选择二维码</label>',
        ' <label class="select-label">',
        '<dl class="search-dl lottery_list">',
        '<dd>',
        ' <span>',
        ' <select name="" id="lottery_list" class="diy-select">',
        '<option>二维码一</option>',
        ' </select>',
        '</span>',
        ' </dd>',
        '</dl>',
        '</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label"></label>',
        '<div class="warin-message">提示：添加预约后，系统将向客户手机发送该二维码开户链接，请跟进</div>',
        '</div>',].join('');

    $('.btn-add-message').dialog({
        title: '添加预约客户',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
            $("#lottery_list").diySelect({
                width: 270
            });
        }
    });
}
function checkMessage() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">客户姓名</label>',
        '<div class="message">方方方</div>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户手机</label>',
        '<div class="message">1899999990800</div>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户身份证号</label>',
        '<div class="message">430299198701250999</div>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">选择二维码</label>',
        '<div class="message">二维码一</div>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">预约关系</label>',
        '<div class="message">失败</div>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">备注</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">跟进记录</label>',
        '<textarea type="text"></textarea>',
        '</div>',].join('');

    $('.edit-btn').dialog({
        title: '方方方',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        btnText: ['删除', '保存'],
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-confirm').css('background-color','white');
            $('.btn-wrap').find('.btn-confirm').css('color','#3d94e4');
            $('.btn-wrap').find('.btn-cancel').css('background-color','#3d94e4');
            $('.btn-wrap').find('.btn-cancel').css('color','white');
            $('.btn-wrap').find('.btn-cancel').css('border','1px solid #3d94e4');
        }
    });
}
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