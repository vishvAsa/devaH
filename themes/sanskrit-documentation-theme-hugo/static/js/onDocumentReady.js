function setInlineComments(htmlIn) {
  return htmlIn.replace(/\+\+\+(.+?)\+\+\+/g, "<span class=\"inline_comment\">$1</span>");
}

function setInlineCommentsInPostContent() {
  // console.debug( $("#post_content").html);
  // console.log(setInlineComments($("#post_content").html()));
  $("#post_content").html(setInlineComments($("#post_content").html()));
}
$(document).ready(setInlineCommentsInPostContent);
