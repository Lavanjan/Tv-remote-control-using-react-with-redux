import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { tomandjerryAction, motupatluAction, subscriptionAction, dragonAction } from './index'

const App = () => {
    const comedies = useSelector(state => state);
    const dispatch = useDispatch();
    return (
        <Fragment>

            <table className="table table-borderless">
                <tbody>
                    <td className="text-center">
                        <img src={comedies.state} /></td>
                </tbody>
            </table>

            <div className="row col-12 justify-content-center mt-5">
                <table className="table-borderless align-middle">
                    <tbody>
                        <tr>
                            <td colSpan="3" className="text-center">
                                <button className="btn-danger" onClick={() => dispatch(subscriptionAction())} >{!comedies.isSubscribed ? 'TURN ON' : 'TURN OFF'}</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn-primary" disabled={!comedies.isSubscribed} onClick={() => dispatch(tomandjerryAction())} >Channel 01</button>&nbsp;
                             </td>
                            <td>
                                <button className="btn-primary" disabled={!comedies.isSubscribed} onClick={() => dispatch(motupatluAction())} >Channel 02</button>&nbsp;
                              </td>
                            <td>
                                <button className="btn-primary" disabled={!comedies.isSubscribed} onClick={() => dispatch(dragonAction())} >Channel 03</button>&nbsp;
                             </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default App