import React, {useContext, useEffect, useState} from 'react';

import Loader from "../../../components/Loader";
import Header from "../../../components/app/Header";
import CustomModal from "../../../components/Modal";
import ErrorAlert from "../../../components/ErrorAlert";
import TableSearch from "../../../components/TableSearch";
import LittleLoader from "../../../components/LittleLoader";
import {emitConfirmAfford} from "../../../redux/refuels/actions";
import {storeResetErrorData} from "../../../redux/errors/actions";
import OperationsClearancesHigherOrder from "../../../components/layout/OperationsClearancesHigherOrder";
import OperationsClearanceNewAfford from "../../../components/app/operations/OperationsClearanceNewAfford";
import {
    dateToString,
    formatNumber,
    needleSearch,
    shouldShowError,
    processingRequest,
    fleetTypeBadgeColor,
} from "../../../helpers/functions";
import {
    SUCCESS,
    PROCESSING,
    AFFORDS_SCOPE,
    COLLECTOR_ROLE,
    ADMIN_MANAGER_ROLE,
    ADMIN_COLLECTOR_ROLE,
    OPERATIONS_AFFORDS_PAGE,
} from "../../../helpers/constants";
import {
    UserContext,
    ErrorsContext,
    RefuelsContext,
    DispatchContext,
    RequestsContext
} from "../../../helpers/contexts";
import FormModal from "../../../components/FormModal";

// Component
function OperationsAffordsPage() {
    // Local states
    const [needle, setNeedle] = useState('');
    const [affordModal, setAffordModal] = useState({show: false, header: ''});
    const [confirmModal, setConfirmModal] = useState({show: false, header: '', body: '', type: '', id: 0});

    // Context states
    const user = useContext(UserContext);
    const errors = useContext(ErrorsContext);
    const refuels = useContext(RefuelsContext);
    const dispatch = useContext(DispatchContext);
    const requests = useContext(RequestsContext);

    // Data
    const scope = AFFORDS_SCOPE;
    const collectorProcess = COLLECTOR_ROLE.includes(user.role.name);
    const adminManagerProcess = ADMIN_MANAGER_ROLE.includes(user.role.name);
    const adminCollectorProcess = ADMIN_COLLECTOR_ROLE.includes(user.role.name);

    useEffect(() => {
        // Cleaner error alert while component did unmount without store dependency
        return () => {
            shouldShowError(scope, errors.list) && dispatch(storeResetErrorData({scope}));
        };
        // eslint-disable-next-line
    }, []);

    // Trigger when confirm on modal
    const handleConfirm = (id) => {
        setConfirmModal({...confirmModal, show: false});
        dispatch(emitConfirmAfford({id}));
    };

    // Render
    return (
        <>
            <div className="content-wrapper">
                <Header icon={'fa fa-wifi'}
                        title={OPERATIONS_AFFORDS_PAGE}
                        listLength={processingRequest(scope, requests.list) ? '?' : refuels.list.length}
                />
                <section className="content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className="col-12">
                                <div className='card custom-card-outline'>
                                    <div className="card-body">
                                        <div className="tab-content">
                                            {processingRequest(scope, requests.list) ? <Loader/> : (
                                                <>
                                                    {shouldShowError(scope, errors.list) &&
                                                    <ErrorAlert scope={scope} />
                                                    }
                                                    {adminCollectorProcess &&
                                                        <button className='btn btn-theme btn-dark'
                                                                onClick={() => setAffordModal({
                                                                    show: true,
                                                                    header: 'EFFECTUER UN APPROVISIONNEMENT'
                                                                })}
                                                        >
                                                            <i className='fa fa-plus' /> Effectuer un approvisionnement
                                                        </button>
                                                    }
                                                    <TableSearch needle={needle} handleNeedle={data => setNeedle(data)} />
                                                    <div className="table-responsive">
                                                        <table className="table table-hover text-nowrap table-bordered">
                                                            <thead className='bg-theme'>
                                                            <tr>
                                                                <th>CREER LE</th>
                                                                <th>MONTANT</th>
                                                                <th>PUCE FLOTTAGE</th>
                                                                <th>FOURNISSEUR</th>
                                                                {!collectorProcess && <th>RESPONSABLE</th>}
                                                                <th>STATUS</th>
                                                                <th>RECU</th>
                                                                {adminManagerProcess && <th>ACTIONS</th>}
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                {searchEngine(refuels.list, needle).map((item, key) => {
                                                                    return (
                                                                        <tr key={key}>
                                                                            <td>{dateToString(item.creation)}</td>
                                                                            <td className='text-right'>{formatNumber(item.amount)}</td>
                                                                            <td>{item.sim.number}</td>
                                                                            <td>{item.vendor}</td>
                                                                            {!collectorProcess && <td>{item.collector.name}</td>}
                                                                            <td className='text-center'>
                                                                                    <span className={`badge badge-${fleetTypeBadgeColor(item.status).color}`}>
                                                                                        {fleetTypeBadgeColor(item.status).text}
                                                                                    </span>
                                                                            </td>
                                                                            <td className='text-center'>
                                                                                {item.receipt &&
                                                                                    <a download
                                                                                       target='_blank'
                                                                                       href={item.receipt}
                                                                                       rel='noopener noreferrer'
                                                                                       className="btn btn-theme btn-sm btn-dark"
                                                                                    >
                                                                                        <i className='fa fa-eye' />
                                                                                    </a>
                                                                                }
                                                                            </td>
                                                                            {adminManagerProcess &&
                                                                            <td className='text-center'>
                                                                                {(PROCESSING === item.status) && (
                                                                                    item.actionLoader ? <LittleLoader /> :
                                                                                        <button className='btn btn-sm btn-success'
                                                                                                onClick={() => setConfirmModal({
                                                                                                    show: true,
                                                                                                    type: SUCCESS,
                                                                                                    id: item.id,
                                                                                                    header: 'Confirmation',
                                                                                                    body: `
                                                                                                    Confirmer le déstockage de ${item.amount}
                                                                                                    pour le numéro ${item.sim.number}?
                                                                                                `
                                                                                                })}
                                                                                        >
                                                                                            <i className='fa fa-check' />
                                                                                        </button>
                                                                                )}
                                                                            </td>
                                                                            }
                                                                        </tr>
                                                                    )
                                                                })}
                                                                {searchEngine(refuels.list, needle).length === 0 &&
                                                                    <tr>
                                                                        <td colSpan={8}>
                                                                            <div className='alert alert-info text-center'>
                                                                                Pas d'approvisionnements
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Modals */}
            <CustomModal modal={confirmModal}
                         handleModal={handleConfirm}
                         handleClose={() =>
                             setConfirmModal({...confirmModal, show: false})
                         }
            />
            <FormModal modal={affordModal} handleClose={() => setAffordModal({...affordModal, show: false})}>
                <OperationsClearanceNewAfford handleClose={() => setAffordModal({...affordModal, show: false})} />
            </FormModal>
        </>
    )
}

// Search engine
function searchEngine(data, _needle) {
    // Avoid empty filtering
    if(_needle !== '' && _needle !== undefined) {
        // Filter
        data = data.filter((item) => {
            return (
                needleSearch(item.amount, _needle) ||
                needleSearch(item.vendor, _needle) ||
                needleSearch(item.sim.number, _needle) ||
                needleSearch(item.collector.name, _needle) ||
                needleSearch(dateToString(item.creation), _needle) ||
                needleSearch(fleetTypeBadgeColor(item.status).text, _needle)
            )
        });
    }
    // Return data
    return data;
}

export default OperationsClearancesHigherOrder(OperationsAffordsPage);
