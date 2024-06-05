import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'Organic waste',
    content: (
      <div>
        <p>
          <strong>Organic waste:</strong> Organic waste such as food scraps can be composted to produce nutrient-rich soil for gardening.
        </p>
        <p>
          <strong>How to handle:</strong> Collect food scraps in a compost bin. Make sure to balance green (nitrogen-rich) and brown (carbon-rich) materials in your compost pile for optimal decomposition.
        </p>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Recyclable waste',
    content: (
      <div>
        <p>
          <strong>Recyclable waste:</strong> Items such as paper, glass, metal, wood, clothes, and cardboard can be sorted and sent to recycling facilities to be processed and reused.
        </p>
        <p>
          <strong>How to handle:</strong> Sort recyclable items into designated recycling bins. Rinse containers to remove any leftover food or liquid before recycling. Check local recycling guidelines for specific instructions on sorting.
        </p>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Inorganic waste',
    content: (
      <div>
        <p>
          <strong>Inorganic waste:</strong> Inorganic waste like plastic bags should be properly disposed of in designated trash bins to prevent environmental pollution.
        </p>
        <p>
          <strong>How to handle:</strong> Dispose of plastic bags in trash bins. Consider reducing plastic bag usage by using reusable bags or opting for biodegradable alternatives where possible.
        </p>
      </div>
    ),
  },
];

const NoteSection = () => (
  <Tabs defaultActiveKey="1">
    {items.map(item => (
      <TabPane tab={item.label} key={item.key}>
        {item.content}
      </TabPane>
    ))}
  </Tabs>
);

export default NoteSection;
