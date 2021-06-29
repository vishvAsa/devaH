+++
title = "Computer setup"
unicode_script = "devanagari"
+++

## समानं कर्म
- अधः XYZ इति यद् अस्ति, तस्य स्थाने स्वीयं github-नाम प्रयुङ्क्ताम्।
- https://github.com/XYZ/saMskAra इति पूर्वम् एव वर्तते चेन् निष्कासयतु browser-उपयोगेन।
- https://github.com/vishvAsa/saMskAra इत्यत्र गत्वा पुनः fork इति करोतु। https://github.com/XYZ/saMskAra इति किञ्चिल् लभ्यते।

## सङ्गणके समीचीनस्थानप्राप्तिः
- ततः समीचीनस्थाने terminal/ command-prompt इत्य् उद्घाट्य गच्छतु। यथा 
  - `cd F:\Git\` इति windows पक्षे
  - `cd ~` इति linux पक्षे

## सञ्चिकाप्राप्तिः
- सङ्गणके समीचीनस्थानप्राप्तिः इति भागे यद् उक्तं तत् कृत्वा

```
git clone --single-branch --depth 1 --branch master https://github.com/XYZ/saMskAra.git saMskAra-master
cd saMskAra-master
git remote add upstream https://github.com/vishvAsa/saMskAra.git
git submodule update --init  themes/sanskrit-documentation-theme-hugo
cd ..

git clone --single-branch --depth 1 --branch content https://github.com/XYZ/saMskAra.git saMskAra-content
cd saMskAra-content
git remote add upstream https://github.com/vishvAsa/saMskAra.git
git pull upstream content
cd ..
```

## hugo-चालनम्
- सङ्गणके समीचीनस्थानप्राप्तिः इति भागे यद् उक्तं तत् कृत्वा

```
cd saMskAra-master
git pull upstream master
cd themes/sanskrit-documentation-theme-hugo/
git pull origin master
cd ../.. 
hugo server --renderToDisk --config ./config_dev.toml
```

## सञ्चिकासु प्राप्तासु सत्सु कार्यम्
- यदि कार्यम् saMskAra-content इत्यस्मिन् क्रियते
    - `git pull upstream content` इति परिवर्तनानि लभ्यानि।
    - ततो नुदित्वाकर्षणाभ्यर्थनं https://github.com/XYZ/devaH/tree/content इत्यत्र गत्वा प्रेषणीयम्।
