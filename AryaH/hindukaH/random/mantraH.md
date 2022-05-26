---
title: मन्त्रेषु
unicode_script: devanagari

---

<div name="manualRedirectionDiv"/>

<script>
function getSelectionWeight(url) {
  var cleanedUrl = url.replace("//", "/");
  let pageParams = module_uiLib.default.content.getPageParams(cleanedUrl);
  if ( ! cleanedUrl.includes("/hindukaH/")  || cleanedUrl.includes("/meta/")  || cleanedUrl.includes("/images/")|| pageParams.logicalName == "_index.md") {
    return 0;
  }
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

module_uiLib.default.navigation.redirectToRandomPage(getSelectionWeight, document.getElementsByName("manualRedirectionDiv"), false);
</script>