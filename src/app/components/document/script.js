function compile() {
  var html = document.getElementById("html");
  var css = document.getElementById("css");
  var js = document.getElementById("js");
  var compiler = document.getElementById("compiler").contentWindow.document;

  document.body.onkeyup = function() {
    compiler.open();
    compiler.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    compiler.close();
  };
}

compile();
