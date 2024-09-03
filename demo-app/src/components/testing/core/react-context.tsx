import React, { useContext } from 'react';

const context1 = React.createContext(1);
const context2 = React.createContext(2);

const ChildComponent1 = () => {
  const contextValue1: any = useContext(context1);
  return <div>{contextValue1}</div>;
};

const ChildComponent2 = () => {
  const contextValue2: any = useContext(context2);
  return <div>{contextValue2}</div>;
};

const ChildComponent3 = () => {
  const contextValue3: any = useContext(context2);
  return <context2.Consumer>{(theme: any) => <div>{theme}</div>}</context2.Consumer>;
};

const ReactContext: React.FunctionComponent = () => {
  return (
    <div style={{ color: '#ffffff' }}>
      <context1.Provider value={3}>
        <ChildComponent1 />
      </context1.Provider>
      <context2.Provider value={4}>
        <ChildComponent2 />
        <ChildComponent3 />
      </context2.Provider>
    </div>
  );
};

export default ReactContext;
