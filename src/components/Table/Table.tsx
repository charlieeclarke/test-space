import type { TableComponent } from './types';

import styles from './Table.module.scss';

export const Table: TableComponent = ({ thead, tbody }) => {
  return (
    <>
      <table className={styles.table}>
        {thead && (
          <thead>
            <tr>
              {thead.map((theadCell) => (
                <td key={theadCell._uid}>{theadCell.value}</td>
              ))}
            </tr>
          </thead>
        )}
        {tbody && (
          <tbody>
            {tbody.map((tbodyRow) => (
              <tr key={tbodyRow._uid}>
                {tbodyRow.body.map((tbodyCell) => (
                  <td key={tbodyCell._uid}>{tbodyCell.value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
};

export default Table;
