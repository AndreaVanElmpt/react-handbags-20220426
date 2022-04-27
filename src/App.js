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
                  setDescription="To the collection"
                  disabled={false}
              />

              <Button
                  type="button"
                  description="shop all bags"
                  setDescription="Shop all bags"
                  disabled={false}
              />
              <Button
                  type="button"
                  description="pre-orders"
                  setDescription="Pre-orders"
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
                      descriptionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus ad autem cumque dolor eos labore odit quisquam veniam veritatis voluptate."
                      descriptionTextTwo="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus ad autem cumque dolor eos labore odit quisquam veniam veritatis voluptate."                  />
                  <Tiles
                      image={brand}
                  />
                  <Tiles
                      image={story}
                  />
                  <Tiles
                      headline="THE STORY"
                      descriptionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus ad autem cumque dolor eos labore odit quisquam veniam veritatis voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus
                                    "
                  />
              </footer>


      </>
  );
}

export default App;



