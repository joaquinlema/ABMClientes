import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ToolbarUtil from './toolbar/ToolbarUtil';

export default function TablaUtil({columns, rows}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ToolbarUtil />
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}