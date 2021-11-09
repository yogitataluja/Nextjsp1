import Navbar from "../components/Navbar";
import Head from "next/head"
import axios from "axios";
import React, { useEffect, useState } from "react";
import {API} from "../components/API"
import Link from "next/link";
import moment from "moment";

const index = () => {

  // const { category } = useParams();
  const [products, setProducts] = useState(null)
  let subCategory = [];

  useEffect(() => {
    async function getProduct() {
      const productList = await axios.get(`${API}/api/product/all`);
        setProducts(productList.data.product);
    }
    getProduct();
  }, []);

return(
  <>
  <Head>
  <title>product</title>
  <meta charSet="UTF-8"/>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="Next.js, React.js"/>
  <meta name="author" content="yogita"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <Navbar/>
   {/* <Navigation active={category}/> */}
      <div className="container">
        <div className="row">
          {/* <Categoryfilter setProducts={setProducts} isCategory={true} /> */}
          <div class="col-lg-9 col-12">
            <div class="kalles-section tp_se_cdt">
              {/* <!--products list--> */}
              <div class="on_list_view_false products nt_products_holder row fl_center row_pr_1 cdt_des_1 round_cd_false nt_cover ratio_nt position_8 space_30 nt_default">
{products!=null?
<>
                {products.length > 0 ? (
                  products.map((item, index) => {
                    return (
                      <div
                        key={index}
                        class="col-lg-3 col-md-3 col-6 pr_animated done mt__30 pr_grid_item product nt_pr desgin__1"
                      >
                        <div class="product-inner pr">
                          <div class="product-image pr oh lazyload">
                            <span class="tc nt_labels pa pe_none cw">
                              {/* <span class="nt_label new">New</span> */}
                            </span>
                            <a
                              class="d-block"
                              href={`/${item._id}`}
                            >
                              <div
                                class="pr_lazy_img main-img nt_img_ratio nt_bg_lz lazyload padding-top__127_571"
                                data-bgset={item.featuredImage}
                              ></div>
                            </a>
                            <div class="hover_img pa pe_none t__0 l__0 r__0 b__0 op__0">
                              <div
                                class="pr_lazy_img back-img pa nt_bg_lz lazyload padding-top__127_571"
                                data-bgset={item.featuredImage}
                              ></div>
                            </div>
                            <div class="nt_add_w ts__03 pa ">
                              <a
                                href="#"
                                class="wishlistadd cb chp ttip_nt tooltip_right"
                              >
                                <span class="tt_txt">Add to Wishlist</span>
                                <i class="facl facl-heart-o"></i>
                              </a>
                            </div>
                            {/* <div class="hover_button op__0 tc pa flex column ts__03"> */}
                              {/* <a
                                class="pr nt_add_qv js_add_qv cd br__40 pl__25 pr__25 bgw tc dib ttip_nt tooltip_top_left"
                                href="#"
                              >
                                <span class="tt_txt">Quick view</span>
                                <i class="iccl iccl-eye"></i>
                                <span>Quick view</span>
                              </a> */}
                              {/* <a
                                href="#"
                                class="pr pr_atc cd br__40 bgw tc dib js__qs cb chp ttip_nt tooltip_top_left"
                              >
                                <span class="tt_txt">Quick Shop</span>
                                <i class="iccl iccl-cart"></i>
                                <span>Quick Shop</span>
                              </a>
                            </div> */}
                          </div>
                          <div class="product-info mt__15">
                            <h3 class="product-title pr fs__14 mg__0 fwm">
                              <a
                                class="cd chp"
                                href={`/${item._id}`}
                              >
                                {item.title}
                              </a>
                            </h3>
                            <span class="price dib mb__5">
                              Rs. {item.sale_price}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 style={{ marginTop: "5rem" }}>No Product Found</h1>
                )}
                </>
                :
                <h3 style={{ marginTop: "5rem" }}>Loading...</h3>
}
              </div>
            </div>
            <div class="products-footer tc mt__40">
              <nav class="nt-pagination w__100 tc paginate_ajax">
                <ul class="pagination-page page-numbers">
                  <li>
                    <span class="page-numbers current">1</span>
                  </li>
                  <li>
                    <a class="page-numbers" href="#">
                      2
                    </a>
                  </li>
                  <li>
                    <a class="page-numbers" href="#">
                      3
                    </a>
                  </li>
                  <li>
                    <a class="page-numbers" href="#">
                      4
                    </a>
                  </li>
                  <li>
                    <a class="next page-numbers" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
  </>
)
}

export default index;
