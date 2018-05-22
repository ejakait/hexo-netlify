
module.exports = (dato, root, i18n) => {

    // inside a "src/articles" directory...
    root.directory("source/_posts", (postsDir) => {
  
      // ...iterate over the "Blog post" records...
      dato.posts.forEach((post) => {
  
        // ...and create a markdown file for each article!
        postsDir.createPost(
          `${post.title}.md`, "yaml", {
            frontmatter: { 
              title: post.title, 
              date : post.date,
              coverimage: post.cover_image,
            },
            content: post.body
          }
        );
      });
    });
  };