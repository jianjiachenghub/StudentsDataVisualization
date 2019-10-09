var PWDDialog;

function createPWDDialog() {
	var html = $("#dlg").html();
	PWDDialog = window.$(html).appendTo(window.top.document.body);
	PWDDialog.dialog({
		modal: true,
		title: "Change Password",
		cache: true,
		closable: true,
		draggable: true,
		width: 350,
		height: 300,
	}).dialog('close');
}


