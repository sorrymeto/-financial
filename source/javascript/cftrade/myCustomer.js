$(function () {
    $('#staff_list').diySelect();
    $('#model_list').diySelect();
    var data_json1 = [["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部','2014-12-20','2014-12-11','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部9','2014-12-19','2014-12-12','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部8','2014-12-18','2014-12-13','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部7','2014-12-17','2014-12-14','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部6','2014-12-16','2014-12-15','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部5','2014-12-15','2014-12-16','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部4','2014-12-14','2014-12-17','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部3','2014-12-13','2014-12-18','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部2','2014-12-12','2014-12-19','2014-12-18','查看'],
        ["610000173488","方立方",'135****9909','二维码一','万2.5渠道','杭州营业部1','2014-12-11','2014-12-20','2014-12-18','查看'],
    ];
    var data_json = data_json1;
    $(".select-upordown").click(function () {
        data_json = data_json1;
        var index = $(this).index();
        var temp;
        if($(this).hasClass("down")){
            for (var i = 0; i < data_json.length; i ++ ){
                for( var j = i + 1; j < data_json.length;j ++ ){
                    if(data_json[i][index] > data_json[j][index] ){
                        temp = data_json[i];
                        data_json[i] = data_json[j];
                        data_json[j] = temp;
                    }
                }
            }
            $(this).parent().find(".up").removeClass("up");
            $(this).parent().find(".down").removeClass("down");
            $(this).addClass("up");
        }else {
            for (var i = 0; i < data_json.length; i ++ ){
                for( var j = i + 1; j < data_json.length;j ++ ){
                    if(data_json[i][index] < data_json[j][index] ){
                        temp = data_json[i];
                        data_json[i] = data_json[j];
                        data_json[j] = temp;
                    }
                }
            }
            $(this).parent().find(".up").removeClass("up");
            $(this).parent().find(".down").removeClass("down");
            $(this).addClass("down");
        }
        for( var i = 0;i < data_json.length;i ++){
            for (var j = 0; j < data_json[i].length; j ++ ){
                    if($(".data-table").find("tbody").find("tr").eq(i).find("td").eq(j).find(".text-blue").length > 0){
                        $(".data-table").find("tbody").find("tr").eq(i).find("td").eq(j).find(".text-blue").text(data_json[i][j])
                    }else {
                        $(".data-table").find("tbody").find("tr").eq(i).find("td").eq(j).text(data_json[i][j]);
                    }
            }
        }
    })
});