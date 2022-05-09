import React from 'react';
import Product from "./components/Product";
import Button from "./components/Button";
import Tiles from "./components/Tiles";
import bagOne from './assets/bag_1.png'
import bagTwo from './assets/bag_2.png'
import bagThree from './assets/bag_3.png'
import bagFour from './assets/bag_4.png'
import brand from './assets/brand.png'
import story from './assets/our_story.png'
import './App.css';


function App() {


  return (
      <>
        <h1>Handbags & Purses</h1>


          <nav>
              <Button
                  type="button"
                  description="to the collection"

                  disabled={false}
              />

              <Button
                  type="button"
                  description="shop all bags"

                  disabled={false}
              />
              <Button
                  type="button"
                  description="pre-orders"

                  disabled={true}

             />
          </nav>

              <main>
                  <Product
                  image={bagOne}
                  highlightText="Best seller"
                  title="The handy bag"
                  description="The handy bag"
                  price="€400,-"
                  />
                  <Product
                      image={bagTwo}
                      highlightText="Best seller"
                      title="The stylish bag"
                      description="The stylish bag"
                      price="€250,-"
                  />
                  <Product

                      image={bagThree}
                      highlightText="New collection"
                      title="The simple bag"
                      description="The simple bag"
                      price="€300,-"

                  />
                  <Product
                      image={bagFour}
                      highlightText="New collection"
                      title="The trendy bag"
                      description="The trendy bag"
                      price="€150,-"
                  />

              </main>
              <footer>
                  <Tiles
                      headline="THE BRAND"

                  >
                      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur culpa eius eligendi ex harum ipsum maiores, nesciunt quis rem, unde vel voluptatem?"
                          </p>
                      <p>
                          "Aliquid amet animi architecto aut doloribus et eum iusto neque officia quam ratione repudiandae, rerum unde veniam voluptatibus."</p>

                  </Tiles>

                  <Tiles
                      image={brand}
                  />

                  <Tiles
                      image={story}
                  />
                  <Tiles
                      headline="THE STORY"
                      >
                      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus ad autem cumque dolor eos labore odit quisquam veniam veritatis voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Accusamus"</p>

                      </Tiles>
              </footer>


      </>
  );
}

export default App;



