import React from 'react';

// const arr = [
//     { productImg: "./images/1.png" },
//     { productImg: "./images/2.webp" },
//     { productImg: "./images/3.webp" },
//     { productImg: "./images/4.webp" },
//     { productImg: "./images/5.webp" },
//     { productImg: "./images/6.webp" },
//     { productImg: "./images/7.webp" },
//     { productImg: "./images/8.png" },
//   ];


export default async function Product() {
    let data = await fetch ('https://fakestoreapi.com/products');
    let posts = await data.json() //3lshan y7wlhalk json = object badl mhya ml8bta kda
    console.log(posts);

  return (
    <section className="products flex">
          {posts.map( item => {
            {/* title de 3lshan lma t hover 3la el article yzhr resala keda 5argya */}
            return (
              <article title={item.title} key={item.image} className="card">{/* title de 3lshan lma t hover 3la el article yzhr resala keda 5argya */}
                <a href="/pages/product-details.html">
                  <img width={266} height={300} src={item.image} alt=""  />
                </a>
                <div style={{ width: "266px" }} className="content">
                  <h1 className="title">{item.title.slice(0,15)}..</h1>jj
                  {/* ana 3mlt keda fel title 3lshan kan kber fa byboz el divat awi fa 5at mno awl 15 7rf */}
                  <p className="description">{item.description.slice(0,100)}..</p>
                  <div className="flex" style={{ justifyContent: "space-between", paddingBottom: "0.7rem",}}>
                    <div className="price">${item.price}</div>
                    <button className="add-to-cart flex">
                      <i className="fa-solid fa-cart-plus" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
  )
}
