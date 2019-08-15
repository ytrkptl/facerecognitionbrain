import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  // let [selectedFile, fileSelectedHandler] = React.useState('null');

  return (
    <div className="padded">
      <p className="textAboveForm">
        {'This Magic Brain will detect faces in your pictures. Give it a try.'}
      </p>
        <div className='form centerItHorizontally flexed'>
          <input 
            className='urlInput' 
            type='text' 
            placeholder="Paste image url(link) here"
            onChange={onInputChange}/>
          <span className="urlInputSpan">Or</span>
          <div className="fileUploadDiv">
            <input 
              className="fileUploadInput"
              // onChange={(event)=>fileSelectedHandler(selectedFile = event.target.files[0])}
              type="file"
              name="image"
              multiple={false}
              accept="image/*"/>
            <span className="fileUploadSpan">Upload an image</span>
          </div>
          <button
            className='detectButton'
            onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
    </div>
  );
}

export default ImageLinkForm;