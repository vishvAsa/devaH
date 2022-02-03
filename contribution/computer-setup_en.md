+++
title = "Computer setup (en)"
+++

संस्कृतेन सूचना द्रष्टुम् [अत्र गम्यताम्](../computer-setup_sa/) ।

## Common setup
- Below, replace _'XYZ'_ with your github username.
  - Or use this machine: <input id="input_githubUserId"></input><button id="transformId">Replace</button>
- If https://github.com/XYZ/devaH exists beforehand, please delete it by going to settings using your browser.
- Go to https://github.com/vishvAsa/devaH and fork (there should be a Fork button in the top-right). Thence, you will get https://github.com/XYZ/devaH .

## Going to the right place in your computer
- We'll assume that you're saving all github files in some location such as the ones used below.
- Please open terminal/ command-prompt in your computer.
  - In Windows, do something like: `cd F:\Git\`
  - In linux, do something like: `cd ~` .

## Getting the files
- Having followed "Going to the right place in your computer", doe the below

```
git clone --single-branch --depth 1 --branch master https://github.com/XYZ/devaH.git devaH-master
cd devaH-master
git remote add upstream https://github.com/vishvAsa/devaH.git
git submodule update --init  themes/sanskrit-documentation-theme-hugo
cd ..

git clone --single-branch --depth 1 --branch content https://github.com/XYZ/devaH.git devaH-content
cd devaH-content
git remote add upstream https://github.com/vishvAsa/devaH.git
git pull upstream content
cd ..

git clone --single-branch --depth 1 --branch static_files https://github.com/XYZ/devaH.git devaH-static
cd devaH-static
git remote add upstream https://github.com/vishvAsa/devaH.git
git pull upstream static_files
cd ..
```

## Running hugo
- Having followed "Going to the right place in your computer", and having retrieved the files as described above,
- do the below to run `hugo` to build the website on your computer (so that you can verify that everything appears as it should).

```
cd devaH-master
git pull upstream master
cd themes/sanskrit-documentation-theme-hugo/
git pull origin master
cd ../.. 
hugo server --renderToDisk --config ./config_dev.toml
```

## Submitting file changes
- If you're chaning files in `devaH-content` :
  - Make sure that you're working on the latest files by running: `git pull upstream content` .
  - Then, commit and push your changes (using atom editor, or github desktop or commands like `git commit -am "Some message"` and `git push`).
  - Then go to https://github.com/XYZ/devaH/tree/content and send a pull request .
- If you're changing files in `devaH-static` :
  - Make sure that you're working on the latest files by running: `git pull upstream static_files` .
  - Then, commit and push your changes (using atom editor, or github desktop or commands like `git commit -am "Some message"` and `git push`).
  - Then go to https://github.com/XYZ/devaH/tree/static_files and send a pull request .

<script>
module_ui_lib.default.replaceWithQueryParam("githubUserId", /XYZ(?=[^'’])/g);

document.getElementById("transformId").onclick = function(e) {
  let userId = document.getElementById("input_githubUserId").value;
  console.log(userId);
  module_ui_lib.default.insertQueryParam("githubUserId", userId);
};
</script>