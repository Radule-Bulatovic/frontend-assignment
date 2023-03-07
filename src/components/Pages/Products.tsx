import { Layout, RangeSlider, Select, TextField } from '@shopify/polaris';
import { DualValue } from '@shopify/polaris/build/ts/latest/src/components/RangeSlider/types';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useAuth } from '../../context';
import { useProducts, useCategories } from '../../hooks';
import ProductCard from '../UI/Molecules/ProductCard';

const Products = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) navigate(ROUTES.LOGIN);
  }, [isLoggedIn]);

  const { data: products } = useProducts();
  const { data: categories } = useCategories();
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('');
  const [rangeValue, setRangeValue] = useState<DualValue>([10, 1000]);

  const options = useMemo(() => {
    return [
      { label: 'Select category', value: '' },
      ...categories.map((e) => ({ label: e.charAt(0).toUpperCase() + e.slice(1), value: e }))
    ];
  }, [categories]);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (e) =>
        (query ? e.title.toLowerCase().includes(query.toLowerCase()) : true) &&
        (selected ? e.category === selected : true) &&
        e.price >= rangeValue[0] &&
        e.price <= rangeValue[1]
    );
  }, [query, selected, rangeValue, products]);
  return (
    <>
      <Layout>
        <Layout.Section oneHalf>
          <TextField
            label=""
            placeholder="Search"
            value={query}
            onChange={setQuery}
            autoComplete="off"
          />
        </Layout.Section>
        <Layout.Section oneHalf>
          <Select label="" options={options} onChange={setSelected} value={selected} />
        </Layout.Section>
        <Layout.Section oneHalf>
          <RangeSlider
            output
            label="Money spent is between"
            value={rangeValue}
            prefix="€"
            min={10}
            max={1000}
            step={10}
            onChange={(value: DualValue) => setRangeValue(value)}
          />
        </Layout.Section>
      </Layout>
      <br />
      <Layout>
        {filteredProducts.map((e) => (
          <ProductCard key={e.id} {...e} />
        ))}
        {filteredProducts.length === 0 ? <div>NO PRODUCTS FOR GIVEN CRITERIA</div> : null}
      </Layout>
    </>
  );
};

export default Products;
