import{defineConfig as t,renderStudio as e}from"sanity";import{structureTool as o}from"sanity/structure";import{visionTool as i}from"@sanity/vision";const l={name:"blog",type:"document",title:"BLOG",fields:[{name:"title",type:"string",title:"Title"},{name:"slug",type:"slug",title:"Slug",options:{source:"title"}},{name:"titleImage",type:"image",title:"CoverImage"},{name:"subtitle",type:"text",title:"Sub Title"},{name:"content",type:"array",title:"Content",of:[{type:"block"}]}]},n=[l],s=t({name:"default",title:"blog",projectId:"qifsbtqe",dataset:"production",plugins:[o(),i()],schema:{types:n}});e(document.getElementById("sanity"),s,{reactStrictMode:!1,basePath:"/"});
