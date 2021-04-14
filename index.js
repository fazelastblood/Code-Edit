function update() {
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(`<!DOCTYPE html>
  <html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
    <!--If you want a style sheet include link tag here-->

    <style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    </style>
</head>
<body>

    <!--this is where you add all that amazing code-->
    <!--Need help? go to https://www.w3schools.com/html/default.asp-->

    <h3>My Amazing Site</h3>

</body>
</html>`,1);

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "10pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible:false,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();