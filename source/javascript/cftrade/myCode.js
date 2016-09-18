$(function () {
    $('#model_list').diySelect();
    addChannel();
    showCode();
});

function addChannel() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">添加渠道</label>',
        ' <label class="select-label">',
        '<dl class="search-dl lottery_list">',
        '<dd>',
        ' <span>',
        ' <select name="" id="lottery_list" class="diy-select">',
        '<option>自己</option>',
        ' </select>',
        '</span>',
        ' </dd>',
        '</dl>',
        '</label>',
        '</div>'].join('');
    $('.btn-add-message').dialog({
        title: '选择添加渠道',
        content: contentHtml,
        hasBtn: true,
        width: 410,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('#lottery_list').diySelect();
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}

function showCode() {
    $('.set-btn').click(function(){
        var title = $(this).parents('tr').find('td:first-child').text();
        var contentHtml = ['<div class="form-img ">',
            '<img src="/images/cftrade/mycode.png">',
            '</div>'].join('');
        var dialog = new Dialog(null,{
            title: title,
            content: contentHtml,
            hasBtn: true,
            padding:'27px 20px 20px 20px',
            btnText:['下载'],
            width: 410,
            confirm: function (dialog) {
                dialog.hide();
            }
        })
        dialog.show();
    })
}