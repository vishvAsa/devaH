// Process includes of the form:
// <div class="js_include" url="index.md"/>
$( document ).ready(function() {
    var includeHandlerWorker = new Worker('includeHandlerWorker.js');

    $('.js_include').each(function() {
        console.debug("Inserting include for " + $(this).html());
        var jsIncludeJqueryElement = $(this);
        // The actual filling happens in a separate thread!
        fillJsInclude(jsIncludeJqueryElement);
    }))
    includeHandlerWorker.onmessage(function(e) {
      var jsIncludeJqueryElement = e.data[0];
      jsIncludeJqueryElement.html(e.data[1]);
      // TODO: The following calls lead to major UI delays and problems on pages such as saMskAra/mantra/sangrahah/paravastu-saama/udakashanti/#. Must use worker instead.
      fillAudioEmbeds();
      fillVideoEmbeds();
      updateToc();
    });
});
