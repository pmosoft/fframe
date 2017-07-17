/**
 * 사용자 등록, 보기
 */
Ext.define('fframe.view.syst.user.UserRegView', {
    extend: 'Ext.window.Window',
    xtype: 'UserRegView',
    controller: 'UserRegView',
    viewModel: 'UserRegView',    
    title : '사용자 등록',
    
    frame: true,
    width: 400,
    bodyPadding: 10,
    layout: 'form',
    
    //자동으로 띄워주는옵션 
    autoShow : true, 
    //닫기버튼표출여부 
    closable : true, 
    //최대화면버튼표출여부 
    maximizable : true, 
    //모달창 옵션(true/false) 
    //false일경우 단순 레이어 팝 //true일 경우 뒷단에 있는 버튼등 적용 불
    modal:true, 
    //리사이즈 가능옵션(true/false) 
    resizable : true, 
    //타이틀 위치 정렬 : left,center,right 
    titleAlign : 'center', 
    
    buttonAlign:'center',
    
    items: [{
        xtype: 'textfield',
        name: 'USER_EMAIL',
        fieldLabel: '이메일',
    },{
        xtype: 'textfield',
        name: 'USER_PW',
        inputType: 'password', 
        fieldLabel: '비밀번호'
    },{
        xtype: 'textfield',
        name: 'USER_PW2',
        inputType: 'password', 
        fieldLabel: '비밀번호 확인'
    },{
        xtype: 'textfield',
        name: 'USER_NM',
        fieldLabel: '성명'
    }, {
        xtype: 'numberfield',
        name: 'USER_AGE',
        fieldLabel: '나이',
        value: 30,
        minValue: 0,
        maxValue: 100
    }, {
        xtype: 'checkboxfield',
        name: 'USE_YN',
        fieldLabel: '사용여부',
        boxLabel: '',
        checked: true
    }, {
        xtype: 'hiddenfield',
        name: 'REG_DT',
        fieldLabel: '등록일시',
        value: '<span style="color:green;"></span>'
    }, {
        xtype: 'hiddenfield',
        name: 'REG_USER',
        fieldLabel: '등록자',
        value: '<span style="color:green;"></span>'
    }, {
        xtype: 'displayfield',
        name: 'UPD_DT',
        fieldLabel: '변경일시',
        value: '<span style="color:green;">2017.07.03 16:40:20</span>'
    }, {
        xtype: 'displayfield',
        name: 'UPD_USER',
        fieldLabel: '변경자',
        value: '<span style="color:green;">admin</span>'
    }],
    buttons: [{
        text: '초기화',
		handler : 'initBtn'
    }, {
        text: '저장',
		handler : 'saveBtn'
    }, {
        text: '삭제',
		handler : 'delBtn'
    }, {
        text: '닫기',
		handler : 'closeBtn'
    }]    
});