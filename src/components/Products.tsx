import Product from "./Product";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile"

const Products = () => {
  return (
    <TileWrapper numOfPages={2}>
      <TileBackground></TileBackground>
      <TileContent>
        <Tile page={0} renderContent={() => 
          <Product
            header="Sales activity" 
            text="Az új értékesítési platform"
            buttonHref="#"
            buttonBgColor="aocSky"
            imageSrc="sales-activity.svg"
            />
          }/>
        <Tile page={1} renderContent={() => 
          <Product 
            header="Business & Office" 
            text="Stabil alapokra építve fejlődsz"
            buttonHref="#"
            buttonBgColor="aocOrange"
            imageSrc="business-and-office.svg"
          />
        }/>
      </TileContent>
    </TileWrapper>
  )
}

export default Products;
