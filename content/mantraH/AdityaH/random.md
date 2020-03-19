---
title: अन्धचितिः
unicode_script: devanagari

---

<div name="manualRedirectionDiv"/>

<script>
function getSelectionWeight(url) {
  var cleanedUrl = url.replace("//", "/");
  let pageParams = module_dir_tree.getPageParams(cleanedUrl);
  if (!cleanedUrl.startsWith("/mantraH/AdityaH/") || cleanedUrl.includes("/sangrahAH/") || cleanedUrl.includes("/meta/") || pageParams.logicalName == "_index.md") {
    return 0;
  }
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

module_main.default.redirectToRandomPage(getSelectionWeight, document.getElementsByName("manualRedirectionDiv"));
</script>