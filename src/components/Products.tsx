import Product, { ProductBackground } from "./Product";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile"

const Products = () => {
  return (
    <TileWrapper numOfPages={2}>
      <TileBackground>
        <ProductBackground />
      </TileBackground>
        <TileContent>
          <Tile page={0} renderContent={(progress) => 
            <Product 
              progress={progress} 
              page={0}
              header="Sales Activity"
              text="Az új értékesítési platform."
              href="https://aocsystem.com/#/products/sales-activity"
              bgColor="bg-aocSky"
              textColor="text-aocDark"
              image="sales-activity"
            />
          }/>
        
        <Tile page={1} renderContent={(progress) => 
          <Product 
            progress={progress} 
            page={1}
            header="Business & Office"
            text="Átlátható pénzügyi és könyvelési folyamatok!"
            href="#"
            bgColor="bg-aocOrange"
            textColor="text-aocDark"
            image="business-and-office"
          />
        }/>
      </TileContent>
    </TileWrapper>
  )
}

export default Products;
