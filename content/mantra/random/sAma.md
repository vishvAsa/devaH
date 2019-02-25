---
title: सामसु
unicode_script: devanagari
emphasis_as_inline_comments: true
---

<script>
function getSelectionWeight(url) {
  if (!url.startsWith("/mantra/") || !url.includes("/paravastu-saama/") || url.includes("/sangraha/") || url.includes("/meta/")) {
    return 0;
  }
  let pageParams = pageUrlToParams[url];
  if (!pageParams || !pageParams.hasOwnProperty("practice_weight")) {
    return 1;
  }
  return pageParams.practice_weight;
}

redirectToRandomPage(getSelectionWeight);
</script>