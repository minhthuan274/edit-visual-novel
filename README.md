# EditVisualNovel


## Purpose of project

That project will help user to easier to edit file script like:

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

## How I do 
First I split each the sentence and modify it without '/@\' or some work is japanese or vietnamese
Finally check it the english with point >= 0.9999999999 
If true remove that sentence

