import React from "react";
import '../styles/Products.scss'

function Products() {

    const products = <div className="productsView">
                        <div className="row">
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="jordan1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">5 000 ₽</p>
                                    <p className="productTitle">Jordan 4</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>40</option>
                                            <option>42</option>
                                            <option>43</option>
                                            <option>45</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="burb1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">3 000 ₽</p>
                                    <p className="productTitle">Burberry Футболка</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="polo1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">4 000 ₽</p>
                                    <p className="productTitle">Polo Кофта</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="polo2.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">4 000 ₽</p>
                                    <p className="productTitle">Polo Кофта</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="stussy1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">4 000 ₽</p>
                                    <p className="productTitle">Stussy Худи</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="tnf1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">8 000 ₽</p>
                                    <p className="productTitle">The North Face Куртка</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="trap1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">5 000 ₽</p>
                                    <p className="productTitle">Trapstar Жилетка</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                            <div className="imgHolder"><img className="productImg" src="prada1.png"/></div>
                                <div className="productDesc">
                                    <p className="productPrice">4 000 ₽</p>
                                    <p className="productTitle">Prada Куртка</p>
                                    <div className="productOper">
                                        <select className="productSize">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <div className="fill button">в корзину</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    return <div className="App">
            <a className="productsTitle" href="/">BYStore</a>
                {products}
        </div>
}

export default Products;