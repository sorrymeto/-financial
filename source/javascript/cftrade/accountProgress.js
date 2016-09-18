$(function () {
    $('#staff_list').diySelect();
    $('#model_list').diySelect();
    showLoading();
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">客户号</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户姓名</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户手机</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">二维码名称</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group  time-group">',
        '<label for="level" class="label">开户时间</label>',
        ' <label class="aql-label">',
        '<input class="aql-input begin-time" type="text">',
        ' <i></i>',
        '</label>',
        '<span class="time-last">至</span>',
        ' <label class="aql-label">',
        '<input class="aql-input end-time" type="text">',
        ' <i></i>',
        '</label>',
        '</div>',
        '<div class="form-group time-group">',
        '<label for="level" class="label">最近交易时间</label>',
        ' <label class="aql-label">',
        '<input class="aql-input begin-time" type="text">',
        ' <i></i>',
        '</label>',
        '<span class="time-last">至</span>',
        ' <label class="aql-label">',
        '<input class="aql-input end-time" type="text">',
        ' <i></i>',
        '</label>',
        '</div>',
        '<div class="form-group time-group">',
        '<label for="level" class="label">首次入金时间</label>',
        ' <label class="aql-label">',
        '<input class="aql-input begin-time" type="text">',
        ' <i></i>',
        '</label>',
        '<span class="time-last">至</span>',
        ' <label class="aql-label">',
        '<input class="aql-input end-time" type="text">',
        ' <i></i>',
        '</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">开户模版</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">营业部</label>',
        ' <label class="select-label">',
        '<dl class="search-dl lottery_list">',
        '<dd>',
        ' <span>',
        ' <select name="" id="lottery_list" class="diy-select">',
        ' </select>',
        '</span>',
        ' </dd>',
        '</dl>',
        '</label>',
        '</div>'].join('');

    $('.more-btn').dialog({
        title: '更多条件',
        content: contentHtml,
        hasBtn: true,
        width: 'initial',
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
            $("#lottery_list").diySelect({
                width: 270
            });
            $('.begin-time').datepicker({
                onClose: function (selectedDate) {
                    $('.end-time').datepicker('option', 'minDate', selectedDate);
                }
            });
        }
    });

    contentHtml = [' <table class="dialog-table">',
        '<thead>',
        ' <tr>',
        ' <th width="50%">当前进度</th>',
        ' <th width="50%">操作时间</th>',
        ' </tr>',
        '</thead>',
        ' <tbody>',
        ' <tr>',
        '  <td>短信注册</td>',
        '<td>2016-03-25 10：33</td>',
        ' </tr>',
        ' <tr>',
        '  <td>上传身份证</td>',
        ' <td>2016-03-25 10：33</td>',
        '</tr>',
        ' <tr>',
        ' <td>完善资料</td>',
        '  <td>2016-03-25 10：33</td>',
        ' </tr>',
        ' <tr>',
        ' <td>视频认证</td>',
        ' <td>2016-03-25 10：33</td>',
        ' </tr>',
        ' <tr>',
        ' <td>协议签署</td>',
        ' <td></td>',
        ' </tr>',
        ' <tr>',
        '<td>设置密码</td>',
        ' <td></td>',
        ' </tr>',
        ' <tr>',
        ' <td>三方存管</td>',
        ' <td></td>',
        ' </tr>',
        '<tr>',
        '<td>风险评测</td>',
        ' <td></td>',
        ' </tr>',
        ' <tr>',
        ' <td>问卷回访</td>',
        ' <td></td>',
        ' </tr>',
        '<tr>',
        ' <td>提交</td>',
        ' <td></td>',
        ' </tr>',
        '</tbody>',
        '</table>',
        '</div>'].join('');
    $('.eduit-btn').dialog({
        title: '进度详情',
        content: contentHtml,
        hasBtn: false,
        width: 480,
        padding:'32px',
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {

        }
    })
});
function showLoading(){
    $('.magnifier').click(function(){
        $('.shadow-div').show();
        setTimeout(function(){
            $('.shadow-div ').hide();
        },5000);
    })
}
