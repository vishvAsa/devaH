---
title: मन्त्रेषु
unicode_script: devanagari
emphasis_as_inline_comments: true
---
<script>
function getSelectionWeight(url) {
  if (!url.startsWith("/mantra/") || url.includes("/sangrahAH/") || url.includes("/meta/")) {
    return 0;
  }
  let pageParams = pageUrlToParams.get(url);
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

redirectToRandomPage(getSelectionWeight);
</script>