import React from 'react';

const Myorder = (props) => {
    const { _id, status, mail, address } = props.allorders;
    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{mail}</td>
                <td>{address}</td>
                <td>{status}</td>
                <td><button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i class="fas fa-trash-alt"></i></button></td>

            </tr>
        </>
    );
};

export default Myorder;