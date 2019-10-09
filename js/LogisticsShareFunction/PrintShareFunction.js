function getPrintFormData(data) {
	var name = "";
	$("#ff input[name]").each(function(index) {
		name = $(this).attr("name");
		$(this).val(data[name]);
	})
}