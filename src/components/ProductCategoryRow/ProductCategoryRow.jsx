function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" style={{ textAlign: "center" }}>
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;
