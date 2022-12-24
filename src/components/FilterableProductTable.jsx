import {useState} from "react";
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="center">
        <h1 style={{"textAlign": "center"}}>Product Table </h1>
        <SearchBar
	    filterText={filterText}
	    inStockOnly={inStockOnly}
	    onFilterTextChange={setFilterText}
	    onInStockOnlyChange={setInStockOnly}/>
        <ProductTable
	   products={products}
	   filterText={filterText}
	   inStockOnly={inStockOnly} />
    </div>
  )
};

export default FilterableProductTable;
