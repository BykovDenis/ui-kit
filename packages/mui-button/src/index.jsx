import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';

const MuiButton = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>

export default MuiButton
