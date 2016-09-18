$(function () {
    changePwd();
    changeName();
    changePhone();
    changeEmail();
    changeAddress();
});
function changePwd() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">原密码</label>',
        '<input type="text"id="old_pwd"placeholder="原密码">',
        '</div>',
        '<div class="form-group">',
        '<label for="level" class="label">新密码</label>',
        '<input type="text"id="new_pwd"placeholder="使用6-16数字、字母组合">',
        '</div>',
        '<div class="form-group">',
        '<label for="code" class="label">确认密码</label>',
        '<input type="text"id="sure_pwd"placeholder="确认密码">',
        '</div>'].join('');

    $('#change-pwd').dialog({
        title: '修改密码',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}

function changeName() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">新登录名</label>',
        '<input type="text"id="name"placeholder="使用数字、字母组合">',
        '</div>',
        '<div class="form-group">',
        '<label for="code" class="label">验证密码</label>',
        '<input type="text"id="code"placeholder="输入密码">',
        '</div>'].join('');
    $('#change-name').dialog({
        title: '修改登录名',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}
function changePhone() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">新手机</label>',
        '<input type="text"id="name"placeholder="输入新手机号">',
        '</div>',
        '<div class="form-group is-rela">',
        '<label for="code" class="label">验证原手机</label>',
        '<input type="text"id="code"placeholder="输入验证码">',
        '<div class="get-code">获取验证码</div>',
        '</div>'].join('');
    $('#change-phone').dialog({
        title: '修改手机',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}

function changeEmail() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group">',
        '<label for="level" class="label">邮箱</label>',
        '<input type="text"id="name"placeholder="输入新邮箱">',
        '</div>',
        '</div>'].join('');
    $('#change-email').dialog({
        title: '修改邮箱',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}
function changeAddress() {
    var contentHtml = ['<div class="form form-add">',
        '<div class="form-group textarea-group">',
        '<label for="level" class="label">地址</label>',
        '<textarea type="text"placeholder="杭州市庆春路兴业银行大厦"></textarea>',
        '</div>',
        '</div>'].join('');
    $('#change-address').dialog({
        title: '修改地址',
        content: contentHtml,
        hasBtn: true,
        width: 480,
        confirm: function (dialog) {
            dialog.hide();
        },
        afterShow: function () {
            $('.btn-wrap').find('.btn-cancel').hide();
        }
    });
}