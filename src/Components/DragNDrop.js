import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = ({ onFilesChange, fileType = 'image/*', uploadType = 'multiple' }) => {
    const [documents, setDocuments] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        let addFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));

        if (uploadType === 'multiple') {
            addFiles = [...documents, ...addFiles];
        } else {
            addFiles = addFiles.slice(0, 1); // Take only the first file if uploadType is 'one'
        }

        setDocuments(addFiles);
        onFilesChange(addFiles);  // Notify parent component about the file changes
    }, [documents, onFilesChange, uploadType]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: fileType,
        onDrop,
        multiple: uploadType === 'multiple',
    });

    const removeFile = (i) => {
        const newArray = [...documents];
        newArray.splice(i, 1);
        setDocuments(newArray);
        onFilesChange(newArray);  // Notify parent component about the file changes
    };

    useEffect(() => {
        return () => {
            // Revoke the data uris to avoid memory leaks
            documents.forEach(file => URL.revokeObjectURL(file.preview));
        };
    }, [documents]);

    return (
        <div className='col-lg-12'>
            <div className='mb-1 pb-1'>
                <div className='fallback' {...getRootProps({ className: 'dropzone' })} style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "120px" }}>
                    <input {...getInputProps()} />
                    <h2 className='text-muted'>Drop files here or click to upload.</h2>
                </div>
            </div>
            {/* <ul className="list-unstyled mb-3"> */}
            {
                documents.length !== 0 &&

                <div class="table-responsive " style={{ marginTop: "10px" }}>
                    <table id="dataTableExample1" class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr class="info">
                                <th>Image</th>
                                <th>Size</th>
                                <th>Name</th>
                                <th>Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((file, i) => {
                                const fileSize = Math.ceil(file.size / 1024);

                                return (
                                    // <li className="mt-2" key={i}>
                                    //     <div className="border rounded">
                                    //         <div className="d-flex p-2">
                                    //             <div className="flex-shrink-0 me-3">
                                    //                 <div className="avatar-sm bg-light rounded">
                                    //                     {fileType.includes('image') ? (
                                    //                         <img className="img-fluid rounded d-block h-5" src={file.preview} alt="Dropzone-Image" style={{ height: '50px', width: 'auto' }} />
                                    //                     ) : (
                                    //                         // <div>{file.name}</div>
                                    //                         <i class="bx bxs-file-pdf d-block" style={{ fontSize: "50px", cursor: "pointer" }}></i>
                                    //                     )}
                                    //                 </div>
                                    //             </div>
                                    //             <div className="flex-grow-1">
                                    //                 <div className="pt-1">
                                    //                     <h5 className="fs-14 mb-1">{file.name}</h5>
                                    //                     <p className="fs-13 text-muted mb-0">{fileSize} KB</p>
                                    //                     {fileSize > 12000 && (
                                    //                         <strong className="error text-danger">The file is too large. Allowed maximum 12MB</strong>
                                    //                     )}
                                    //                 </div>
                                    //             </div>
                                    //             <div className="flex-shrink-0 ms-3">
                                    //                 <button className="btn btn-sm btn-danger" onClick={() => removeFile(i)}>Delete</button>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </li>
                                    <tr>
                                        <td>
                                            {fileType.includes('image') ? (
                                                <img class="img-circle" alt="User Image" width="50" height="50" src={file.preview} />
                                            ) : (
                                                <img src="assets/dist/img/logo5.png" class="img-circle" alt="User Image" width="50" height="50"></img>
                                            )}
                                        </td>
                                        <td>
                                            {fileSize > 12000 ? (
                                                <strong className="error text-danger">The file is too large. Allowed maximum 12MB</strong>
                                            )
                                                :
                                                <strong className="text-success">The file size is {fileSize} KB. Its OK</strong>
                                            }
                                        </td>
                                        <td>{file.name}</td>
                                        <td>
                                            <button className="btn btn-sm btn-danger" onClick={() => removeFile(i)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            }
            {/* </ul> */}
        </div>
    );
};

export default DragAndDrop;
