import React from 'react';

const SelectCarts = ({ cartsData }) => {
    return (
        <div>
            {
                cartsData.map(i => <div key={i.id}>
                    <h1>{i.title}</h1>
                </div>)
            }
        </div>
    );
};

export default SelectCarts;