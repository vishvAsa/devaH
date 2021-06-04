+++
title = "Computer setup"
unicode_script = "devanagari"
+++

## समानं कर्म
- अधः XYZ इति यद् अस्ति, तस्य स्थाने स्वीयं github-नाम प्रयुङ्क्ताम्।
- https://github.com/XYZ/saMskAra इति पूर्वम् एव वर्तते चेन् निष्कासयतु browser-उपयोगेन।
- https://github.com/vvasuki/saMskAra इत्यत्र गत्वा पुनः fork इति करोतु। https://github.com/XYZ/saMskAra इति किञ्चिल् लभ्यते।

## Windows setup

ततः (`F:\Git` इति यथापेक्षं परिवर्त्य)-

```
cd F:\Git\

git clone --single-branch --depth 1 --branch content https://github.com/XYZ/saMskAra.git saMskAra-content
git clone --single-branch --depth 1 --branch master https://github.com/XYZ/saMskAra.git saMskAra-master


cd f:\Git\saMskAra-content
git remote add upstream https://github.com/vvasuki/saMskAra.git
git pull upstream content

rmdir /S F:\Git\saMskAra-master\content
rmdir /S F:\Git\saMskAra-master\static
mklink /h F:\Git\saMskAra-master\content F:\Git\saMskAra-content
mklink /h F:\Git\saMskAra-master\static F:\Git\saMskAra-static
```

## Linux setup
```
cd ~

git clone --single-branch --depth 1 --branch content https://github.com/XYZ/saMskAra.git saMskAra-content
git clone --single-branch --depth 1 --branch master https://github.com/XYZ/saMskAra.git saMskAra-master


cd ~/git_projects/saMskAra-content
git remote add upstream https://github.com/vvasuki/saMskAra.git
git pull upstream content

rm -rf ~/git_projects/saMskAra-master/content
ln -s ~/git_projects/saMskAra-content ~/git_projects/saMskAra-master/content 
```

## सञ्चिकासु प्राप्तेषु सत्सु कार्यम्
```
- यदि कार्यम् saMskAra-content इत्यस्मिन् क्रियते
    - `git pull upstream content` इति परिवर्तनानि लभ्यानि।
    - ततो नुदित्वाकर्षणाभ्यर्थनं https://github.com/XYZ/saMskAra/tree/content इत्यत्र गत्वा प्रेषणीयम्।
- यदि कार्यम् saMskAra-static इत्यस्मिन् क्रियते
    - `git pull upstream static_files` इति परिवर्तनानि लभ्यानि।
    - ततो नुदित्वाकर्षणाभ्यर्थनं https://github.com/XYZ/saMskAra/tree/static इत्यत्र गत्वा प्रेषणीयम्।
```