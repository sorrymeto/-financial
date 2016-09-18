$(function () {
    $('#staff_list').diySelect();
    $('#status_list').diySelect();
    $('#start_status_list').diySelect();
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
    showDialogDaily();
    readContent();
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
function readContent(){
    $(".read-btn").click(function () {
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
                '是否标志为已读？',
                '</div>'].join('');
            var dialog = new Dialog(null, {
                title: '提示',
                content: contentHtml1,
                hasBtn: true,
                width: 240,
                confirm: function (dialog) {
                    $("td .attr-panl a").each(function () {
                        if (!$(this).hasClass("check-disabled") && $(this).hasClass("current")) {
                            $(this).parents("tr").find('td:last-child i').hasClass('active')?"":$(this).parents("tr").find('td:last-child i').addClass('active');
                        }
                    })
                    dialog.hide();
                },
                afterShow: function () {
                }
            });
            dialog.show();
        }
    })
}
function showDialogDaily() {
    var contentHtml1 = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label show-name">姓名</label>',
        '<label class="message">方立方<span class="text-blue">查看开户详情</span></label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">手机</label>',
        '<label class="message">134****0128</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">身份证号</label>',
        '<label class="message">4457371*********840</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">开户模版</label>',
        '<label class="message">万2.5渠道</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">当前进度</label>',
        '<label class="message">视频认证</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">最近操作时间</label>',
        '<label class="message">2016-03-24 18:31</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">注册时间</label>',
        '<label class="message">2016-03-23 18:31</label>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label show-name">添加跟进记录</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '</div>',].join('');
    var contentHtml2 = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label show-name">姓名</label>',
        '<label class="message">方立方<span class="text-blue">查看开户详情</span></label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">客户号</label>',
        '<label class="message">610000173488</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">身份证号</label>',
        '<label class="message">资金流入</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">开户模版</label>',
        '<label class="message">199,042.93 元</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">流水时间</label>',
        '<label class="message">2016-03-23 18:31</label>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label show-name">添加跟进记录</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '</div>',].join('');
    var contentHtml3 = ['<div class="form-table"> <table class="small-table">',
        '<thead>',
        '<tr>',
        '<th width="22%"><div class="attr-panl"><a href="javascript:void(0)" class=""><span class="param-checkbox"></span>客户号</a></div></th>',
        '<th width="16%">客户姓名</th>',
        '<th width="22%">客户手机</th>',
        '<th width="20%">生日时间</th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td><div class="attr-panl"><a href="javascript:void(0)" class=""><span class="param-checkbox"></span>61000173488</a></div></td>',
        '<td>方立方</td>',
        '<td>13456930128</td>',
        '<td>1986-04-08</td>',
        '</tr>',
        '<tr>',
        '<td><div class="attr-panl"><a href="javascript:void(0)" class=""><span class="param-checkbox"></span>61000173488</a></div></td>',
        '<td>马靓</td>',
        '<td>13456930128</td>',
        '<td>1986-04-08</td>',
        '</tr>',
        '<tr>',
        '<td><div class="attr-panl"><a href="javascript:void(0)" class=""><span class="param-checkbox"></span>61000173488</a></div></td>',
        '<td>王子文</td>',
        '<td>13456930128</td>',
        '<td>1986-04-08</td>',
        '</tr>',
        '</tbody>',
        '</table>',
        '<div class="ui-pagenav">',
        '<div class="page-cf">',
        '<ul class="clearfix">',
        '<li class="page-up"><a href="javascript:void(0)"> < 上一页</a></li>',
        '<li class="page-num first-num"><a href="javascript:void(0)">1</a></li>',
        '<li class="page-num thisPage"><a href="javascript:void(0)">2</a></li>',
        '<li class="page-num"><a href="javascript:void(0)">3</a></li>',
        '<li>...</li>',
        '<li class="page-down"><a href="javascript:void(0)">下一页> </a></li>',
        '<li>共20页，到第</li>',
        '<li><input class="page-go" type="text"></li>',
        '<li>页</li>',
        '<li  class="page-go-sure"><a href="">确定</a></li>',
        '</ul>',
        '</div>',
        '</div>',
        '<div class="table-textarea">',
        '<label for="level" class="label">发送祝福短信</label>',
        '<textarea type="text"></textarea>','</div>',].join('');
    var contentHtml4 = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">姓名</label>',
        '<label class="message">方立方<span class="text-blue">查看开户详情</span></label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">手机</label>',
        '<label class="message">136****88899</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">客户号</label>',
        '<label class="message">610000173488</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">开户模版</label>',
        '<label class="message">资金流入</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">营业部</label>',
        '<label class="message">199,042.93 元</label>',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">开户时间</label>',
        '<label class="message">2016-03-23 18:31</label>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">添加跟进记录</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '</div>',].join('');
    var contentHtml5 =  ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label show-name">客户姓名</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">客户手机</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label show-name">客户身份证号</label>',
        '<input type="text">',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label show-name">备注</label>',
        '<textarea type="text"></textarea>',
        '</div>',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label show-name">跟进记录</label>',
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
    $('.icon-message').click(function(){
        var type = $(this).parents('tr').data('type');
        var dialog ;
        if(type == 'openAccount'){
            dialog = new Dialog(null,{
                title: '开户进度',
                content: contentHtml1,
                hasBtn: true,
                width: 480,
                confirm: function (dialog) {
                    dialog.hide();
                },
                afterShow: function () {
                    $('.btn-wrap').find('.btn-cancel').hide();
                }
            });
        }else if (type == 'moneyMessage'){
            dialog = new Dialog(null,{
                title: '大额出入金流水',
                content: contentHtml2,
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
        }else if (type == 'birthMessage'){
            dialog = new Dialog(null,{
                title: '生日客户名单',
                content: contentHtml3,
                hasBtn: true,
                width: 645,
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
        }else if (type == 'openAccount'){
            dialog = new Dialog(null,{
                title: '新开户信息',
                content: contentHtml4,
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
        }else if (type == 'appointMessage'){
            dialog = new Dialog(null,{
                title: '预约注册信息',
                content: contentHtml5,
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
        dialog.show();
    })
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
  $('body').on('click','.small-table tbody .attr-panl a',function(){
    if($(this).hasClass('current')){
      $(this).removeClass('current');
    }else {
      $(this).addClass('current');
    }
  })
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
  $('body').on('click','.small-table thead .attr-panl a',function(){
    if($(this).hasClass('current')){
      $(this).removeClass('current');
      $('.small-table tbody .attr-panl a').removeClass('current');
    }else {
      $(this).addClass('current');
      $('.small-table tbody .attr-panl a').addClass('current');
    }
  })
}
