/**
 * File Manager Directory upload feature sample
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },
            success : onSuccess
    });
    fileObject.appendTo('#file');

function onSuccess() {
    if (!document.getElementById('file_tb_upload').classList.contains('e-dropdown-btn')) {
    var items = [{ text: 'Folder' }, { text: 'Files' }];
    var drpDownBtn = new ej.splitbuttons.DropDownButton({
        items: items,
        select: function (args) {
            if (args.item.text === 'Folder') {
                fileObject.uploadSettings.directoryUpload = true;
            } else {
                fileObject.uploadSettings.directoryUpload = false;
            }
            setTimeout(function () {
                var uploadBtn = document.querySelector('.e-file-select-wrap button');
                uploadBtn.click();
            }, 100);
        }
    });
    drpDownBtn.appendTo('#file_tb_upload');
    document.getElementById('file_tb_upload').onclick = function (args) {
        args.stopPropagation();
    };   
    }
}

};