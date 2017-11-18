# EditVisualNovel

## Purpose of project

That project will help user to easier to edit file script like:
Link demo: https://minhthuan274.github.io/edit-visual-novel/
But it doesn't aware what language right 100% so after edit we must use https://text-compare.com/ to check
```sh
@action
-message id="孫子"
I was actually just looking for some new
medicine&. I was looking at the newest health
products in the new Amasson catalog&.&.&.

Mình vừa mới tìm thấy vài loại thuốc mới&.&.&.
lúc đang xem cuốn catalô mới ra của Amasson&.
```

to be

```sh 
@action
-message id="孫子"
Mình vừa mới tìm thấy vài loại thuốc mới&.&.&.
lúc đang xem cuốn catalô mới ra của Amasson&.
```

This project is using Angular 5, Franc, ... Make edit file script VNs more faster, the life more confident.

#Remove blank line
That feature I found when I did the edit tool, The issue after use edit tool that has one line blank before script like
```sh
@action
-message id="孫子"

Mình vừa mới tìm thấy vài loại thuốc mới&.&.&.
lúc đang xem cuốn catalô mới ra của Amasson&.
```
So I just created button can remove line blank like that.

## How I do 
1. First I split each the sentence and modify it without '/@\' or some work is japanese or vietnamese
2. Finally check it the english with point >= 0.9999999999 
3. If true remove that sentence

