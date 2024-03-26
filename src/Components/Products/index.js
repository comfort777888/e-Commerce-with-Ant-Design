import { useEffect, useState } from "react";
import { getAllProducts } from "../../API";
import { Card, Image, List } from "antd";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);

  return (
    <div>
      <List
        grid={{ column: 3 }}
        renderItem={(product, index) => {
          return (
            <Card
              title={product.title}
              key={index}
              cover={
                <Image className="itemCardImage" src={product.thumbnail} />
              }
            ></Card>
          );
        }}
        dataSource={items}
      ></List>
    </div>
  );
}

export default Products;
