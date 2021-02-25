import React from 'react';
import { Table } from 'baseui/table-semantic';
import SearchWidget from '@/components/SearchWidget';
import { DataItem, IsPending } from '@/models/DataModel';
import './style.scss';

const COLUMNS = ['name', 'npi', 'type', 'practiceAddress'];

interface Props {
  data: DataItem[];
  isPending: IsPending;
  onSearch: (data) => void;
}

export default ({ data, isPending, onSearch }: Props) => (
  <div className="home-page">
    <SearchWidget onSearch={onSearch} />
    <Table
      columns={COLUMNS}
      data={data.map((item) => Object.values(item))}
      isLoading={isPending}
    />
  </div>
);
