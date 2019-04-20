---
title: सामसु
unicode_script: devanagari

---

<div name="manualRedirectionDiv"/>

<script>
function getSelectionWeight(url) {
  var cleanedUrl = url.replace("//", "/");
  if (!cleanedUrl.startsWith("/mantra/") || !cleanedUrl.includes("/paravastu-saama/") || cleanedUrl.includes("/sangrahAH/") || cleanedUrl.includes("/meta/") || pageFileParams.logicalName == "_index.md") {
    return 0;
  }
  let pageParams = pageUrlToParams.get(cleanedUrl);
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

module_main.default.redirectToRandomPage(getSelectionWeight, document.getElementsByName("manualRedirectionDiv"));
</script>