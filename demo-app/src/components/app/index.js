import React from 'react';
import './index.css';

function Index() {
  return (
    <div className="App">
      <h1>Demo of the common components</h1>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <CustomButton></CustomButton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default Index;
