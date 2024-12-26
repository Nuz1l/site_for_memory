function uploadMedia() {
    const input = document.getElementById('media-upload');
    const files = input.files;
    const gallery = document.getElementById('gallery');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const fileType = file.type.split('/')[0];
            
            let mediaElement;
            if (fileType === 'image') {
                mediaElement = document.createElement('img');
                mediaElement.src = event.target.result;
            } else if (fileType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = event.target.result;
                mediaElement.controls = true;
            }
            
            gallery.appendChild(mediaElement);
        }
        
        reader.readAsDataURL(file);
    }
}
