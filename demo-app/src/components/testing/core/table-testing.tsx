import React, {useMemo, useState} from 'react';
import Typography from '@dbykov-ui-kit/core/typography';
import Table from '@dbykov-ui-kit/core/table';
import TableHead from '@dbykov-ui-kit/core/table-head';
import TableBody from '@dbykov-ui-kit/core/table-body';
import TableRow from '@dbykov-ui-kit/core/table-row';
import TableCell from '@dbykov-ui-kit/core/table-cell';
import Button from '@dbykov-ui-kit/core/button';
import FlexContainer from '@dbykov-ui-kit/core/flex-container';
import Input from '@dbykov-ui-kit/core/input';

type TEmployee = {
  id: number;
  name: string;
  role: string;
  score: number;
};

const EMPLOYEES: TEmployee[] = [
  {id: 1, name: 'Alice', role: 'Engineer', score: 91},
  {id: 2, name: 'Bob', role: 'Analyst', score: 78},
  {id: 3, name: 'Clara', role: 'QA', score: 84},
  {id: 4, name: 'David', role: 'Manager', score: 88},
  {id: 5, name: 'Eve', role: 'Engineer', score: 95},
];

const TableTesting: React.FunctionComponent = () => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [isRoleColumnVisible, setIsRoleColumnVisible] = useState(true);
  const [query, setQuery] = useState('');

  const rows = useMemo(() => {
    const queryUppercase = query.trim().toUpperCase();
    const filtered = EMPLOYEES.filter((employee) =>
      employee.name.toUpperCase().includes(queryUppercase)
    );

    return filtered.sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
  }, [query, sortDirection]);

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="flex-start"
      gap={16}
      margin="20px 0"
      width={900}
    >
      <Typography variant="H1">Table E2E testing</Typography>

      <FlexContainer width={900} gap={10}>
        <Button
          id="table-sort-button"
          onClick={() =>
            setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
          }
        >
          Toggle sort ({sortDirection})
        </Button>

        <Button
          id="table-toggle-role-column"
          onClick={() => setIsRoleColumnVisible((prev) => !prev)}
        >
          Toggle role column
        </Button>

        <Input
          id="table-filter-input"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
          placeholder="Filter by name"
          variant="outlined"
          width={130}
        />

        <Button id="table-filter-reset" onClick={() => setQuery('')}>
          Reset filter
        </Button>
      </FlexContainer>

      <div id="table-e2e">
        <Table width={900}>
          <TableHead>
            <TableRow isHeader={true}>
              <TableCell className="table-header-name">Name</TableCell>
              {isRoleColumnVisible ? (
                <TableCell className="table-header-role">Role</TableCell>
              ) : null}
              <TableCell className="table-header-score">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((employee) => (
              <TableRow key={employee.id} className={`table-row table-row-${employee.id}`}>
                <TableCell className={`table-cell-name table-row-${employee.id}-name`}>
                  {employee.name}
                </TableCell>
                {isRoleColumnVisible ? (
                  <TableCell className={`table-cell-role table-row-${employee.id}-role`}>
                    {employee.role}
                  </TableCell>
                ) : null}
                <TableCell className={`table-cell-score table-row-${employee.id}-score`}>
                  {employee.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </FlexContainer>
  );
};

export default TableTesting;
