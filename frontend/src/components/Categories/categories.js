import React from 'react';

const categories = (props) => {

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map(c => {
                            return(
                                <tr>
                                    <td>{c.name}</td>
                                    <td>{c.description}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default categories;