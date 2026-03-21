import { useState } from 'react';
import ExcelSheetReader from './ExcelSheetReader/ExcelSheetReader';
import ExcelUploader from './ExcelUploader';
import ExcelMultiSheetViewer from './ExcelMultiSheetViewer';

export default function ReadExcelData() {
    const [listSheetName, setListSheetName] = useState([]);
    const [sheetName, setSheetName] = useState('');

    const handleShowListSheetName = (sheets) => {
        setListSheetName(sheets);
    };

    const handleShowData = (data) => {
        console.log('Data:', data);
    };

    return (
        <div style={{ color: '#000' }}>
            {/* <h2>Import User Sheet</h2>
            <ExcelSheetReader
                sheetName={sheetName}
                onFile={handleShowListSheetName}
                onData={handleShowData}
            /> */}


            {/* <h2>Upload Excel</h2>
            <ExcelUploader
                sheetName='User'
                handleShowData={handleShowData}
                handleShowListSheetName={handleShowListSheetName}
            />
            <div>{sheetName}</div>
            <select value={sheetName} onChange={(e) => setSheetName(e.target.value)}>
                <option value={''}>--</option>
                {listSheetName.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                ))}
            </select> */}

            <ExcelMultiSheetViewer />
        </div>
    )
}
