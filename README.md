# GitHub Actions console chunking issue

Demonstrates an issue that GitHub Action logs in frontend are only shown after the process has printed a new line. If there are applications which don't print them and only a long stream of characters e.g. it will result in such a mode until the process has exited:

![image](https://user-images.githubusercontent.com/17984549/92933161-30b0c280-f446-11ea-9274-6df5c147cb34.png)
