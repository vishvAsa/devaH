---
title: सामसु
unicode_script: devanagari
emphasis_as_inline_comments: true
---

<div name="manualRedirectionDiv"/>

<script>
function getSelectionWeight(url) {
  var cleanedUrl = url.replace("//", "/");
  if (!cleanedUrl.startsWith("/mantra/") || !cleanedUrl.includes("/paravastu-saama/") || cleanedUrl.includes("/sangrahAH/") || cleanedUrl.includes("/meta/")) {
    return 0;
  }
  let pageParams = pageUrlToParams.get(cleanedUrl);
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

redirectToRandomPage(getSelectionWeight, document.getElementsByName("manualRedirectionDiv"));
</script>