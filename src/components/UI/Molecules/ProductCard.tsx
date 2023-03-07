import { Layout, MediaCard } from '@shopify/polaris';

import { ProductT } from '../../../types';
import { truncate } from '../../../utils';

const ProductCard = ({ title, description, image, price }: ProductT) => (
  <Layout.Section oneHalf>
    <MediaCard
      title={`${truncate(title, 20)} (€${price})`}
      description={truncate(description, 30)}
      popoverActions={[{ content: 'Dismiss', onAction: () => {} }]}>
      <img
        alt=""
        width="100"
        height="100"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        src={image}
      />
    </MediaCard>
  </Layout.Section>
);
export default ProductCard;
