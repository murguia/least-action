function question(sNum, sText) {
    document.writeln("<table width=100% border=0 cellspacing=2 cellpadding=2>");
	document.writeln("<tr>");
	document.writeln("<td width=10% align=right valign=top><b>"+sNum+"</b></td>");
	document.writeln("<td valign=top><p><b>"+sText+"<br><br>"+"</b></p></td>");
	document.writeln("</tr>");
	document.writeln("</table>");
}

function technicalQuestion(sNum, sText) {
    document.writeln("<table width=100% border=0 cellspacing=2 cellpadding=2>");
	document.writeln("<tr>");
	document.writeln("<td width=30% align=right valign=top><b>"+sNum+"</b></td>");
	document.writeln("<td valign=top><p><b>"+sText+"<br><br>"+"</b></p></td>");
	document.writeln("</tr>");
	document.writeln("</table>");
}

function technicalQuestionIntro(sNum, sText) {
    document.writeln("<table width=100% border=0 cellspacing=2 cellpadding=2>");
	document.writeln("<tr>");
	document.writeln("<td width=30% align=right valign=top><b>"+sNum+"</b></td>");
	document.writeln("<td valign=top><p><b><i>"+sText+"<br><br>"+"</i></b></p></td>");
	document.writeln("</tr>");
	document.writeln("</table>");
}
