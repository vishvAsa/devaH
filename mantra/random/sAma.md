---
title: सामसु
unicode_script: devanagari
emphasis_as_inline_comments: true
---

<script>
var allSidebarUrls = [];
$("#displayed_sidebar li:not(:has(ul)) a").each(function() {allSidebarUrls.push($(this).attr("href"));})
var mantraUrls = allSidebarUrls.filter(url => url.includes("/paravastu-saama/") && !url.includes("/sangrahah/"));
var randomMantraUrl = mantraUrls[Math.floor(Math.random()*mantraUrls.length)];
console.log(randomMantraUrl);
// alert(randomMantraUrl);
if (randomMantraUrl) {
  window.location.replace(randomMantraUrl);
}
</script>