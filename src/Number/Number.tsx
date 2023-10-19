import React from 'react';

interface Props {
    number: number
}
const Number: React.FC<Props> = ({number}) => {
    return (
        <div className="number">
            {number}
        </div>
    );
};

export default Number;