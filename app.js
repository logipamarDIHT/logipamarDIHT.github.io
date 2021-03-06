
function addLi(taskList, text) {
	var newLi = taskList.append("<li></li>").find('li').last();
	newLi.append("<span>" + text + "</span>");
	newLi.append("&nbsp;");
	
	var newButton = $("<button class='clear'>").text("Удалить").click(function() {
		$(this).parent().remove();
	});
	
	newLi.append(newButton);
}

$(document).ready(function() {
	var taskList = $("#root").append('<ul></ul>').find('ul');
	addLi(taskList, "Сделать задание #3 по web-программированию");
	
	$("#root").append("<input type='text' id='add_task_input'></input>");
	$("#root").append("&nbsp;");
	$("#root").append("<input type='button' id='add_task' value='Добавить'></input>");
	
	$("#add_task").click(function() {
		var formText = $("#add_task_input").val();
		addLi(taskList, formText);
	});
});