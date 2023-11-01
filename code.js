

//* you can make json api data from any website using these lines of code
//* Run the below code on the console tab of chrome dev tool on the website
//* the below variables and classes are demo
//* classNames and variable names are changable according to website

const blogs = document.querySelectorAll('.cb-blog-style-a')

let blogsJson = []

blogs.forEach((blog)=>{
  //* just hover and inspect on the element of the website that you want data from
  const blogImg = blog.querySelector('.cb-mask img')?.src
  const blogDetail = blog.querySelector('.cb-excerpt')?.textContent
  const blogTitle = blog.querySelector('.h4 a')?.textContent
  const blogAuthor = blog.querySelector('.author')?.textContent
  const blogUpdateTime = blog.querySelector('.updated')?.textContent

  blogsJson.push({blogImg, blogDetail, blogTitle, blogAuthor, blogUpdateTime })
})

//* blogJson would be the collection of JSON data from that particular website
console.log(blogsJson)