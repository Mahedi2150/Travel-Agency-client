import React from 'react';

const Allorder = (props) => {
    const { _id, status, address, mail } = props.allorders;
    return (
        <>
            <tr>
                <td>{_id}</td>
                <td>{mail}</td>
                <td>{address}</td>
                {
                    (status === "pending") ?
                        <>
                            <td>{status}</td>
                            <td><button onClick={() => props.handelAcceptOrder(_id)} className="fw-bold bg-success ">Accept</button> / <button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i class="fas fa-trash-alt"></i></button></td></>
                        :
                        <>
                            <td className="text-success fw-bold">{status}</td>
                            <td><button onClick={() => props.handelDeleteOrder(_id)} className="text-danger border-1" ><i class="fas fa-trash-alt"></i></button></td>
                        </>
                }
            </tr>
        </>
    );
};

export default Allorder;