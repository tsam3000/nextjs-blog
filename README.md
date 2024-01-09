This is a starter template for [Learn Next.js](https://nextjs.org/learn).

In order to parse the markdown files (the metadate which is between the 
'---' symbols) in the top level posts directory (which simulates fetching
posts from an api for instance), we installed an opensource library called
gray matter with:
    $npm i gray-matter
The magic is done in lib/posts.js

In order to render markdown we used remark
    $npm i remark remark-html

In order to format date on posts we used date-fns
    $npm i date-fns

# git and github setup
1. Add the repo on github. Here we created the nextjs-blog repo

2. From the root of the project (this points the project to the repo)
    $git remote add origin https://github.com/tsam3000/nextjs-blog.git

3. Push the project to the repo
    $git push -u origin main
