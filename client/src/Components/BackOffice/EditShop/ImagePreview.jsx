import React from 'react'

const ImagePreview = ({ file }) => {
	const [preview, setPreview] = React.useState(null)

	const reader = new FileReader(file)
    if(file) {
	    reader.readAsDataURL(file)
    }
	reader.onloadend = () => {
		setPreview(reader.result)
	}

	return (
		<div>
			{preview && (
				<img src={preview} alt="preview" width="200px" height="200px" />
			)}
		</div>
	)
}

export default ImagePreview



// function getBase64(file) {
//     var reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function () {
//       console.log(reader.result);
//     };
//     reader.onerror = function (error) {
//       console.log('Error: ', error);
//     };
//  }