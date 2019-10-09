var creatFootFactory = function (){
    this._topNumber = 1;
    this._config = [
        remarks ={
            id:'input_memo',
            text:'备注',
            class:'easyui-textbox'
        } ,
        documentMaker={
            id:'input_createrName',
            text:'制单人',
            class:'easyui-textbox'
        } ,
        auditor= {
            id:'input_auditorId',
            text:'审核人',
            class : 'easyui-textbox'
        },
        auditorDate ={
            id:'input_auditorTime',
            text:'审核日期',
            class : 'easyui-datebox'
        },
        print={
            id:'input_printCount',
            text:'打印次数',
            class:'easyui-textbox'
        }
    ]
}
creatFootFactory.prototype.creatFoot = function ()
{
    var footer_contain = "<div class = \"div_footer_contain\">"
    for(i = 0; i<  this._topNumber; i++)
    {
        var footer_topContent = "<div>" +"<span style = 'margin-right:20px'>" + this._config[i].text +"</span>" +"<input style=\"width:70%\" class=\"easyui-textbox\" id ="+ this._config[i].id +"></div>"
        footer_contain += footer_topContent;
    }
    var footer_content = "<div class =\"div_footer_content\">"
    var _this = this;
    _this._config.forEach(function(item,index){
        if(index>=_this._topNumber)
        {
            footer_content += "<div class = \"div_footer_content_item \">"+item.text+"<input id = " + item.id + " unselectable=\"on\" onfocus=\"this.blur()\" class = \"  div_footer_content_msg\"></input>"+"</div>"
        }
    })
    footer_contain  +=  footer_content +"</div>"
    $('#new_footer').append(footer_contain);
}
