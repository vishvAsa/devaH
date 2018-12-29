

$(document).ready(function(){
  let titleAutocompleteMap = new Map();
  $.ajax({
    type: "GET",
    url: autocompletePageUrl,
    dataType: "text",
    success: function(response) {
      var options={"separator" : "\t"};
      pageList = $.csv.toObjects(response, options);
      for (var pageObject of pageList) {
        let autocompleteText = `${pageObject.index} ${pageObject.title}`;
        titleAutocompleteMap.set(autocompleteText, pageObject);
      }
      // console.log(titleAutocompleteMap.keys());
      $("#pageSearchInputBox").autocomplete({
        source: Array.from(titleAutocompleteMap.keys())
      });
    }
  });
  $("#pageSearchInputBox").change(function loadPage() {
    let pageSelected = $("#pageSearchInputBox").val();
    if (pageSelected == "") {
      return;
    }
    let pageDetails = titleAutocompleteMap.get(pageSelected);
    // console.debug(pageDetails);
    if (pageDetails) {
      console.debug(getContextSensitivePageLink(pageDetails.index));
      // return;
      window.location = getContextSensitivePageLink(pageDetails.index);
    }
  }
);
});
