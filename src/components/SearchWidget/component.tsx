import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import style from './style.module.scss';

type Inputs = {
  search: string;
};

type TSearchProps = {
  onSearch: (data) => void;
};
export default ({ onSearch }: TSearchProps) => {
  const { control, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data) => {
    onSearch(data.search);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <Controller
          name="search"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <Input
              value={value}
              onChange={onChange}
              error={!!errors.search}
              clearOnEscape
            />
          )}
        />
        <Button isLoading={false} type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};
